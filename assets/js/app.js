$( document ).ready(function() {

	/* Sidebar height set */
	$('.sidebar').css('min-height',$(document).height());

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var contact_list = $('#contact-list');
	
	scontacts.hide();
	
	contact_list.mouseenter(function(){ scontacts.fadeIn(); });
	
	contact_list.mouseleave(function(){ scontacts.fadeOut(); });
	
	var feed = "https://www.google.com/calendar/feeds/0fe90veo9ms9bt5i5a2blce8dc%40group.calendar.google.com/public/full?alt=json";
	$.getJSON(feed, function (data) {
		entries = data.feed.entry;
		for (var i=0; i<entries.length;i++) {
			console.log(entries[i]);
		}
	});
});
