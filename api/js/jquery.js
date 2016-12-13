$(function(){

var hexagon =100;
    for(var x=1;x<=hexagon;x++){
    var posx = Math.round(Math.random() * 1920)-20;
    var posy = Math.round(Math.random() * 1080)-20;
    var ticket="<div class='.hexagon' style='position:absolute;left:'+posy+';top:'+posx+';'><p>Random<br />Box</p></div>";
    $(ticket).appendTo("body");
    }

});