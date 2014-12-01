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
    notes: DS.hasMany('ProjectNote', {async: true}),
});

Swatter.ProjectNote = DS.Model.extend({
    content: DS.attr('string'),
    createdDate: DS.attr('date'),
    lastEdited: DS.attr('date'),
    isAlive: DS.attr('boolean'),
    project: DS.belongsTo('project', {async: true}),    
    author: DS.belongsTo('user', {async: true, inverse: 'notes'}),
});

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
        value: 2,
        isActive: true,
        isClosed: false
    }, {
        id: 3,
        name: 'On Hold',
        value: 3,
        isActive: false,
        isClosed: false
    }, {
        id: 4,
        name: 'Completed',
        value: 4,
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
