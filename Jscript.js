let shiftDown = document.getElementById("btn1i");
let shiftUp = document.getElementById("btn2i");

let CertDiv = document.getElementById("certi");

const CertSlider = ["/images/RIntro.png", "/images/VisualisationR-1.png"];

let i = 0;



/*
Scroll slider button functions
the functions index every picture in the array
*/
function shiftdown(){
    
    if(i > 0 && i <=  CertSlider.length)
    {
        
        i-=1;
        CertDiv.src = CertSlider[i];
    } 
    else
    {
        i = i;
    }
        
}

function shiftup(){

    
    if(i >= 0 && i < CertSlider.length)
    {
        CertDiv.src = CertSlider[i];
        i+=1;
    }
    else
    {
        i = i;
    }
}

shiftDown.addEventListener('click', shiftdown,true);

shiftUp.addEventListener('click', shiftup,true);

