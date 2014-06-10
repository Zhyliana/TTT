(function(root){
  var TTT = root.TTT = (root.TTT || {});
  
  var GameUI = TTT.GameUI = function(game, $rootEl){
    this.$el = $rootEl;
    this.game = game;
    this.setUpBoard();
    $("#board").on("click", ".empty", this.markBoard.bind(this));
  };
  
  GameUI.prototype.markBoard = function(event) {
     var $square = $(event.target);
     var pos = $square.data("pos");
     
     $square.toggleClass('empty clicked')
     $square.append("<div class=" + this.game.player + ">" + this.game.player + "</div>")
    
     if (this.game.move(eval(pos)) === true ) {
       var UI = this;
       $("#board").html("<div><h1>" + this.game.player + " won!</h1><br> <h4>Press any key to start new game</h4></div>")
       $("body").keypress(function(){
         UI.setUpBoard();
         UI.game = new TTT.Game();
       });
     };
   }
  
  GameUI.prototype.setUpBoard = function() {
    var boardString = "";
   
    for(var r = 0; r < 3; r++){
      for(var c = 0; c < 3; c++){
        boardString += "<div class=\"square empty\" data-pos=[" + r + "," + c +"]></div>";
      }
    };

    this.$el.html(boardString);
  };
  
  GameUI.prototype.startUp = function () {
    this.game.run();
    // this.$el.click(".square", markBoard(this));
  };
  
})(this);