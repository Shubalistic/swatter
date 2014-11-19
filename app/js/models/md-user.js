Swatter.User = DS.Model.extend ({
    isAdmin: DS.attr('boolean'),
    name: DS.attr('string'),
    login: DS.attr('string'),
    password: DS.attr('string'),
    email: DS.attr('email')
});
