discovery.page.define('package', {
    view: 'context',
    data: `{
        name: #.id,
        instances: .[name = #.id]
    }`,
    content: [
        'h1:name',
        'table:instances'
    ]
}, {
    resolveLink: 'package'
});
