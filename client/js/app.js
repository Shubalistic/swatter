Swatter = Ember.Application.create({
    LOG_TRANSITIONS: true
});

Swatter.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:8081',
    namespace: 'api/v1',
});

Swatter.PostSerializer = DS.RESTSerializer.extend({
    primaryKey: function(type) {
        return '_id'
    },
    serializeId: function(id) {
        return id.toString();
    },
    extractArray: function(store, primaryType, payload) {
        console.log('extractFindAll');
        var rawPosts = payload;
        
        payload = { post: rawPosts };
        
        for (ii = 0; ii < rawPosts.length; ii++) {
            rawPosts[ii].id = rawPosts[ii]._id;          
        };
        
        console.log(payload);
        
        return rawPosts;      
    },
    serializeIntoHash: function(hash, type, record, options) {
        console.log('serializeIntoHash');
        Ember.merge(hash, this.serialize(record, options));
    },
    normalize: function(type, hash, prop) {
        console.log('in normalize');
        return this._super(type, hash, prop);
    },
})

