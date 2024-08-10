let getInput = () => {
    let year = parseInt(prompt("Enter the countdown time in Year :-"));
    let week = parseInt(prompt("Enter the countdown time in Week :-"));
    let days = parseInt(prompt("Enter the countdown time in day :-"));
    let hours = parseInt(prompt("Enter the countdown time in hours :-"));
    let minutes = parseInt(prompt("Enter the countdown time in minutes :-")); //value get user
    let seconds = parseInt(prompt("Enter the countdown time in seconds :-"));
    const secYear = 365 * 24 * 3600;
    return (year * secYear) + (week * 7 * 24 * 3600) + (days * 24 * 3600) + (hours * 3600) + (minutes * 60) + (seconds);
}
const min = document.getElementById("mi");
const sec = document.getElementById("se");    
const hou = document.getElementById("hr");    //dom eliment
const day = document.getElementById("da");
const wee = document.getElementById("we");
const yea = document.getElementById("ye");

let time = getInput(); //call promt value
let interval = null;
let formatTime = (value) => {
    return value < 10 ? `0${value}` : value; //01,02...09 time 
}
function updateTime() {
    if (time <= 0) {
        clearInterval(interval); //time clear
        wee.innerHTML = day.innerHTML = hou.innerHTML = min.innerHTML = sec.innerHTML = "00"; //time end 00 number print
        return;
    }
    const secondsInYear = 365 * 24 * 3600;
    const yearLeft = Math.floor(time / secondsInYear);
    const weekLeft = Math.floor((time % secondsInYear) / (7 * 24 * 3600));
    const daysleft = Math.floor((time % (7 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    
    yea.innerHTML = formatTime(yearLeft);
    wee.innerHTML = formatTime(weekLeft)
    day.innerHTML = formatTime(daysleft);
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