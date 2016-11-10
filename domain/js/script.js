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
    
    
    var score = 0;

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

    var statements = ["It’s freezing and snowing in<br>New York, we need global warming!",
                 "I'm undaunted in my quest to <br>amuse myself by constantly<br>changing my hair.",
                 "An 'extremely credible source'<br>has called my office and told me<br>that Barack Obama's birth<br>certificate is a fraud.",
                 "We're going to take things away<br>from you on behalf<br>of the common good.",
                 "Robert Pattinson should not<br>take back Kristen Stewart. She cheated on<br>him like a dog & will do it again just watch.<br>He can do much better!",
                 "Who is going to find out?<br>These women are trash.<br>Nobody's going to believe them.",
                 "Ariana Huffington is unattractive,<br>both inside and out.<br>I fully understand why her<br>former husband left her for a<br>man–he made a good decision.", 
                 "God bless the America we are<br>trying to create.",
                 "You know, it really doesn't <br>matter what the media write<br>as long as you've got a young, <br>and beautiful, piece of ass.", 
                 "I have said that I'm not running<br>and I'm having a great time being<br>pres--being a first-term senator.",
                 "When Mexico sends its people, they're not<br>sending the best.They're bringing drugs.<br>They're bring crime. They're rapists…<br>And some, I assume, are good people.",
                 "We have a lot of kids who don't know what<br>work means. They think work is a<br>four-letter word.",
                 "Our great African-American President hasn’t<br>exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore.",
                 "I believe that the rights of women and girls is the unfinished business of the 21st century.",
                 "If I were running 'The View' I’d fire<br>Rosie O’Donnell. I mean<br>I'd look at her right in that fat,<br>ugly face of hers.<br>I'd say ‘Rosie, you're fired.",
                 "The American people are tired of<br>liars and people who pretend to be<br>something they're not.",
                 "All of the women on The Apprentice<br>flirted with me– consciously or unconsciously.<br>That’s to be expected.",
                 "If I didn't kick his ass every day, he wouldn't be worth anything.",
                 "One of they key problems today<br>is that politics is such a disgrace.<br>Good people don't go into government.",
                 "I have to confess that it's crossed my mind that you could not be a Republican and a Christian.",
                 "The beauty of me is that I'm very rich.",
                 "He ran a gas station down in St. Louis...<br>No, Mahatma Gandhi was a great leader of the 20th century.",
                 "The point is, you can<br>never be too greedy.",
                 "I'm not going to have some reporters pawing<br>through our papers. We are the president.",
                 "I've said if Ivanka weren’t my daughter, perhaps I’d be dating her.",
                 "I suppose I could have stayed home<br>and baked cookies and had teas,<br>but i decided to fulfill my profession<br> which I entered before my husband was in public life.",
                 "My fingers are long and beautiful, as,<br>it has been well documented,<br>are various other parts of my body.",
                 "There’s a different leader in Syria now.<br>Many of the members of Congress of<br>both parties who have gone to Syria<br> in recent months have said they believe he’s a reformer.",
                 "I have never seen a thin<br>person drinking Diet Coke.",
                 "The last time I actually drove<br>a car myself was 1996.",
                 "I think the only difference between me<br>and the other candidates is that<br> I’m more honest and my women<br>are more beautiful.",
                 "Put this helicopter on the ground!<br>I left my sunglasses in the limo.<br>I need those sunglasses. We need to go back!",
                 
                 
                 
                 
                 
                 
                 
                 ]
    
    var answers = ["trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary"];
              
var randomStatement = Math.floor(Math.random()*statements.length);

var redButtonClicked = false;
var blueButtonClicked = false;

        $('p').html(statements[randomStatement]);


$(".buzzer").click(function() {
    
        if ($(this).hasClass("redbuzzer") && answers[randomStatement] == "trump") {
            score++;
        }
    
    // else ($(this).hasClass("red") && answers[randomStatement] == "trump") {
    //     score--; 
        
    //     {
    
        if ($(this).hasClass("bluebuzzer") && answers[randomStatement] == "hillary") {
        score++;
        
            
        }
    
      // else ($(this).hasClass("red") && answers[randomStatement] == "trump") {
    //     score--; 
        
    //     {
    
        $(".score").html(score);
    
        if (answers[randomStatement] == "trump") {
   
                $("body").css("background-image","url(img/redgradient.svg)");
    
                randomStatement = Math.floor(Math.random()*statements.length);

                $("#typed").typed('reset');
                $('p').html(statements[randomStatement]);
     
     
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
        
        
     
     
        }  else {
      
            $("body").css("background-image","url(img/bluegradient.svg)");
      
            randomStatement = Math.floor(Math.random()*statements.length);
            $("#typed").typed('reset');
            $('p').html(statements[randomStatement]);
        
        
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
        };
});

