
/**
 * Created by dvircohen on 12/31/15.
 */

app.factory('posts', function($http, $filter) {
    var obj = {

        posts: [],

        getAll: function() {
            return $http.get('/posts.json').success(function(data) {
               angular.copy(data, obj.posts);
            });
        },

        create: function(post) {
            return $http.post('/posts.json', post).success(function(post) {
               obj.posts.push(post);
            });
        },

        remove: function(post) {
            return $http.delete('/posts/' + post.id).success(function() {
                var index = _.findIndex(obj.posts, function(p) {
                    return p.id == post.id;
                });
                obj.posts.splice(index, 1);
            });
        }
    };

    return obj;
});