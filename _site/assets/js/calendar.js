(function () {
	$.fn.extend({
		showcal: function (o) {
			var defaults = {
				feed: "https://www.google.com/calendar/feeds/0fe90veo9ms9bt5i5a2blce8dc%40group.calendar.google.com/public/full?alt=json"
			}
			var options = $.extend(defaults, o);

			$(this).html("foo");
		}
	});	
})