dusty.model.Session = SeedModel.extend({
    defaults: {
        user: null,
        hash: null,
        id: null
    },

    url: function() {
        return dusty.url['session'];
    },

    assignUser: function(userInfo) {
        this.user = new dusty.model.User(userInfo);
    },

    logUser: function(user, password) {
        $.ajax({

        })
    }
)
});
