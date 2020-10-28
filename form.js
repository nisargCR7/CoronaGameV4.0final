class Form {

    constructor() {
      this.continue = createImg('images/continue_but.png')
      this.continue.size(Width/4,Height/8);
      this.continue.position(Width/4*3, Height/4*3);
  
      this.input = createInput("");
      this.input.style('font-size',Height/13+'px');
      this.input.style('border-radius', '35px');
      this.input.style('border', 'hidden');
      this.input.style('text-align','center');
      this.input.size(Width/11*4.9,Height/13);
      this.input.position(Width/2-Width/4.5, Height/5+Height/30);
      

      this.button = createImg('images/start_but.png');
      this.button.size(Width/5,Height/7);
      this.button.position(Width/5*4, Height/8*6);
      
      this.playbut = createImg('images/play_but.png')
      this.playbut.size(Width/4,Height/7);
      this.playbut.position(Width/2-Width/8, Height/8*6);
      
      this.txt=createDiv('')
      this.txt.style('fontSize',Width/20+"px")
      this.txt.style('zIndex',1)
      this.txt.style('fontWeight','bold')
      this.txt.style('fontFamily','arial')
      this.txt.style('color','white')
      this.txt.position(Width/2-Width/3,Height/2-Height/2.6);
    
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.continue.hide()
    }
  
    show(){

  this.button.show();
  this.input.show();
  


}

    display(){
    background(img1)
    this.hide()
    this.hover(this.playbut,"play") 
      this.playbut.mousePressed(()=>{
    
    form.playbut.hide()
    logo_music.play()
    seconds=60
    playerCount+=1;
    gameState+=0.5;
    player.index = playerCount;
    player.update2(gameState)
    player.updateCount(playerCount);
      
  })
   
}
  
    display2(){
    background(img2)
    this.playbut.hide()
    this.continue.show();
    this.hover(this.continue,"continue")    
    this.continue.mousePressed(()=>{
      player.index = playerCount;
      gameState+=1;
      player.update2(gameState)
  
  
    })
    }
  
  display3(){
    background(img3)
    this.continue.hide();
    this.show();
    this.hover(this.button,"start")

    textSize(Width/30)
    textStyle(BOLD)
    fill(255);
    text("1.  "+Name[0]+' - '+Minutes[0]+":"+Seconds[0],Width/4,Height/10*5)  

    textSize(Width/30)
    textStyle(BOLD)
    fill(255);
    text("2.  "+Name[1]+' - '+Minutes[1]+":"+Seconds[1],Width/4,Height/10*6)

    textSize(Width/30)
    textStyle(BOLD)
    fill(255);
    text("3.  "+Name[2]+' - '+Minutes[2]+":"+Seconds[2],Width/4,Height/10*7)    
    
    textSize(Width/30)
    textStyle(BOLD)
    fill(255);
    text("4.  "+Name[3]+' - '+Minutes[3]+":"+Seconds[3],Width/4,Height/10*8)    
    
    textSize(Width/30)
    textStyle(BOLD)
    fill(255);
    text("5.  "+Name[4]+' - '+Minutes[4]+":"+Seconds[4],Width/4,Height/10*9) 

    this.button.mousePressed(()=>{
     
      
      player.name = this.input.value();
      if(player.name===""){
        this.txt.show() 
        this.txt.html("You can not leave your name blank")
        this.txt.size()
        this.txt.style('left',Width/2-Width/10+'px')
        this.txt.style('right',Width/20+'px')
        this.txt.style('fontSize',Width/40+"px")
        this.txt.style('fontWeight','bold')
        this.txt.style('fontFamily','arial')
        this.txt.style('color','red')
        this.txt.position(Width/2-Width/5,Height/10*9);
      }else{
      this.input.hide();
      this.button.hide();
      crowd_music.play()
      this.txt.hide();
      gameState+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
    
    }
    });


}
   


hover(x,y){

  x.mouseOver(()=>{
    x.elt.src="images/"+y+"_but_h.png";
    })
    
    x.mouseOut(()=>{
      x.elt.src="images/"+y+"_but.png";
      })


}


   


  }
  