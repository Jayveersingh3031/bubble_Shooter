var timer=60;
var hitrn=0;
var score=0;
function makeBubble(){
    var clutter="";

    for(var i=1;i<109;i++){
        rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".container-btm").innerHTML=clutter;
}

makeBubble();

function runtimer(){
   var timeint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector(".container-btm").innerHTML="<h1>Game Over</h1>";
        }
    },1000)
}

runtimer();

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

getNewHit();

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector(".container-btm").addEventListener("click",function(dets){
    var clickednum =Number(dets.target.textContent);
    if(clickednum==hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})