let shiftDown = document.getElementById("btn1i");
let shiftUp = document.getElementById("btn2i");
let CertDiv = document.getElementById("certi");
let menu = document.getElementById("hamburger");
let menuu = document.getElementById("menu1");
let nav = document.getElementById("nav-wrap");

const CertSlider = ["/images/RIntro.png", "/images/VisualisationR-1.png"];

let i = 0;

//Displaying the first img in the certificate slider
CertDiv.src = CertSlider[i];

/*
Scroll slider button functions
the functions index every picture in the array
*/

function SlideUp(){
    //Assert length of the image slider array
    if(i < CertSlider.length && i != CertSlider.length-1){
        i+=1;
        CertDiv.src = CertSlider[i];
    }
    
}


function SlideDown(){
    //Assert length of the image slider array
    if(i > 0){
        i-=1;
        CertDiv.src = CertSlider[i];
    }
    
    
}

function MenuDisplay(){
    menuu.style.display = "flex";
    
}



//Adding click event listners to the scroll btn
shiftUp.addEventListener('click', SlideUp,true);
shiftDown.addEventListener('click', SlideDown,true);
menu.addEventListener('click', MenuDisplay,true);



