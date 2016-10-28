xvals = [];
yvals = [];
    
if (Cookies.get('xval')) {
    xvals = JSON.parse(Cookies.get('xval'));
    yvals = JSON.parse(Cookies.get('yval'));
    for (var i=0; i < xvals.length; i++) {
        $(".stage").append("<div class='dot' style='left: " + xvals[i] + "px; top: " + yvals[i] + "px'></div>");
    }
}

$(".stage").click(function(e) {
   xvals.push(e.clientX);
   yvals.push(e.clientY);
   $(".stage").append("<div class='dot' style='left: " + e.clientX + "px; top: " + e.clientY + "px'></div>");
   Cookies.set('xval', xvals);
   Cookies.set('yval', yvals);
});

$(".reset").click(function(e) {
    e.preventDefault();
    $(".dot").remove();
    xvals = [];
    yvals = [];
    Cookies.set('xval', xvals);
    Cookies.set('yval', yvals);
});