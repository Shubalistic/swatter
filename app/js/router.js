Swatter.Router.map(function() {
	this.resource('admin', function() {
        this.resource('user', {path: ':user_id'});
        this.resource('admin_overview');
    });
	this.resource('posts', function () {
        this.resource('post', {path: ':post_id'});  
        this.resource('posts_overview');
    });
    this.resource('projects', function () {
        this.resource('project', {path: ':project_id'}, function() {
            this.resource('dashboard');
            this.resource('tickets');
            this.resource('notes');
            this.resource('details');
        });
        this.resource('project_overview');
    });
    this.resource('tickets', function () {
        this.resource('ticket', {path: ':ticket_id'});
        this.resource('ticket_overview');
    });
});

Swatter.ApplicationRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render();
        this.render('quickbar', {
            into: 'application',
            outlet: 'quickactions'  
        });
    }
});

Swatter.PostsRoute = Ember.Route.extend({
    model: function() {
       return this.store.find('post');
    },
    beforeModel: function () {
        this.transitionTo('posts_overview')
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
    },  
});

Swatter.AdminRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('user');
    },
    beforeModel: function () {
        this.transitionTo('admin_overview')
    }
});

Swatter.TicketsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('ticket');
    },
    beforeModel: function () {
        this.transitionTo('ticket_overview')
    }
});

Swatter.TicketRoute = Ember.Route.extend({
    breadcrumbs: {name: 'Single ticket'}
})


Swatter.ProjectsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('project');
    },
    beforeModel: function () {
        this.transitionTo('project_overview')
    }
});


    