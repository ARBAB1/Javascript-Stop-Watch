var interval;
var msec = 0 ;
var sec = 0 ;
var min = 0;
var msecHeading = document.getElementById("msec");
var secHeading = document.getElementById("sec");
var minHeading = document.getElementById("min");
var start = document.getElementById("start");

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
     if(msec==100){
         sec++;
         secHeading.innerHTML = sec;
         msec = 0;
         if(sec==60){
             min++;
             minHeading.innerHTML=min;
             sec = 0;
         }
     }



}
function startBtn(){
    interval = setInterval(timer,10);
    start.disabled =true;
}
function stopBtn(){
        clearInterval(interval);
        start.disabled = false;

}
function resetBtn(){
    clearInterval(interval);
    msecHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    minHeading.innerHTML =0;
    start.disabled = false;


}