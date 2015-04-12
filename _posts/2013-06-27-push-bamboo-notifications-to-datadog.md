---
layout: post
title: Pushing Bamboo Notifications to Datadog
category: community
tags: ["continuous integration", datadog, devops, "dirty hacks", python]
comments: true
---
In my last post, I mentioned that where I work, we settled on Bamboo as our continuous integration solution. I love Bamboo, but its built-in notification features are pretty lacking. In fact, your only options out of the box are XMPP messaging (with no conferencing, so meh) or email (yech).

##I <3 Datadog

[![datadog](/images/dd_logo_white_trim-300.png)](http://datadoghq.com)

Another tool we use at [POLITICO](http://politico.com) is [Datadog](http://datadoghq.com). If you're not familiar with it, Datadog is an amazing hosted devops tool that combines rich visualization of metrics data with very nifty event streams and quasi-social groupwarish features. Datadog is changing how devs and system admins work in our environment, and we're increasingly looking for ways that it can make our lives better.

Datadog is our central event management platform, and having our build events there cuts Bamboo off from the rest of our notification pipeline, and that's just the pits. Over the past day or two, the Politico Tech Lab has been abuzz with increasingly Rube-Goldbergian ideas for how to solve what boils down to a very simple problem: how do we push a tiny blob of text across the Internet. Eventually we came to the idea of setting up an XMPP server that both Bamboo and our IRC bot could long in to, with the goal of teaching the IRC bot to forward messages to Datadog's API. Yeah, silly.

Then, suddenly, the clouds parted and the heavenly chorus picked up and the solution presented itself as clear as crystal: python.

##Python to the Rescue
Python's standard library includes a simple, but very functional SMTP server implementation. Yeah, that's right, we built a mail server.

The code's very short, but we can take a quick tour.

{% highlight python %}
import asyncore
import email
import socket
from dogapi import dog_http_api as api
from smtpd import SMTPServer
{% endhighlight %}

We'll need the basic asynchronous socket server module, email (to tame Bamboo's HTML mishmash), the socket module, the basic SMTPServer module from smtpd, and Datadog's API, which is available from the cheese shop with a simple 'pip install dogapi'.

{% highlight python %}
class Server(SMTPServer):
    def __init__(self, dd_api_keys, host="127.0.0.1", port=4242):
        self.dd_api_keys = dd_api_keys
        asyncore.dispatcher.__init__(self)
        self.create_socket(socket.AF_INET, socket.SOCK_STREAM)
        self.set_reuse_addr()
        self.bind((host, port))
        self.listen(5)
{% endhighlight %}

Now we just have to extend the SMTPServer class. We'll need to take in some datadog api keys (as a tuple, in this case), as well as an address to bind to and a port to listen on. SMTPServer itself extends asyncore.dispatcher, so we need to init correctly before setting up a socket to listen on.

{% highlight python %}
def process_message(self, peer, sender, recipients, body):
    api_key, app_key = self.dd_api_keys

    message = email.message_from_string(data)
    title   = " ".join(self.message["subject"].split("\n"))
    text    = message.get_payload(0)

    api.event(title, text)
{% endhighlight %}

The method 'process_message' will be called any time a mail client delivers a message to our server for delivery. We'll get information about the peer as a standard (addr,port) tuple, the sender's address as a string, a list of recipient email addresses, and the message body also as a string.

At this point, we go ahead and unpack those api keys. The python email module will break up the raw email message enough to make things simpler. We can easily grab the subject to use as our event title. Bamboo sends multipart messages with the plaintext body in the first part, so we just use get_payload to pull out the 0th index.

Calling api.event will fire the event off to Datadog.

{% highlight python %}
if __name__ == '__main__':
    apikey = 
    appkey = 
    server = Server((apikey, appkey))
    asyncore.loop()
{% endhighlight %}

And last, we instantiate our server and start our little server up.

##Wrapping it Up
In our actual implementation, we ended up massaging this data a bit more to clean things up and make the events conform more to our own internal needs and desires. This code is what remains after that stuff has been chopped out, so NB, I haven't even attempted to execute it and may not run as is. It should be enough to get you started on your own sneaky little SMTP server.

##Further Reading

* Check out [Datadog's](http://datadoghq.com) website and free trial. Seriously, these guys are awesome!
* [Grab the (possibly) working code!](https://gist.github.com/squinones/5881996)
