var seconds = "00";
var tens = "00";
var outputseconds = document.getElementById('seconds');
var outputtens = document.getElementById('tens');
var btnstrt = document.getElementById('str');
var btnstp = document.getElementById('stp');
var btnres = document.getElementById('res');
var Interval;

btnstrt.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

btnstp.addEventListener('click', () => {
    clearInterval(Interval);
});

btnres.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    outputseconds.innerHTML = seconds;
    outputtens.innerHTML = tens;
});

function startTime() {
    tens++;
    if (tens <= 9) {
        outputtens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        outputtens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        outputseconds.innerHTML = "0" + seconds;
        tens = 0;
        outputtens.innerHTML = "0" + tens;
    }
    if (seconds > 9) {
        outputseconds.innerHTML = seconds;
    }
}
