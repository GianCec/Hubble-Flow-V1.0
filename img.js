let imgTxt=[];
let emb;
let embIX,embIY,embW,embH;
let     txtLayer;
function imgSetup(){
    txtLayer=4
    for (let i = 0; i < txtLayer; i++) {
        imgTxt[i]=createGraphics(width,height);
    }

    embIX=width/2;
    embIY=0;
    embW=width/2;
    embH=height;

    emb=createGraphics(embW,embH,WEBGL);
    emb.background(255);

}

function imgDraw(){
  let x3=0;
        if(bOT.State){
        image(imgTxt[1],0,0);
        }
        if(bLeg.State){
            image(imgTxt[2],0,0);
            }
        if(bEMB.State){
            image(emb,embIX,embIY);
            x3=-width/4;
            
            }
            if(em.length<1){
                image(imgTxt[3],x3,0);

            }
        timeText(Tbar.x,Tbar.y,Tbar.l,Tbar.h);


}