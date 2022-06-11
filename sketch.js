//Carregar módulos da Biblioteca Matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Variáveis
var engine, world;

var ground;



function preload() {
 
}
function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  

  //Criação do solo
  ground = new Ground(width/2,height-1, width,1);
  
 
}

function draw() {
  //Definir posição X e Y do objeto pelo centro
  rectMode(CENTER);

  background(189);
  Engine.update(engine);

  
  //Exibir objetos na tela
  ground.display();
   
}
