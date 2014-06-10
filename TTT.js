(function(root){
  
  var TTT = root.TTT = (root.TTT || {});
  
  var Game = TTT.Game = function(){
    this.player = Game.marks[0];
    this.board = this.makeBoard();
  };
  
  Game.marks = ["O", "X"];
  
  Game.prototype.makeBoard = function () {
    return _.times(3, function (i) {
      return _.times(3, function (j) {
        return null;
      });
    });
  };
  
  Game.prototype.diagonalWin = function(){
    var game = this;
    var diagonal1 = [[0, 0], [1, 1], [2, 2]];
    var diagonal2 = [[2, 0], [1, 1], [0, 2]];
    var winner = null;
    
    _(Game.marks).each(function (mark){
      function diagonalWinTest (diagonals){
        return _.every(diagonals, function(pos){
          return game.board[pos[0]][pos[1]] === mark;
        });
      }
      
      var won = _.any(
        [diagonal1, diagonal2],
        diagonalWinTest
      );
      
      if (won) {
        winner = mark;
      }
    });
    
    return winner;    
  };
  
  Game.prototype.horizontalWin = function(){
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
  
  Game.prototype.verticalWin = function () {
    var game = this;

    var winner = null;
    _(Game.marks).each(function (mark) {
      var indices = _.range(0, 3);

      var won = _(indices).any(function (j) {
        return _(indices).every(function (i) {
          return game.board[i][j] === mark;
        });
      });

      if (won) {
        winner = mark;
      }
    });

    return winner;
  };
  
  Game.prototype.placeMark = function (pos) {
    this.board[pos[0]][pos[1]] = this.player;
  };
  
  Game.prototype.switchPlayer = function(){
    if (this.player === Game.marks[0]) {
      this.player = Game.marks[1]
    } else {
      this.player = Game.marks[0]
    }
  };
  
  Game.prototype.move = function (pos) {
    this.placeMark(pos);

    if (this.winner()) {
      return true
    } else {
      this.switchPlayer();
    };
  };
  
  Game.prototype.winner = function(){
    return (
      this.diagonalWin() || this.horizontalWin() || this.verticalWin()
    )
  };
  
})(this);