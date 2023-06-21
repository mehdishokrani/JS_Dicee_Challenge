var randomNumber1 = Math.floor(Math.random()*6+1);
document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src",`./images/dice${randomNumber1}.png`);
var randomNumber2 = Math.floor(Math.random()*6+1);
document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src",`./images/dice${randomNumber2}.png`);
if(randomNumber1>randomNumber2){
    document.querySelector("body > div > h1").textContent = "Player1 Win!!!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("body > div > h1").textContent = "PLAYER 2 Win!!!";
}
else
    document.querySelector("body > div > h1").textContent = "Draw!!!";