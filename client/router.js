FlowRouter.route('/', {

  action() {
    BlazeLayout.render('bodyLayout', { main: 'index' });
  },
});

FlowRouter.route('/goalsProfile', {

  subscriptions() {
    this.register('Goals', Meteor.subscribe('Goals'));
    this.register('Events', Meteor.subscribe('Events'));
  },
  action() {
    BlazeLayout.render('bodyLayout', { main: 'goalsProfile' });
  },
});

FlowRouter.route('/goals/:_idGoal', {

  subscriptions() {
    this.register('Goals', Meteor.subscribe('Goals'));
    this.register('Messages', Meteor.subscribe('Messages'));
  },
  action() {
    BlazeLayout.render('bodyLayout', { main: 'messages' });
  },
});
