Swatter.Router.map(function() {
	this.resource('admin');
	this.resource('posts', function () {
        this.resource('post', {path: ':post_id'});   
    });
	this.resource('projects');
    this.resource('bugs');
});

Swatter.PostsRoute = Ember.Route.extend({
    model: function() {
       return this.store.find('post');
    }
});

Swatter.PostController = Ember.ObjectController.extend({
    isEdit: false,
    
    actions: {
        edit: function() {
            this.set('isEdit', true);
        },
        save: function() {
            this.set('isEdit', false);
        },
        openModal: function() {
            
        }
    }
    
});