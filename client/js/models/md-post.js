Swatter.Post = DS.Model.extend({
    priamryKey: '_id',
    _id : DS.attr('string'),
    title: DS.attr('string'),
    author: DS.attr('string'),
    tagline: DS.attr('string')
});

/*Swatter.Post.FIXTURES = [
    {
        id: '1',
        title: 'This is a title',
        author: { name: 'authorname'},
        tagline: 'this is my first tagline'
    }, {
        id: '2',
        title: 'My second book',
        author: { name: 'another name'},
        tagline: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
    }, {
        id: '3',
        title: 'Getting old',
        author: { name: 'old man'},
        tagline: "I'm done with this."
    }
]*/