let bT=[];   // time
let bEM;
let bOT; //option tools
let bLeg;
let bTool=[];
let bEMB;
let bReset;
let Tbar;


let bd;

function commandSetup(){
    let bx=width/4;
    let by=height*0.96;
   let   byI=height/36;
      bd=height*0.018;
    let bl=width*0.45


Tbar=new slider(bx+byI*2,by,bl,bd);

let byT=by*1.01;

bT[0]=new button(bx,byT,bd*1.3,true,false);
bT[1]=new button(bx+byI,byT,bd*1.3,false,false);

let bxEM=width*0.835;


bEM=new button(bxEM,byT*0.97,bd*1.4,false,false);
buttonText(imgTxt[0],bEM,"Emit photons")

let bxOT=width*0.01;
let byOT=height-by;

bOT=new button(bxOT,byOT,bd*1.4,true,false);
buttonText(imgTxt[0],bOT,"Show Options & Tools");

bLeg=new button(bxOT,by,bd*1.4,true,false);
buttonText(imgTxt[0],bLeg,"Show Legend");
let bxRes=width*0.12;

bReset=new button(bxEM,byT,bd*1.4,false,false);
buttonText(imgTxt[0],bReset,"Reset emitters");

let bxTool=width*0.03;
let toolInfo=["Hubble radius","Lightcone generated at photons emission",
"Event Horizon","Show coordiantes","Show galaxies distances","Comoving coordinates","Proper coordiantes"]

let col = [ 

  // Winter sky fucsia
  color(0xFF, 0x20, 0x6E), 
  // verde foresta
color(0x2A, 0x91, 0x34) ,
   // turchese
  color(0x41, 0xEA, 0xD4),
   ];

   let info=[false,false,false,true,false,true,false];

for (let i = 0; i < toolInfo.length; i++) {
    let s=2;
    if(i>=3){
        s=2.5;
    }
    if(i>=5){
        s=3
    }
    bTool[i]=new button(bxTool,byOT*(s+i),bd,true,info[i]);
    if(i<3){
    buttonText(imgTxt[1],bTool[i],toolInfo[i],col[i]);
    }else{
        buttonText(imgTxt[1],bTool[i],toolInfo[i]);
 
    }
}


bEMB=new button(bxEM,byOT,bd*1.4,true,false);
buttonText(imgTxt[0],bEMB,"Show time explict manifold");



 }

 function commandDraw(){
         Tbar.display();
         for(let i=0; i<2;i++){
         bT[i].display();
         }
         bEM.display();
         bOT.display();
         bLeg.display();
         bEMB.display();
         bReset.display();
         if(bOT.State){
         for (let i = 0; i < bTool.length; i++) {

         bTool[i].display();
         }
        }

        buttonCouple(bTool[5],bTool[6]);
 }



 function timeText(x,y,w,h){
    let xline=map(t,0,frame,x,x+w);
    let c1=color(0x2B, 0x3A, 0x67);
    let c2=color(255,255,0);
    let bdTimes=0;

    let time= tableEH.getNum(int(t),1);
    if(em.length>0){
    if(em[0].startPH){
        let time2= tableEH.getNum(int(tEM),1);
    
        let xline=map(tEM,0,frame,x,x+w);
        fill(c2);
        triangle(xline, y-h*0.2, xline+bd/2, y-h, xline-bd/2, y-h)
        noStroke();
        text("te= "+ round(time2,1)+" Gyr", xline-bd,y-1.8*h);
       }
    }
    fill(c1);
    triangle(xline, y-h*0.2, xline+bd/2, y-h, xline-bd/2, y-h)

    noStroke();
    fill(255);
    textFont(computerModern);
    textAlign(LEFT, CENTER);   
    textSize(bd*1.2);
    noStroke();   
    if(em.length>0){
 if(t-tEM<100 && t-tEM>-140 && em[0].startPH){
    bdTimes=1;
 }
}
    text("t= "+ round(time,1)+" Gyr", xline-bdTimes*bd,y-1.8*(1+bdTimes)*h);
    text("a(t)= "+ round(a(t),2)+" " , xline-bdTimes*bd,y-1.8*(2+bdTimes)*h);


    
  }