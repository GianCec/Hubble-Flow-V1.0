let PHfactor=1;


function   features(){
  push();
  translate(cx,cy);
  if(bTool[3].State){
  coordinate();
  }
  if(bTool[4].State){
    emDist();
  }
  if(bTool[0].State){
  HR();
  }
  noStroke();
  let L=width*0.015*scale/scaleI;
    fill(colPalette[0]);
    if(L<7){
      L=7;
    }
   circle(0,0,L);
   

  for(let i=0;i<em.length; i++){
 em[i].show();
 em[i].move();
 if(em[i].startPH){
 photon(em[i].x,em[i].y,0,0);
 if(bTool[1].State && t>tEM){
 LC();
 }
 }
  }
  if(bTool[2].State){
    EH();
    }
pop();

}




function coordinate(){
  let radius=scale*step*2*a(t);
  let halfdiagonal=dist(0,0,cx,cy)
  let nC=int(halfdiagonal/(a(t)*radius/2/a(t)))+2;
if(bTool[6].State){
   radius=scale*step*2;
   nC=int(halfdiagonal/(radius/2))+2;
}
for(let i=0;i<nC;i++){
  noFill();
  stroke(255,100);
  arcsize=15;
  if(i%2==0){
arc(0,0,radius*i,radius*i,PI/(i*arcsize),TWO_PI-PI/(i*arcsize));
  }else{
    arc(0,0,radius*i,radius*i,PI+PI/(i*arcsize),PI-PI/(i*arcsize));

  }
textAlign(CENTER,CENTER)
if(i !=0){
  noStroke();
  fill(255)
  if(i==2){
    text(i*step+" Glyr",(radius*i/2)*pow(-1,i),0);

  }else{
text(i*step,(radius*i/2)*pow(-1,i),0);
  }
}
}

}


function emDist(){
  for(let i=0;i<em.length; i++){
    dottedLine(0,0,em[i].x,em[i].y);
    D= dist(0,0,em[i].x,em[i].y);
    push();
    translate(em[i].x/2+10,em[i].y/2+10);

    fill(255);
    noStroke();
    if(bTool[5].State){
    text(round(D/scale/a(t),0)+" Glyr",0,0);
    }
    if(bTool[6].State){
      text(round(D/scale,0)+" Glyr",0,0);
      }
  pop();
  }


}

function HR(){
  let r=tableHR.getNum(int(t),0)*scale;
  push();
  strokeWeight(2);
  noFill();
  let col=color(0xFF, 0x20, 0x6E);
  stroke(col);
  circle(0,0,r*2);
  pop();
}

function EH(){
  let r=tableEH.getNum(int(t),0)*scale;
  push();
  strokeWeight(2);
  noFill();
  let col= color(0x41, 0xEA, 0xD4);

  stroke(col);
  circle(0,0,r*2);
  pop();
}

function LC(){
  let tPH=t-tEM;

  let r=tableFLC.getNum(int(tPH),0)*scale;
  push();
  strokeWeight(2);
  noFill();
  let col=color(0x2A, 0x91, 0x34);
  stroke(col);
  circle(0,0,r*2);
  pop();
}

function a(t){
    let a=tableSCF.getNum(int(t),0);
   return(a);
}



function photon(xi,yi,xf,yf){
  push();
  let tPH=t-tEM;
  translate(xi,yi);
  let b=atan2(yf-yi,xf-xi);
  rotate(b)
  let m=0;
  if(tPH>0){
   // m=(tableFLC.getNum(int(tPH),0))*scale/PHfactor;
   m=(tableFLC.getNum(int(t),0)-tableFLC.getNum(int(tEM),0))*a(t)*scale/PHfactor;
  }
  let Var=50;
  let start=m-Var/4;
  let end=m+Var/4;
  let jump=1;
  let d=dist(xi,yi,xf,yf);
      beginShape();
  noFill();
  stroke(255,255,0)
  strokeWeight(2);
  for(let i=start;i<end;i=i+jump){
    let j=1000*cos((i/5)/a(t))*gaussian(i,m,Var);
    if(i<d && i>emR/2 && tPH>0){
    vertex(i,-j);    
    }
  }
  endShape();
  pop();
  
}

function gaussian(x,mean, dev){
  let X=(x-mean);
  let y=1/(sqrt(TWO_PI)*dev)*exp(-0.5*sq(X)/dev);
  return y;
}


class emitter{
  constructor(tx,ty,ti,ai){
   this.xi=tx;
   this.yi=ty;
  this.x=tx;
  this.y=ty;
  this.t0=ti;
  this.a0=ai;
  this.r=emR*1.5;
  this.startPH=false;
  this.InSCL=scale;
  }


  contains(px, py) {
      let d = dist(px, py, this.x, this.y);
      if (d < this.r) {
        return true;
      } else {
        return false;
      }
    }

    move() {
      let f=a(t)/this.a0*scale/this.InSCL;
      this.x = this.xi*f;
      this.y = this.yi*f;
    }
  
    show() {
      let R=this.r*scale/scaleI;
      let R2=this.r/3;
      print(R);
      noStroke;
      fill(colPalette[1]);
      
      if(R<R2){
        galaxy(this.x, this.y,R2,R2);
      }else{
      galaxy(this.x, this.y,R,R);
      }
    }
  
}


function dottedLine(xi,yi,xf,yf){
  let d=dist(xi,yi,xf,yf);
  let l=10;
  let n=d/l;
  let exi=xi;
    let exf=xf;
    let eyi=yi;
    let eyf=yf;


  
   
  for(let i=0;i<n-1;i++){
    if(i%2==0){
    let vi= i/n;
    let  vf= (i+1)/n;
   xti=lerp(exi,exf,vi);
    yti=lerp(eyi,eyf,vi);
        xtf=lerp(exi,exf,vf);
    ytf=lerp(eyi,eyf,vf); 

      push();
      stroke(255);
      line(xti,yti,xtf,ytf);
      pop();
    }
  }
  
}


function galaxy(x,y,w,h){
  imageMode(CENTER);
  push();
  translate(x, y)
  rotate(radians(-t*3))
  image(svgGLX, 0,0,w,h);
  pop();
}


function observer(x,y,w,h){
  imageMode(CENTER);
  push();
  translate(x, y)
  image(svgOBS, 0,0,w,h);
  pop();
}

