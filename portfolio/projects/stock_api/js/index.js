

// Primary search input function:

$("#search").click(function(){
  
    var ticker = document.getElementById("ticker").value;
    var url = "https://www.quandl.com/api/v3/datasets/WIKI/" + ticker + ".json?api_key=aZTRgHjSXiJ-34BsrWLf";
  
    console.log(ticker, url);
  
    $.getJSON(url, function(data) {
  
      console.log(data);

		})

		.success(function(data) {

			// Modify returned JSON data for display on page:
			var company = data.dataset.name;
			var abbrev = company.replace ("Prices, Dividends, Splits and Trading Volume", '');

			// Create new empty container div:
			var newContainer = document.createElement("div");
			newContainer.id = data.dataset.id; newContainer.className = "information";
			$(".content").prepend(newContainer).hide();;
			
			// Create new element for company name:
			var newName = document.createElement('p');
			newName.className = "company";
			newName.innerHTML = (abbrev + "<br>");
			
			// Create new element for company price data:
			var newData = document.createElement('p');
			newData.className = "data";
			newData.innerHTML = (				
				("<span class='date'>Date: <span class='italics'>"  + data.dataset.data[0][0] + "</span></span><br>") +
				("<span class='numbers'>Open: "  + data.dataset.data[0][1] + "<br>") +
				("High: "  + data.dataset.data[0][2] + "<br>") +
				("Low: "   + data.dataset.data[0][3] + "<br>") +
				("Close: " + data.dataset.data[0][4] + "<br>") +
				("Volume: " + data.dataset.data[0][5] + "<br></span>") +
				("<a class='finviz' target='_blank' href='http://finviz.com/quote.ashx?t=" + data.dataset.dataset_code + "&ty=c&ta=1&p=d'>Detailed Company Information</a><br>"));

			// Append new name and price data to new div:
			document.getElementById(data.dataset.id).appendChild(newName);
			document.getElementById(data.dataset.id).appendChild(newData);

			$(".content").fadeIn();

			console.log("Query Successful");
		})

		// Error handling function if user input is incorrect:
		.error(function() {

			alert("Please enter a correct company symbol");
			console.log("User Input Unrecognized"); })

	// Reset input field after user enters text:
    document.getElementById("ticker").value = "";
  
});

// Function to generate results for 25 random S&P stocks:

$("#random").click(function() {
	    
	    // Generate array of S&P 500 stock company symbols from JSON file:
	    $.getJSON("http://data.okfn.org/data/core/s-and-p-500-companies/r/constituents.json", function(data) {
	     
	      var stocks = [];
		      for (var i = 1; i < 500; i++) {
			       stocks.push(data[i].Symbol);
		   	  }

		  // Select 25 random entries in stocks array:
		  var arrayRandom = [];
			for (var i = 0; i < 25; i++) {
			    a = (stocks[Math.floor(Math.random()*stocks.length)]);
			    arrayRandom.push(a);
			}
		
	for (var y = 0; y < arrayRandom.length; y++) {

	    var url = "https://www.quandl.com/api/v3/datasets/WIKI/" + arrayRandom[y] + ".json?api_key=aZTRgHjSXiJ-34BsrWLf";

		$.getJSON(url, function(data) {
		  
				})

				.success(function(data) {

					// Modify returned JSON data for display on page:
					var company = data.dataset.name;
					var abbrev = company.replace ("Prices, Dividends, Splits and Trading Volume", '');

					// Create new empty container div:
					var newContainer = document.createElement("div");
					newContainer.id = data.dataset.id; newContainer.className = "information";
					$(".content").prepend(newContainer);

					
					// Create new element for company name:
					var newName = document.createElement('p');
					newName.className = "company";
					newName.innerHTML = (abbrev + "<br>");
					
					// Create new element for company price data:

					var newData = document.createElement('p');
					newData.className = "data";
					newData.innerHTML = (				
						("<span class='date'>Date: <span class='italics'>"  + data.dataset.data[0][0] + "</span></span><br>") +
						("<span class='numbers'>Open: "  + data.dataset.data[0][1] + "<br>") +
						("High: "  + data.dataset.data[0][2] + "<br>") +
						("Low: "   + data.dataset.data[0][3] + "<br>") +
						("Close: " + data.dataset.data[0][4] + "<br>") +
						("Volume: " + data.dataset.data[0][5] + "<br></span>") +
						("<a class='finviz' target='_blank' href='http://finviz.com/quote.ashx?t=" + data.dataset.dataset_code + "&ty=c&ta=1&p=d'>Detailed Company Information</a><br>"));


					// Append new name and price data to new div:
					document.getElementById(data.dataset.id).appendChild(newName);
					document.getElementById(data.dataset.id).appendChild(newData);

					console.log("Query Successful");
				})

				// Error handling function if user input is incorrect:
				.error(function() {

					alert("Please enter a correct company symbol");
					console.log("User Input Unrecognized"); })

			// Reset input field after user enters text:
		    document.getElementById("ticker").value = "";
		  
		};

	});

});

// Empty HTML from div content function:
$("#reset").click(function() {
	$(".content").empty();
});
