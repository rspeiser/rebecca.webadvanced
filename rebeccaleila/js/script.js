function showText(id, delay) {
    var elem = document.getElementById(id);
    setTimeout(function () {
        elem.style.opacity = 1;
    }, delay * 1000)
}
window.onload = function () {
    showText('delayedText1', 1);
    showText('delayedText2', 2);
    showText('delayedText3', 3);
    showText('delayedText4', 4);
  
    
}

