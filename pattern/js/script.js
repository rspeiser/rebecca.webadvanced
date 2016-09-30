var timer = 0;
var counter = 0;

for (var i = 0; i < 1000; i++) {
    setTimeout(function() {
        var speis = " i love you ";
        for (var s = 0; s < 1000; s++) {
            if (Math.random()*100 < 1) {
                speis += "<3";
            } else {
                speis += "";
            }
    
        }
        console.log(speis);
    }, timer);
    timer += 70;
    counter++;
}