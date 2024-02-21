let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    h3.innerText = `color: ${colorGen()}`;
    let colorBox = document.querySelector(".color-box");
    colorBox.style.height= "20.5rem";
    colorBox.style.width= "30rem";
    colorBox.style.border= "1px solid black";
    colorBox.style.borderRadius= "18px";
    colorBox.style.transition= "all 0.3s ease";
    colorBox.style.backgroundColor = colorGen();
})

function colorGen() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}