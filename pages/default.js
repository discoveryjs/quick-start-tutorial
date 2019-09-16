discovery.page.define('default', [
    'h1:#.name',
    {
        view: 'inline-list',
        data: [
            { label: 'Package entries', value: '' },
            { label: 'Unique packages', value: 'name' },
            { label: 'Dup packages', value: 'group(<name>).[value.size() > 1]' }
        ],
        item: `indicator:{
            label,
            value: value.query(#.data, #).size(),
            href: pageLink('report', { query: value, title: label })
        }`
    },
    'h2:"Packages with more than one physical instance"',
    {
        view: 'table',
        data: `
            group(<name>)
            .[value.size() > 1]
            .sort(<value.size()>)
            .reverse()
        `,
        cols: [
            { header: 'Name', content: 'text:key' },
            { header: 'Version & Location', content: {
                view: 'list',
                data: 'value.sort(<version>)',
                item: [
                    'badge:version',
                    'text:path'
                ]
            } }
        ]
    }
]);
