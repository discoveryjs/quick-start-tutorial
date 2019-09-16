discovery.view.define('sidebar', {
    view: 'content-filter',
    content: {
        view: 'list',
        data: 'name.[no #.filter or $~=#.filter].sort()',
        item: {
            view: 'auto-link',
            content: 'text-match:{ text, match: #.filter }'
        }
    }
});
