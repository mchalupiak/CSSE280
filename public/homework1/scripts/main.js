let counter = 0;
let colorText = "Green"

main = function() {
     document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        if (counter > 0) {
            counter = counter - 1;
        }
         updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };
    document.querySelector("#blue").onclick = (event) => {
        console.log("blue button");
        colorText = "Blue";
        updateView();
    };
    document.querySelector("#green").onclick = (event) => {
        console.log("green button");
        colorText = "Green";
        updateView();
    };
    document.querySelector("#red").onclick = (event) => {
        console.log("red button");
        colorText = "Red";
        updateView();
    };
    document.querySelector("#purple").onclick = (event) => {
        console.log("purple button");
        colorText = "Purple";
        updateView();
    };
}

updateView = function() {
    document.querySelector("#counterText").innerHTML = `${counter}`;
    document.querySelector("#colorBox").innerHTML = `${colorText}`;
    document.getElementById("colorBox").style.backgroundColor = colorText.toLowerCase();
}

main();
