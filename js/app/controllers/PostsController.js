function PostsController(post) {
  var ctrl = this;

  ctrl.data = post.data;
}

angular
    .module('app')
    .controller('PostsController', PostsController)
