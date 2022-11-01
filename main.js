//Select Element
var SlideImages=Array.from(document.querySelectorAll(".images-continair img"));
var SlideNumber=SlideImages.length;
var prevButton=document.getElementById("prev");
var nextButton=document.getElementById("next");
var currentNumber=1;
var slideText=document.querySelector(".images-continair .slider-img")
// click button
nextButton.onclick=NextButton;
prevButton.onclick=PrevButton;

//Create Indicator
 
var IndElementUl=document.createElement("ul");
    IndElementUl.setAttribute("id","indic-ul");   

for(var i=1 ;i <= SlideNumber;i++){
   
    var IndElementLi=document.createElement("li");
    IndElementLi.setAttribute("data-indic",i);

    IndElementLi.appendChild(document.createTextNode(i));
    IndElementUl.appendChild(IndElementLi);
    
}
document.getElementById("indicator").appendChild(IndElementUl);
var UlElement=document.getElementById("indic-ul");
var UlElementLi=Array.from(document.querySelectorAll("#indic-ul li"));
  
for(var i=0;i < UlElementLi.length;i++){

    UlElementLi[i].onclick=function(){

        currentNumber=parseInt(this.getAttribute("data-indic"));

        HanddleClass();
    }
    
}

HanddleClass();
//Add Function
function NextButton(){  
  
   if(nextButton.classList.contains("disp")){
    nextButton.onclick=function(){
        return false;
    }
   }else{
    currentNumber++;
    HanddleClass();
   }
 
 
}


function PrevButton(){

    if(prevButton.classList.contains("disp")){
        prevButton.onclick=function(){
            return false;
        }
       }else{
        currentNumber--;
        HanddleClass();
       }
      
}
function HanddleClass(){
    slideText.textContent=`Slide ${currentNumber} of ${SlideNumber}`;
    removeActive();
    SlideImages[currentNumber - 1].classList.add("active");
    UlElement.children[currentNumber - 1].classList.add("active");
    
   if(currentNumber == 1){
    prevButton.classList.add("disp")
   }else{
    prevButton.classList.remove("disp")
   }
   if(currentNumber == SlideNumber){
    nextButton.classList.add("disp")
   }else{
    nextButton.classList.remove("disp")
   }
}
function removeActive(){
   
    SlideImages.forEach((img)=>{
        img.classList.remove("active");
    });
        

    UlElementLi.forEach((li)=>{
        li.classList.remove("active");
    });
}

    



