$("body").css("background-color", "blue");

for (var i = 0; i < 1000; i++) {
    $("body").append("<div class='box'></div>");
    
}

var opacity = 0;


$(".box").each(function() {
    opacity += .001;
    $(this).css("opacity",opacity);
    console.log("found box" + opacity);
    
});

var rotation = 0;



$(".crystal").each(function(){
    var newrotation = "rotate(" + rotation + "deg)";
    $(this).css("transform", newrotation);
    rotation += 180/$(".crystal").length;
    
})



    
