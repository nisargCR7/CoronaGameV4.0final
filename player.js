class Player {
    constructor(){
      this.name = null;
      this.time = null;
      this.index = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
      
    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
  
    update(){
      var playerIndex = "players/player"+this.index;
      database.ref(playerIndex).set({
        name:this.name,
        time:this.time,
        gameState:gameState
      });
    }
  
    update2(state){
      var playerIndex = "players/player"+this.index;
      database.ref(playerIndex).set({
       gameState:state
      });
    }
  
  
   
  }
  