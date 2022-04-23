// My First JS Project
// [1] Info
console.log("Welcome to VectorBass");
// [2] Variables
let play = document.getElementById('masterplay');
let progress = document.getElementById('myrange');
let like = document.getElementsByClassName('believe');
let like1 = document.getElementsByClassName('warrior');
let like2 = document.getElementsByClassName('enemy');
let like3 = document.getElementsByClassName('natural');
let like4 = document.getElementsByClassName('bones');
let like5 = document.getElementsByClassName('polozen');
let like6 = document.getElementsByClassName('mama');
let like7 = document.getElementsByClassName('fearless');
let like8 = document.getElementsByClassName('riddim');
let like9 = document.getElementsByClassName('sahara');
let player = document.getElementById('player')
// [3] Songs List
let audio = new Audio('bones.mp3');
let audio1 = new Audio('believer.mp3');
let audio2 = new Audio('enemy.mp3');
let audio3 = new Audio('fearless.mp3');
let audio4 = new Audio('heymama.mp3');
let audio5 = new Audio('magenta riddim.mp3');
let audio6 = new Audio('natural.mp3');
let audio7 = new Audio('polozhenie.mp3');
let audio8 = new Audio('sahara.mp3');
let audio9 = new Audio('warriors.mp3');
// [4] Pause/Play
// By Default set to Bones.mp3
play.addEventListener('click', ()=>{
    if (audio.paused || audio.currentTime<=0) {
        audio.play();
    play.classList.remove('bi-play-fill')
    play.classList.add('bi-pause-fill')
    }
    else{
        audio.pause();
    play.classList.remove('bi-pause-fill')
    play.classList.add('bi-play-fill')
    }
});
// [5] Percentage of range
audio.addEventListener('timeupdate', ()=>{ 
    myprogress = parseInt((audio.currentTime/audio.duration)* 100); 
    progress.value = myprogress;
})
// [6] Seek the audio
progress.addEventListener('change', ()=>{
    audio.currentTime = progress.value * audio.duration/100;
})
// [7] Like the song
// Believer
believe.addEventListener('click', ()=>{
    believe.classList.remove('bi-heart')
    believe.classList.add('bi-heart-fill')
});
// Warriors
warrior.addEventListener('click', ()=>{
    warrior.classList.remove('bi-heart')
    warrior.classList.add('bi-heart-fill')
});
// Enemy
enemy.addEventListener('click', ()=>{
    enemy.classList.remove('bi-heart')
    enemy.classList.add('bi-heart-fill')
});
// Natural
natural.addEventListener('click', ()=>{
    natural.classList.remove('bi-heart')
    natural.classList.add('bi-heart-fill')
});
// Bones
bones.addEventListener('click', ()=>{
    bones.classList.remove('bi-heart')
    bones.classList.add('bi-heart-fill')
});
// Polozhenie
polozen.addEventListener('click', ()=>{
    polozen.classList.remove('bi-heart')
    polozen.classList.add('bi-heart-fill')
});
// Hey Mama
mama.addEventListener('click', ()=>{
    mama.classList.remove('bi-heart')
    mama.classList.add('bi-heart-fill')
});
// Fearless
fearless.addEventListener('click', ()=>{
    fearless.classList.remove('bi-heart')
    fearless.classList.add('bi-heart-fill')
});
// Magenta Riddim
riddim.addEventListener('click', ()=>{
    riddim.classList.remove('bi-heart')
    riddim.classList.add('bi-heart-fill')
});
// Sahara
sahara.addEventListener('click', ()=>{
    sahara.classList.remove('bi-heart')
    sahara.classList.add('bi-heart-fill')
});

// [8] Play Specific Song
// Believer
playbel.addEventListener('click', ()=>{
    if (audio1.paused || audio1.currentTime<=0) {
        audio1.play();
    playbel.classList.remove('bi-play-fill')
    playbel.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio1.pause();
    playbel.classList.remove('bi-pause-fill')
    playbel.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// Warriors
playwar.addEventListener('click', ()=>{
    if (audio9.paused || audio9.currentTime<=0) {
        audio9.play();
    playwar.classList.remove('bi-play-fill')
    playwar.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio9.pause();
    playwar.classList.remove('bi-pause-fill')
    playwar.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// Enemy
playenemy.addEventListener('click', ()=>{
    if (audio2.paused || audio2.currentTime<=0) {
        audio2.play();
    playenemy.classList.remove('bi-play-fill')
    playenemy.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio2.pause();
    playenemy.classList.remove('bi-pause-fill')
    playenemy.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// Natural
playnatur.addEventListener('click', ()=>{
    if (audio6.paused || audio6.currentTime<=0) {
        audio6.play();
    playnatur.classList.remove('bi-play-fill')
    playnatur.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio6.pause();
    playnatur.classList.remove('bi-pause-fill')
    playnatur.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// Bones
playbones.addEventListener('click', ()=>{
    if (audio.paused || audio.currentTime<=0) {
        audio.play();
    playbones.classList.remove('bi-play-fill')
    playbones.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio.pause();
    playbones.classList.remove('bi-pause-fill')
    playbones.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// Polozhenie
playpolo.addEventListener('click', ()=>{
    if (audio7.paused || audio7.currentTime<=0) {
        audio7.play();
    playpolo.classList.remove('bi-play-fill')
    playpolo.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio7.pause();
    playpolo.classList.remove('bi-pause-fill')
    playpolo.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// HeyMama
playmama.addEventListener('click', ()=>{
    if (audio4.paused || audio4.currentTime<=0) {
        audio4.play();
    playmama.classList.remove('bi-play-fill')
    playmama.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio4.pause();
    playmama.classList.remove('bi-pause-fill')
    playmama.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// Fearless
playfear.addEventListener('click', ()=>{
    if (audio3.paused || audio3.currentTime<=0) {
        audio3.play();
    playfear.classList.remove('bi-play-fill')
    playfear.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio3.pause();
    playfear.classList.remove('bi-pause-fill')
    playfear.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// MagentaRiddim
playriddim.addEventListener('click', ()=>{
    if (audio5.paused || audio5.currentTime<=0) {
        audio5.play();
    playriddim.classList.remove('bi-play-fill')
    playriddim.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio5.pause();
    playriddim.classList.remove('bi-pause-fill')
    playriddim.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
// Sahara
playsahara.addEventListener('click', ()=>{
    if (audio8.paused || audio8.currentTime<=0) {
        audio8.play();
    playsahara.classList.remove('bi-play-fill')
    playsahara.classList.add('bi-pause-fill')
    player.style.visibility = "hidden";
    }
    else{
        audio8.pause();
    playsahara.classList.remove('bi-pause-fill')
    playsahara.classList.add('bi-play-fill')
    player.style.visibility = "visible";
    }
});
