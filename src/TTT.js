(function(root){
  
  var TTT = root.TTT = (root.TTT || {});
  
  var Game = TTT.Game = function(){
    this.playerO = "O";
    this.playerX = "X";
    this.board = this.makeBoard();
  };
  
  Game.prototype.makeBoard() = function(){
    return _.times(3, function(i)) {
      return _.times(3, function(j)){
        return null
      }
    }
  }
  
  Game.prototype.diagonalWin = function(){
    var game = this;
    var diagonal1 = [[0, 0], [1, 1], [2, 2]];
    var diagonal2 = [[2, 0], [1, 1], [0, 2]];
    var winner = null
    
    _(Game.marks).each(function (mark){
      var validIdx = _.range(0,3);
      
      var won = _(validIdx).any(function(i){
        return _(validIdx).every(function(j){
          return game.board[i][j] == mark
        })
      })
      
      if (won) {
        winner = mark;
      }
    })
    

  
  return winner;
    
  };
  
})(this);