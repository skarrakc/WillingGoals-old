Meteor.methods({

  deleteGoal: function(id) {
    Goals.remove(id);
  },

  toggleAchieve: function(id, currentstate) {
    Goals.update(id, {
        $set: {
                achieving: !currentstate
              }
        })
  },

  addEvent( event ) {
    check( event, {
      type: String,
      start: String,
      end: String,
      author: String
    });
    try {
      return Events.insert( event );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  },

  deleteEvent( eventId ) {
    try {
      return Events.remove( eventId );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  },

  InsertMessage(text, goalID) {
    check(text, String);
    check(goalID, String);
    Messages.insert({ text, goalID,
			username: Meteor.user().username, createdAt: Date() },
			err => { if (err) throw new Meteor.Error(`${err}`); });
  }
});
