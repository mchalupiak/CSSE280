let counter = 0;

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
}

updateView = function() {
    document.querySelector("#counterText").innerHTML = `Count = ${counter}`;
}

main();