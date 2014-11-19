Swatter.Severity = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('number'),
    ticket: DS.hasMany('ticket')
});

Swatter.Status = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('number'),
    ticket: DS.hasMany('ticket')
});

Swatter.Ticket = DS.Model.extend({
//    project: DS.belongsTo('project');
//    creator: DS.belongsTo('user');
//    assignee: DS.belongsTo('user');
    title: DS.attr('string'),
    description: DS.attr('string'),
    severity: DS.belongsTo('severity'),
    status: DS.belongsTo('status')
});