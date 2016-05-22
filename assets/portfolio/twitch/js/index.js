

// Array of Twitch Users:

var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "comster404"];

// Page load initiates API call to get information on all the above Twitch users in the above array:

$(document).ready(function() {

	for (var i = 0; i < users.length; i++) {

	  $.getJSON('https://api.twitch.tv/kraken/streams/' + users[i] + '?callback=?', function(data) { 
	    
	    console.log(data);
	    var html = '';

		// Error handling if user account does not exist:
		if (data.status == 422) {
			console.log(data.status);
		  	
		  	html += '<div class="twitchDiv nullClass">';
    		html += '<h5 class="displayNameNull">' + data.message + '</h5>';
    		html += '</div>';

	    	$('#twitchBox').append(html);

		}

		else {

		    // Extracts secondary JSON target from first response and queries again:
		    $.getJSON(data._links.channel, function(channelData) {


		    	var name   = channelData.display_name; 
		    	var logo   = channelData.logo;
		    	var url    = channelData.url;
		    	var online = channelData.status;
		    	var stat   = '';

			    	if (logo == null) {
			    		logo = "http://i1361.photobucket.com/albums/r662/bonham000/Twitch%20API/text4142_zpsyrkxdf4z.png";
			    	};

			    	if (online == null) {
			    		online = "This user is currently offline";
			    		stat   = "offline";
			    	}
			    	else {
			    		online = "This user is currently streaming";
			    		stat   = "online";
			    	}

		    	// console.log(channelData);
		    	console.log(name, logo, url, online);

	    		html += '<div class="twitchDiv ' +  stat + '">';
	    		html += '<a target=/"_blank/" href="' + url + '"><img class="logo" src="' + logo + '"/></a>';
	    		html += '<h5 class="displayName">' + name + '</h5>';
	    		html += '<p class="userStatus">' + online + '</p>';
	    		html += '</div>';

		    	$('#twitchBox').append(html);

		    });

		}

	  });

	}

});

// Instructions to toggle online and offline users on the page:

$("#showAll").click(function() {
	$('.online').hide();
	$('.offline').hide();
	$('.nullClass').hide();

	$('.online').slideDown('slow');
	$('.offline').slideDown('slow');
	$('.nullClass').slideDown('slow');
})

$("#online").click(function() {
	$('.online').hide();
	$('.offline').hide();
	$('.nullClass').hide();

	$('.online').slideDown('slow');
});

$("#offline").click(function() {
	$('.online').hide();
	$('.offline').hide();
	$('.nullClass').hide();

	$('.offline').slideDown('slow');
});





