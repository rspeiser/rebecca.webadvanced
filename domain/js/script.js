 $(function(){

        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', 
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

var statements = ["It’s freezing and snowing<br> in New York we need global<br> warming!","I'm undaunted in my quest to amuse myself by constantly changing my hair"];
                 ["An ‘extremely credible source’ has called my office and told me that Barack Obama’s birth certificate is a fraud","We're going to take things away from you on behalf of the common good"];
                 ["Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again just watch. He can do much better!","Who is going to find out? These women are trash. Nobody’s going to believe them"];
                 ["Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man – he made a good decision.", "God bless the America we are trying to create."];
                 ["You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.", "I have said that I'm not running and I'm having a great time being pres --being a first-term senator."];
                 ["When Mexico sends its people, they’re not sending the best. They’re bringing drugs. They’re bring crime. They’re rapists… And some, I assume, are good people", "We have a lot of kids who don't know what work means. They think work is a four-letter word"]
var answers = ["trump","hillary"];
              ["trump","hillary"];
              ["trump","hillary"];
              ["trump","hillary"];
              ["trump","hillary"];
              
var randomStatement = Math.floor(Math.random()*statements.length);

$(".redbuzzer").click(function() {
  if (answers[randomStatement] == "trump") {
   
    $("body").css("background-color","red");
    
     
  }
  
  else {
      
      $("body").css("background-color", "blue");
      
  }
})

