const text =
"Main chahta hoon ki tum is website ke har page ko dekho... kyunki har page mere dil ki baat hai ❤️";

let i = 0;

function typeText(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeText,50);

}

}

typeText();

const hearts =
document.getElementById("hearts");

for(let i=0;i<50;i++){

let heart =
document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "%";

heart.style.fontSize =
(15 + Math.random()*35)+"px";

heart.style.animationDuration =
(5 + Math.random()*10)+"s";

hearts.appendChild(heart);

}
