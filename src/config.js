var dusty = {}
dusty.model = {};
dusty.view = {};

dusty.config = {
    server: {
        url: 'http://localhost:8001/'
    }
}

dusty.url = {
    "user": dusty.config.server.url + 'user/',
    "session": dusty.config.server.url + 'user/session/',
}
