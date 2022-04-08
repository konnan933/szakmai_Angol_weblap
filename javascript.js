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
var toltes = function() {
    $("hatter").attr("style", "background-image:url('" + kepek[i] + "')");
};

function init(){
    toltes;
    kepBetoltes();

}
function kepBetoltes(){
    ID("hatter").style.backgroundImage = "url("+kepek[i]+")";
    setInterval(function(){
    ID("hatter").style.opacity="0"
    ID("hatter").style.transitionDuration="1000ms"
    ID("hatter").style.backgroundImage = "url("+kepek[i]+")";
    ID("hatter").style.opacity="1"
    ID("hatter").style.transitionDuration="1000ms"
    //https://stackoverflow.com/questions/3489270/wait-until-images-in-background-css-are-loaded
    console.log(i);
    if (i < kepek.length - 1) {
        i++;
    } else {
        i = 0;
    }
    },3000)    
}
