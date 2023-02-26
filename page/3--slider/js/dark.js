const back = document.getElementsByTagName("body");
const header = document.getElementById("spechialisesheader");
const showmore = document.getElementById("showmore");
const slides = document.getElementsByClassName("swiper-slide");
const gcovers = document.getElementsByClassName("gcover");
const sliderphotos = document.getElementsByClassName("sliderphoto");
const prices = document.getElementsByClassName("price");

function darkmodetoggle()
{ 
    back[0].classList.toggle("dark");
    header.classList.toggle("darkheadertxt");
    showmore.classList.toggle("darkshowmore");
    for (i of slides) {
        i.classList.toggle("dark");
    }
    for (i of gcovers) { 
        i.classList.toggle("darkgcover")
    }
    for (i of sliderphotos)
    {
        i.classList.toggle("darkbrightness");
    }
    for (i of prices) { 
        i.classList.toggle("darkprice");
    }
}