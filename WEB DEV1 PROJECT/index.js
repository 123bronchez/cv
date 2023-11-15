alert("HELLO! ARE YOU READY TO PLAY...CLICK OK TO START!!!!!!!!");
var ran1=Math.floor(Math.random() * 6)+1;
var randice="images/dice " + ran1 +".png";
document.querySelectorAll("img")[0].setAttribute("src", randice);
var ran2=Math.floor(Math.random() * 6)+1;
var randice2="images/dice " + ran2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randice2);
if (ran1>ran2) {
  document.querySelector("h2s").innerHTML="&#128681; PLAYER1 WINS!";
}
else if (ran2>ran1) {
    document.querySelector("h2").innerHTML="PLAYER2 WINS! &#128681;";
}
else{
    document.querySelector("h2").innerHTML=" &#128681; ITS A DRAW! &#128681;";
}
