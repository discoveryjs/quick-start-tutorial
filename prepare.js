discovery.setPrepare(function(data) {
    const packageByPathIndex = data.reduce((map, pkg) => map.set(pkg.path, pkg), new Map());

    data.forEach(pkg =>
        pkg.deps.forEach(dep =>
            dep.resolved = packageByPathIndex.get(dep.resolved)
        )
    );

    const packageIndex = data.reduce(
        (map, item) => map
            .set(item, item)        // key is item itself
            .set(item.name, item),  // and `name` value
        new Map()
    );
    discovery.addEntityResolver(value => {
        value = packageIndex.get(value) || packageIndex.get(value.name);

        if (value) {
            return {
                type: 'package',
                id: value.name,
                name: value.name
            };
        }
    });
});
