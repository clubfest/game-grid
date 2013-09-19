var isMyTurn;

Template.gameGrid.rendered = function(){
  // refresh
  Deps.autorun(function(){
    var gameHistory = GameHistories.findOne({_id: '0'});
    if (gameHistory) {
      var rows = gameHistory.rows;
      var cols = gameHistory.cols;
      var isMyTurns = gameHistory.isMyTurns;
      if (rows){
        for (var i=0; i<rows.length; i++){
          var className;
          var nodes =$("tr[data-row='"+rows[i]+"'] td[data-col='"+cols[i]+"']")
          nodes.attr('my-box', isMyTurns[i]);
        }
      }
      isMyTurn = !isMyTurns[isMyTurns.length-1]; // !null is true
      console.log(isMyTurns) 
    }
  });
}
  
Template.gameGrid.events({
  'click .game-grid td' : function (evt) {
    var row = evt.currentTarget.parentNode.dataset.row;
    var col = evt.currentTarget.dataset.col;
    GameHistories.update({_id: '0'}, {
      $push: {
        rows: row,
        cols: col,
        isMyTurns: isMyTurn
      }
    });
  },
  'click .clear-btn': function(){
    GameHistories.update({_id: '0'}, {
      $set: {
        rows: [],
        cols: [],
        isMyTurns: [],
      }
    })
    $('td').removeAttr('my-box'); 
  }
});