if (Meteor.isClient) {
  var isMyTurn;
  Template.hello.created = function () {
    isMyTurn = true;
  };

  Template.hello.events({
    'click td' : function (evt) {
      if (isMyTurn){
        evt.currentTarget.style.background = '#A66';
      } else {
        evt.currentTarget.style.background = '#66A';
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
