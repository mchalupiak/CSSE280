document.getElementById("demo").innerHTML = "Hello JavaScript";

setTimeout(() => {
    document.getElementById("demo").style.fontSize = "35px";
}, 4000);

setTimeout(() => {
    document.getElementById("demo").style.display = "none";
}, 8000);

setTimeout(() => {
    document.getElementById("demo").style.display = "block";
}, 12000);

setTimeout(() => {
    document.getElementById("demo").innerHTML = "Hello Dolly.";
}, 16000);

setTimeout(() => {
    let car = "Fun car";
    car = car + " hello";
    document.getElementById("demo").innerHTML = car;
}, 20000);

setTimeout(() => {
    document.getElementById("demo").innerHTML = 5 + 6 + 7;
}, 24000);

setTimeout(() => {
    // not executed
    //document.getElementById("demo").style.display = "none";
}, 28000);

setTimeout(() => {
    const fun = "fun times";
    fun = "happy times";
    document.getElementById("demo").innerHTML = fun;
}, 32000);

setTimeout(() => {
    const car = {type:"Fiat", model:"500", color:"white"};
    document.getElementById("demo").innerHTML = car.model;
}, 36000);

setTimeout(() => {
    document.getElementById("demo").innerHTML = "Incrementing number: " + (5 + 1);
}, 40000);

setTimeout(() => {
    document.getElementById("demo").innerHTML = "Number to a power: " + (5 ** 2);
}, 44000);

setTimeout(() => {
    document.getElementById("demo").innerHTML = "Typeof 6: " + typeof(6);
}, 48000);

setTimeout(() => {
    const car = {type:"Fiat", model:"500", color:"white"};
    document.getElementById("demo").innerHTML = car;
}, 52000);

function myFunction() {
    alert("Button Pressed!");
}
