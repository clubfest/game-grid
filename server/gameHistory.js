Meteor.startup(function(){
  if (!GameHistories.findOne({_id: '0'})){
    GameHistories.insert({
      _id: '0',
      rows: [],
      cols: [],
      isMyTurns: [],
    });
  }
})