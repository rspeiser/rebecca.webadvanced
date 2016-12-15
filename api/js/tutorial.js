$(window).on('load', function() {
            $('#preloader').delay(300).fadeOut('slow'); 
            
        })


function getWeather() {
    var location = "10000";

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");

        } else {
            
            console.log(data.query.results.channel.wind.direction);
            
            var conditionCodeNum = data.query.results.channel.item.condition.code;
            var umbrellaNum = 5;
            console.log(conditionCodeNum);
            if (conditionCodeNum == "9" || conditionCodeNum == "11" || conditionCodeNum == "3" || conditionCodeNum == "17" 
            
            ) {
                console.log(conditionCodeNum)
                umbrellaNum = 15;
            }
            
            for (var i = 0; i < umbrellaNum; i++) {
                $("body").append('<div class="hexagon"></div>');
            }

            $(".hexagon").each(function() {
                $(this).css("top",(Math.random()*$(window).height() )-300);
                $(this).css("left",(Math.random()*$(window).width() )-300);
    
            });
 
            var windDirection = data.query.results.channel.wind.direction;
            var rotation = "translate(-50%,-50%) rotate(" + windDirection + "deg)";
            var windSpeed = data.query.results.channel.wind.speed;
            var conditionCode = data.query.results.channel.item.condition.text;
            var blur = "blur(" + windSpeed + "px)";
            
            var windSpeedMS = (2000 - (windSpeed * 60)) + "ms";
            
            $(".hexagon").css("animation-duration",windSpeedMS);
        
            
            $(".cond").html(conditionCode);
            
            var humidity = data.query.results.channel.humidity;
            $(".rain").html(humidity);
            
            
            $(".hexagon").css("transform", rotation);
            $(".hexagon").css("-webkit-filter", blur);
            $(".hexagon").fadeIn(1000);
        }
        

    });
}

getWeather();




