---
layout: post
description: Usually I write about topics that are really only of interest to other software developers, but this is gonna be a little different. In fact, I doubt there's anyone in the usual audience of this blog who would find this of any particular use. No, this is for the people that would probably never read this blog. This is for the non-technical people in my life who I often see expressing concern and frustration about internet security. I hope this will give me something that I can link them to when their questions come up and maybe give them a little bit of insight in to the topic from someone who does this for a living.
category: Security
---

##A Software Engineer's Guide to Internet Passwords

Usually I write about topics that are really only of interest to other software developers, but this is gonna be a little different. In fact, I doubt there's anyone in the usual audience of this blog who would find this of any particular use. No, this is for the people that would probably never read this blog. This is for the non-technical people in my life who I often see expressing concern and frustration about internet security. I hope this will give me something that I can link them to when their questions come up and maybe give them a little bit of insight in to the topic from someone who does this for a living.

###What is a Password?

A password is nothing more than a secret which you and another party agree on as a special token that can be used to identify you. In technical terms, this is called _authentication_, and passwords are just one mechanism that we use to identify users. You interact with many different kinds of authentication mechanisms in your day-to-day Internet life, often without realizing it.

The lock symbol that you see in your browser's address bar exposes a different form of authentication. In this case, the remote computer you are interacting with has obtained a digital certificate that lets your browser authenticate it. When the lock symbol appears, you can be relatively sure that the remote computer you're working with is actually what it claims to be.

<img class="center" alt="Secure HTTP Lock" src="http://i.imgur.com/ze2d4u4.png"/> 

Authentication is vital because before an application can even think about what a user is allowed to do or access, it needs to know who the user is.

Password-based authentication is the most common kind of authentication in our daily lives for a couple of reasons. First of all, it's very easy for engineers to implement. On top of that, people are usually quite  familiar with it, so each system doesn't have to give its users special training on how to authenticate themselves. Lastly, _if implemented properly_, password-based authentication can provide pretty good security for _most_ purposes.

###Proper Implementation
I mentioned in the last section that password-based authentication can be secure if it's implemented properly. Sadly it's not always implemented properly. This is one of those areas were my peers in the software industry often fail our users. It's our job to protect our users' information, but it's far too common for us to mess it up. One of the biggest problems with passwords, you see, is that for them to work, both the user and the system need to know what the password is. 

If a computer stores its users' passwords on a disk drive, that means anyone gaining access to that disk drive, also gainsvaccess to all of the users' passwords. And, because passwords are hard to invent and remember, people very commonly use the same password on every system they use. So now our infiltrator can potentially impersonate our users on _other_ systems. This is one of the reasons why large-scale password security breaches are usually accompanied by advice to change all the passwords you use.

One way that we've come up with to combat this weakness is to avoid storing the password itself. Instead, we use the password to derive another value, and we store that instead. We do this using something called a _cryptographic hash function_. 

Imagine that Friar Laurence wants to send a message to our hero Romeo, exiled in Mantua. It's important that Romeo gets the message exactly as it's sent. That is, Romeo needs to be able to verify that he's received the entire message and that the message hasn't been altered. Let's take the message, "get thee to verona" and look at the order of each individual letter in the alphabet. We can sum up all those numbers and get 195. 


{% highlight php %}
g   e    t    t   h   e   e    t    o    o    v   e    r    o    n   a
----------------------------------------------------------------------
7 + 5 + 20 + 20 + 8 + 5 + 5 + 20 + 15 + 15 + 22 + 5 + 18 + 15 + 14 + 1  = 195
{% endhighlight %}
    

If Friar Laurence were to include this number along with the message, Romeo could easily perform the same calculation to make sure that the message was the same as when it left the Friar's hands. 

The methods that we actually use to do this kind of computation are obviously a lot more advanced. 

For instance, we need to use a method that is resistant to collision, which means that there is a very small chance of there being two different pieces of data that will cause the hash value-- that is, the result of the computation-- to end up with the same result. 

Also, our methods need to be irreversible, meaning that if you have the original information, you can compute the hash value, but if you have the hash value, you can't figure out what the original information was. Secure hash functions are a one-way deal.

Here's a more realistic example. Mercutio's password is `cupidzw1ng$$` We can use a common _cryptographic hash function_, to compute a hash value

{% highlight php %}
hash of "cupidzw1ng$$" = "679e2a572231f119520b68374c422c34466bec0d5dddf154b394a16428386231"
{% endhighlight %}

That big string of seemingly random numbers and letters is the hash value. If a computer system stores that value instead of the actual password, Mercutio can still use his password to log in. When he tries to log in, he just types in his password and the system, instead of checking if what he entered matches a stored password directly, it re-computes the hash value and checks that instead. 

{% highlight php %}
.________________________        _________________         _____________             ___________________
| Mercutio sends login   |      | System computes |       /             \           |                   |
| username: merc1597     | ---> |  hash value of  | ---> / hashes match? \ --Yes--> | Login successful! |
| password: cupidzw1ng$$ |      |  "cupidzw1ng$$" |      \_______________/          |                   |
 ------------------------        -----------------               |                   ------------------- 
                                                                No
                                                                 |
                                                                 V
                                                         _________________
                                                        |                 |
                                                        | Login failed :c |
                                                        |                 |
                                                         -----------------
{% endhighlight %}

Now if someone breaks into the system and steals the user data, they have a string of mostly meaningless numbers and letters instead of Mercutio's actual password.

We're just starting to scratch the surface of password security here. This stuff can be pretty complex which is probably why we fail to get it right so much of the time. The point to take away here is that the first and arguably most important part of keeping users' passwords safe is by not storing them at all.

###What Makes a Password Strong?
Password "strength" is a concept that I personally find a little bit troubling. When we talk about a strong password, what we're really talking about is how hard it would be to guess. 

It's time to reach back to high school math and talk about permutations. The English alphabet contains 26 letters. If we have a string of 8 English letters (ignoring upper and lower case), we can calculate the total number of possible arrangements by raising the site of the set (26) to the power of the number of letters we want. That is, 26<sup>8</sup> or (26 * 26 * 26 * 26 * 26 * 26 * 26 * 26 = 208,827,064,576). That's right, 208.8 _billion_ combinations! 

If we do consider case, we double the size of our letter set to 52<sup>8</sup> or 53.5 _*trillion*_ possibilities! 

There are also 10 digits and a handful of punctuation marks that we can throw in to the mix to get us up to say 72<sup>8</sup> or around 722 trillion possibilities. 

That sounds like a lot (it is), but computers are very fast at guessing passwords. The laptop I'm writing this on can make hundreds of millions of guesses every second. Sophisticated data thieves operating networks of zombie computers can make guesses at a rate orders of magnitude faster than my computer can. So can governments, for that matter. 

If you remember back to algebra, you know that if you really want to make numbers get big -- and clearly, a bigger number of permutations makes it harder for computers to guess a password -- you really need to mess with the exponent.

Let's make our password 9 characters long instead of 8. 72<sup>9</sup> is around 52 _quadrillion_ permutations. 

How about 10 characters? 3.7 _quintillion_. 

20 characters? 14,016,833,953,562,607,293,918,185,758,734,155,776 possibilities. That's a big number. At a billion guesses per second, it would take an average of around 600 quintillion years to guess a "perfectly" random 20 character password. By then, I'm sure we'll have figured out a better way to secure our Facebook accounts.

In my last example, I mentioned randomness. Randomness is arguably the most important factor in password strength. The less predictable a password is, the harder it is to guess.

With that in mind, I would describe a strong password as:

1. a random selection of...
2. 12+ characters selected from a large set of possible characters (letters, numbers, puncuation marks, etc)...
3. as randomly as possible 


###Red Flags of Poor Security
So now that you have an idea about what's going on with your password behind the scenes, we can get to the meat of the issue. How can you tell when a site might be doing things poorly?

####Lost Passwords - A Window to the Soul
What happens when you click the "lost password" link can tell you a ton about how a system is managing your information. The industry standard is for the system to email you a special link that you can click to enter a new password. These links are good for one use only, and usually expire if they're not used within a few hours. This is usually a pretty good sign that system isn't storing a copy of your password. The only way to set a new password is to give you brief, limited access so the system can compute a new hashed value to store.

The murky middle-ground is the "temporary" password. In this scenario, the system changes your password to a random string of characters and emails it to you. Usually the system will force you to change your password when you log in. It's quite possible that the system isn't actually storing the password. It could generate the password and email it to you while only keeping a hash value, but emailing a password is *never* secure, so this type of behavior should make you suspicious!

If a system emails you your actual password, that's a problem. As I mentioned earlier, computing the hash of a password is a one-way operation. This means that the system is definitely storing your actual password somewhere. You should be very, very cautious with systems like this, make sure to provide them with as little sensitive information as possible, and make sure you don't reuse your password on any other system!

####Password Policies
Password policies can also be very telling. Those hash functions that I described before are interesting in that no matter how much information you put into them, the hash that gets computed is always the same length. If a hash function computes hashes that are 192 bits long (that is, a sequence of 192 1s and 0s) it will do that for a 10-character password and a 100-character password. That means it doesn't take any extra space to store a longer password, so there is no reason to set a limit of 8 or 10 or 12 characters for a password. Policies that set arbitrarily small limits on password length can be an indication that a good hashing method is not being used.

Likewise, policies that limit _which_ characters you can use should be considered suspect. This might be a sign that the developer is not confident about how to safely manage input from users.
 
###What Can You Do?
Mostly, exercise common sense. Be careful who you give sensitive information to. If a site doesn't seem like it's managing passwords safely, what are the chances they're storing financial information properly? 

Always remember that password security is your responsibility just as much as it is the responsibility of the services you use. Use strong passwords and keep them secure. Don't reuse passwords across sites. Avoid repeating characters or words. Don't use common keyboard patterns (e.g. asdfghjkl, 1qazXSW@, etc). Avoid using real names of people and pets you know or personal information someone might guess about you. Never write passwords down in an unsafe place (monitor post-its, I'm looking at you!), and never share your passwords with others. 

###What do I do?
I currently own 224 password-protected accounts. The majority of those passwords are randomly-generated strings that are 20 or more characters long. I manage that using a password management tool (I use [LastPass](http://lastpass.com)). I have a single "master" passphrase that I have committed to memory (it's a ~26 characters long, basically a nonsense phrase that I can remember but that would be difficult to guess). 

LastPass has a built-in random password generator that I use to create random passwords. When I want to access a service like Facebook, I use my master password to unlock my password "vault" and log in with the password I have stored.

There are a few accounts, like my email and my github, which I often need to use from computers other than my own. For these accounts, I have somewhat weaker passwords that I can more easily to remember. To make up for that, though, I use something called multi-factor authentication.

####Multi-Factor Authentication
When you think about the problem of identifying someone, you realize there are different types of information you can use for that purpose. You can be identified by what you _are_ (your appearance, DNA, fingerprints), what you _know_ (a password, your mother's maiden name), or what you _have_ (an ID card).
  
In a typical username-and-password authentication scenario, the user's identity is determined by a single factor: their knowledge of a password. Multi-factor authentication is a strategy that requires at least two _different_ factors in order to identify someone. Usually this is a combination of something you know (password) and something you have (a mobile phone number that receives SMS messages).

When I log in to Twitter with my username and password, Twitter texts a special code to my phone which I need to enter before the system will give me access. Having my password _or_ my mobile phone alone is not enough to log in to Twitter as me. You need both. Something I know, and something I possess.

Many services offer multi-factor authentication, including Facebook and Google. Multi-factor authentication is one of the simplest ways we have to make systems more secure, and it's encouraging that more and more services are starting to offer it. 

You should make a point of contacting the services _you_ use (like your bank!) and asking them to provide a multi-factor option. The more people request MFA, the quicker services will adopt it!

###The Final Tally
Password security is hard to get right, even for big organizations that should know better. Always be very careful about who you share sensitive information with. On top of that, take measures to limit the damage when a service you use is breached. Use random passwords, at least 12 characters long whenever possible (longer is better!). Never reuse passwords.

Demand that the services you use take your privacy seriously. Ask them to provider multi-factor options. If you see bad security practices, report them to customer service. If a service refuses to get better, consider the competition and if you change providers, let the original service know why you're leaving. 

###Links
Some additional reading...

* [LastPass](https://lastpass.com/f?1864696) (If you do want to try LastPass, this link will get you (and me!) a free month of premium service)
* [Keepass](http://keepass.info/) Another password manager
* [1password](https://agilebits.com/onepassword) Another very popular password manager
* [Wikipedia's Password Strength Article](http://en.wikipedia.org/wiki/Password_strength)
* [Two Factor Auth List](https://agilebits.com/onepassword)
* [xkcd - Password Strength](http://xkcd.com/936/)