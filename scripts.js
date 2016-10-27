function newGradient() {
  var c1 = {
        r: Math.floor(255),
        g: Math.floor(35+Math.random()*220),
        b: Math.floor(Math.random()*55)
      };
      var c2 = {
        r: Math.floor(255),
        g: Math.floor(35+Math.random()*220),
        b: Math.floor(Math.random()*85)
      };
  c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
  c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
  return 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';
}

function rollBg() {
  $('body').css('background', newGradient());
  setTimeout(function(){rollBg();}, 1000);
}
rollBg();