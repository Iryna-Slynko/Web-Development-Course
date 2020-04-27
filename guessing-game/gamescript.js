let runningStatus=false;
let count=0;
let index=0;

function startGame(){
    index=Math.floor(Math.random()*3)
    runningStatus=true
    count=0
    document.getElementById("box0").innerHTML = "";
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("msg").innerHTML = "Click on the boxes to find the hidden picture";
}

function handleGuess(num){
    if (runningStatus){
        if (num==index)
        {
            count+=1
            document.getElementById("box"+num).innerHTML="<img src='images/6.jpg'>";
            document.getElementById("msg").innerHTML = "Yay! You found the spider on guess "+count+"!";
            runningStatus=false;
    }
    else{
        document.getElementById("box"+num).innerHTML="Not here!";
        count+=1
    }

}
}