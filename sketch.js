var player
var bg 
var engine,world
var ground
var form
var database


function preload (){

bg = loadImage("./assets/Background2.png")


}

function setup (){
    createCanvas (windowWidth,windowHeight)
    
    database = firebase.database();
    game = new Game();
    game.start();
    
    
    
}


function draw (){
  
background(bg);

drawSprites();

}