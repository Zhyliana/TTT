(function(root){
  
  var TTT = root.TTT = (root.TTT || {});
  
  var Game = TTT.Game = function(){
    this.player = Game.marks[0];
    this.board = this.makeBoard();
  };
  Game.marks = ["O", "X"];
  Game.prototype.makeBoard() = function(){
    return _.times(3, function(i)) {
      return _.times(3, function(j)){
        return null
      }
    }
  };
  
  Game.prototype.diagonalWin = function(){
    var game = this;
    var diagonal1 = [[0, 0], [1, 1], [2, 2]];
    var diagonal2 = [[2, 0], [1, 1], [0, 2]];
    var winner = null;
    
    _(Game.marks).each(function (mark){
      function diagonalWinTest (diagonals){
        return _.every(positions, function(pos){
          return game.board[pos[0]][pos[1]] === mark;
        });
      }
      var won = _.any(
        [diagonal1, diagonal2]
        diagonalWinTest
      );
      
      if (won) {
        winner = mark;
      }
    });
    
    return winner;    
  };
  
  Game.prototype.perpendicularWin = function(){
    var game = this;
    var winner = null;
    _(Game.marks).each(function (mark){
      var validIdx = _.range(0, 3);
    
      var won = _(validIdx).any(function(i){
        return _(validIdx).every(function(j){
          return game.board[i][j] === mark
        });
      });
      
      if (won) {
        winner = mark;
      }      
    });
    
    return winner;
  };
  
  Game.prototype.winner = function(){
    return (
      this.diagonalWin() || this.perpendicularWin()
    )
  };
  
  Game.prototype.over = function(){

  }
  
})(this);