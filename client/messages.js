Template.messages.helpers({
  messagesOption() {
    const goalID = FlowRouter.getParam('_idGoal');
    return Messages.find({ goalID }, { sort: { created_At: -1 } });
  },
  goalName() {
    const goalID = FlowRouter.getParam('_idGoal');
    return Goals.findOne({ _id: goalID }).name;
  },
});

Template.messages.events({
  'submit .new-message'(event) {
    event.preventDefault();
    const text = event.target.my_text.value;
    const goalID = FlowRouter.getParam('_idGoal');
    Meteor.call('InsertMessage', text, goalID);
    const ev = event;
    ev.target.my_text.value = '';
  },
});
