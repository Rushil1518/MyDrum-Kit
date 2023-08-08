//button click
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonName=this.innerHTML;
    playSound(buttonName);
   buttonAnimation(buttonName);}
   );
   }
//keyboard click
   document.addEventListener("keypress",function(event){
      playSound(event.key);
      buttonAnimation(event.key);
   });
//Main function
function playSound(key){
   switch (key) {
      case "w":
         var tom1=new Audio("tom-1.mp3")
         tom1.play();
         break;
         case "a":
         var kick=new Audio("kick-bass.mp3")
         kick.play();
         break;
         case "s":
         var tom3=new Audio("tom-3.mp3")
         tom3.play();
         break;
         case "d":
         var snare=new Audio("snare.mp3")
         snare.play();
         break;
         case "j":
         var tom2=new Audio("tom-2.mp3")
         tom2.play();
         break;
         case "k":
         var crash=new Audio("crash.mp3")
         crash.play();
         break;
         case "l":
         var tom4=new Audio("tom-4.mp3")
         tom4.play();
         break;
      default: alert("Sorry ! Use Correct innerHTML .");
         
   }

}

function buttonAnimation(currentKey){
var activeButton=document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
   activeButton.classList.remove("pressed")
},100);
}