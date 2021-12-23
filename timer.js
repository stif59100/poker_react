

function onSubmit(event){
    event.preventDefault()
    
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var x = prompt('Saisissez le temps de la blinde')
    var Minutes = 60 * x,
        display = document.querySelector('#time');
    startTimer(Minutes, display);
    console.log(startTimer)
};