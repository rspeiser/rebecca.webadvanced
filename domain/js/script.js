  $(document).ready(function() {
    var image = $("<img>");
    var div = $("<div>")
    image.load(function() {
      div.css({
        "width": this.width,
        "height": this.height,
        "background-image": "url(" + this.src + ")"
      });
      $("#container").append(div);
    });
    image.attr("src", "test0.png");
  });