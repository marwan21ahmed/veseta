function dark(){
    var dach = document.getElementsByClassName("dach");
    for(var s=0;s<dach.length;s++){
        dach[s].setAttribute("src", "New folder/Picture20.png");
    }
    var para=document.getElementsByTagName("a");
    for (var w = 0; w < para.length; w++) {
        para[w].style.backgroundColor ="rgb(231, 229, 229)";
        para[w].style.color = "rgb(163, 163, 163)";
    }
    document.getElementById("lock").setAttribute("src", "New folder (2)/Picture19.svg")
}

