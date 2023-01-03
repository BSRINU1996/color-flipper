const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color")
btn.addEventListener("click", function () {
    let hexcode = "#";
    //#f15025
    for (let i = 0; i < 6; i++) {
        // let randomNumber = randomNum();
        // console.log(randomNumber);
        hexcode = hexcode + hex[getrandomNum()];
        console.log(hexcode);
    }
    color.textContent = hexcode;
    document.body.style.backgroundColor = hexcode;
})

function getrandomNum() {
    return Math.floor(Math.random() * hex.length);
} 