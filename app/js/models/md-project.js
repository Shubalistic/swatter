Swatter.ProjectStatus = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('number'),
    isActive: DS.attr('boolean'),
    isClosed: DS.attr('boolean'),
    projects: DS.hasMany('project', {async: true})
});

Swatter.Project = DS.Model.extend({
    name: DS.attr('string'),
    lastUpdate: DS.attr('date'),
    createdDate: DS.attr('date'),
    
    creator: DS.belongsTo('user', {async: true, inverse: 'createdProjects'}),
    owner: DS.belongsTo('user', {async: true, inverse: 'ownedProjects'}),
    status: DS.belongsTo('ProjectStatus', {async: true}),
//    notes: DS.hasMany('projectnote', {async: true}),
});

/*
Swatter.ProjectNote = DS.Model.extend({
    content: DS.attr('string'),
    createdDate: DS.attr('date'),
    lastEdited: DS.attr('date'),
    isAlive: DS.attr('boolean'),
    project: DS.belongsTo('project')    
//    creator: DS.belongsTo('user', {async: true}),
});*/

Swatter.ProjectStatus.FIXTURES = [
    {
        id: 1,
        name: 'Created',
        value: 1,
        isActive: true,
        isClosed: false
    }, {
        id: 2,
        name: 'Active',
        value: 1,
        isActive: true,
        isClosed: false
    }, {
        id: 3,
        name: 'On Hold',
        value: 1,
        isActive: false,
        isClosed: false
    }, {
        id: 4,
        name: 'Completed',
        value: 1,
        isActive: false,
        isClosed: true
    }, {
        id: 5,
        name: 'Cancelled',
        value: 5,
        isActive: false,
        isClosed: true
    }
];

Swatter.Project.FIXTURES = [
    {
        id: 1,
        name: 'Eagle Eye',
        createdDate: new Date("January 12, 2014 11:13:00"),
        lastUpdate: new Date("February 13, 2014 11:13:00"),
        creator: 1,
        owner: 2,
        status: 1
    }, {
        id: 2,
        name: 'Testarossa',
        createdDate: new Date("March 13, 2014 11:13:00"),
        lastUpdate: new Date("April 13, 2014 11:13:00"),
        creator: 3,
        owner: 4,
        status: 1
    }, {
        id: 3,
        name: 'Operation Overlord',
        createdDate: new Date("May 13, 2014 11:13:00"),
        lastUpdate: new Date("June 13, 2014 11:13:00"),
        creator: 5,
        owner: 1,
        status: 1
    }, {
        id: 4,
        name: 'Barbarossa',
        createdDate: new Date("July 13, 2014 11:13:00"),
        lastUpdate: new Date("September 13, 2014 11:13:00"),
        creator: 2,
        owner: 4,
        status: 1
    }, {
        id: 5,
        name: 'Tesseract',
        createdDate: new Date("October 13, 2014 11:13:00"),
        lastUpdate: new Date("November 13, 2014 11:13:00"),
        creator: 3,
        owner: 5,
        status: 1
    }, {
        id: 6,
        name: 'Penny Stick',
        createdDate: new Date("February 13, 2014 11:13:00"),
        lastUpdate: new Date("April 13, 2014 11:13:00"),
        creator: 4,
        owner: 2,
        status: 1
    }
]

/*
Swatter.Severity = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('number'),
    ticket: DS.hasMany('ticket', {async: true})
});

Swatter.Status = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('number'),
    ticket: DS.hasMany('ticket', {async: true})
});

Swatter.Ticket = DS.Model.extend({
//    project: DS.belongsTo('project');
//    creator: DS.belongsTo('user');
//    assignee: DS.belongsTo('user');
    title: DS.attr('string'),
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
        title: 'cant login',
        description: 'im having some issues logging into the application',
        severity: 1,
        status: 1,
    }, {
        id: 2,
        title: 'seeing ERR01923',
        description: 'Getting an error message, ERR01923 when i attempt to access this part of the application.',
        severity: 2,
        status: 2,
    }, {
        id: 3,
        title: 'password reset',
        description: 'Can you reset my password for me?',
        severity: 3,
        status: 3,
    }
];*/