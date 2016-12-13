function getWeather() {
    var location = "10001";

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");

        } else {
            console.log(data.query.results)
            console.log(data.query.results.channel.wind.direction);
            console.log(data.query.results.channel.wind.speed);
            var windDirection = data.query.results.channel.wind.direction;
            var rotation = "translate(-50%,-50%) rotate(" + windDirection + "deg)";
            var windSpeed = data.query.results.channel.wind.speed;
            var blur = "blur(" + windSpeed + "px)";
            $(".needle").css("transform", rotation);
            $(".needle").css("-webkit-filter", blur);
            $(".needle").show();
            $("body").css("background-color","white");
        }

    });
}

getWeather();