// Javascript for accessing random quote API:

$("#click").click(function() { 
  
  var timeout;
  var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type: 'GET', // The HTTP Method
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
        
        $("#quote").fadeOut(500);
        $("#author").fadeOut(500);
     
            clearTimeout(timeout);
            timeout = setTimeout(function() {

                // next 2 lines update the quote + author HTML from the server's response
                document.getElementById("quote").innerHTML = ('"' + data.quote + '"');
                document.getElementById("author").innerHTML = ("— " + data.author);

            }, 500);
        
         $("#quote").fadeIn(500);
         $("#author").fadeIn(500);
      
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "8wIEj1cGnCmsh5SesyjScfVtsYQbp1wyJYHjsn9nOL4wcsAJzd");
    }
  });

});

// Update Twitter Button with Quote + Author Content:

function tweetIt () {
  var phrase = document.getElementById('quote').innerText;
  var author = document.getElementById('author').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) +
    encodeURIComponent(author) +
    '.' +
    '&url=' +
    'http://www.freecodecamp.com';
    
  window.open(tweetUrl);
}