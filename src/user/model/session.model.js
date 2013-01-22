dusty.models.Session = dusty.model.extend({
    defaults: {
    },

    publicFields: [
    ],

    initialize: function() {
        this.parent('initialize');
        _.bindAll(this, 'checkLogin', 'logged', 'failedLogging', 'logoutSuccessful');
        this.getLoggedSession();
    },

    url: function() {
        return dusty.url('session');
    },

    checkSession: function() {
        // @todo: check session;
        return true;
    },

    getLoggedSession: function() {
        var cookie = $.cookie('dusty');
        if(this.checkSession()) {
            this.set(JSON.parse(cookie));
        }

    },

    checkLogin: function() {
        $.ajax({
            url: this.url(),
            type: "POST",
            dataType: 'json',
            data: this.toJSON(),
            success: this.logged,
            error: this.failedLogging
        })
    },

    logged: function(res) {
        $.cookie('dusty', JSON.stringify(res));
        this.set(res);
        this.trigger('logged');
    },

    failedLogging: function() {
        this.trigger('loggingFailed');
    },

    logout: function() {
        var self = this;
        if(this.get('id')) {
            $.ajax({
                url: this.url(),
                type: 'DELETE',
                headers: this.headers(),
                success: this.logoutSuccessful,
                error: this.triggerError
            });
        };
    },

    logoutSuccessful:  function() {
        this.trigger('logout');
        this.clear();
        $.cookie('dusty', null);
    },

    headers: function() {
            return {
                SESSION: this.get('session').id,
                HASH: this.get('session').hash,
                USER: this.get('id')
            }
    }


});
