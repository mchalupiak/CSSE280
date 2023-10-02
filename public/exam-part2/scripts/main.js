const but = document.getElementById("change");
const hed = { owl: "Hedwig", img: "hedwig.png" };
const pig = { owl: "Pigwidgeon", img: "pigwidgeon.png" };
var isHedwig = true;
but.addEventListener("click", () => {
    const text = document.getElementById("name");
    var img = document.getElementById("img");
    if (isHedwig) {
        text.innerHTML = pig.owl;
        img.src = pig.img;
        isHedwig = false;
    } else {
        text.innerHTML = hed.owl;
        img.src = hed.img;
        isHedwig = true;
    }
});
