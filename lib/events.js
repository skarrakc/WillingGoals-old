Events = new Mongo.Collection( 'events' );

Events.allow({
  insert: (userId, doc) => { return !!userId; },
  update: (userId, doc) => { return !!userId; },
  remove: (userId, doc) => { return !!userId; }
});

let EventsSchema = new SimpleSchema({
  type: {
    type: String,
    label: 'The Goal Achieved'
  },
  start: {
    type: String,
    label: 'When this event will start.'
  },
  end: {
    type: String,
    label: 'When this event will end.'
  },
  author: {
      type: String,
      autoValue: function() {
        return this.userId
      },
  },
});

Events.attachSchema( EventsSchema );
