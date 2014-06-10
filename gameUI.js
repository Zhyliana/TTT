(function(root){
  var TTT = root.TTT = (root.TTT || {});
  
  var GameUI = TTT.GameUI = function($rootEl){
    this.$el = $rootEl;
    this.game = new TTT.Game();
    this.setUpBoard();
    $("#board").on("click", ".empty-square", this.markBoard.bind(this));
  }
  
  
})