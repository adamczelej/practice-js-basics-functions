

function showTime(){
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    
}
setInterval(showTime, 1000);