Meteor.publish('Goals', function() {
    return Goals.find({ author: this.userId });
});
Meteor.publish('Events', function() {
    return Events.find({ author: this.userId });
});
Meteor.publish('Messages', function() {
    return Messages.find();
});
