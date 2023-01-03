const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const clickMeBtn = document.getElementById("btn");
const color = document.querySelector('.color');
clickMeBtn.addEventListener('click', function () {
    const randomNumber = getRandomNum();
    console.log(Math.floor(randomNumber * 4));
    let indexNum = Math.floor(randomNumber * 4);
    document.body.style.backgroundColor = colors[indexNum];
    //get a random number betweeen 0 and 3 becoz we have here 4 colors in the 'colors' array.
    color.textContent = colors[indexNum];
});

function getRandomNum() {
    return Math.random();
}