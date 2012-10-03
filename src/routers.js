dusty.router = Backbone.Router.extend({

  routes: {
    "!/lastfm/:user": "showRecordList",
  },

  showRecordList: function(user) {
      window.a = new dusty.collections.LastFmCol({username: user})
      a.fetch();
      window.b = new dusty.controllers.LastFmList({el: $('body'), model: a})
  },
});
