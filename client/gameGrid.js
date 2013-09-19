  var isMyTurn;
  Template.hello.created = function () {
    isMyTurn = true;
  };

  Template.hello.events({
    'click .game-grid td' : function (evt) {
      if (isMyTurn){
        evt.currentTarget.style.background = '#A66';
      } else {
        evt.currentTarget.style.background = '#66A';
      }
      isMyTurn = !isMyTurn;
    }
  });