
document.addEventListener('keydown', function(evt) {
    jump();
});


var character = document.getElementById("dino");
var block = document.getElementById("block");
var counter = 0;


function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 300);
}


var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";


        alert("Fim de Jogo, total de saltos: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
        reset();
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);



var sec=0
var mpont=0
function start(){
    setInterval(timer,1000)
}
function timer(){
    sec++
    document.getElementById('pontos').innerText="Pontos: "+sec*100
   // document.getElementById('record').innerText="Recorde: "+mpont*100
}


function reset(){

    if(mpont<sec){
        mpont=sec
        document.getElementById('record').innerText="Recorde: "+mpont*100
    }
    else if (mpont>=sec){
        
    }
    sec=0
}

start();