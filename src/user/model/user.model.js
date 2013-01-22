dusty.model.User = SeedModel.extend({
    defaults: {
        login: null,
        name: null,
        lastName: null
    },

    url: function() {
        return dusty.url['user'];
    },

    urlSession: function() {
        return dusty.url['session'];
    },
)
});
