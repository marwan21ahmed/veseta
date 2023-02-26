function dark() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("rside").style.backgroundColor ="rgb(173, 169, 169)";
    var he=document.getElementsByTagName("h5");
    for(var i=0;i<he.length;i++){
        he[i].style.color ="rgb(83, 82, 84)";
    }
    var list = document.getElementsByTagName("li");
    for (var w = 0; w < list.length; w++) {
        list[w].style.color = "white";
    }
    var a = document.getElementsByTagName("a");
    console.log(a);
    for (var s = 0; s < a.length; s++) {
        a[s].style.color = "white";
    }
    document.getElementById("foot").style.backgroundColor="white";
}