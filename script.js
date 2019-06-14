var myBody = document.body
myBody.style.margin = "0px"
myBody.style.padding = "0px"


// CONTAINER

var myContainer = document.getElementById("container");

myContainer.style.backgroundColor = "#F5F5F5";
myContainer.style.width = "100%";
myContainer.style.height = "600px";




//MY BG 

var myBg = document.getElementById("myBg");
myBg.style.paddingTop = "90px"
myBg.style.width = "100%";
myBg.style.height = "100px";
myBg.style.backgroundColor = "green";




// HEADER

var myHeader = document.getElementById("header");
myHeader.style.margin = "auto"
myHeader.style.width = "80%";
myHeader.style.height = "100px";
myHeader.style.backgroundColor = "white";
myHeader.style.display = "flex";
myHeader.style.alignItems = "center";
myHeader.style.justifyContent = "space-around"
 


// MY OPTIONS  

var myOption = document.getElementById("option");

myOption.style.width = "200px";
myOption.style.height = "40px";



//MY INPUT 

var myInput = document.getElementById("input");

myInput.style.width = "200px";
myInput.style.height = "34px";
myInput.style.border = "1 px solid black"

//MY BUTTON  

var myButton = document.getElementById("button");

myButton.style.width = "150px";
myButton.style.height = "40px";
myButton.style.backgroundColor = "orange";
myButton.style.border = "0px"


//MY HEADLINE

var myHeadline = document.getElementById("hedlayn");

myHeadline.style.textAlign = "center";
myHeadline.style.margin = "auto";
myHeadline.style.width = "30%";
myHeadline.style.marginTop = "70px"

var myP = document.querySelector("p");

myP.style.color = "grey"

var myBoxes = document.getElementById("myboxes");

myBoxes.style.width = "80%";
myBoxes.style.margin = "auto";
myBoxes.style.height = "auto";
myBoxes.style.marginTop = "50px";
myBoxes.style.display = "flex";
myBoxes.style.justifyContent = "space-between"


var myQutu = document.getElementsByClassName("mybox");


for(var i = 0; i<myQutu.length; i++){
    myQutu[i].style.width = "250px";
    myQutu[i].style.height = "250px";
    myQutu[i].children[2].style.color = "grey";  
    myQutu[i].style.textAlign = "center"
}


var myIcon = document.getElementsByClassName("myImg");



for(var i = 0; i<myIcon.length; i++){
    myIcon[i].style.width = "70px";
    myIcon[i].style.paddingTop = "10px"
}
