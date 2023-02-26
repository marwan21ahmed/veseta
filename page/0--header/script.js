function test(){
    var setattrbute = document.getElementById("login");
    setattrbute.setAttribute("src","New folder/Picture5.png");

}
var classs = document.getElementById("test").className;


function dark(){
    document.getElementById("nav").style.backgroundColor="black";
    document.body.style.color="white";
    var fpic=document.getElementById("fpic");
    fpic.setAttribute("src", "New folder/Picture12.png");
    var spic = document.getElementById("spic");
    spic.setAttribute("src", "New folder/Picture11.png");
    var lpic = document.getElementById("lpic");
    lpic.setAttribute("src", "New folder/Picture20.png", "width=20px", "height=100px");
    var y=document.getElementsByTagName("p");
    for(var i=0;i<y.length;i++){
        y[i].style.color = "white";
        y[i].style.backgroundColor = "grey";
    }
    document.querySelector("#nav").style.backgroundColor ="#595959";
    var link = document.getElementsByClassName("nav-link");
    for(var s=0;s<link.length;s++){
        link[s].style.color="white";
    }

 
}

function change(){
    var check = document.getElementsByName('fav_language');
    var choice;
    for(var i=0;i<check.length;i++){
        if(check[i].checked){
            choice=check[i].value;
        }
    }
    console.log(choice);
    var num = parseInt(document.getElementById("number").value);
    switch(choice){
        case "eg":var result=num/15;
        document.getElementById("result").innerHTML=result+" $";
        console.log(result);
        break;
        case "dollar": var result = num * 15;
            document.getElementById("result").innerText = result + " pond";
            console.log(result);
        break;
    }
}
function displayRadioValue() {
    var ele = document.getElementsByName('gender');
    var choice;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            choice=ele[i];
            
    }
    console.log(choice.value);
    switch (choice) {
        case "Male":/* var result = num / 15;
            document.getElementById("result").innerHTML = result + " $";
            console.log(result);*/
            document.getElementById("result").innerHTML
                = "Gender: " + choice;
            break;
        case "$":/* var result = num * 15;
            document.getElementById("result").innerText = result + " $";
            console.log(result);*/
            document.getElementById("result").innerHTML
                = "Gender: " + ele[i].value;
            break;
    }
}
let names = ['ahmed', 'karima', 'hamza', 'soad'];
let modifiedNames = names.forEach(name => name+99);
console.log(modifiedNames);