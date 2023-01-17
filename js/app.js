const button = document.getElementById('btn');
const container  = document.getElementById('container');
const color = document.getElementById('container__color');

button.addEventListener('click', () => {
    // console.log(getRandomRGB());
    container.style.backgroundColor = getRandomRGB()
    color.textContent = getRandomRGB()
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomColor() {
    return getRandomInt(256);
}
function getRandomRGB() {
    return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}