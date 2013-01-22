dusty.controllers.User = dusty.controller.extend({
    model: dusty.models.User,
    template: dusty.getView('user/view/userCreation'),
    events: {
        "change select": "updateSilentElement",
        "change input": "updateSilentElement",
        "submit form": "saveUser"
    },
    initialize: function() {
        this.parent('initialize');

        _.bindAll(this, "render", "saveUser");

        this.model.bind('change', this.render);
        this.model.bind('reset', this.render);
    },
    saveUser: function(ev) {
        this.killEvent(ev);
        this.model.save();
    }


})
