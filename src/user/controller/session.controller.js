dusty.controllers.Session = dusty.controller.extend({
    model: dusty.models.User,

    templateLogin: dusty.getView('user/view/login'),
    templateLogged: dusty.getView('user/view/logged'),

    events: {
        "change select": "updateSilentElement",
        "change input": "updateSilentElement",
         "submit form": "login",
         'click .logout': 'logout'
    },

    initialize: function() {
        this.parent('initialize');

        _.bindAll(this, "render", "login");

        this.model.bind('change', this.render);
        this.model.bind('reset', this.render);
    },

    login: function(ev) {
        this.killEvent(ev);
        this.model.checkLogin();
    },

    render: function() {
        this.template = this.model.get('id')? this.templateLogged : this.templateLogin;
        this.parent('render');
    },

    logout: function(ev) {
        this.killEvent(ev);
        this.model.logout();
    },




})
