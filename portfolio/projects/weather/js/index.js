
window.onload = function() {
  
  var lat = '';
  var lon = '';
  var url = '';
  var gps = '';
  
 // Code for geolocation API commented out — 
 // var startPos;
 // var geoSuccess = function(position) {
   // startPos = position;
   // var lat = startPos.coords.latitude;
   // var lon = startPos.coords.longitude;
    var url = "http://api.openweathermap.org/data/2.5/weather?zip=vancouver&APPID=e75aa9eb22e3e903ba187251f2faa34f";
    
    // Obtain the weather conditions for current location with Open Weather Map API:
    
    $.getJSON(url, function (data) {
      
      var kelvin = (data.main.temp);
      var celsius = (kelvin - 273);
      var fahrenheit = (1.8 * ((data.main.temp) - 273) + 32);
      var weatherType = (data.weather[0].main);
      var weather = (data.weather[0].description);
      var city = (data.name);
      
      // Modify HTML to display current weather:
      // document.getElementById("location").innerHTML = "Your current location is: " + city + " (coordinates: " + startPos.coords.latitude.toFixed(2) + ", " + startPos.coords.longitude.toFixed(2) + ")";

      document.getElementById("location").innerHTML = "Your current location is " + city + ", Canada";
      document.getElementById("weather").innerHTML = "The current weather in Vancouver, Canada is " + weather + ", with a temperature of " + Math.round(fahrenheit) + "°F";
      
      console.log(url);
      console.log(city, weatherType, weather, fahrenheit);
      
      // If/Else statement to change background based on current weather conditions:
      if (weatherType === "Clear") {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clear_zpsjmcvr0ug.jpeg')", "z-index", "-5");
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/sun_zpsjvbqiums.png');
      }
      else if (weatherType === "Clouds") {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsmve23uf0.jpg')", "z-index", "-5");
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/cloud_icon_zps0adarmb0.png');       
      }
      else if (weatherType === "Rain") {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_zps7c59zbez.jpg')", "z-index", "-5");
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_icon_zps1vhr8j8o.png');
      }
      else {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/default.jpg_zpsxucpf3u4.png')", "z-index", "-5");
      }
      
      $('#kelvin').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in Vancouver, Canada is " + weather + ", with a temperature of " + Math.round(kelvin) + "K";
      });
      
      $('#celsius').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in Vancouver, Canada is " + weather + ", with a temperature of " + Math.round(celsius) + "°C";
      });

      $('#fahrenheit').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in Vancouver, Canada is " + weather + ", with a temperature of " + Math.round(fahrenheit) + "°F";
      });

      });
     
  //};
  
  // navigator.geolocation.getCurrentPosition(geoSuccess);

};

  $('button').click(function() {
    var zip = document.getElementsByName("zip")[0].value;
    document.getElementById('zipCode').value='';

    var newUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=e75aa9eb22e3e903ba187251f2faa34f";

    $.getJSON(newUrl, function (data) {
      
      var kelvin = (data.main.temp);
      var celsius = (kelvin - 273);
      var fahrenheit = (1.8 * ((data.main.temp) - 273) + 32);
      var weatherType = (data.weather[0].main);
      var weather = (data.weather[0].description);
      var city = (data.name);      
      
      // Modify HTML to display current weather:
      document.getElementById("disclaimer").innerHTML = '';
      document.getElementById("location").innerHTML = '';
      document.getElementById("reload").innerHTML = "Reload Original Location";
      $("#reload").show("slow");
      document.getElementById("weather").innerHTML = "The current weather in " + city + " is " + weather + ", with a temperature of " + Math.round(fahrenheit) + "°F";
      
      // If/Else statement to change background based on current weather conditions:
      if (weatherType === "Clear") {
        
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clear_zpsjmcvr0ug.jpeg')", "z-index", "-2" );
        $("#icon").css("display", "none");     
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/sun_zpsjvbqiums.png');
        $("#icon").fadeIn(2000);

      }
      else if (weatherType === "Clouds") {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsmve23uf0.jpg')", "z-index", "-2" );
        $("#icon").css("display", "none");
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/cloud_icon_zps0adarmb0.png');
        $("#icon").fadeIn(2000);
      }
      else if (weatherType === "Rain") {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_zps7c59zbez.jpg')", "z-index", "-2" );
        $("#icon").css("display", "none");
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_icon_zps1vhr8j8o.png');
        $("#icon").fadeIn(2000);
      }
      else {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/default.jpg_zpsxucpf3u4.png')", "z-index", "-2");
      }

      $('#kelvin').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in " + city + " is " + weather + ", with a temperature of " + Math.round(kelvin) + "K";
      });
      
      $('#celsius').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in " + city + " is " + weather + ", with a temperature of " + Math.round(celsius) + "°C";
      });

      $('#fahrenheit').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in " + city + " is " + weather + ", with a temperature of " + Math.round(fahrenheit) + "°F";
      });


  });
});

  var citySelect = '';

    $("#tokyo").click(function() {
      citySelect = "tokyo"; });
    $("#seoul").click(function() {
      citySelect = "seoul"; });
    $("#shanghai").click(function() {
      citySelect = "shaghai"; });
    $("#hongkong").click(function() {
      citySelect = "hong kong"; });
    $("#singapore").click(function() {
      citySelect = "singapore"; });
    $("#newdelhi").click(function() {
      citySelect = "new delhi"; });
    $("#moscow").click(function() {
      citySelect = "moscow"; });
    $("#london").click(function() {
      citySelect = "london"; });
    $("#capetown").click(function() {
      citySelect = "cape town"; });
    $("#rio").click(citySelect = "rio de janeiro");
    $("#mexico").click(function() {
      citySelect = "mexico city"; });
    $("#sanfrancisco").click(function() {
      citySelect = "san francisco"; });
    $("#juneau").click(function() {
      citySelect = "juneau"; });
    $("#newyork").click(function() {
      citySelect = "new york"; });


  $(".cities").click(function() {

    var urlSelect = "http://api.openweathermap.org/data/2.5/weather?zip=" + citySelect + "&APPID=e75aa9eb22e3e903ba187251f2faa34f";

    $.getJSON(urlSelect, function (data) {
      
      var kelvin = (data.main.temp);
      var celsius = (kelvin - 273);
      var fahrenheit = (1.8 * ((data.main.temp) - 273) + 32);
      var weatherType = (data.weather[0].main);
      var weather = (data.weather[0].description);
      var city = (data.name); 
      
      // Modify HTML to display current weather:
      document.getElementById("disclaimer").innerHTML = '';
      document.getElementById("location").innerHTML = '';
      document.getElementById("reload").innerHTML = "Reload Original Location";
      $("#reload").show("slow");
      document.getElementById("weather").innerHTML = "The current weather in " + city + " is " + weather + ", with a temperature of " + Math.round(fahrenheit) + "°F";
      
      // If/Else statement to change background based on current weather conditions:
      if (weatherType === "Clear") {
        
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clear_zpsjmcvr0ug.jpeg')", "z-index", "-2" );
        $("#icon").css("display", "none");      
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/sun_zpsjvbqiums.png');
        $("#icon").fadeIn(2000);

      }
      else if (weatherType === "Clouds") {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/clouds_zpsmve23uf0.jpg')", "z-index", "-2" );
        $("#icon").css("display", "none");
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/cloud_icon_zps0adarmb0.png');
        $("#icon").fadeIn(2000);
      }
      else if (weatherType === "Rain") {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_zps7c59zbez.jpg')", "z-index", "-2" );
        $("#icon").css("display", "none");
        $("#icon").attr('src', 'http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/rain_icon_zps1vhr8j8o.png');
        $("#icon").fadeIn(2000);
      }
      else {
        $("html").css("background-image", "url('http://i1361.photobucket.com/albums/r662/bonham000/Current%20Weather%20App/default.jpg_zpsxucpf3u4.png')", "z-index", "-2");
      }

      $('#kelvin').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in " + city + " is " + weather + ", with a temperature of " + Math.round(kelvin) + "K";
      });
      
      $('#celsius').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in " + city + " is " + weather + ", with a temperature of " + Math.round(celsius) + "°C";
      });

      $('#fahrenheit').click(function() {
        document.getElementById("weather").innerHTML = "The current weather in " + city + " is " + weather + ", with a temperature of " + Math.round(fahrenheit) + "°F";
      });


  });
});

function reload() {
  location.reload();
}




