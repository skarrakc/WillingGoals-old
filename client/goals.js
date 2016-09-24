Template.goals.helpers({
  goalsOption() {
    return Goals.find( { author: Meteor.userId() } );
  },
});
