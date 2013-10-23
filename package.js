Package.describe({
    summary: "Emoji name-to-icon converter :thumbsup:"
});

Package.on_use(function (api) {
    api.add_files('emoji.js', ['client', 'server']);
    api.add_files('img/+1.png', 'client');

    api.export('Emoji', ['client', 'server']);
});
