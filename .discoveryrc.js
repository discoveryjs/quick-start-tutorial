module.exports = {
    name: 'Node modules structure',
    data: require('./collect-node-modules-data'),
    prepare: './prepare.js',
    view: {
        assets: [
            'pages/default.js',
            'pages/package.js',
            'views/sidebar.css',
            'views/sidebar.js'
        ]
    }
};
