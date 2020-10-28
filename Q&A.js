class Q{
constructor(){
this.index=null
this.index2=1
this.index3=null
this.index4=0
this.index5=0
}
 
 
    getQ(x){
      this.index=this.index+1
      var QuestionRef  = database.ref('Question/Q'+this.index);
      QuestionRef.on("value",function(data){
      Questions[x] = data.val();
    })
   
   }


   getA(x){
    this.index4=this.index4+1
    var AnswersRef  = database.ref('Answers/Q'+this.index4);
    AnswersRef.on("value",function(data){
    Answers[x] = data.val();
  })
 
 }

   
 getO(x,y){
  this.index3=this.index3+1
  
  var OptionsRef  = database.ref('Options/Q'+this.index2+'/'+this.index3);
  OptionsRef.on("value",function(data){
    Options[x][y] = data.val();
   
  })
 
  if(this.index3%4===0){
    this.index2=this.index2+1
    this.index3=0
   }

}


getW(x){
  this.index5=this.index5+1
  var QuestionRef  = database.ref('ScrambledQ/Q'+this.index5);
  QuestionRef.on("value",function(data){
  Questions2[x] = data.val();
})


}



}