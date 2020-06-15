// Illustrations
var nature__sky = document.getElementById("nature__sky");
var nature__sun = document.getElementById("nature__sun");
var mountain__far = document.getElementById("mountain__far");
var mountain__close = document.getElementById("mountain__close");
var nature__river = document.getElementById("nature__river");
var hill__1 = document.getElementById("hill__1");
var hill__2 = document.getElementById("hill__2");
var hill__3 = document.getElementById("hill__3");
var bush__1 = document.getElementById("bush__1");
var bush__2 = document.getElementById("bush__2");
var filler__bush = document.getElementById("filler__bush");
var leaf__left = document.getElementById("leaf__left");
var leaf__right = document.getElementById("leaf__right");
//test
var test = document.getElementById("test");
// Scrolling 
document.addEventListener("scroll", function(e) {
    var value = window.scrollY;

    nature__sky.style.top = value * 0.5 + "px";
    nature__sun.style.left = -value * 0.4 + "px";
    //highness
    mountain__far.style.top = value * 0.9 + "px";
    mountain__close.style.top = value * 0.8 + "px";
    nature__river.style.top = value * 0.75 + "px";
    //hills
    hill__1.style.top = value * 0.7 + "px";
    hill__2.style.top = value * 0.65 + "px";
    hill__3.style.top = value * 0.62 + "px";
    //bushes
    bush__1.style.top = value * 0.48 + "px";
    bush__2.style.top = value * 0.43 + "px";
    filler__bush.style.top = value * 0.42 + "px";
    //curtain leafs
    leaf__left.style.top = value * 0.2 + "px";
    leaf__right.style.top = value * 0.2 + "px";

    test.style.top = value * 0.3 + "px";



})