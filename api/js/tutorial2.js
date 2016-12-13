function getWeather() {
    var location = "11211";

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");

        } else {
            console.log(data.query.results)
            console.log(data.query.results.channel.wind.direction);
            console.log(data.query.results.channel.wind.speed);
            var humidity = data.query.results.channel.wind.direction;
            var rotation = "translate(-50%,-50%) rotate(" + humidity + "deg)";
            var humidity = data.query.results.channel.wind.speed;
            var opacity  = "opacity(" + humidity + "px";
           
          
           
            $(".shape").css('opacity', 0.4);
            $(".shape1").css('opacity', 0.1);
            $(".shape2").css('opacity', 0.2);
            $(".shape3").css('opacity', 0.3);
            $(".shape4").css("-webkit-filter", blur);
            
            
            
            $(".shape").show();
            $(".shape1").show();
            $(".shape2").show();
            $(".shape3").show();
            $(".shape").show();
          
          var blur = "blur(" + windSpeed + "px)"; 
          $(".shape").css("-webkit-filter", blur);
          $(".shape1").css("-webkit-filter", blur);
          $(".shape2").css("-webkit-filter", blur);
          $(".shape3").css("-webkit-filter", blur);
          $(".shape4").css("-webkit-filter", blur);
        }

    });
}

getWeather();

$(".menu").mouseover(function() {
    $(this).children(".description").show();
}).mouseout(function() {
    $(this).children(".description").hide();
});

