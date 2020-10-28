class Game {
constructor(){
  this.rand
  this.x=17
  this.rand2
  this.no=0
  this.noOfQ=0
  this.xx=8
  this.rand3
  this.noOfS=0
  this.rand4
  this.number=0

  this.hint = createImg('images/hint_but.png');
  this.hint.size(Width/5,Height/8);
  this.hint.position(Width/5*4, Height/10*8);
  this.hint.style('zIndex',1)

  this.riddle=createDiv('')
  this.riddle.style('fontSize',Width/40+"px")
  this.riddle.style('zIndex',1)
  this.riddle.style('fontWeight','bold')
  this.riddle.style('fontFamily','arial')
  this.riddle.style('color','white')
  this.riddle.position(Width/9,Height/6);
  this.riddle.style('right',Width/9+'px')
  
  this.room2Q1=createDiv('')
  this.room2Q1.style('fontSize',Width/40+"px")
  this.room2Q1.style('zIndex',1)
  this.room2Q1.style('fontWeight','bold')
  this.room2Q1.style('fontFamily','arial')
  this.room2Q1.style('color','white')
  this.room2Q1.position(Width/2-Width/7,Height/1.2-Width/4.5);

  this.room2Q2=createDiv('')
  this.room2Q2.style('fontSize',Width/40+"px")
  this.room2Q2.style('zIndex',1)
  this.room2Q2.style('fontWeight','bold')
  this.room2Q2.style('fontFamily','arial')
  this.room2Q2.style('color','white')
  this.room2Q2.position(Width/5.8,Height/6);
  this.room2Q2.style('right',Width/9+'px')

  this.inputbox = createInput("");
  this.inputbox.style('font-size',Height/13+'px');
  this.inputbox.style('border-radius', '35px');
  this.inputbox.style('zIndex',1)
  this.inputbox.style('border', 'hidden');
  this.inputbox.style('text-align','center');
  this.inputbox.size(Width/11*4.9,Height/13);
  this.inputbox.position(Width/2-Width/4, Height/2);


  this.clue=createDiv('')
  this.clue.style('fontSize',Width/40+"px")
  this.clue.style('zIndex',1)
  this.clue.style('color','white')
  this.clue.position(Width/2-Width/3.7,Height/13*12);

  this.cluebox = createImg('images/Box_blue.png')
  this.cluebox.size(Width/1.8,Height/7);
  this.cluebox.position(Width/2-Width/3.4,Height/7*6);

  this.txt=createDiv('')
  this.txt.style('fontSize',Width/20+"px")
  this.txt.style('zIndex',1)
  this.txt.style('fontWeight','bold')
  this.txt.style('fontFamily','arial')
  this.txt.style('color','white')
  this.txt.position(Width/2-Width/3,Height/2-Height/2.6);

  this.hinttxt=createDiv('')
  this.hinttxt.style('fontSize',Width/40+"px")
  this.hinttxt.style('zIndex',1)
  this.hinttxt.style('fontWeight','bold')
  this.hinttxt.style('fontFamily','arial')
  this.hinttxt.style('color','white')
  this.hinttxt.position(Width/2-Width/3.7,Height/13*12);

  this.box = createImg('images/Box.png')
  this.box.size(Width/1.2,Height/1.3);
  this.box.position(Width/2-Width/2.5,Height/2-Height/2.6);
  this.box.style('opacity','70%')
  
  this.all = createImg('images/blank.png')
//this.all.style('position','absolute')
  this.all.size(Width/13,Height/12);
  this.all.position(Width/3-Width/14,Height/4+Height/20);

  this.butt1=createImg('images/A.png')
  this.butt1.size(Width/30,Width/30);
  this.butt1.position(Width/7.5,Height/17*7);

  this.butt2=createImg('images/B.png')
  this.butt2.size(Width/30,Width/30);
  this.butt2.position(Width/2.2,Height/17*7);

  this.butt3=createImg('images/C.png')
  this.butt3.size(Width/30,Width/30);
  this.butt3.position(Width/7.5,Height/17*11.5);

  this.butt4=createImg('images/D.png')
  this.butt4.size(Width/30,Width/30);
  this.butt4.position(Width/2.2,Height/17*11.5);

  this.next = createImg('images/Next.png');
  this.next.size(Width/5,Height/8);
  this.next.position(Width/5*4, Height/10*8);
 
  this.submit = createImg('images/submit.png');
  this.submit.position(Width/2-Width/9,Height/2+Height/6);
  this.submit.size(Width/5,Height/8);
  
  this.retry = createImg('images/TryAgain.png');
  this.retry.position(Width/2-Width/9,Height/2+Height/6);
  this.retry.size(Width/4,Height/8);

  this.replay = createImg('images/playagain_but.png');
  this.replay.position(Width/2-Width/9,Height/2+Height/5);
  this.replay.size(Width/3.7,Height/8);

  this.correct = createImg('images/correct.png');
  this.correct.size(Width/4,Height/8);
  this.correct.position(Width/2-Width/8, Height/10*8);

  this.wrong = createImg('images/wrong.png');
  this.wrong.size(Width/4,Height/8);
  this.wrong.position(Width/2-Width/8, Height/10*8);

}


    getState(){
        var gameStateRef  = database.ref("players/player"+player.index);
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    



    async start(){ 
      this.hint.hide()
      this.txt.hide() 
      this.box.hide() 
      this.butt1.hide()  
      this.butt2.hide()  
      this.butt3.hide()  
      this.butt4.hide()  
      this.next.hide()  
      this.correct.hide()  
      this.wrong.hide() 
      this.cluebox.hide()  
      this.clue.hide()
      this.inputbox.hide()
      this.room2Q1.hide()
      this.room2Q2.hide()
      this.submit.hide()
      this.retry.hide()
      this.riddle.hide()
      this.hinttxt.hide()
      this.replay.hide()
      form = new Form()
        if(gameState === 0){
        form.display();
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
    
}

}

logo(){
background(img0)

if(seconds<55){
  seconds=60
  gameState+=0.5
  player.update()


}

}



start2(){
if(gameState === 1){

form.display2()
}

}

start3(){
    if(gameState === 2){
     
      form.display3()
  }
    
    }

    start4(){
      if(gameState === 3){
        background(marketimg)
        spawnVirus()
        man.visible=true
        textSize(Width/48)
        textStyle(BOLD)
        fill(255);
        textLeading(Width/50) 
        text('My visit to a market...',Width/20,Height/20)
        if(virusGroup.isTouching(man)){
          man.destroy()
          virusGroup.destroyEach()
          gameState+=1
        
        }
      
        
      
      } 
      }

      start5(){
        if(gameState === 4){
          background(marketimg)
          this.box.show()
          this.txt.show() 
          this.txt.html("I wish I had put on a mask. I am infected by Covid-19 and have limited time. Please save me")
          this.txt.style('top',Width/10+'px')
          this.txt.style('left',Width/7+'px')
          this.txt.style('right',Width/9+'px')
          this.txt.style('color','white')
          this.next.size(Width/4,Height/8);
          this.next.position(Width/4*3, Height/4*3);
          this.next.elt.src="images/continue_but.png";
          this.next.show()
        
          this.next.mousePressed(()=>{
            minutes=10
            seconds=60
            crowd_music.stop()
            qstate=0
            this.all.show()
            gameState+=0.5
            
          });
        
        
        }
        }

        message1(){
          background(message1)
          this.next.hide()
          this.txt.hide()
          this.box.hide()
          crowd_music.stop()
          if(seconds===55){
            seconds=60
            gameState+=0.5
            player.update()
          } 
        }

      start6(){
       background(level1)
       
        if(seconds===55){
        seconds=60
        gameState+=1
        player.update()
        
        this.clue.show()
        this.cluebox.show()
        cstate=1
      }
      
      
      
        
      }
  

      start7(){
        if(gameState === 7){
        background(room1)
        this.box.show()
        this.txt.show() 
        this.txt.html("Congratulations...You are 1 step closer to the Antidote. Level-1 complete")
        this.txt.style('top',Width/10+'px')
        this.txt.style('left',Width/7+'px')
        this.txt.style('right',Width/9+'px')
        this.txt.style('color','purple')
        this.next.size(Width/4,Height/8);
        this.next.position(Width/4*3, Height/4*3);
        this.next.elt.src="images/continue_but.png";
        this.next.show()
        
          this.next.mousePressed(()=>{
            seconds=60
            gameState+=0.5
            player.update()
          });
      
        }}

        message2(){
          background(message2)
          this.next.hide()
          this.txt.hide()
          this.box.hide()
          if(seconds===55){
            seconds=60
            gameState+=0.5
            player.update()
          } 
        }
        
        start8(){
          background(level2)
          
           if(seconds===57){
           seconds=store_sec
           minutes=store_min
           gameState+=1
           player.update()
           
          this.clue.show()
          this.cluebox.show()
          // wstate=1
         }
         
           this.no=0
           cstate=1
           rr=7
           this.next.hide()
           this.txt.hide()
           this.box.hide()
          }
          
          start9(){
            background(room2)
            if(gameState === 10){
            this.box.show()
            this.txt.show() 
            this.txt.html("Congratulations...You are 1 step closer to the Antidote. Level-2 complete.Solve the next riddles to open lab's door")
            this.txt.style('top',Width/10+'px')
            this.txt.style('left',Width/7+'px')
            this.txt.style('right',Width/9+'px')
            this.txt.style('color','purple')
            this.next.size(Width/4,Height/8);
            this.next.position(Width/4*3, Height/4*3);
            this.next.elt.src="images/continue_but.png";
            this.next.show()
            this.all.hide()
              
            this.next.mousePressed(()=>{
                this.box.hide()
                this.txt.hide() 
                this.next.hide()
                seconds=60
                gameState+=1
                player.update()
                seconds=store_sec
                this.box.show()
                this.riddle.show()
                this.inputbox.show()
                this.submit.show()
                rr=10
                rstate=1
                this.hint.show()
                this.all.hide()
              });
          
            }}
            
            message3(){
              background(message3)
              this.next.hide()
              this.txt.hide()
              this.box.hide()
              if(seconds===55){
                seconds=60
                gameState+=0.5
                player.update()
              } 
            }

            start10(){
              background(level3)
              
               if(seconds===57){
               seconds=store_sec
               gameState+=1
               player.update()
               
               virus1.visible=true
               virus2.visible=true
               virus3.visible=true
               virus4.visible=true
               virus5.visible=true
               virus6.visible=true
               virus7.visible=true
               haldi1.visible=true
               haldi2.visible=true
               mask1.visible=true
               mask2.visible=true
               sanitizer1.visible=true
               sanitizer2.visible=true 
               antitode.visible=true
               mazerunner.visible=true
              
              }else{
              this.box.hide()
            }
               rr=10
               this.next.hide()
               this.txt.hide()
              }


end(){
      background(end)
      this.txt.hide() 
      this.box.hide() 
      this.butt1.hide()  
      this.butt2.hide()  
      this.butt3.hide()  
      this.butt4.hide()  
      this.next.hide()  
      this.correct.hide()  
      this.wrong.hide() 
      this.cluebox.hide()  
      this.clue.hide()
      this.inputbox.hide()
      this.room2Q1.hide()
      this.room2Q2.hide()
      this.submit.hide()
      this.riddle.hide()
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
      this.retry.mousePressed(()=>{
        this.retry.hide()
        window.location.reload();
      });
      


    }
  
              

room1(){
  background(room1)
  this.next.elt.src="images/Next.png";
  this.next.position(Width/5*4, Height/10*8);
  this.next.size(Width/5,Height/8);
  if(Clue[this.rand]==="I am an idiot box... find me and click on me"){

  this.all.size(Width/4.5,Height/3);
  this.all.position(Width/2-Width/9,Height/2-Height/4);

  
}else if(Clue[this.rand]==="I was invented by 2 brothers... find me"){

  this.all.size(Width/13,Height/12);
  this.all.position(Width/3-Width/14,Height/4+Height/20);

  
}else if(Clue[this.rand]==="Michael Jordan the player... find me"){

 this.all.size(Width/14,Height/8);
 this.all.position(Width/4-Width/4.3,Height/4*3+Height/23);

  
}else if(Clue[this.rand]==="It takes 20 years to dispose of me..."){

 this.all.size(Width/24,Height/12);
 this.all.position(Width/2+Width/4,Height/2+Width/6.2); 

  
}else if(Clue[this.rand]==="My average lifetime is around 1,000 hours... find me"){

 this.all.size(Width/24,Height/12);
 this.all.position(Width/2+Width/4.8,Height/4+Width/10);

  
}else if(Clue[this.rand]==="I have magnets in me and I vibrate... find me"){

  this.all.size(Width/17,Height/5);
  this.all.position(Width/3-Width/18,Height/4+Width/20);

  
}else if(Clue[this.rand]==="You feel cozy on me"){

  this.all.size(Width/5,Height/3);
  this.all.position(Width/2+Width/5,Height/2+Height/20);
  
}

if(minutes===-1){
this.retry.show()
die_music.play()
gameState="end"

}



  if(cstate===1){
    rr=rr-1
    this.rand=round(random(0,rr))
    cstate=2
    
    
  
  }
   
  if(cstate===2){
    this.clue.html(Clue[this.rand])
  
  }
  

  this.all.mousePressed(()=>{
  
  this.butt1.show()  
  this.butt2.show()  
  this.butt3.show()  
  this.butt4.show() 
  this.all.hide()
  this.clue.hide()
  this.cluebox.hide()
  Clue.splice(this.rand,1)
  qstate=1
  

 });

if(qstate===1){
  background(room1_box)
  this.x=this.x-1
  r = round(random(0,this.x))
  
  qstate=2
  
  

}
 
if(qstate===2){
  background(room1_box)
  showText()
  
}
if(qstate==="right"){
this.next.show()
this.correct.show()
this.butt1.hide()
this.butt2.hide()
this.butt3.hide()
this.butt4.hide()
this.box.show()
correct_music.play()
qstate=0
}


if(qstate==="wrong"){
this.box.show()
this.next.show()
this.wrong.show()
this.butt1.hide()
this.butt2.hide()
this.butt3.hide()
this.butt4.hide()
minutes=minutes-1
wrong_music.play()
qstate=0

}
this.butt1.mousePressed(()=>{
 ans=1   
  if(Answers[r]===ans){
    qstate="right"
    }else{
      qstate="wrong"
    
    }
});

this.butt2.mousePressed(()=>{
  ans=2
  if(Answers[r]===ans){
    qstate="right"
    }else{
      qstate="wrong"
    
    }
});

  
this.butt3.mousePressed(()=>{
  ans=3 
  if(Answers[r]===ans){
    qstate="right"
    }else{
      qstate="wrong"
    
    }
});

this.butt4.mousePressed(()=>{
  ans=4 
  if(Answers[r]===ans){
    qstate="right"
    }else{
      qstate="wrong"
    
    }
    
});
 
this.next.mousePressed(()=>{
  this.correct.hide()
  this.wrong.hide()
  this.next.hide()
  this.butt1.show()
  this.butt2.show()
  this.butt3.show()
  this.butt4.show()
  this.box.hide()
  Questions.splice(r,1)
  Options.splice(r,1)
  Answers.splice(r,1)
  this.noOfQ=this.noOfQ+1
  this.no=this.no+1
  correct_music.stop()
  wrong_music.stop()
  qstate=1
});

if(this.no===2){
  background(room1)
  this.correct.hide()
  this.wrong.hide()
  this.next.hide()
  this.butt1.hide()
  this.butt2.hide()
  this.butt3.hide()
  this.butt4.hide()
  cstate=1
  this.all.show()
  this.clue.show()
  this.cluebox.show()
  qstate=0
  this.no=0
  }




textSize(Width/30)
textStyle(BOLD)
fill(255);
text(minutes+":"+seconds,Width-Height/4.6,Height/13)

textSize(Width/40)
textStyle(BOLD)
fill(255);
text(player.name,Width/25,Height/18)

if(this.noOfQ===4&&musicstate===1){
cough_music.play()
musicstate=2
}
if(this.noOfQ===8){
    
  this.cluebox.hide()
  this.clue.hide() 
  store_sec=seconds;
  store_min=minutes;
  musicstate=1
  // score.checkScore()
  gameState+=1
  player.update()
   
  
  }








}
room2(){
  background(room2)
  this.next.elt.src="images/Next.png";
  this.next.size(Width/5,Height/8);
  this.next.position(Width/5*4, Height/10*8);
  //this.next.show()
  this.all.show()
  //this.all.size(Width/4.5,Height/3);
  //this.all.position(Width/2-Width/9,Height/2-Height/6);
  
  
  if(Clue2[this.rand3]==="Teachers explain their teachings here..find me"){

    this.all.size(Width/4,Height/3.5);
    this.all.position(Width/2-Width/9,Height/2-Height/4);
  
    
  }else if(Clue2[this.rand3]==="It tilts at 23.5º angle to match the tilt of the earth"){
  
    this.all.size(Width/17,Height/7);
    this.all.position(Width/3-Width/9,Height/4+Height/8);
  
    
  }else if(Clue2[this.rand3]==="Time keeping device..find me"){
  
   this.all.size(Width/20,Height/9);
   this.all.position(Width/4*3+Height/7,Height/4-Height/10);
  
    
  }else if(Clue2[this.rand3]==="Displays a projected image for the view of large audience"){
  
    this.all.size(Width/13,Height/8);
    this.all.position(Width/4*2-Height/3.4,Height/4-Height/4); 
  
    
  }else if(Clue2[this.rand3]==="First President of India-a lawyer & a scholar"){
  
    this.all.size(Width/13,Height/10);
    this.all.position(Width/4*2-Height/23,Height/4-Height/10); 
  
    
  }else if(Clue2[this.rand3]==="Essential childhood paper play!"){
  
    this.all.size(Width/20,Height/9);
    this.all.position(Width/6,Height/4*3-Height/8);
  
    
  }else if(Clue2[this.rand3]==="Object used for drawing straight line and right angle"){
  
    this.all.size(Width/11,Height/10);
    this.all.position(Width/4*2+Width/30,Height/4+Height/6);
    
  }
  
  
  if(minutes===-1){
    this.retry.show()
    die_music.play()
    gameState="end"
    }
  
  
  
  if(cstate===1){
    rr=rr-1
    this.rand3=round(random(0,rr))
    cstate=2
    
    
  
  }
   
  if(cstate===2){
    this.clue.html(Clue2[this.rand3])
  
  }
  
  this.all.mousePressed(()=>{
  this.box.show()
  this.submit.show()
  this.inputbox.show()
  this.clue.hide()
  this.cluebox.hide()
  this.all.hide()
  Clue2.splice(this.rand3,1)
  wstate=1
  
})
  
  this.submit.mousePressed(()=>{
    player_ans=this.inputbox.value()
    player_ans = player_ans.toLowerCase();
    if(player_ans===""){
      wstate="blank"
  }else{
    
    
    this.inputbox.value("")
    this.txt.hide()
    if(player_ans===Words[this.rand2]){
      wstate="right"
      
      }else{
        wstate="wrong"
        
      }
  
    Scrambled.splice(this.rand2,1)
    Words.splice(this.rand2,1)
    Questions2.splice(this.rand2,1)
    this.submit.hide()  
    this.inputbox.hide()
    //wstate=1

  }
})
if(wstate==="blank"){
  this.txt.show() 
  this.txt.html("You can not leave your answer blank")
  this.txt.size()
  this.txt.style('left',Width/2-Width/10+'px')
  this.txt.style('right',Width/20+'px')
  this.txt.style('fontSize',Width/40+"px")
  this.txt.style('fontWeight','bold')
  this.txt.style('fontFamily','arial')
  this.txt.style('color','red')
  this.txt.position(Width/2-Width/5,Height/6*4.8);//Width/2-Width/9,Height/2+Height/6
  //text("You can not leave your answer blank",Width/2-Width/7,Height/2-Height/6)
  this.submit.show()
  
}
    if(wstate==="right"){
    this.room2Q1.hide()
    this.room2Q2.hide()
    this.correct.show()
    this.next.show()
    correct_music.play()
    wstate=0
  }
    
    if(wstate==="wrong"){
    this.room2Q1.hide()
    this.room2Q2.hide()
    this.wrong.show()
    this.next.show()
    wrong_music.play()
    minutes=minutes-1
    wstate=0
    }
    
  this.next.mousePressed(()=>{
  this.no=this.no+1
  this.correct.hide()
  this.wrong.hide()
  correct_music.stop()
  wrong_music.stop()
  this.next.hide()
  this.noOfS=this.noOfS+1
  this.submit.show()  
  this.inputbox.show()
  wstate=1

});
 
if(this.no==2){
  this.correct.hide()
  this.wrong.hide()
  this.next.hide()
  this.box.hide()
  this.all.show()
  wstate=0
  this.submit.hide()  
  this.inputbox.hide()
  cstate=1
  this.clue.show()
  this.cluebox.show()
  this.no=0
}

  
  if(wstate===1){
  this.xx=this.xx-1
  this.rand2=Math.round(random(0,this.xx))
  wstate=2
  } 
  
  if(wstate===2){
  
  this.room2Q1.html(Scrambled[this.rand2])
  this.room2Q1.show()  
  this.room2Q2.html(Questions2[this.rand2])
  this.room2Q2.show()
  }
  
  if(this.noOfS===2&&musicstate===1){
    cough_music.play()
    musicstate=2
    }
    
    if(this.noOfS===4&&musicstate===1){
      cough_music.play()
      musicstate=2
      }
      
      if(this.noOfS===3){
        musicstate=1
        }
  if(this.noOfS===6){
    
    this.cluebox.hide()
    this.clue.hide() 
    store_sec=seconds;
    store_min=minutes;
    musicstate=1
    seconds=60
    gameState+=1
    player.update()
     
    
    }
  
  
textSize(Width/30)
textStyle(BOLD)
fill(255);
text(minutes+":"+seconds,Width-Height/4.6,Height/13)

textSize(Width/40)
textStyle(BOLD)
fill(255);
text(player.name,Width/25,Height/18)
  
  
  
  
  }

  
  
  
  
  room3(){
  background(labdoor)
  this.next.elt.src="images/Next.png";
  this.next.size(Width/5,Height/8);
  this.next.position(Width/5*4, Height/10*8);
  this.cluebox.elt.src="images/hint.png";
  
  if(minutes===-1){
    this.retry.show()
    die_music.play()
    gameState="end"
    }
    this.box.size(Width/1.1,Height/1.1);
    this.box.position(Width/2-Width/2.2,Height/2-Height/2.2);
  
  
  
   if(rstate===1){
    rr=rr-1
    console.log(rr)
    this.rand4=round(random(0,rr))
    rstate=2
    
  
   }
   
   if(rstate===2){
     this.riddle.html(Riddle[this.rand4])
  
  }
 
  this.submit.mousePressed(()=>{
    player_ans=this.inputbox.value()
    player_ans = player_ans.toLowerCase();
    if(player_ans===""){
      rstate="blank"
  }else{
    
    this.inputbox.value("")
    if(player_ans===ansOfRiddle[this.rand4]){
      rstate="right"
      }else{
        rstate="wrong"
      }
      ansOfRiddle.splice(this.rand4,1)
      Riddle.splice(this.rand4,1)
      Hint.splice(this.rand4,1)
      //wstate=1

  }
})
 
if(rstate==="blank"){
  this.txt.show() 
  this.txt.html("You can not leave your answer blank")
  this.txt.size()
  this.txt.style('left',Width/2-Width/10+'px')
  this.txt.style('right',Width/20+'px')
  this.txt.style('fontSize',Width/40+"px")
  this.txt.style('fontWeight','bold')
  this.txt.style('fontFamily','arial')
  this.txt.style('color','red')
  this.txt.position(Width/2-Width/5,Height/6*4.8);
  this.submit.show()
  
}
if(rstate==="right"){
  this.txt.hide()
  this.inputbox.hide()
  this.submit.hide()
  this.riddle.hide()
  this.cluebox.hide()
  this.hinttxt.hide()
  this.hint.hide()
  correct_music.play()
  this.correct.show()
  this.next.show()
  rstate=0
}
  
  if(rstate==="wrong"){
  this.txt.hide()
  this.inputbox.hide()
  this.submit.hide()
  this.riddle.hide()
  this.cluebox.hide()
  this.hinttxt.hide()
  this.hint.hide()
  wrong_music.play()
  this.wrong.show()
  this.next.show()
  minutes=minutes-1
  rstate=0
}
  
this.next.mousePressed(()=>{
this.correct.hide()
this.wrong.hide()
this.next.hide()
correct_music.stop()
wrong_music.stop()

this.number+=1
if(this.number<3){
  rstate=1
  this.submit.show()  
  this.inputbox.show()
  this.riddle.show()
  this.hint.show()
}

});

if(this.number===1&&musicstate===1){
  cough_music.play()
  musicstate=2
  }
  if(this.number===2){
    musicstate=1
    }
if(this.number===3&&musicstate===1){
  cough_music.play()
  musicstate=2
  } 
if(this.number===3){
  this.box.hide()
  this.inputbox.hide()
  this.submit.hide()
  this.riddle.hide()
  this.wrong.hide()
  this.correct.hide()
  this.next.hide()
  musicstate=1
  store_sec=seconds;
  store_min=minutes;
    seconds=60
    gameState+=0.5
    player.update()
}

this.hint.mousePressed(()=>{
this.cluebox.show()
this.cluebox.style('zIndex',1)
this.hinttxt.html(Hint[this.rand4])
this.hinttxt.show()


})


textSize(Width/30)
textStyle(BOLD)
fill(255);
text(minutes+":"+seconds,Width-Height/4.6,Height/13)

textSize(Width/40)
textStyle(BOLD)
fill(255);
text(player.name,Width/25,Height/18)
  




  }


maze1(){
background(maze)

  m.mazelevel()

textSize(Width/30)
textStyle(BOLD)
fill(255);
text(minutes+":"+seconds,Width-Height/4.6,Height/13)

textSize(Width/40)
textStyle(BOLD)
fill(255);
text(player.name,Width/25,Height/18)

  if(minutes===-1){
    this.retry.show()
    die_music.play()
    gameState="end"
    }


}


win(){
background(win)
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
  console.log(seconds)
  antitode.destroy()
  if(seconds<60&&seconds>52){
    background(win)
    
  }
  if(seconds<53&&seconds>39){
    background(message4)
    
  }
  if(seconds<40&&seconds>31){
    background(win1)
  }

  if(seconds<32&&seconds>23){
    background(win2)
  }
  if(seconds<24&&seconds>15){
    background(win3)
  }
  if(seconds<16){
    background(win4)
    this.replay.show()
  }
  this.replay.mousePressed(()=>{
    this.replay.hide()
    window.location.reload();
  });

}



}

function showText(){
  
  textSize(Width/35)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/40) 
  text(Questions[r],Width/5.8,Height/4,Width/1.4)
  //t.elt.style.zIndex=100
  
  textSize(Width/48)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/50) 
  text(Options[r][0],Width/5.8,Height/11*5,Width/3.5)

  textSize(Width/48)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/50) 
  text(Options[r][1],Width/2,Height/11*5,Width/3.5)

  textSize(Width/48)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/50) 
  text(Options[r][2],Width/5.8,Height/11*8,Width/3.5)

  textSize(Width/48)
  textStyle(BOLD)
  fill(255);
  textLeading(Width/50) 
  text(Options[r][3],Width/2,Height/11*8,Width/3.5)

   //Questions.splice(r,1)
  //Options.splice(r,1)
 //Answers.splice(r,1)
}

function spawnVirus(){
  if(World.frameCount % 20 === 0) {
  var x1=random(0,Width)
  var size=random(1.2,0.3)
  var virus;
  vel=vel+0.5;
  virus = createSprite(x1,-30,10,10)  ;
  virus.velocityY=vel;
  virus.addAnimation("virus",virusimg)
  virus.scale=size
  virus.lifetime=800
  virusGroup.add(virus);
}
}


