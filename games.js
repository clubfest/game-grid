if (Meteor.isClient) {
  var isMyTurn;
  Template.hello.created = function () {
    isMyTurn = true;
  };

  Template.hello.events({
    'click button' : function (evt) {
      if (isMyTurn){
        evt.currentTarget.textContent = 'X';
      } else {
        evt.currentTarget.textContent = 'O';
      }
      isMyTurn = !isMyTurn;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
