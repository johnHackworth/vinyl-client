var dusty = {}
dusty.models = {};
dusty.collections = {};
dusty.controllers = {};

dusty.config = {
    server: {
        // url: 'http://localhost:8001/'
        url: 'http://listify.es:8080/',
    },
    client: {
        url: 'src/'
    }
}

dusty.restUrls = {
    "user": dusty.config.server.url + 'user/',
    "session": dusty.config.server.url + 'user/session/',
    "lastFmUserCol": function(userName) {
        return dusty.config.server.url +'lastfm/albums/' + userName + '/';
    },
}

dusty.url = function(url, param) {
    if(typeof dusty.restUrls[url] === "function") {
        return dusty.restUrls[url](param);
    } else {
        return dusty.restUrls[url]
    }
}

dusty.getView = function(view) {
    var template = function() {return ''};
    $.ajax({
        url: dusty.config.client.url + view + '.html.hb',
        async: false,
        success: function(res) {
            template = Handlebars.compile(res);
        },
        error: function() {

        },
        complete: function() {
        }
    });
    return template;
}
