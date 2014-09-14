---
layout: post
title: Pushing Bamboo Notifications to Datadog
date: 2013-06-27 21:22:50.000000000 -04:00
categories:
- DevOps
tags:
- continuous integration
- datadog
- devops
- dirty hacks
- python
status: publish
type: post
published: true
meta:
  _yoast_wpseo_focuskw: datadog
  _edit_last: '1'
  _yoast_wpseo_linkdex: '87'
  _yoast_wpseo_metadesc: Have Bamboo and Datadog? Have no idea how to make them talk
    to each other? Here's a simple solution in less than 30 lines of code!
  _wps_seo_booster_disable: ''
  _wps_seo_booster_ogp_title: ''
  _wps_seo_booster_ogp_description: ''
  _wps_seo_booster_ogp_image: ''
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
  _wps_seo_booster_enable_rating_post: 'off'
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
In my last post, I mentioned that where I work, we settled on Bamboo as our continuous integration solution. I love Bamboo, but its built-in notification features are pretty lacking. In fact, your only options out of the box are XMPP messaging (with no conferencing, so meh) or email (yech).

##I <3 Datadog

<p style="text-align: center;"><a href="http://datadoghq.com"><img class="aligncenter" alt="" src="assets/dd_logo_white_trim-300.png" width="300" height="62" /></a></p>

<p>Another tool we use at <a href="http://politico.com" target="_blank">Politico</a> is <a href="http://datadoghq.com" target="_blank">Datadog</a>. If you're not familiar with it, Datadog is an amazing hosted devops tool that combines rich visualization of metrics data with very nifty event streams and quasi-social groupwarish features. Datadog is changing how devs and system admins work in our environment, and we're increasingly looking for ways that it can make our lives better.</p>
<p>Datadog is our central event management platform, and having our build events there cuts Bamboo off from the rest of our notification pipeline, and that's just the pits. Over the past day or two, the Politico Tech Lab has been abuzz with increasingly Rube-Goldbergian ideas for how to solve what boils down to a very simple problem: how do we push a tiny blob of text across the Internet. Eventually we came to the idea of setting up an XMPP server that both Bamboo and our IRC bot could long in to, with the goal of teaching the IRC bot to forward messages to Datadog's API. Yeah, silly.</p>
<p>Then, suddenly, the clouds parted and the heavenly chorus picked up and the solution presented itself as clear as crystal: python.</p>
<h2>Python to the Rescue</h2>
<p>Python's standard library includes a simple, but very functional SMTP server implementation. Yeah, that's right, we built a mail server.</p>
<p>The code's very short, but we can take a quick tour.</p>
<pre>import asyncore
import email
import socket
from dogapi import dog_http_api as api
from smtpd import SMTPServer</pre>
<p>We'll need the basic asynchronous socket server module, email (to tame Bamboo's HTML mishmash), the socket module, the basic SMTPServer module from smtpd, and Datadog's API, which is available from the cheese shop with a simple 'pip install dogapi'.</p>
<pre>class Server(SMTPServer):
    def __init__(self, dd_api_keys, host="127.0.0.1", port=4242):
        self.dd_api_keys = dd_api_keys
        asyncore.dispatcher.__init__(self)
        self.create_socket(socket.AF_INET, socket.SOCK_STREAM)
        self.set_reuse_addr()
        self.bind((host, port))
        self.listen(5)</pre>
<p>Now we just have to extend the SMTPServer class. We'll need to take in some datadog api keys (as a tuple, in this case), as well as an address to bind to and a port to listen on. SMTPServer itself extends asyncore.dispatcher, so we need to init correctly before setting up a socket to listen on.</p>
<pre>    def process_message(self, peer, sender, recipients, body):
        api_key, app_key = self.dd_api_keys

        message = email.message_from_string(data)
        title   = " ".join(self.message["subject"].split("\n"))
        text    = message.get_payload(0)

        api.event(title, text)</pre>
<p>The method 'process_message' will be called any time a mail client delivers a message to our server for delivery. We'll get information about the peer as a standard (addr,port) tuple, the sender's address as a string, a list of recipient email addresses, and the message body also as a string.</p>
<p>At this point, we go ahead and unpack those api keys. The python email module will break up the raw email message enough to make things simpler. We can easily grab the subject to use as our event title. Bamboo sends multipart messages with the plaintext body in the first part, so we just use get_payload to pull out the 0th index.</p>
<p>Calling api.event will fire the event off to Datadog.</p>
<pre>if __name__ == '__main__':
    apikey = 
    appkey = 
    server = Server((apikey, appkey))
    asyncore.loop()</pre>
<p>And last, we instantiate our server and start our little server up.</p>
<h2>Wrapping it Up</h2>
<p>In our actual implementation, we ended up massaging this data a bit more to clean things up and make the events conform more to our own internal needs and desires. This code is what remains after that stuff has been chopped out, so NB, I haven't even attempted to execute it and may not run as is. It should be enough to get you started on your own sneaky little SMTP server</p>
<p>&nbsp;</p>
<h2>Further Reading</h2>
<ul>
<li><a href="http://datadoghq.com" target="_blank"><span style="line-height: 13px;">Check out Datadog's website and free trial. Seriously, these guys are awesome!</span></a></li>
<li><a href="https://gist.github.com/squinones/5881996">Grab the (possibly) working code!</a></li>
</ul>
