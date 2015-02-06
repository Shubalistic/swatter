Swatter.TicketSeverity = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('number'),
    active: DS.attr('boolean');
    tickets: DS.hasMany('ticket', {async: true})
});

Swatter.TicketStatus = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('number'),
    active: DS.attr('boolean');
    tickets: DS.hasMany('ticket', {async: true})
});

Swatter.Ticket = DS.Model.extend({
//    project: DS.belongsTo('project');
//    creator: DS.belongsTo('user');
//    assigned: DS.belongsTo('user');
    name: DS.attr('string'),
    description: DS.attr('string'),
    severity: DS.belongsTo('severity', {async: true}),
    status: DS.belongsTo('status', {async: true})
});

Swatter.Severity.FIXTURES = [
    {
        id: 1,
        name: 'Critical',
        value: 5
    }, {
        id: 2,
        name: 'Major',
        value: 4
    }, {
        id: 3,
        name: 'Standard',
        value: 3
    }, {
        id: 4,
        name: 'Minor',
        value: 2
    }, {
        id: 5,
        name: 'Trivial',
        value: 1
    }
];

Swatter.Status.FIXTURES = [
    {
        id: 1,
        name: 'Created',
        value: 1
    }, {
        id: 2,
        name: 'Assigned',
        value: 2
    }, {
        id: 3,
        name: 'Updated',
        value: 3
    }, {
        id: 4,
        name: 'Closed',
        value: 4
    }, {
        id: 5,
        name: 'Verified',
        value: 5    
    }
];

Swatter.Ticket.FIXTURES = [
    {
        id: 1,
        name: 'cant login',
        description: 'im having some issues logging into the application',
        severity: 1,
        status: 1,
    }, {
        id: 2,
        name: 'seeing ERR01923',
        description: 'Getting an error message, ERR01923 when i attempt to access this part of the application.',
        severity: 2,
        status: 2,
    }, {
        id: 3,
        name: 'password reset',
        description: 'Can you reset my password for me?',
        severity: 3,
        status: 3,
    }
];