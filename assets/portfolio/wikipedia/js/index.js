

// Function to target a href within generated div elements and follow link on div click event:

$(document).ready(function(){
    
    $(document).delegate("div.content", "click", function() {
       window.location = $(this).find("a").attr("href");
    });

});

// Search Input Submit Triggers Wikipedia API Query:

$("#submit").click(function() {
     
    $("#author").remove(); 
    $(".content").remove();
    $("#wikipedia").fadeOut(50);

    // Input is stored as a variable:
    var limit = $('input[name="radio"]:checked').val();

    // Wikipedia API is called and the User's Query is submited as the search query:
    $.ajax({
      url: '//en.wikipedia.org/w/api.php',
      data: { action: 'query', list: 'search', srsearch: $("#input").val(), format: 'json', srlimit: limit },
      dataType: 'jsonp',
      success: function (data) {
        
        document.getElementById("input").value = '';

        // The response is populated throughout the page as new HTML elements:

        for (var i = 0; i < limit; i++) {

            var newElement = document.createElement('div');
            newElement.id = data.query.search[i].title; newElement.className = "content";
            document.body.appendChild(newElement);

            var newTitle = document.createElement('p');
            newTitle.className = "title";
            newTitle.innerHTML = data.query.search[i].title;
            document.getElementById(data.query.search[i].title).appendChild(newTitle);

            var newSnippet = document.createElement('p');
            newSnippet.className = "snippet";
            newSnippet.innerHTML = data.query.search[i].snippet;
            document.getElementById(data.query.search[i].title).appendChild(newSnippet);

            var link = document.createElement('p');
            var target = "<a href='https://en.wikipedia.org/wiki/" + data.query.search[i].title + "'></a>";
            link.innerHTML = target;
            document.getElementById(data.query.search[i].title).appendChild(link);

            console.log(link);

            $('.content').hide();
            
        }

        $(".content").slideDown(750);
        $('#author').hide();

        // Author signature is created at the bottom of the list of results:
        
        var author = document.createElement('p');
        author.id = "author";
        author.innerHTML = "This page created by <a target=\"_blank\" href=\"http://sean-smith.me\">Sean Smith</a> as a project for <a target=\"_blank\" href=\"https://www.freecodecamp.com/\">Free Code Camp</a>'s Front End Web Development Certification";
        document.body.appendChild(author);
        
        $('#author').hide();
        $("#author").fadeIn(1250);

      }
    });

});

// Scroll to Top Button Code:

$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }
    });

    $('.scroll').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });
    
});


