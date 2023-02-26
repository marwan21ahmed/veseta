const stepscon = document.getElementById("stepsback");
const stepsheader = document.getElementById("stepsheader");
const steps = document.getElementsByClassName("stepbranch");
const securityicon = document.getElementById("securityicon");
const securitybranch = document.getElementById("securitybranch");
const styleybottom = document.getElementById("styleybottom");

function dark() {
    stepscon.classList.toggle("darkbackground");
    stepsheader.classList.toggle("darkstepsheader");
    stepsheader.classList.toggle("darkstepsheadertxt");
    for (var i = 0; i < steps.length; i++) {
        steps[i].children[0].classList.toggle("darkstepbranch");
        steps[i].children[0].classList.toggle("darksteptxt");
    }
    securityicon.classList.toggle("darksecurityicon");
    securitybranch.classList.toggle("darksecuritybranch");
    securitybranch.classList.toggle("darksecuritytxt");
    styleybottom.classList.toggle("darkstyleybottom");
}