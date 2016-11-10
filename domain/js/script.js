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
                 "When Mexico sends its people, they're not<br>sending the best. They're bringing drugs.<br>They're bring crime. They're rapists…<br>And some, I assume, are good people.",
                 "We have a lot of kids who don't know what<br>work means. They think work is a<br>four-letter word.",
                 "Our great African-American President<br>hasn’t exactly had a positive impact on the<br>thugs who are so happily and openly<br>destroying Baltimore.",
                 "I believe that the rights of women<br>and girls is the unfinished business<br>of the 21st century.",
                 "If I were running 'The View' I’d fire<br>Rosie O’Donnell. I mean<br>I'd look at her right in that fat,<br>ugly face of hers.<br>I'd say ‘Rosie, you're fired.",
                 "The American people are tired of<br>liars and people who pretend to be<br>something they're not.",
                 "All of the women on The Apprentice<br>flirted with me– consciously or unconsciously.<br>That’s to be expected.",
                 "If I didn't kick his ass every day,<br>he wouldn't be worth anything.",
                 "One of the key problems today<br>is that politics is such a disgrace.<br>Good people don't go into government.",
                 "I have to confess that it's crossed<br>my mind that you could not be a Republican<br>and a Christian.",
                 "The beauty of me is that I'm very rich.",
                 "He ran a gas station down in St. Louis...<br>No, Mahatma Gandhi was a great leader<br>of the 20th century.",
                 "The point is, you can never be<br>too greedy.",
                 "I'm not going to have some reporters pawing<br>through our papers. We are the president.",
                 "I've said if Ivanka weren't my daughter,<br>perhaps I'd be dating her.",
                 "I suppose I could have stayed home<br>and baked cookies and had teas,<br>but i decided to fulfill my profession<br>which I entered before my husband<br>was in public life.",
                 "My fingers are long and beautiful, as,<br>it has been well documented,<br>are various other parts of my body.",
                 "There’s a different leader in Syria now.<br>Many of the members of Congress of<br>both parties who have gone to Syria<br>in recent months have said they believe<br>he’s a reformer.",
                 "I have never seen a thin<br>person drinking Diet Coke.",
                 "The last time I actually drove<br>a car myself was 1996.",
                 "I think the only difference between me<br>and the other candidates is that<br>I’m more honest and my women<br>are more beautiful.",
                 "Put this helicopter on the ground!<br>I left my sunglasses in the limo.<br>I need those sunglasses. We need to go back!",
                 "She's not giving me 100 percent.<br>She's giving me 84 percent, and 16 percent<br>is going towards taking care of children.",
                 "Was it because of a protest<br>or was it because of guys out for<br>a walk one night who decided that<br>they’d go kill some Americans?<br>What difference does it make?",
                 "When you're a star, they let you do it.<br>You can do anything. Grab 'em by the pussy.<br>You can do anything.",
                 "Deep-seated cultural codes, religious<br>beliefs,and structural biases have<br>to be changed.",
                 "I am going to be dating her in 10 years.<br>Can you believe it?",
                 "Don’t let anybody tell you that it’s<br>corporations and businesses that create jobs.",
                 "If she can't satisfy her husband what<br>makes her think she can satisfy America.",
                 "I can’t worry about every under<br>capitalized business.",
                 "Look at that face. Would anyone<br>vote for that? Can you imagine that,<br>the face of our next next president?<br>I mean, she's a woman, and I'm not<br>supposed to say bad things, but really, folks,<br>come on. Are we serious?",
                 "We are at a stage in history in which<br>remolding society is one of the<br>great challenges facing all of us in the West.",
                 "Now, somebody who a lot of people don't give<br>credit to but in actuality is really<br>beautiful is Paris Hilton. I've known Paris Hilton<br>from the time she's 12.<br>The first time I saw her she walked into the room and I said,<br>'Who the hell is that?",
                 "There are rich people everywhere.<br>And yet they do not contribute to the<br>growth of their own countries.",
                 "Often when I was sleeping with one<br>of the top women in the world<br>I would say to myself, thinking about<br>me as a boy from Queens,<br>'Can you believe what I am getting?'",
                 "No. We just can't trust the American<br>people to make those types of choices.<br>Government has to make those choices for people.",
                 "I have really given a lot of women<br>great opportunity. Unfortunately, after they<br>are a star, the fun is over for me",
                 "If you have guns in your home,<br>tell your parents to keep them away<br>from you and your friends and your<br>little brothers and sisters.",
                 "Rosie's a loser. A real loser.<br>I look forward to taking lots of<br>money from my nice fat little Rosie.",
                 "I remember landing under sniper fire.<br>There was supposed to be some kind of<br>a greeting ceremony at the airport, but<br>instead we just ran with our heads down<br>to get into the vehicles to get to our base.",
                 "You have to treat 'em like<br>shit.",
                 "Human rights are women’s rights,<br>and women’s rights are human rights.<br>Let us not forget that among those<br>rights are the right to speak freely<br>and the right to be heard.",
                 "26,000 unreported sexual assaults<br>in the military- only 238 convictions.<br>What did these geniuses expect<br>when they put men and women together?",
                 "I’ve always believed you can learn<br>something from nearly everybody you meet<br>if you’re open to it.",
                 "Women are really a lot different than portrayed.<br>They are far worse than men,<br>far more aggressive.",
                 "We should remember that just as a<br>positive outlook on life can promote<br>good health, so can everyday acts<br>of kindness.",
                 "You know who's one of the great<br>beauties of the world, according to<br>everybody? And I helped create her.",
                 "Every moment wasted looking back<br>keeps us from moving forward In this<br>world and the world of tomorrow<br>we must go forward together<br>or not at all.",
                 "A person who is very flat-chested <br>is very hard to be a 10.",
                 "Take criticism seriously, but not personally.<br>If there is truth or merit in the criticism<br>try to learn from it. Otherwise<br>let it roll right off you.",
                 "I have days where, if I come home–<br>and I don’t want to sound too<br>much like a chauvinist but if<br>dinner’s not ready, I go through the roof.",
                 "We need to understand that there is<br>no formula for how women should lead their lives<br>That is why we must respect the choices<br>that each woman makes for herself<br>and her family.",
                 "Women have one of the great acts<br>of all time.The smart ones act very feminine<br>and needy, but inside they are<br>real killers.",
                 "In too many instances, the march<br>to globalization has also meant the<br>marginalization of women and girls.<br>And that must change.",
                 "The person who came up with the expression<br>‘the weaker sex’ was either very<br>naive or had to be kidding.<br>I have seen women manipulate men<br>with just a twitch of their eye<br>or perhaps another body part.",
                 "The worst thing that can happen<br>in a democracy, as well as in an individual's<br>life is to become cynical about the future<br>and lose hope.",
                 "I like kids. I mean, I won’t do<br>anything to take care of ’em.<br>I’ll supply funds, and she’ll<br>take care of the kids.",
                 "There cannot be true democracy unless<br>women's voices are heard. There cannot<br>be true democracy unless women are given<br>the opportunity to take responsibility<br>for their own lives.",
                 "I think that putting a wife<br>to work is a very dangerous thing.",
                 "To LGBT men and women worldwide<br>let me say this: wherever you live and whatever the<br>circumstances of your life, whether<br>you are connected to a network of<br>support or feel isolated and vulnerable<br>please know that you are not alone.",
                 "Pregnancy is never—it’s a wonderful thing for the woman<br>It’s a wonderful thing for the husband<br>It’s certainly an inconvenience for a business.",
                 
                 
                 
                 
                 
                 
                 
                 
                 ]
    
    var answers = ["trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 "trump","hillary",
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 ];
              
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

