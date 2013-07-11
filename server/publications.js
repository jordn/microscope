Meteor.publish('posts', function() {
	// return Posts.find({'author':'Tom Coleman'}, {fields: {title: false}});
	return Posts.find()
});