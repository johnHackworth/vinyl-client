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
});

test =  dusty.model.User.extend({
    save: function() {
        var method = 'PUT';
        if(this.isNew()) method = 'POST'
        $.ajax({
            url: this.url(),
            type: method,
            data: this.toJSON(),
            contentType: 'application/json',
            dataType: 'json'
        })
    }
});