let getInput = () => {
    let hours = parseInt(prompt("Enter the countdown time in hours :-"));
    let minutes = parseInt(prompt("Enter the countdown time in minutes :-")); //value get user
    let seconds = parseInt(prompt("Enter the countdown time in seconds :-"));
    return hours * 3600 + minutes * 60 + seconds;
}
const min = document.getElementById("mi");
const sec = document.getElementById("se");    //dom eliment
const hou = document.getElementById("hr");

let time = getInput(); //call promt value
let interval = null;
let  formatTime = (value) => {
    return value < 10 ? `0${value}` : value; //01,02...09 time 
}
function updateTime() {
    if (time <= 0) {
        clearInterval(interval); //time clear
        hou.innerHTML = min.innerHTML = sec.innerHTML = "00"; //time end 00 number print
        return;
    }
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600)/60);
    const seconds = time % 60;
    
    hou.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(minutes); //print time
    sec.innerHTML = formatTime(seconds);
    time--; //time countdown
}
const  start = () => {
    if (!interval) interval = setInterval(updateTime, 1000); //start
}
const stop = () => {
    clearInterval(interval); //stop
    interval = null;
}
const reset = ()=> {
    clearInterval(interval);
    interval = null;
    time = getInput(); // reset
    updateTime();
}