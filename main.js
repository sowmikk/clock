const sh = document.querySelector(".sec_hand");
const mh = document.querySelector(".min_hand");
const hh = document.querySelector(".hour_hand");

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function time() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegree = (seconds / 60) * 360;
    sh.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = now.getMinutes();
    const minuteDegree = (minutes / 60) * 360;
    mh.style.transform = `rotate(${minuteDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = (hours / 12) * 360;
    hh.style.transform = `rotate(${hourDegree}deg)`;





    if (seconds < 10) {
        sec.innerHTML = "0" + seconds;
    } else {
        sec.innerHTML = seconds;
    }

    if (minutes < 10) {
        min.innerHTML = "0" + minutes;
    } else {
        min.innerHTML = minutes;
    }

    if (hours < 10) {
        hour.innerHTML = "0" + hours;
    } else {
        hour.innerHTML = hours;
    }


    console.log(seconds);
}

setInterval(time, 1000);