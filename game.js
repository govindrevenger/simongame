// alert("hello brother");
userClickedPattern=[];
var level=0;

var started=false;

var buttonColors=["red","blue","green","yellow"];
var gamePattern=new Array();

function nextSequence(){
    userClickedPattern=[]; // ye hamne isliye kiya h jab hamne level 1 par kar liya to hame level 2 ke liye shuru se pattern dalne padenge isliye hamne userClickedPattern ko empty kiya jab bhi gamePattern ki length or user pattern ki length same ho jaye
    level++;
    $("h1").text("level "+level);
    var randomNumber=Math.floor(Math.random()*4);

    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
            
    // $("#"+randomChosenColor).click(function(){  
    //     $(document). ready(() => {
    //         setInterval(() => {
    //         $("#"+randomChosenColor). fadeIn();// agar me fadein ko bhar likhta hu interval se to wo click karne par aayega hi nahi gayab ho jayega kyoki hame fadein ko setinterval ke anadar likhna hoga kyoki uske nadar jo likha hua h wo utne interval ke baad repeat hota rahega 
    //         $("#"+randomChosenColor). fadeOut();
    //         }, 500);
    //         })
    // })

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); //  ye random number ke through game pattern me color store kiye ja rahe h jisse computer hame dikhaye jab ham game khele to unko dikane ke liye hame uss color ko blink karna hoga wo isse hoga 
    // or jab bhi ham game khlenge computer har baar ek koi bhi color ka button gernate karega to uss button ko dikane ke liye hame usse blink karna hoga wo iske through hoga 
    playSound(randomChosenColor);
}



$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play();
}

function animatePress(currentColor){
$("#"+currentColor).addClass("pressed")

setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
},100)
}
$(document).keypress(function(){
    if(!started){
   
    nextSequence();
    $("h1").text("level "+level);
    var started= true;
    }

})


function checkAnswer(CurrentLevel){
    if(gamePattern[CurrentLevel]===userClickedPattern[CurrentLevel]){
        console.log("sucess");

        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
      
        }
    }

    
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game Over, Press Any Key to Restart");

        stratOver();
        console.log("failed");
    }
}



function stratOver(){
    level=0;
     gamePattern=[];
    started=false;
}














// length() : length() method is a final variable which is applicable for string objects. The length() method returns the number of characters present in the string. 1. The length variable is applicable to an array but not for string objects whereas the length() method is applicable for string bjects but not for arrays