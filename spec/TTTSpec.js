describe("TTT", function() {
  var game;

  beforeEach(function() {
    game = new TTT.Game();
  });
  
  it("has a board", function() {
    var board = game.board;
 
    expect(board).not.toBe(null);
  });
  
  it("has players X and O", function() {
    var playerX = game.playerX;
    var playerO = game.playerO;
 
    expect(playerX).toBe("X");
    expect(playerO).toBe("O");
  });

});