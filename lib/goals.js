Goals = new Mongo.Collection('goals');

Goals.allow({
  insert: (userId, doc) => { return !!userId; }
});

const Schemas = {};

MC = new SimpleSchema({
  positiveAspects: { type: String,
                     label: "Positive Aspects"
                   },
  difficulty: { type: Number,
                label: "Difficulty level"
              },
});

II = new SimpleSchema({
  obstacles: { type: String,
            },
  intentions: { type: String,
             },
});


Schemas.Goals = new SimpleSchema({
  name: { type: String,
          label: "Goal Name"
  },
  status: {
    type: String,
    allowedValues: ['Public', 'Private'],
    autoform: {
      options: [
        {label: "Public", value: "Public"},
        {label: "Private", value: "Private"},
      ]
    }
  },
  MCAttributes: { type: MC,
                label: "Mental Contrasting Attributes"
  },
  IIAttributes: { type: II,
                label: "Implementation Intention Attributes"
  },
  createdAt: { type: Date,
               autoValue: function() {
               return new Date()
               },
               autoform: { type: 'hidden',
               },
  },
  author: { type: String,
            autoValue: function() {
            return this.userId
            },
            autoform: { type: 'hidden',
            },
  },
  achieving: {
      type: Boolean,
      defaultValue: false,
      autoform: {
        type: 'hidden',
      },
  },
});


Goals.attachSchema(Schemas.Goals);
