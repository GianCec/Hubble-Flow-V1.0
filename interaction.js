const sensitivityX = 2;
const sensitivityY = 1;
const sensitivityZ = 0.1;
const scaleFactor = 100;
let justClicked=false;
let camAngX=0;
let camAngY=0;


function mousePressed(){

 let mouseXc= mouseX-cx;
 let mouseYc= mouseY-cy;


 for(let i=0; i<em.length;i++){
  if(em[i].contains(mouseXc,mouseYc)){


  em.splice(i,1);
  
  return;
  }
   
   }

   let notAreaX=width*0.1;
 let notAreaY=height*1;
   if(!bEMB.State){
if(overArea(0,0,width,height*0.9) && !overArea(0,0,notAreaX,notAreaY)){
 
  if(em.length<maxNum){
    
    E=new emitter(mouseXc,mouseYc,t,a(t));
    em.push(E);
  }else{
  em.splice(0,1);
    E=new emitter(mouseXc,mouseYc,t,a(t));
    em.push(E);
    
  }
}
   }else{
    if(overArea(0,0,embIX,height*0.9) && !overArea(0,0,notAreaX,notAreaY)){
 
      if(em.length<maxNum){
        
        E=new emitter(mouseXc,mouseYc,t,a(t));
        em.push(E);
      }else{
      em.splice(0,1);
        E=new emitter(mouseXc,mouseYc,t,a(t));
        em.push(E);
        
      }
   }
  }
  for(let i=0; i<2;i++){

    bT[i].click();
   
    }
   
  bEM.click();
  bOT.click();
  bLeg.click();

  bEMB.click();
 Tbar.click();
 bReset.click();

 for (let i = 0; i < bTool.length; i++) {

  bTool[i].click();
  }
  if(bReset.State){
    resetEm();
  }


 if(bT[1].State){
    t=0;
}

if(bT[0].State && t<frame){
    t++;
}


if(bEMB.State){
 cx=width/4;
 if(justClicked){
  justClicked=false;
 resetEm();
 }
 maxNum=1;
}else{
  if(!justClicked){
    justClicked=true;
   resetEm();
   }
     maxNum=4
  cx=width/2;

}
if(bEM.State){
 tEM=t;
 bT[0].order(true);
 for(let i=0; i<em.length;i++){
  em[i].startPH=true;
 }}



}

function overArea(x,y,w,h){



  if(mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
      return true;
  }
  return false;
  }

  function mouseWheel(event) {
    if(!bEMB.State){
    scale += event.delta*0.001;
  }else{
      if(overArea(0,0,width-embIX,height-embIY)){
        scale += event.delta*0.001;
      }
    }
    if(overArea(embIX,embIY,embW,embH) && bEMB.State){
    if (event.delta > 0) {
      cam._orbit(0, 0, sensitivityZ * scaleFactor);
    } else {
      cam._orbit(0, 0, -sensitivityZ * scaleFactor);
    }
  }
  }

  function mouseDragged() {
if(bEMB.State){
    const deltaTheta =
      (-sensitivityX * (mouseX - pmouseX)) / scaleFactor;
    const deltaPhi =
      (sensitivityY * (mouseY - pmouseY)) / scaleFactor;

      if(overArea(embIX,embIY,embW,embH)){
    cam._orbit(deltaTheta, deltaPhi, 0);
    camAngX=camAngX+deltaTheta;
    camAngY=camAngY+deltaPhi;
      }

  }
  Tbar.click();


  }
  function scaleBoundry(){
   
    if(scale>scaleMax){
      scale=scaleMax
     }
     if(scale<scaleMin/a(t)){
      scale=scaleMin/a(t)
     }

    /* if(scale<scaleMin && bTool[6].State){
      scale=scaleMin;
     }*/
       }


function resetEm(){
  em.splice(0,maxNum);

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
      if(t<frame){
    t++;
  }
  } else if (keyCode === LEFT_ARROW) {
      if(t>0){
          t--;
        }
  }
}
