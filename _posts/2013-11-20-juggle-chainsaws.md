---
layout: post
title: Juggle Chainsaws, Not Types
date: 2013-11-20 05:28:08.000000000 -05:00
categories:
- Development
tags:
- bugs
- php
- testing
- type juggling
status: publish
type: post
published: true
meta:
  _wps_seo_booster_enable_rating_post: 'off'
  _yoast_wpseo_linkdex: '64'
  _edit_last: '1'
  _wps_seo_booster_disable: ''
  _wps_seo_booster_ogp_title: Juggle Chainsaws, Not Types
  _wps_seo_booster_ogp_description: PHP's unexpected type comparison behavior rears
    its ugly head again.
  _wps_seo_booster_ogp_image: http://www.tembies.com/wp-content/uploads/2013/11/broken-300x225.jpg
  _wps_seo_booster_ogp_type: article
  _wps_seo_booster_ogp_video_url: ''
  _wps_seo_booster_ogp_video_height: ''
  _wps_seo_booster_ogp_video_width: ''
  _wps_seo_booster_ogp_audio_url: ''
  _wps_seo_booster_ogp_audio_title: ''
  _wps_seo_booster_ogp_audio_artist: ''
  _wps_seo_booster_ogp_audio_album: ''
  _wps_seo_booster_ogp_post_app_id: ''
  _wps_seo_booster_ogp_post_fb_admins: ''
  _wps_seo_booster_review_position: top
  _wps_seo_booster_review_product_name: ''
  _wps_seo_booster_review_product_type: ''
  _wps_seo_booster_review_product_version: ''
  _wps_seo_booster_review_author: ''
  _wps_seo_booster_review_date: ''
  _wps_seo_booster_review_rating_value: ''
  _wps_seo_booster_review_product_author: ''
  _wps_seo_booster_review_product_link: ''
  _wps_seo_booster_review_product_price: ''
  _wps_seo_booster_review_product_currency: ''
  _wps_seo_booster_review_summary: ''
  _wps_seo_booster_product_name: ''
  _wps_seo_booster_product_brand: ''
  _wps_seo_booster_product_image: ''
  _wps_seo_booster_product_summary: ''
  _wps_seo_booster_product_sku: ''
  _wps_seo_booster_product_category: ''
  _wps_seo_booster_product_price: ''
  _wps_seo_booster_product_currency: ''
  _wps_seo_booster_product_price_sale: ''
  _wps_seo_booster_product_sale_ends: ''
  _wps_seo_booster_product_seller: ''
  _wps_seo_booster_business_position: top
  _wps_seo_booster_business_name: ''
  _wps_seo_booster_business_street: ''
  _wps_seo_booster_business_locality: ''
  _wps_seo_booster_business_region: ''
  _wps_seo_booster_business_pc: ''
  _wps_seo_booster_business_tel: ''
  _wps_seo_booster_business_email: ''
  _wps_seo_booster_business_url: ''
  _wps_seo_booster_person_position: top
  _wps_seo_booster_person_name: ''
  _wps_seo_booster_person_nickname: ''
  _wps_seo_booster_person_street: ''
  _wps_seo_booster_person_locality: ''
  _wps_seo_booster_person_region: ''
  _wps_seo_booster_person_pc: ''
  _wps_seo_booster_person_tel: ''
  _wps_seo_booster_person_email: ''
  _wps_seo_booster_person_job: ''
  _wps_seo_booster_person_business: ''
  _wps_seo_booster_recipe_position: top
  _wps_seo_booster_recipe_name: ''
  _wps_seo_booster_recipe_image: ''
  _wps_seo_booster_recipe_author: ''
  _wps_seo_booster_recipe_date: ''
  _wps_seo_booster_recipe_summary: ''
  _wps_seo_booster_recipe_prep: ''
  _wps_seo_booster_recipe_cooke: ''
  _wps_seo_booster_recipe_total: ''
  _wps_seo_booster_recipe_yield: ''
  _wps_seo_booster_recipe_serving_size: ''
  _wps_seo_booster_recipe_calories: ''
  _wps_seo_booster_recipe_fat: ''
  _wps_seo_booster_recipe_ingredients_size: a:1:{i:0;s:0:"";}
  _wps_seo_booster_recipe_ingredients: a:1:{i:0;s:0:"";}
  _wps_seo_booster_recipe_ingredients_amount: a:1:{i:0;s:0:"";}
  _wps_seo_booster_recipe_ingredients_directions: a:1:{i:0;s:0:"";}
  _wps_seo_booster_recipe_rating_title: ''
  _wps_seo_booster_recipe_rating_value: ''
  _wps_seo_booster_software_position: top
  _wps_seo_booster_software_name: ''
  _wps_seo_booster_software_description: ''
  _wps_seo_booster_software_image: ''
  _wps_seo_booster_software_author: ''
  _wps_seo_booster_software_version: ''
  _wps_seo_booster_software_language: ''
  _wps_seo_booster_software_system: ''
  _wps_seo_booster_software_category: ''
  _wps_seo_booster_software_price: ''
  _wps_seo_booster_software_currency: ''
  _wps_seo_booster_software_rating: ''
  _wps_seo_booster_software_rating_author: ''
  _wps_seo_booster_video_name: ''
  _wps_seo_booster_video_description: ''
  _wps_seo_booster_video_image: ''
  _wps_seo_booster_video_url: ''
  _wps_seo_booster_video_embed: ''
  _wps_seo_booster_video_type: ''
  _wps_seo_booster_event_name: ''
  _wps_seo_booster_event_image: ''
  _wps_seo_booster_event_description: ''
  _wps_seo_booster_event_date_start: ''
  _wps_seo_booster_event_date_end: ''
  _wps_seo_booster_event_location: ''
  _wps_seo_booster_event_location_street: ''
  _wps_seo_booster_event_location_locality: ''
  _wps_seo_booster_event_location_region: ''
  _wps_seo_booster_event_type: ''
  _wps_seo_booster_event_ticket_price: ''
  _wps_seo_booster_event_ticket_price_low: ''
  _wps_seo_booster_event_ticket_price_high: ''
  _wps_seo_booster_event_ticket_price_currency: ''
  _wps_seo_booster_event_ticket_count: ''
  _wps_seo_booster_event_ticket_url: ''
  _yoast_wpseo_focuskw: type juggling
  _wpas_done_all: '1'
  wpsd_autopost: '1'
  _wpas_skip_3954307: '1'
  _wpas_skip_3954334: '1'
  _wpas_skip_3954340: '1'
author:
  login: samantha
  email: samantha@tembies.com
  display_name: Samantha Quiñones
  first_name: Samantha
  last_name: Quiñones
---
No matter how popular an activity it is, I really don't like to bash on PHP. Every language has its flaws when you look closely enough, and if PHP wears its idiosyncrasies a little closer to the surface than most, I think it makes up for it in other ways. PHP's handling of types, however, is confusing at best and at worst completely deranged.
	
I've seen intercity rail schedules that can't hold a candle to PHP's <a href="http://us1.php.net/types.comparisons">type comparison tables</a>. The bizarre and unexpected behaviors that can result from a non-strict comparison has all but rendered the equality operator (==) useless. The typical advice from PHP master to PHP neophyte is, always check for identicality (===) unless you're very sure what you're doing.

In fact, as part of our pre-screening process at Politico, we often ask PHP developer candidates to explain why the following expression evaluates as true.

{% highlight php %}
("politico" == 0);
{% endhighlight %}

<p>This question probably wont stump a PHP developer with any significant experience. If you manage to code in PHP for more than a few months without running face-first in to this issue, you might not be trying hard enough.</p>
<p>PHP is weakly typed in much the same way that water is slightly dry. When faced with the expression above, the interpreter tries to make sense of things by converting the string in to a number, following a single and actually <a href="http://www.php.net/manual/en/language.types.string.php#language.types.string.conversion">quite well documented set of rules.</a> To put it simply, if the string contains a '.', or the letter 'e', PHP will attempt to turn it in to a float. Otherwise, it turns it in to an integer. If the string starts with "valid numeric data," those numbers will be used as a value of the new integer (e.g. (int) "123foo" -&gt; 123). If the string doesn't start with a number, the value will be 0. The literal string "politico" starts with a 'p', which is not a number, and so the interpreter rewrites the above expression like so:</p>
<pre>(0 == 0);</pre>
<p>The obvious second half of that question is, how do you make PHP give you an answer that isn't quite as... insane? You use the special identicality operator (===), more commonly called the triple-equal. This operator compares the types of the values in the expression, and if they don't match, it doesn't go through the whole circus act and just returns false.</p>
<p>Cute, right? Maybe until you realize that this behavior happens to catch a lot of unsuspecting programmers, especially ones who are new to the profession. Sometimes it creates subtle and hard-to-reproduce bugs, and sometimes it creates <a href="http://en.securitylab.ru/lab/PT-2012-29">serious vulnerabilities</a>.</p>
<p>Once in a while, it'll even catch a more experienced programmer.</p>
<p>I was recently implementing a fairly simple class with a setter method. The method accepts one argument and checks to see if it is in a list of allowed arguments before setting a protected property. If the argument is not in the list of allowed arguments, an exception is thrown. These arguments are configuration options that are generally expressed through the use of pre-defined constants and our code is merely storing the value.</p>
<pre>public function setFoo($foo)
{
    $validOptions = [VALID_CONSTANT_A, VALID_CONSTANT_B];
    if (!in_array($foo, $validOptions)) { 
        throw new InvalidArgumentException("foo must be one of: " . implode(", ", $validOptions)); 
    } 
    $this->foo = $foo; 
}</pre>
<p>Even for a setter method, this is pretty unremarkable. Yet when we run our unit tests, we get an interesting failure. Our test that passes in an invalid argument expects to see an exception, but it doesn't. In fact, this method accepts almost any string as valid. And despite my being way more familiar with PHP's weird type handling than I really want to be, it still took me several minutes to figure out what was going on here.</p>
<p>Those constants are a form of abstraction, hiding an implementation detail of one of our class's dependencies that we shouldn't have to care about. If the dependency ever decides to change that implementation, using the constants means we don't have to alter our code to keep up. But ignorance is often misguided bliss because VALID_CONSTANT_A is actually set to the integer 0, and by default, the in_array function doesn't do a strict, type-safe comparison.</p>
<p>Let's make a quick fix...</p>
<pre>public function setFoo($foo)
{
    $validOptions = [VALID_CONSTANT_A, VALID_CONSTANT_B];
    if (!in_array($foo, $validOptions, true)) { 
        throw new InvalidArgumentException("foo must be one of: " . implode(", ", $validOptions)); 
    } 
    $this->foo = $foo; 
}</pre>
<p>In case you didn't notice the change, in_array accepts a third argument, a boolean which forces strict comparison when set to true. Now our unit tests pass and our crisis is averted.</p>
<p>Maybe there's a parable here. It's a pretty vivid illustration of why unit tests are worth our time and effort, if nothing else. Still, it nags at me. At the very best, silly things like this eat up valuable time. I don't even want to consider the very worst.</p>
