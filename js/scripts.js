$(document).ready(function(){
   $("button").click(function(event) {
      event.preventDefault();
      
      var suits = ["clubs", "diamonds", "hearts", "spades"]

      var ranks = ["ace", "king", "queen", "jack", "ten", "nine", "eight", "seven", "six", "five", "for", "three", "two"]

      suits.forEach(function(suit){
       ranks.forEach(function(rank){
           $("#result").append(rank + " of " + suit + ", ");

        });
      });

    });
});  
