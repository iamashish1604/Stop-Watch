var sec = 0 , min = 0 ,hr = 0 , temp ;
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let stopBtn = document.getElementById('stop');
let displayTime = document.getElementById('displayTime');
function timestarts(){
    sec++;
    if(sec>59){
        min++;
        sec=0;
    }
    if(min>59){
        hr++;
        min=0; sec=0;
    }
    if(sec<10){
        sec= '0'+ parseInt(sec);
    }
    if(min<10){
        min='0'+parseInt(min);
    }
    if(hr<10){
        hr='0'+parseInt(hr);
    }
     displayTime.innerText=hr + ":" + min + ":" + sec ;
}
function start(){
    temp= setInterval(timestarts, 1000);
    startBtn.disabled= true;
    pauseBtn.disabled= false;
    stopBtn.disabled= false;
    
}
function pause(){
    if(pauseBtn.innerText == "Pause"){
        pauseBtn.innerText= "Continue";
        clearInterval(temp);
    }else{
        pauseBtn.innerText= "Pause";
        start();
    }
}
function stop(){
    startBtn.disabled= false;
    stopBtn.disabled= true;
    pauseBtn.disabled= true;
    pauseBtn.innerText= "Pause";
    clearInterval(temp);
    sec=0 ; min=0; hr=0;
    displayTime.innerText= "00:00:00"
}
