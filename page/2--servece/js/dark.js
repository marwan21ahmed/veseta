const back = document.getElementById("back");
const topstyle1 = document.getElementById("topstyle1");
const topstyle2 = document.getElementById("topstyle2");
const bottomstyle2 = document.getElementById("bottomstyle2");
const bottomstyle1 = document.getElementById("bottomstyle1");
const content = document.getElementById("content");
const speheader = document.getElementById("speheader");
const speaddtional = document.getElementById("speaddtional");
const spephoto = document.getElementsByClassName("aboutspeimg");
const spetext = document.getElementsByClassName("aboutdoctorstxt");

function dark() { 
    back.classList.toggle("darkback");
    topstyle1.classList.toggle("darktopstyle1");
    topstyle2.classList.toggle("darktopstyle2");
    bottomstyle2.classList.toggle("darkbottomstyle2");
    bottomstyle1.classList.toggle("darkbottomstyle1");
    content.classList.toggle("darkback");
    speheader.classList.toggle("darkspeheader");
    speaddtional.classList.toggle("darkspetext");
    for (var i = 0; i < spephoto.length; i++) { 
        spephoto[i].classList.toggle("darkphoto");
        spetext[i].classList.toggle("darkspetext");
    }
}