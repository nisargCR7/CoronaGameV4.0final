class Maze {
    constructor(){
    
    
    
    }

mazelevel(){


    if (keyIsDown(UP_ARROW)) {
  
        mazerunner.velocityX=0;
        mazerunner.velocityY=-speed;
        mazerunner.changeAnimation("u",up)
      }
        
      
       if(keyIsDown(DOWN_ARROW)) {
          
        mazerunner.velocityX=0;
        mazerunner.velocityY=speed;
        mazerunner.changeAnimation("d",down)
      }
    
      if(keyIsDown(LEFT_ARROW)) {
          
        mazerunner.velocityX=-speed;
        mazerunner.velocityY=0;
        mazerunner.changeAnimation("l",left)
      }
    
      if(keyIsDown(RIGHT_ARROW)) {
          
        mazerunner.velocityX=speed;
        mazerunner.velocityY=0;
        mazerunner.changeAnimation("r",right)
      }



      
}


    }
    