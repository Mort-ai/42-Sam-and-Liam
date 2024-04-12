function randomIntFromInterval(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColor() {
    const r = randomIntFromInterval(0, 255);
    const g = randomIntFromInterval(0, 255);
    const b = randomIntFromInterval(0, 255);

    return `rgb(${r},${g},${b})`;
}

function clicked() {
    const c = generateColor();

    document.body.style.backgroundColor = c;
}

window.onload = function() {
    const btn = document.querySelector('.changeColor')

    btn.onclick = clicked;
}