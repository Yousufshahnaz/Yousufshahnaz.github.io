// API key and URL
var apiKey = "1RVwu9WCS5cuOXDgKEsQJnx31fieSgTrplFXxJFoWcvQ";
var apiURL = "https://spreadsheets.google.com/feeds/list/"+apiKey+"/2/public/values?alt=json";

// Fetch data from Google Sheets
$.getJSON(apiURL, function(data) {
	var result = data.feed.entry;
	$.each(result, function() {
		$(".title").append(this.gsx$title.$t);
		$(".instructions").append(this.gsx$instructions.$t );
	});
});