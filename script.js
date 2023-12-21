let toggle = document.querySelector(".toggle");
let box = document.querySelector(".box");
toggle.addEventListener("click",move);

function move(){
    let timerId =null;
   let x=0;
   let degrees =0;
   let y=0;
   timerId = setInterval(frame,1);
   function frame(){

  
  if(degrees>=360 || x>=250 || y>=250){
    clearInterval(timerId);
  }
  else{
    x++;
    y++;
    degrees++;
    box.style.transform = "rotateZ("+degrees+"deg)";
    box.style.left = x + "px";
    box.style.top = y + "px";

  }
}
}
