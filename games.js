if (Meteor.isClient) {
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
      if (isMyTurn){
        isMyTurn = false;
      } else {
        isMyTurn = true;
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
