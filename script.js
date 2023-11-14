function flipbtn(){
    const coinimg=document.getElementById("coinimg");
    const resultElement=document.getElementById("result");
    const res=Math.floor(Math.random()*2);
    let resultText="";
    if(res===0){
        coinimg.src="head.png";
        coinimg.alt="Heads";
        resultText="Heads";
    }else{
        coinimg.src="tails.png";
        coinimg.alt="Tails";
        resultText="Tails";
    }
    coinimg.classList.add("rotate");
    resultElement.textContent = "Your result is: "+resultText;
    setTimeout(() => {
        coinimg.classList.remove("rotate");
    }, 500);
}