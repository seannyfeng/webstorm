Tasks = new  Mongo.Collection("tasks");
Tasks.insert({
    text: text,
    createdAt: new Date(),            // current time
    owner: Meteor.userId(),           // _id of logged in user
    username: Meteor.user().username  // username of logged in user
});
