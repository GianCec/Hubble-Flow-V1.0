function showDL(){
  title();
  buttonFeatures();

   legend();
  anyWhere();
}
function title(){
    let str="Hubble flow";
    let cw = textWidth(str)*0.68;
    let l=width*0.05;
    
   let byT=height*0.02;
   let by=5;
   imgTxt[0].push();
   imgTxt[0].translate(width/2,byT);
   imgTxt[0].textAlign(CENTER);
   imgTxt[0].rectMode(CENTER);
   imgTxt[0].fill(0,0);

   imgTxt[0].rect(0,0,cw,width/70);
   imgTxt[0].fill(255,200);
   imgTxt[0].textFont(computerModern);
   imgTxt[0].textSize(width/70);
   imgTxt[0].text(str,0,0);
   imgTxt[0].stroke(255,150);
   imgTxt[0].line(-cw,by,-cw-l,by);
   imgTxt[0].line(cw,by,cw+l,by);

   imgTxt[0].pop();
}

function buttonFeatures(){
    let xt=[];
    let yt=[];
    let BD=bT[0].d/3;
    let BX=bT[0].x;
    let BX2=bT[1].x;

    let BY=bT[0].y;
    
    for(let i=0;i<3;i++){
      let theta=TWO_PI/3*i;
      xt[i]=BX+BD*cos(theta);
      yt[i]=BY+BD*sin(theta);
  
    }   imgTxt[0].push();

    imgTxt[0].fill(255);
    imgTxt[0].noStroke();
      imgTxt[0].triangle(xt[0], yt[0],xt[1], yt[1],xt[2], yt[2]);
  
      imgTxt[0].textAlign(CENTER);
      imgTxt[0].textSize(bd);

      imgTxt[0].text("R",BX2,BY-1);
      imgTxt[0].pop();

}

function legend(){
    let bx=width*0.03;
    let by=height*0.75;
    let w=width*0.015;
    let X=0;
    let Y=0;

    imgTxt[2].push();
    imgTxt[2].translate(bx,by);

    imgTxt[2].stroke(255);
    imgTxt[2].noFill(255);
  
    imgTxt[2].line(X,Y-bd/2,X+width/10,Y-bd/2);
    imgTxt[2].noStroke();
    imgTxt[2].fill(255);
    imgTxt[2].textSize(bd+3);
    imgTxt[2].text("Legend",X,Y-bd)
    imgTxt[2].textFont(computerModern);
    imgTxt[2].textSize(bd);
    imgTxt[2].textAlign(LEFT);

    imgTxt[2].fill(255);

    
    imgTxt[2].text("Gyr : Giga-years",X,Y+bd)
    imgTxt[2].text("Glyr : Giga-lightyears",X,Y+bd*2.5)
    imgTxt[2].text("ON",X+bd*1.5,Y+bd*4);
    imgTxt[2].text("OFF",X+bd*1.5,Y+bd*5.5);
    imgTxt[2].textAlign(LEFT,CENTER);

    imgTxt[2].text("Observer",X+bd*1.5,Y+bd*8.8);
    imgTxt[2].text("Galaxy (photons emitter)",w,7*bd);

  imgTxt[2].fill(0x2B, 0x3A, 0x67);
  imgTxt[2].circle(X+bd/2,Y+bd*3.5,bd);
  imgTxt[2].fill(0xE3, 0x17, 0x0A);
  imgTxt[2].circle(X+bd/2,Y+bd*5,bd);
  
    
  imgTxt[2].fill(colPalette[0]);
  imgTxt[2].circle(X+bd/2,Y+bd*8.8,bd);
  imgTxt[2].fill(255);

    //imgTxt[2].fill(255);
    //imgTxt[2].rect(0,0,100,100);
    imgTxt[2].imageMode(CENTER);
    imgTxt[2].image(svgGLX, bd/2,7*bd,w,w);
   



    imgTxt[2].pop();

}


function anyWhere(){
    let str="Click anywhere to spawn galaxies";
    let cw = textWidth(str)*0.68;
    let l=width*0.05;
    
   let byT=height*0.4;
   let by=5;
   imgTxt[3].push();
   imgTxt[3].translate(width/2,byT);
   imgTxt[3].textAlign(CENTER);
   imgTxt[3].rectMode(CENTER);
   imgTxt[3].fill(0,0);

   imgTxt[3].rect(0,0,cw,width/70);
   imgTxt[3].fill(255);
   imgTxt[3].textFont(computerModern);
   imgTxt[3].textSize(width/60);
   imgTxt[3].text(str,0,0);


   imgTxt[3].pop();
}