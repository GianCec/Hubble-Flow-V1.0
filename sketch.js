var t;
var tEM;
var frame;
var scale;
let step;
var tableFLC;
var tableSCF;
let em=[];
let maxNum=4;
let scaleMax=16;
let scaleMin=3;
let cx,cy;
let emR=20;

let computerModern;
let svgGLX;
let svgOBS;


let colPalette;

function preload(){
	svgGLX = loadImage('assets/GLX.svg');
	svgOBS = loadImage('assets/OBS.svg');
  



  tableFLC=new p5.Table();
  tableSCF=new p5.Table();
  tableHR=new p5.Table();
  tableEH=new p5.Table();


  tableFLC = loadTable('assets/FLC.csv', 'csv');
  tableSCF = loadTable('assets/SCF.csv', 'csv');
  tableHR = loadTable('assets/HR.csv', 'csv');
  tableEH = loadTable('assets/EH.csv', 'csv');


  computerModern = loadFont('assets/cm.otf');

 }



function setup() {

  createCanvas(windowWidth, windowHeight-1);
  initialization();
  imgSetup();
  commandSetup();
  embSetup();
  showDL();
}

function draw() {
  background(0);
  scaleBoundry();
  features();
  embDraw();
  imgDraw();
  commandDraw();
  image(imgTxt[0],0,0);



   

}


function initialization(){
frame=960;
scale=12;
scaleI=scale;


step=10;
cx=width/2;
cy=height/2;
t=0;
tEM=0;
colPalette=[color('#21FA90'),color('#E637BF')];
}
