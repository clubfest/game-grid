if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to games.";
  };

  Template.hello.events({
    'click button' : function (evt) {
      evt.currentTarget.textContent = 'X';
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
