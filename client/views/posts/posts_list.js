Template.postsList.helpers({
  posts: function() {
    return Posts.find()
  },
  numberPosts: function() {
    return Posts.find().count()
  }
});