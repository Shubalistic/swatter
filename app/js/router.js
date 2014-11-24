Swatter.Router.map(function() {
	this.resource('admin', function() {
        this.resource('user', {path: ':user_id'});
        this.resource('admindash');
    });
	this.resource('posts', function () {
        this.resource('post', {path: ':post_id'});  
        this.resource('postdash');
    });
    this.resource('projects', function () {
        this.resource('project', {path: ':project_id'}, function() {
            this.resource('dashboard');
            this.resource('tickets');
            this.resource('notes');
            this.resource('details');
        });
        this.resource('projectdash');
    });
    this.resource('tickets', function () {
        this.resource('ticket', {path: ':ticket_id'});
        this.resource('ticketdash');
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

Swatter.ApplicationController = Ember.Controller.extend({
    tabsMeta: [
        Ember.Object.create({title: 'Home', linkTo: 'application'}),
        Ember.Object.create({title: 'Projects', linkTo: 'projectdash'}),
        Ember.Object.create({title: 'Tickets', linkTo: 'ticketdash'}),
        Ember.Object.create({title: 'Posts', linkTo: 'postdash'}),
        Ember.Object.create({title: 'Admin', linkTo: 'admin'})
    ] 
});

Swatter.PostsRoute = Ember.Route.extend({
    model: function() {
       return this.store.find('post');
    },
});

Swatter.PostController = Ember.ObjectController.extend({
    actions: {
        //Submit the modal
        submit: function() {
          Bootstrap.NM.push('Successfully submitted modal', 'success');
          return Bootstrap.ModalManager.hide('myModal');
        },

        //Cancel the modal, we don't need to hide the model manually because we set {..., dismiss: 'modal'} on the button meta data
        cancel: function() {
          Bootstrap.GNM.push('Edit cancelled', 'The changes to the post were discarded.', 'info');
          return Bootstrap.NM.push('Modal was cancelled', 'info');
        },

        //Show the modal
        show: function() {
          Bootstrap.GNM.push('Updating post', 'Making a change.', 'info');
          return Bootstrap.ModalManager.show('myModal');
        },
        
        updatePost: function() {
            Bootstrap.GNM.push('Post updated!', 'The post was updated successfully!', 'success');
            Bootstrap.NM.push('Successfully submitted modal', 'success');
            return Bootstrap.ModalManager.hide('myModal');   
        }
    }
});


Swatter.AdminRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('user');
    },
});

Swatter.TicketsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('ticket');
    },
});

Swatter.TicketdashController = Ember.Controller.extend({

    
});

Swatter.TicketRoute = Ember.Route.extend({
    breadcrumbs: {name: 'Single ticket'}
})

Swatter.TicketController = Ember.Controller.extend({
    myModalButtons: [
      Ember.Object.create({title: 'Submit', clicked:"submit"}),
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'})
    ],

    actions: {
        //Submit the modal
        submit: function() {
          Bootstrap.NM.push('Successfully submitted modal', 'success');
          return Bootstrap.ModalManager.hide('myModal');
        },

        //Cancel the modal, we don't need to hide the model manually because we set {..., dismiss: 'modal'} on the button meta data
        cancel: function() {
            
          return Bootstrap.NM.push('Modal was cancelled', 'info');
        },

        //Show the modal
        show: function() {
          return Bootstrap.ModalManager.show('myModal');
        }
    }
})


Swatter.ProjectsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('project');
    },
});


    