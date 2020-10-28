var player,form,game,q,score,m;
var gameState=0;
var database;
var playerCount;
var img0,img1,img2,img3,room1,spark,virusimg,marketimg,Left,Right,level1,level2,level3,room2,room3,end,maze,labdoor,win,message1,message2,message3,message4,win1,win2,win3;
var vel=2,man,man_vel=10,virusGroup,player_ans,store_sec=0,store_min=0;
var wrong_music,correct_music,die_music,logo_miusic,cough_music,crowd_music
var seconds=60
var minutes=9
var Questions=[]
var Minutes=[]
var Seconds=[]
var Name=[]
var qstate=0,cstate=0,wstate=0,rstate=0,musicstate=1
var r,rr=7
var Options=[]
var Width=window.innerWidth
var Height=window.innerHeight
var Answers=[]
var ans=0
var life=1
var x1,y1
var speed=Height/150
var x2=Width/3,y2=Height/26
var state=1
var count,virusGroup2
var Clue=[
  "I am an idiot box... find me and click on me",
  "I was invented by 2 brothers... find me",
  "Michael Jordan the player... find me",
  "It takes 20 years to dispose of me...",
  "My average lifetime is around 1,000 hours... find me",
  "I have magnets in me and I vibrate... find me",
  "You feel cozy on me"
]

var Words=[
  "haldi",
  "pandemic",
  "webex",
  "quarantine",
  "social distancing",
  "self isolation",
  "contagious",
  "virus"
  
  ]

var Clue2=[
  "Teachers explain their teachings here..find me",
  "It tilts at 23.5º angle to match the tilt of the earth",  
  "Time keeping device..find me", 
  "Displays a projected image for the view of large audience",  
  "First President of India-a lawyer & a scholar",
  "Essential childhood paper play!", 
  "Object used for drawing straight line and right angle"
  ]
  
var  Scrambled=[
    "l a d h i",
    "d m n a p c i e",
    "e x e w b",
    "t a a q r u i t n n",
    "c l a i s o _ s a t n i g n d c",
    "e f l s _ i f s a t n o l i o ",
    "o t g o s u c n a i",
    "u i v s r"
    
  ] 

var Questions2=[]

var Clue3=[
  "BlackBoard",
  "dustbin",
  "plant",
  "books and files",
  "flame burner"
  ]

 var Riddle=[
"What has a head and a tail but no body?",
"I’m tall when I’m young, and I’m short when I’m old. What am I?",
"I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost everybody. What am I?",
"What can you catch, but not throw?",
"What is always in front of you but can’t be seen or felt?",
"What can you break, even if you never pick it up or touch it?",
"What runs all around a backyard, yet never moves?",
"The more of this is there , the less you see. What is it?",
"The person who makes it has no need of it; the person who buys it has no use for it. The person who uses it can neither see nor feel it. What is it?",
"I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?"

 ] 
 var ansOfRiddle=[
"coin",
"candle",
"pencil",
"cold",
"future",
"promise",
"fence",
"darkness",
"coffin",
"fire"
 ]

 var Hint=[
  "We can buy a candy with it",
  "It illuminates light",
  "You use it in schools",
  "It is a common virus",
  "It's related to time",
  "To say definitely that you will give/do something",
  "It is a protective boundry for your house",
  "It is caused by absence of light",
  "It's used when people die",
  "It gives heat"
   ]
  

function preload(){
wrong_music=loadSound('sound/wrong.mp3')
die_music=loadSound('sound/die.mp3')
correct_music=loadSound('sound/correct.mp3')
logo_music=loadSound('sound/logo.mp3')
cough_music=loadSound('sound/cough_man.mp3')
crowd_music=loadSound('sound/crowd cough.mp3')
win_music=loadSound('sound/win.mp3')
img0=loadImage('images/screen-0.jpg');
img1=loadImage('images/screen 1.jpg');
img2=loadImage('images/screen 2.jpg');
img3=loadImage('images/screen 3.jpg');
room1=loadImage('images/Room-1.jpg');
room1_box=loadImage('images/Room-1_box.jpg');
level1=loadImage('images/level1.jpg');
virusimg=loadAnimation('images/v1.png','images/v2.png','images/v3.png','images/v4.png'
,'images/v5.png','images/v6.png','images/v7.png','images/v8.png');
marketimg=loadImage('images/Market.jpg')
Left=loadImage('images/Boy_l.png')
Right=loadImage('images/Boy_r.png')
left=loadAnimation('images/Left_l.png','images/Left_r.png')
right=loadAnimation('images/Right_l.png','images/Right_r.png')
up=loadAnimation('images/Up_l.png','images/Up_r.png')
down=loadAnimation('images/Down_l.png','images/Down_r.png')
maskimg=loadImage('images/Mask.png')
sanitizerimg=loadImage('images/Sanitizer.png')
haldiimg=loadImage('images/Haldi.png')
antitodeimg=loadImage('images/antitode.png')
left_stand=loadImage('images/Left.png')
right_stand=loadImage('images/Right.png')
up_stand=loadImage('images/Up.png')
down_stand=loadImage('images/Down.png')
level2=loadImage('images/level2.jpg');
level3=loadImage('images/level3.jpg');
room2=loadImage('images/Room-2.jpg')
room3=loadImage('images/Room-3.jpg')
end=loadImage('images/End.jpg')
maze=loadImage('images/maze.jpg')
labdoor=loadImage('images/labDoor.jpg')
win=loadImage('images/win.jpg')
message1=loadImage('images/message1.jpg')
message2=loadImage('images/message2.jpg')
message3=loadImage('images/message3.jpg')
win1=loadImage('images/win1.jpg')
win2=loadImage('images/win2.jpg')
win3=loadImage('images/win3.jpg')
win4=loadImage('images/play_again.jpg')
message4=loadImage('images/message4.jpg')
}


function setup() {
  let can=createCanvas(Width,Height)
 //can.position(0,0,'fixed')
 database = firebase.database();

  game = new Game()
  game.start()
  game.getState()
  player.getCount()
 
 q=new Q()
 q.index=0
 score=new Score()
 
 m=new Maze()

 setInterval(timeIt, 1000);
 virusGroup = new Group();
 virusGroup2 = new Group();
 man = createSprite(1,Height-150,100,100)
 man.scale=Height/700
 man.addImage("Right",Right)
 man.addImage("Left",Left)
 man.velocityX=man_vel;
 man.visible=false

 

 wall1 = createSprite(Width/18,Height/2,Width/95,Height/1.15)

 wall2 = createSprite(Width/1.083,Height/2,Width/95,Height/1.15)

 wall3 = createSprite(Width/2.05,Height/12.3,Width/1.15,Width/95)
 
 wall4 = createSprite(Width/2.05,Height/1.07,Width/1.15,Width/95)

 wall5 = createSprite(Width/1.64,Height/6.5,Width/1.55,Width/95)

 wall6 = createSprite(Width/1.54,Height/4.5,Width/3.7,Width/95)

 wall7 = createSprite(Width/3.1,Height/4.5,Width/3.9,Width/95)

 wall8 = createSprite(Width/2.45,Height/5.2,Width/95,Height/17)

 wall9 = createSprite(Width/5,Height/2.5,Width/95,Height/2.8)

 wall10 = createSprite(Width/8.35,Height/2.6,Width/95,Height/4.2)

 wall11 = createSprite(Width/1.17,Height/2.8,Width/95,Height/2.6)

 wall12 = createSprite(Width/1.165,Height/1.33,Width/95,Height/4.4)

 wall13 = createSprite(Width/1.29,Height/1.82,Width/95,Height/2)

 wall14 = createSprite(Width/1.39,Height/1.6,Width/95,Height/4.2)

 wall15 = createSprite(Width/1.4,Height/2.8,Width/95,Height/6.8)

 wall16 = createSprite(Width/3.8,Height/2.6,Width/95,Height/5)

 wall17 = createSprite(Width/3.95,Height/1.55,Width/95,Height/5.4)

 wall18 = createSprite(Width/5,Height/1.38,Width/95,Height/5.8)

 wall19 = createSprite(Width/1.55,Height/1.95,Width/95,Height/3.1)

 wall20 = createSprite(Width/3.05,Height/1.95,Width/95,Height/3.1)

 wall21 = createSprite(Width/8.3,Height/1.4,Width/95,Height/3.5)

 wall22 = createSprite(Width/1.51,Height/3.9,Width/95,Height/17)

 wall23 = createSprite(Width/1.37,Height/1.2,Width/95,Height/17)

 wall24 = createSprite(Width/2.96,Height/1.3,Width/95,Height/17)

 wall25 = createSprite(Width/2.53,Height/1.43,Width/95,Height/17)

 wall26 = createSprite(Width/2.53,Height/1.95,Width/95,Height/5)

 wall27 = createSprite(Width/2.05,Height/3.4,Width/2.2,Width/95)

 wall28 = createSprite(Width/2.55,Height/2.8,Width/7,Width/95)

 wall29 = createSprite(Width/1.7,Height/2.75,Width/7.5,Width/95)

 wall30 = createSprite(Width/1.23,Height/3.3,Width/15,Width/95)

 wall31 = createSprite(Width/1.65,Height/1.95,Width/15,Width/95)

 wall32 = createSprite(Width/6,Height/1.75,Width/13,Width/95)

 wall33 = createSprite(Width/1.47,Height/1.73,Width/15,Width/95)

 wall34 = createSprite(Width/3.4,Height/1.78,Width/15,Width/95)

 wall35 = createSprite(Width/11,Height/2.2,Width/15,Width/95)

 wall36 = createSprite(Width/3.4,Height/2.6,Width/15,Width/95)

 wall37 = createSprite(Width/1.42,Height/1.26,Width/7,Width/95)

 wall38 = createSprite(Width/2.6,Height/1.26,Width/2.7,Width/95)

 wall39 = createSprite(Width/1.83,Height/1.5,Width/5.5,Width/95)

 wall40 = createSprite(Width/2.8,Height/1.5,Width/13,Width/95)

 wall41 = createSprite(Width/1.8,Height/1.37,Width/3.2,Width/95)

 wall42 = createSprite(Width/3.4,Height/1.35,Width/12,Width/95)

 wall43 = createSprite(Width/1.5,Height/1.155,Width/2.8,Width/95)

 wall44 = createSprite(Width/3.8,Height/1.155,Width/3.6,Width/95)

 wall45 = createSprite(Width/1.35,Height/1.45,Width/17,Width/95)

 wall46 = createSprite(Width/1.73,Height/2.05,Width/95,Height/9)

 wall47 = createSprite(Width/2.05,Height/2.35,Width/5.2,Width/95)

 wall48 = createSprite(Width/2.05,Height/1.65,Width/5.2,Width/95)

 
 virus1 = createSprite(Width/6.2,Height/6,Width/95,Width/95)
 virus1.addAnimation("v",virusimg)
 virus1.scale=Height/2500
 virus1.velocityY=5
 virus1.setCollider("circle",0,0,100)
 virusGroup2.add(virus1)
 
 virus2 = createSprite(Width/1.34,Height/3,Width/95,Width/95)
 virus2.addAnimation("v",virusimg)
 virus2.scale=Height/2500
 virus2.setCollider("circle",0,0,100)
 virus2.velocityY=7
 virusGroup2.add(virus2)

 virus3 = createSprite(Width/2.8,Height/1.2,Width/95,Width/95)
 virus3.addAnimation("v",virusimg)
 virus3.scale=Height/3500
 virus3.setCollider("circle",0,0,100)
 virus3.velocityX=-5
 virusGroup2.add(virus3)

 virus4 = createSprite(Width/1.9,Height/1.56,Width/95,Width/95)
 virus4.addAnimation("v",virusimg)
 virus4.scale=Height/3500
 virus4.setCollider("circle",0,0,100)
 virus4.velocityX=-6
 virusGroup2.add(virus4)

 virus5 = createSprite(Width/1.2,Height/1.43,Width/95,Width/95)
 virus5.addAnimation("v",virusimg)
 virus5.scale=Height/3500
 virus5.setCollider("circle",0,0,100)
 virus5.velocityY=-6
 virusGroup2.add(virus5)

 virus6 = createSprite(Width/4.3,Height/1.43,Width/95,Width/95)
 virus6.addAnimation("v",virusimg)
 virus6.scale=Height/3000
 virus6.setCollider("circle",0,0,100)
 virus6.velocityY=-7
 virusGroup2.add(virus6)

 virus7 = createSprite(Width/1.9,Height/2.5,Width/95,Width/95)
 virus7.addAnimation("v",virusimg)
 virus7.scale=Height/3500
 virus7.setCollider("circle",0,0,100)
 virus7.velocityX=6
 virusGroup2.add(virus7)


mazerunner = createSprite(Width/1.145,Height/8,Width/38,Height/35)
//  mazerunner = createSprite(Width/2,Height/2,Width/38,Height/35)
 mazerunner.addImage("left",left_stand)
 mazerunner.addImage("right",right_stand)
 mazerunner.addImage("up",up_stand)
 mazerunner.addImage("down",down_stand)
 mazerunner.addAnimation("r",right)
 mazerunner.addAnimation("l",left)
 mazerunner.addAnimation("u",up)
 mazerunner.addAnimation("d",down)
 mazerunner.scale=Height/5000


 haldi1 = createSprite(Width/1.145,Height/5.2,Width/38,Height/35)
 haldi1.addImage(haldiimg)
 haldi1.scale=Height/2000

 haldi2 = createSprite(Width/10,Height/2.3,Width/38,Height/35)
 haldi2.addImage(haldiimg)
 haldi2.scale=Height/2000

 mask1 = createSprite(Width/3.5,Height/1.6,Width/38,Height/35)
 mask1.addImage(maskimg)
 mask1.scale=Height/2000

 mask2 = createSprite(Width/3.5,Height/3,Width/38,Height/35)
 mask2.addImage(maskimg)
 mask2.scale=Height/2000

 sanitizer1 = createSprite(Width/1.48,Height/1.53,Width/68,Height/35)
 sanitizer1.addImage(sanitizerimg)
 sanitizer1.scale=Height/2500

 sanitizer2 = createSprite(Width/1.25,Height/2.6,Width/68,Height/35)
 sanitizer2.addImage(sanitizerimg)
 sanitizer2.scale=Height/2500

 
 antitode = createSprite(Width/2.05,Height/2,Width/45,Height/15)
 antitode.addImage(antitodeimg)
 antitode.scale=Height/2000



 virus1.visible=false
 virus2.visible=false
 virus3.visible=false
 virus4.visible=false
 virus5.visible=false
 virus6.visible=false
 virus7.visible=false
 haldi1.visible=false
 haldi2.visible=false
 mask1.visible=false
 mask2.visible=false
 sanitizer1.visible=false
 sanitizer2.visible=false 
 antitode.visible=false
 mazerunner.visible=false

  wall1.visible=false
  wall2.visible=false
  wall3.visible=false
  wall4.visible=false
  wall5.visible=false
  wall6.visible=false
  wall7.visible=false
  wall8.visible=false
  wall9.visible=false
  wall10.visible=false
  wall11.visible=false
  wall12.visible=false
  wall13.visible=false
  wall14.visible=false
  wall15.visible=false
  wall16.visible=false
  wall17.visible=false
  wall18.visible=false
  wall19.visible=false
  wall20.visible=false
  wall21.visible=false
  wall22.visible=false
  wall23.visible=false
  wall24.visible=false
  wall25.visible=false
  wall26.visible=false
  wall27.visible=false
  wall28.visible=false
  wall29.visible=false
  wall30.visible=false
  wall31.visible=false
  wall32.visible=false
  wall33.visible=false
  wall34.visible=false
  wall35.visible=false
  wall36.visible=false
  wall37.visible=false
  wall38.visible=false
  wall39.visible=false
  wall40.visible=false
  wall41.visible=false
  wall42.visible=false
  wall43.visible=false
  wall44.visible=false
  wall45.visible=false
  wall46.visible=false
  wall47.visible=false
  wall48.visible=false

 for(var i=0;i<16;i++){
  q.getQ(i)
  q.getA(i)
 Options[i]=[]
  for(var a=0;a<4;a++){
                  
    q.getO(i,a)
   } 
              
    }
   for(var i=0;i<8;i++){
     q.getW(i)
      }
    for(var i=0;i<5;i++){
        score.getM(i)
        score.getS(i)
        score.getN(i) 
      }  
      

// console.log(Options)
// console.log(Answers)
// console.log(Questions)
// console.log(Questions2)
// console.log(Minutes)
// console.log(Seconds)
// console.log(Name)
}




function  draw() {
//document.body.style.overflow = "hidden";
//background(0)

if(gameState === 0.5){
  game.logo();
}
if(gameState === 1){
  game.start2();
}


if(gameState === 2){
  game.start3();
  x=10
}

if(gameState === 3){
  clear();
  game.start4()
}
if(gameState === 4){
  game.start5()
  seconds=60
}

if(gameState === 4.5){
  clear();
  game.message1()
}
if(gameState === 5){
  clear();
  game.start6()
}
if(gameState === 6){
  clear();
  game.room1();
 
  if(seconds === 0){
    seconds=0

  }
} 

if(gameState === 7){
  clear();
  game.start7()
}

if(gameState === 7.5){
  clear();
  game.message2()
}

if(gameState === 8){
  clear();
  game.start8()
}

if(gameState === 9){
  clear();
  game.room2()

}

if(gameState === 10){
  clear();
  game.start9()
}
if(gameState === 11){
  clear();
  game.room3()
}
if(gameState === 11.5){
  clear();
  game.message3()
}

if(gameState === 12){
  clear();
  game.start10()
}
if(gameState === 13){
  clear();
  game.maze1()
}
if(gameState === "end"){
  clear();
  game.end()
}

if(gameState === "win"){
  clear();
  game.win()
}
if(gameState!="win"){
  if(seconds===0){
    minutes=minutes-1
    seconds=60

}


}

if(man.x<Width){

}else{
man_vel=-10
man.changeImage("Left",Left)

}

if(man.x<0){
man_vel=10
man.changeImage("Right",Right)
}
man.velocityX=man_vel;



  mazerunner.collide(wall1)
  mazerunner.collide(wall2)
  mazerunner.collide(wall3)
  mazerunner.collide(wall4)
  mazerunner.collide(wall5)
  mazerunner.collide(wall6)
  mazerunner.collide(wall7)
  mazerunner.collide(wall8)
  mazerunner.collide(wall9)
  mazerunner.collide(wall10)
  mazerunner.collide(wall11)
  mazerunner.collide(wall12)
  mazerunner.collide(wall13)
  mazerunner.collide(wall14)
  mazerunner.collide(wall15)
  mazerunner.collide(wall16)
  mazerunner.collide(wall17)
  mazerunner.collide(wall18)
  mazerunner.collide(wall19)
  mazerunner.collide(wall10)
  mazerunner.collide(wall20)
  mazerunner.collide(wall21)
  mazerunner.collide(wall22)
  mazerunner.collide(wall23)
  mazerunner.collide(wall24)
  mazerunner.collide(wall25)
  mazerunner.collide(wall26)
  mazerunner.collide(wall27)
  mazerunner.collide(wall28)
  mazerunner.collide(wall29)
  mazerunner.collide(wall30)
  mazerunner.collide(wall31)
  mazerunner.collide(wall32)
  mazerunner.collide(wall33)
  mazerunner.collide(wall34)
  mazerunner.collide(wall35)
  mazerunner.collide(wall36)
  mazerunner.collide(wall37)
  mazerunner.collide(wall38)
  mazerunner.collide(wall39)
  mazerunner.collide(wall40)
  mazerunner.collide(wall41)
  mazerunner.collide(wall42)
  mazerunner.collide(wall43)
  mazerunner.collide(wall44)
  mazerunner.collide(wall45)
  mazerunner.collide(wall46)
  mazerunner.collide(wall47)
  mazerunner.collide(wall48)
  



  if(virusGroup2.isTouching(mazerunner)){
    counting()
    if(count===frameCount){
    wrong_music.play()
    cough_music.play()
    subtraction()
    state=2
    }
    
    if(frameCount>count+60){
    state=1
    
    }
    }
    
    if(virus1.isTouching(wall32)){

      virus1.velocityY=-3
   
     }
     if(virus1.isTouching(wall3)){
   
       virus1.velocityY=3
    
      } 

    if(virus6.isTouching(wall38)){

        virus6.velocityY=-7
     
       }
    if(virus6.isTouching(wall7)){
     
        virus6.velocityY=7
      
      } 

    if(virus3.isTouching(wall21)){

        virus3.velocityX=5
     
    }
    if(virus3.isTouching(wall23)){
     
        virus3.velocityX=-5
      
    } 
    
    if(virus2.isTouching(wall45)){

          virus2.velocityY=-5
       
      }
      if(virus2.isTouching(wall6)){
       
          virus2.velocityY=5
        
      }
          
    if(virus5.isTouching(wall43)){

      virus5.velocityY=-6
         
      }
     if(virus5.isTouching(wall30)){
         
        virus5.velocityY=6
          
      }     

      if(virus4.isTouching(wall20)){

        virus4.velocityX=6
           
        }
       if(virus4.isTouching(wall19)){
           
        virus4.velocityX=-6
            
        }

    if(virus7.isTouching(wall20)){

      virus7.velocityX=6
             
    }
      if(virus7.isTouching(wall19)){
             
        virus7.velocityX=-6
              
      }
        
    addition()

drawSprites() 



}



function timeIt(){
  seconds=seconds-1
  
}

function addition(){
  
  
  if(gameState===13){
  if(mazerunner.isTouching(antitode)){
    store_sec=seconds;
    store_min=minutes;
    
    score.checkScore()
    seconds=60
    antitode.destroy()
    win_music.play()
    gameState="win"
    player.update()
  }
  }
  
  if(mazerunner.isTouching(mask1)){
   life=life+1
   x1=x1+Width/30
   mask1.x=x1
   mask1.y=y1
   correct_music.play()

  
  }
  
  if(mazerunner.isTouching(mask2)){

    life=life+1
    x1=x1+Width/30
    mask2.x=x1
    mask2.y=y1
    correct_music.play()

  }
  
   if(mazerunner.isTouching(sanitizer1)){
    life=life+1
    x1=x1+Width/30
    sanitizer1.x=x1
    sanitizer1.y=y1
    correct_music.play()
  
  }
  
   if(mazerunner.isTouching(sanitizer2)){
    life=life+1
    x1=x1+Width/30
    sanitizer2.x=x1
    sanitizer2.y=y1
    correct_music.play()
  }


   if(life===1){
    x1=Width/3
    y1=Height/26
    x2=Width/3
    y2=Height/26
  }




if(mazerunner.isTouching(haldi1)){
    minutes=minutes+1
    haldi1.destroy()
    correct_music.play()
  
  };
  
   if(mazerunner.isTouching(haldi2)){
    minutes=minutes+1
    haldi2.destroy()
    correct_music.play()
  
  };


}

function subtraction() {

  
  if(life===1){
     mazerunner.x=Width/1.145
     mazerunner.y=Height/8
     
    
    }
  
   
  if(life>1){
    x2=x2+Width/30
    checkmask()
    
  }
  

}






function checkmask() {
if(mask1.x===x2&&mask1.y===y2){

mask1.destroy()
life=life-1
}
if(mask2.x===x2&&mask2.y===y2){

  mask2.destroy()
  life=life-1
}
if(sanitizer1.x===x2&&sanitizer1.y===y2){

  sanitizer1.destroy()
  life=life-1  
}
if(sanitizer2.x===x2&&sanitizer2.y===y2){
  
  sanitizer2.destroy()
  life=life-1    
}

}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    mazerunner.velocityX=0;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("up",up_stand)
  } 
   if (keyCode === DOWN_ARROW) {
    mazerunner.velocityX=0;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("down",down_stand)
  }
  if (keyCode === RIGHT_ARROW) {
    mazerunner.velocityX=0;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("right",right_stand)
  }
  if (keyCode === LEFT_ARROW) {
    mazerunner.velocityX=0;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("left",left_stand)
  }
  return false; // prevent default
}

function counting(){
if(state===1){
count=frameCount
}

}
