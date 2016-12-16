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
            // this logs the entire results object
            console.log(data.query.results);
            
            //this logs the wind speed
            console.log(data.query.results.channel.wind.speed);
            
            //this logs the condition code
            console.log(data.query.results.channel.item.condition.code);
            
            
            
            
            
            var conditionCodeNum = data.query.results.channel.item.condition.code;
            var umbrellaNum = 10;
            
        //if conditionCodeNum is 9, 11, 3, or 17, set umbrellaNum to 20
        if (conditionCodeNum == "9" || conditionCodeNum == "11" || conditionCodeNum == "12" ); 
            {
               
                umbrellaNum = 5;
            }
            
         //if conditionCodeNum is 20 or 22, set umbrellaNum to 30  
        if (conditionCodeNum == "17" || conditionCodeNum == "45" || conditionCodeNum == "3"); 
            {
               
                umbrellaNum = 30;
            }
            
        
        if (conditionCodeNum == "31" || conditionCodeNum == "32" || conditionCodeNum == "36"); 
            {
               
                umbrellaNum = 3;
            }
                        
            
            
            for (var i = 0; i < umbrellaNum; i++) {
                $("body").append('<div class="hexagon"></div>');
            }

            $(".hexagon").each(function() {
                $(this).css("top",(Math.random()*$(window).height() )-300);
                $(this).css("left",(Math.random()*$(window).width() )-300);
                
    
            });
 
           
           
            var windSpeed = data.query.results.channel.wind.speed;
            console.log(windSpeed);
            var rotation = "translate(-50%,-50%) rotate(" + windSpeed + "";
            var conditionCode = data.query.results.channel.item.condition.text;
            
            
            var humidity = data.query.results.channel.atmosphere.humidity;
            var blur = "blur(" + humidity + "px)";
            console.log(humidity);
           
        
            
            
            var windSpeedMS = (2000 - (windSpeed * 60)) + "ms";
            
            $(".hexagon").css("animation-duration",windSpeedMS);
        
            
            $(".cond").html(conditionCode);
            $(".wind").html(windSpeed);
            $(".humidity").html(humidity);
            
            
            $(".hexagon").css("transform", rotation);
            $(".hexagon").css("-webkit-filter", blur);
            
            $(".hexagon").fadeIn(1000);
        }
        

    });
}

getWeather();




         
        
