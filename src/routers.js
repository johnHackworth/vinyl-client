dusty.router = Backbone.Router.extend({

  routes: {
    "!/lastfm/:user": "showRecordList",
    "!/user/new": "createUser",
    '!/session/login': "loginUser"
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
  },
  loginUser: function() {
    window.session = new dusty.models.Session();
    window.sessionView = new dusty.controllers.Session({el: $('body'), model: window.session});
    sessionView.render();
  }
});
