var backgroundImg
var backgr
var banana
var FoodGroup
var obstacle
var StoneGroup
var monkey
var monkey_Running
var ground
var invisibleGround
var GameOver
var score=0
var bananaImg
var obstaclesImg

function preload(){
   monkey_Running = loadAnimation("Monkey-1.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  backgroundImg = loadImage("jungle.png")
  bananaImg = loadImage("banana.png")
  obstaclesImg = loadImage("stone.png")
}




function setup() {
  createCanvas(800, 400);
   backgr = createSprite(0,0,800,400)
  backgr.addImage(backgroundImage)
  backgr.scale = 1.5
  backgr.x = backgr.width/2
  backgr.velocityX = -4
  
  monkey = createSprite(100,340,20,20)
  monkey.addAnimation("running",monkey_Running)
  monkey.scale= 0.1
  
  ground = createSprite(400,350,20,20)
  ground.velocityX = -4
 ground.x = ground.width/2
  ground.visible = false;
  
  FoodGroup = new Group()
  obstaclesGroup= new Group()
  score = 0
}

function draw() {
  background(225)
  if (ground.x<0){
    ground.x = ground.width/2
    
  }
  if (backgr.x<100){
    backgr.x = backgr.width/2
    
  }
   if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
    spawnFood();
    spawnObstacles();
 
    if(obstaclesGroup.isTouching(monkey)){ 
        monkey.scale=0.08;
     // score=score-2;
    }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);


}
function spawnFood(){
  if (frameCount %80===0){
    var banana = createSprite(600,400,20,20)
    banana.y=random(120,200)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX = -5
    banana.lifetime = 150;
  monkey.depth = banana.depth+1
    FoodGroup.add(banana)
    
  }
}
function spawnobstacles(){
  if (frameCount %300===0){
    var obstacle = createSprite(600,400,20,20)
    
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
   
    obstacle.lifetime = 150;

    obstaclesGroup.add(obstacle)
    
  }
}