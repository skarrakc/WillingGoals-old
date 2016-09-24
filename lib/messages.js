Messages = new Mongo.Collection('messages');

const Schemas = {};

Schemas.Messages = new SimpleSchema({
  text: { type: String },
  username: { type: String },
  goalID: { type: String },
  createdAt: { type: String },
});
Messages.attachSchema(Schemas.Messages);
