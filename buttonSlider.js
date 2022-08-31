

class button{
    constructor(tx, ty,td,tkeep,tInitialState){
        this.x=tx;
        this.y=ty;
        this.d=td;
        this.keep=tkeep;
        this.State=tInitialState;
        this.IState=tInitialState;

        this.c1=color(0x2B, 0x3A, 0x67);
        this.c2=color(0xE3, 0x17, 0x0A);
        this.c3=color(0xFF, 0xFD, 0x82);
    }
    display() {
        if(this.State){
        fill(this.c1);
        }
        else{
        fill(this.c2);
        }
        if(overButton(this)){
       fill(this.c3);
        }
        noStroke();
        circle(this.x,this.y,this.d);
        if(!this.keep && this.State!=this.IState){
        this.State=this.IState;
        }
    }
    changeState(){
        this.State=!this.State;
    }
    order(order){
        this.State=order;
    }
    click(){
        if(overButton(this))
        {
            this.changeState();
        }
    }
    

    
    
    }
  
   class slider{
    constructor(tx, ty,tw,th){
        this.x=tx;
        this.y=ty;
        this.l=tw;
        this.h=th;
        this.c1=color(0x2B, 0x3A, 0x67);
        this.c2=color(0xE3, 0x17, 0x0A);
    }
    display() {
       
        let dx=map(t,0,frame,0,this.l);
        fill(this.c1);
        rect(this.x,this.y,dx,this.h);
        fill(this.c2);
        rect(this.x+dx,this.y,this.l-dx,this.h);
        if(bT[0].State && t<frame){
        t++;
        }

    }

    click(){
 if(overSlider(this)){
     t=map(mouseX,this.x,this.x+this.l,0,frame);
 }
    }
    
   }


    function  overButton(b){
      
        if (dist(mouseX,mouseY,b.x,b.y) < b.d/2 ) {
            return true;
          } else {
            return false;
          }
    
    }
    function  overSlider(s){
        if (mouseX>s.x && mouseX<(s.x+s.l) && mouseY>s.y && mouseY<(s.y+s.h)) {
            return true;
          } else {
            return false;
          }
    
    }

    function buttonText(txtButton,b,str,col=255){
       // txtButton.background(0,200,0);
       txtButton.textAlign(LEFT,CENTER);
       txtButton.textFont(computerModern);

       txtButton.fill(col);
       txtButton.color(col);
       txtButton.textSize(b.d);
       txtButton.text(str,b.x+b.d,b.y-4);
    }


    function buttonCouple(b1,b2){
 if (overButton(b1)){
     b2.order(!b1.State);
 }
 if (overButton(b2)){
    b1.order(!b2.State);
}

    }


    function buttonTriple(b1,b2,b3){
        if (overButton(b1) && b1 ){
            b2.order(false);
            b3.order(false);
        }
        if (overButton(b2) && b2){
           b1.order(false);
           b3.order(false);
        }

       if (overButton(b3) && b3){
        b1.order(false);
        b2.order(false);
       }
    
    }