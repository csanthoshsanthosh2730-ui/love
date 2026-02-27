function goNext(){
let p1=document.getElementById("page1");
let p2=document.getElementById("page2");

p1.classList.add("hidden");
p2.classList.remove("hidden");
p2.classList.add("fade");
}

function checkCode(){
let input=document.getElementById("code").value.toLowerCase().trim();
if(input==="love"){
document.getElementById("letter").classList.remove("hidden");
}else{
alert("Wrong secret code 💔");
}
}

function showProposal(){
document.getElementById("proposal").classList.remove("hidden");
}


// play music
function yesLove(){

let screen = document.createElement("div");
screen.className = "royal-screen";

screen.innerHTML = `
<div id="fireworks-container"></div>

<div class="royal-box">
<h1>💍 She Said YES! 💍</h1>
<h2 class="glow-name" id="typing"></h2>
<p>Our Forever Begins Now 💞</p>
<button onclick="goGame1()">Continue 💖</button></div>
`;

document.body.appendChild(screen);

/* 🎆 Fireworks */
launchFireworks();

/* ✍️ Typing Effect */
let text="Santhosh ❤️ My Future Queen";
let i=0;
let typing=document.getElementById("typing");

let interval=setInterval(()=>{
typing.innerHTML+=text.charAt(i);
i++;
if(i>=text.length) clearInterval(interval);
},100);

/* 💕 Floating Hearts Generator */
setInterval(()=>{
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="💖";
heart.style.left=Math.random()*100+"%";
heart.style.fontSize=(15+Math.random()*25)+"px";
screen.appendChild(heart);

setTimeout(()=>{heart.remove();},6000);

},500);

/* ✨ Sparkle Generator */
setInterval(()=>{
let sparkle=document.createElement("div");
sparkle.className="sparkle";
sparkle.style.left=Math.random()*100+"%";
sparkle.style.top="100%";
screen.appendChild(sparkle);

setTimeout(()=>{sparkle.remove();},4000);

},300);

}

function askPermission(){

let newScreen = document.createElement("div");
newScreen.style.height="100vh";
newScreen.style.display="flex";
newScreen.style.flexDirection="column";
newScreen.style.justifyContent="center";
newScreen.style.alignItems="center";
newScreen.style.background="linear-gradient(135deg,#ff9ecb,#ff6fa5)";
newScreen.style.color="white";
newScreen.style.textAlign="center";

newScreen.innerHTML=`
<h2>Can I show our beautiful photo? 💕</h2>
<button onclick="showPhoto()">Yes 💖</button>
<button onclick="privateLove()">No 😌</button>
`;

document.body.innerHTML="";
document.body.appendChild(newScreen);

}


function showPhoto(){
window.location.href="photo.html";
}

function privateLove(){
document.body.innerHTML=`
<div style="height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#ff9ecb,#ff6fa5);color:white;text-align:center;">
<h2>It's okay… Our love is private & special 💞</h2>
</div>
`;
}
window.addEventListener("load", function() {
    setTimeout(function(){
        let loading = document.getElementById("loadingScreen");
        if(loading){
            loading.style.display = "none";
        }
    }, 2500);
});

setInterval(() => {
let heart = document.createElement("div");
heart.className = "heart";
heart.innerHTML = "💖";
heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (Math.random()*20 + 15) + "px";
heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
document.querySelector(".hearts").appendChild(heart);

setTimeout(() => {
heart.remove();
}, 7000);
}, 500);


// create stars
for(let i=0;i<60;i++){
let star=document.createElement("div");
star.className="star";
star.style.top=Math.random()*100+"vh";
star.style.left=Math.random()*100+"vw";
star.style.animationDuration=(Math.random()*2+1)+"s";
document.querySelector(".stars").appendChild(star);
}

let letterMessage = `Hi… 💌
I don’t know who you are.
I don’t know where you are.
I don’t even know how you look.

But one thing I know…
in my heart,
it’s always you. 💙

I don’t know when I’ll finally talk to you.
Maybe the days we actually speak
will be very few…

But the days I’ve imagined you,
thought about you,
and silently talked to you in my heart…
are already countless. ✨

Many people may have come into my life before…
but if there is one person
who should stay till the very end…
I wish it is you. 🤍

While writing this letter,
it’s hard to control my tears. 🥺
There is a pain inside me
that I can’t share with anyone else…
except you.

But I know one thing for sure…
The day you enter my life,
my smile will return too. 😊

However you are…
you are enough for me. 🌸

I promise you…
I will never leave you,
anywhere, anytime…
until my last breath
rests peacefully beside you. 💞

Love you so much…
Ammu 💙`;

function openLoveLetter() {
    let paper = document.getElementById("paper");
    let text = document.getElementById("letterText");

    paper.classList.add("open");
    text.innerHTML = "";
    typeLetter(text, letterMessage, 0);
}

function typeLetter(element, message, index) {
    if (index < message.length) {
        element.innerHTML += message.charAt(index);
        setTimeout(function() {
            typeLetter(element, message, index + 1);
        }, 30);
    }
}
function closeLoveLetter(){
    let paper = document.getElementById("paper");
    let text = document.getElementById("letterText");

    paper.classList.remove("open");
    text.innerHTML="";
}
function launchFireworks(){
    const container = document.getElementById("fireworks-container");

    for(let i=0;i<30;i++){
        let firework = document.createElement("div");
        firework.classList.add("firework");

        firework.style.background = `hsl(${Math.random()*360},100%,50%)`;
        firework.style.left = "50%";
        firework.style.top = "50%";

        firework.style.setProperty("--x",(Math.random()*400-200)+"px");
        firework.style.setProperty("--y",(Math.random()*400-200)+"px");

        container.appendChild(firework);

        setTimeout(()=>{ firework.remove(); },1000);
    }
}
function createSparkles() {
let container = document.querySelector(".celebration-screen");

setInterval(() => {
let sparkle = document.createElement("div");
sparkle.innerHTML = "✨";
sparkle.style.position = "absolute";
sparkle.style.left = Math.random()*100 + "%";
sparkle.style.top = Math.random()*100 + "%";
sparkle.style.fontSize = "20px";
sparkle.style.opacity = "0.8";
sparkle.style.animation = "fadeOut 2s forwards";

container.appendChild(sparkle);

setTimeout(()=> sparkle.remove(),2000);
},500);
}
function testMusic(){
let a = new Audio("love.mp3");
a.play();
}
setInterval(()=>{
let heart=document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="💖";
heart.style.left=Math.random()*100+"vw";
document.body.appendChild(heart);

setTimeout(()=>heart.remove(),5000);
},800);

function goGame1(){
  window.location.href = "game1.html";
}
let score = 0;
let hearts = document.querySelectorAll(".heart");

function moveHeart(heart){
heart.style.top = Math.random()*80 + "vh";
heart.style.left = Math.random()*80 + "vw";
}

// move all hearts initially
hearts.forEach(h => moveHeart(h));

// click event for each heart
hearts.forEach(heart => {
heart.onclick = function(){
score++;
document.getElementById("score").innerText="💖 Score: "+score;

moveHeart(this);

// little animation
this.style.transform="scale(1.5)";
setTimeout(()=>{
this.style.transform="scale(1)";
},200);

if(score>=3){
setTimeout(()=>{
alert("You caught all my love 💕");
window.location.href="game2.html";
},300);
}
}
});

// move continuously
setInterval(()=>{
hearts.forEach(h => moveHeart(h));
},1000);