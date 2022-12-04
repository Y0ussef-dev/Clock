const hr = document.querySelector(".hour")
const min = document.querySelector(".minute")
const sec = document.querySelector(".second")

function setDate() {
    const now = new Date();

    const getSec = now.getSeconds();
    const getMin = now.getMinutes();
    const getHr = now.getHours();

    const secDegree = (getSec / 60) * 360;
    const minDegree = (getMin / 60) * 360;
    const hrDegree = (getHr / 24) * 360;

    hr.style.transform = 'rotate(${hrDegree}deg';
    min.style.transform = 'rotate(${minDegree}deg';
    sec.style.transform = 'rotate(${secDegree}deg';
} 

setInterval(setDate, 1000);
console.log(setDate);