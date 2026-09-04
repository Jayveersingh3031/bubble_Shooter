var timer=60;
var score=0;
var hit;

function Showscore(){
    score=score+10;
    document.querySelector("#score").textContent=score;
}

function Nhit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hit;
}

function Ntimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            document.querySelector("#game").innerHTML=`<h2>Game Over<br>&nbsp&nbspscore=${score}</h2>`;
        }
    },1000)
}

function show(){
    var clutter="";
    for(var i=0;i<90;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`
        <div id="bubble">${rn}</div>
        `
    }
    document.querySelector("#game").innerHTML=clutter;
}

document.querySelector("#game").addEventListener("click",function(dets){
    
    if(Number(dets.target.textContent)===hit){
        Nhit();
        show();
        Showscore();
    }
})

show();
Ntimer();
Nhit();
