let embR=[];
let embX=[];
let embdX=[];

let embY=[];
let embZ=[];
let embdZ=[];

let embScale;
let pointV;
let pointH;

let sc=0.25;
let rotX;
let factor=1.4;

function embSetup(){
    rotX=-PI/10;
    embScale=200;
 pointV=15;
 pointH=13;
 h=height*2;
for(let i=0; i<pointV;i++){
    embX[i]=[];
    embY[i]=[];
    embZ[i]=[];
 let k=int(map(i,0,pointV-1,0,frame))
    embR[i]=tableSCF.getNum(k,0)*embScale;

}

for(let i=0; i<pointV;i++){
    let angle=map(i,0,pointV-1,-PI/2,-PI*3/2);
    for(let j=0; j<pointH;j++){
    embX[i][j]=embR[j]*sin(angle);
    embY[i][j]=map(j,0,pointH-1,0,h);
    embZ[i][j]=embR[j]*cos(angle);
    }
    let d=emb.height*0.03;
    embdX[i]=d*sin(angle);
    embdZ[i]=d*cos(angle);

}

cam = emb.createCamera();

}


function embDraw(){
    emb.clear();
    emb.strokeWeight(2);
    let translHeight=emb.height*factor;
    let up=emb.height*0;

    let vLine=pointH;//-----
    let hLine=pointV;//|
        for(let j=0; j<vLine;j++){
            emb.push()
            emb.scale(sc);
            emb.translate(0,translHeight);
            emb.rotateX(rotX)
            emb.strokeWeight(1);
            emb.stroke(255);
        
            emb.noFill();
            emb.beginShape()
        for(let i=0; i<hLine;i++){
            let x=embX[i][j];
            let y= embY[i][j]+up;
            let z=embZ[i][j];
       
            emb.vertex(x,-y,z);
        }
        emb.endShape()
        emb.pop();
        }
    
        for(let i=0; i<hLine;i++){
       
            emb.push();
            emb.scale(sc);
    
            emb.translate(0,translHeight);
            emb.rotateX(rotX)

            emb.beginShape();
            emb.strokeWeight(1);
            emb.stroke(255);
    
            if(i==0){
                emb.strokeWeight(4);
                emb.stroke(colPalette[0]);
            }
            emb.noFill();
        for(let j=0; j<vLine;j++){
            let x=embX[i][j];
            let y= embY[i][j]+up;
            let z=embZ[i][j];
       
            emb.vertex(x,-y,z);
        }
        emb.endShape()
        emb.pop();
    }

    embCoordinate();
    embEmitter();
    embPhoton();

    
        }


       function embCoordinate(){
        let vLine=pointH;
        let hLine=pointV;
        let translHeight=emb.height*factor;
        
        let up=emb.height*0;
        let textdist=emb.height*0.03;


        emb.push();
        emb.textFont(computerModern);
        emb.textSize(emb.height*0.08);
        emb.textAlign(LEFT,CENTER);
        emb.scale(sc);
        

       // emb.sphere(500,10,10);
        emb.translate(0,translHeight);
        emb.rotateX(rotX)
        for(let j=0; j<vLine;j++){
            let i=hLine-1;
            let x=embX[i][j]+textdist;
            let y= embY[i][j]-0.5*textdist;
            let z=embZ[i][j]+1.5*textdist;
          emb.fill(255);
          emb.push()
         emb.translate(x,-y,z);
         emb.rotateY(camAngX);
        emb.rotateX(camAngY);
         emb.text((j)*4+2,0,0);
         if(j==7){
            emb.translate(textdist*2,0,textdist*6);

            emb.text("Gigayears",textdist*5,0)         
          }
         emb.pop();
        }



        for(let i=0; i<hLine;i++){

            let j=vLine-1;
            let x=embX[i][j]+embdX[i];
            let y= embY[i][j]+up+3*textdist;
            let z=embZ[i][j]+embdZ[i];
          emb.fill(255);
          emb.push()
         emb.translate(x,-y,z);
         emb.rotateY(camAngX);
        emb.rotateX(camAngY);
        emb.textAlign(CENTER,CENTER);

         emb.text((i)*5,0,0);
         if(i==7){
           emb.text("Giga light-years",0,-textdist*5)
         }
         emb.pop();
        }
        emb.pop();

       }


       function embEmitter(){
        if(em.length<1){
         return;
        }
       let d=dist(em[0].x,em[0].y,0,0)/scale/a(t);
       if(d>70){
        return;
       }
       let theta=map(d,0,70,-PI/2,-PI*3/2);
       let translHeight=emb.height*factor;
       let up=emb.height*0;


       emb.push();
        emb.textFont(computerModern);
        emb.textSize(emb.height*0.08);
        emb.textAlign(LEFT,CENTER);
        emb.scale(sc);
        emb.translate(0,translHeight);
        emb.rotateX(rotX)
       emb.beginShape();
       emb.strokeWeight(4);
       emb.stroke(colPalette[1]);
       emb.noFill();
       for(let j=0; j<pointV-2;j++){

        let x=embR[j]*sin(theta);
        let y=embY[0][j]+up;
        let z=embR[j]*cos(theta);
    
        emb.vertex(x,-y,z);
    }
    emb.endShape();
    emb.pop();

       }

       function  embPhoton(){
        embScale=200*0.68;
      
        let translHeight=emb.height*factor;
        let up=emb.height*0;
        if(em.length<1){
            return;
           }
           let d=dist(em[0].x,em[0].y,0,0)/scale/a(t);
        if(d>70){
            return;
          }
       
           if(!em[0].startPH){
            return;

           }
           let thetaI=map(d,0,70,-PI/2,-PI*3/2);
       let yt;
       let ph=0;
       emb.push();

       emb.scale(sc);
       emb.translate(0,translHeight);
       emb.rotateX(rotX)
      emb.beginShape();
      emb.strokeWeight(4);
      emb.stroke(255,255,0)
      emb.noFill();
      let counter=0;
      let T=0;
while(ph<d && T<frame){
     T=tEM+counter
     let embG=map(T,0,frame-1,200,embScale)

     let  theta=map(ph,0,70,0,-PI);
      yt=map(T,0,frame-1,0,h);

    if(yt<h){
       let x=embG*a(T)*sin(thetaI-theta);
       let y=yt;
       let z=embG*a(T)*cos(thetaI-theta);
       emb.vertex(x,-y,z);
    }
    
      ph=(tableFLC.getNum(int(T),0)-tableFLC.getNum(int(tEM),0))/PHfactor;
      counter++;
    }



   emb.endShape();
   emb.pop();
       }