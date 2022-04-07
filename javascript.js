window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function QS(elem){
    return document.querySelector(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}
function CLASS(elem){
    return document.getElementsByClassName
}
var i = 0;
var kepek = ['kepek/kep_1.jpg','kepek/kep_2.jpg','kepek/kep_3.jpg','kepek/kep_4.jpg','kepek/kep_5.jpg'];


function init(){
    ID("hatter").style.backgroundImage = "url("+kepek[i]+")";
    setInterval(function(){
    ID("hatter").style.backgroundImage = "url("+kepek[i]+")";
    console.log(i);
    if (i < kepek.length - 1) {
        i++;
    } else {
        i = 0;
    }
    },3000)    
}

