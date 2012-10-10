dusty.router = Backbone.Router.extend({

  routes: {
    "!/lastfm/:user": "showRecordList",
    "!/user/new": "createUser",
  },

  showRecordList: function(user) {
      window.a = new dusty.collections.LastFmCol({username: user})
      a.fetch();
      window.b = new dusty.controllers.LastFmList({el: $('body'), model: a})
  },
  createUser: function(user) {
    window.user = new dusty.models.User();
    window.userForm = new dusty.controllers.User({el: $('body'), model: window.user});
    userForm.render();
  }
});
