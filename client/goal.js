Template.goal.events ({
    'click .toggle-achieve': function() {
        Meteor.call('toggleAchieve', this._id, this.achieving);
    },
    'click .delete': function() {
        Meteor.call('deleteGoal', this._id);
    },

});
