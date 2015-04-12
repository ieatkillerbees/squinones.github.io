---
layout: post
title: Juggle Chainsaws, Not Types
date: 2013-11-20 05:28:08
category: development
tags: [bugs, php, testing, type juggling]
---

No matter how popular an activity it is, I really don't like to bash on PHP. Every language has its flaws when you look closely enough, and if PHP wears its idiosyncrasies a little closer to the surface than most, I think it makes up for it in other ways. PHP's handling of types, however, is confusing at best and at worst completely deranged.
	
I've seen intercity rail schedules that can't hold a candle to PHP's <a href="http://us1.php.net/types.comparisons">type comparison tables</a>. The bizarre and unexpected behaviors that can result from a non-strict comparison has all but rendered the equality operator (==) useless. The typical advice from PHP master to PHP neophyte is, always check for identicality (===) unless you're very sure what you're doing.

In fact, as part of our pre-screening process at Politico, we often ask PHP developer candidates to explain why the following expression evaluates as true.

{% highlight php startinline=true %}
("politico" == 0);
{% endhighlight %}

This question probably wont stump a PHP developer with any significant experience. If you manage to code in PHP for more than a few months without running face-first in to this issue, you might not be trying hard enough.

PHP is weakly typed in much the same way that water is slightly dry. When faced with the expression above, the interpreter tries to make sense of things by converting the string in to a number, following a single and actually <a href="http://www.php.net/manual/en/language.types.string.php#language.types.string.conversion">quite well documented set of rules.</a> To put it simply, if the string contains a '.', or the letter 'e', PHP will attempt to turn it in to a float. Otherwise, it turns it in to an integer. If the string starts with "valid numeric data," those numbers will be used as a value of the new integer (e.g. (int) "123foo" -&gt; 123). If the string doesn't start with a number, the value will be 0. The literal string "politico" starts with a 'p', which is not a number, and so the interpreter rewrites the above expression like so:

{% highlight php startinline=true %}
(0 == 0);
{% endhighlight %}

The obvious second half of that question is, how do you make PHP give you an answer that isn't quite as... insane? You use the special identicality operator (===), more commonly called the triple-equal. This operator compares the types of the values in the expression, and if they don't match, it doesn't go through the whole circus act and just returns false.

Cute, right? Maybe until you realize that this behavior happens to catch a lot of unsuspecting programmers, especially ones who are new to the profession. Sometimes it creates subtle and hard-to-reproduce bugs, and sometimes it creates [serious vulnerabilities](http://en.securitylab.ru/lab/PT-2012-29).

Once in a while, it'll even catch a more experienced programmer.

I was recently implementing a fairly simple class with a setter method. The method accepts one argument and checks to see if it is in a list of allowed arguments before setting a protected property. If the argument is not in the list of allowed arguments, an exception is thrown. These arguments are configuration options that are generally expressed through the use of pre-defined constants and our code is merely storing the value.

{% highlight php startinline=true %}
public function setFoo($foo)
{
    $validOptions = [VALID_CONSTANT_A, VALID_CONSTANT_B];
    if (!in_array($foo, $validOptions)) { 
        throw new InvalidArgumentException("foo must be one of: " . implode(", ", $validOptions)); 
    } 
    $this->foo = $foo; 
}
{% endhighlight %}

Even for a setter method, this is pretty unremarkable. Yet when we run our unit tests, we get an interesting failure. Our test that passes in an invalid argument expects to see an exception, but it doesn't. In fact, this method accepts almost any string as valid. And despite my being way more familiar with PHP's weird type handling than I really want to be, it still took me several minutes to figure out what was going on here.

Those constants are a form of abstraction, hiding an implementation detail of one of our class's dependencies that we shouldn't have to care about. If the dependency ever decides to change that implementation, using the constants means we don't have to alter our code to keep up. But ignorance is often misguided bliss because VALID_CONSTANT_A is actually set to the integer 0, and by default, the in_array function doesn't do a strict, type-safe comparison.

Let's make a quick fix...
{% highlight php startinline=true %}
public function setFoo($foo)
{
    $validOptions = [VALID_CONSTANT_A, VALID_CONSTANT_B];
    if (!in_array($foo, $validOptions, true)) { 
        throw new InvalidArgumentException("foo must be one of: " . implode(", ", $validOptions)); 
    } 
    $this->foo = $foo; 
}
{% endhighlight %}

In case you didn't notice the change, in_array accepts a third argument, a boolean which forces strict comparison when set to true. Now our unit tests pass and our crisis is averted.

Maybe there's a parable here. It's a pretty vivid illustration of why unit tests are worth our time and effort, if nothing else. Still, it nags at me. At the very best, silly things like this eat up valuable time. I don't even want to consider the very worst.
