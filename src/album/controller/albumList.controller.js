dusty.controllers.AlbumList = dusty.controller.extend({
    model: dusty.collections.albums
})


dusty.controllers.LastFmList = dusty.controllers.AlbumList.extend({
    model: dusty.collections.LastFmCol,
    template: dusty.getView('album/view/albumList'),
    events: {
        "change select": "updateElement",
        "change input": "updateElement"
    },
    initialize: function() {
        this.parent('initialize');

        _.bindAll(this, "render");

        this.model.bind('change', this.render);
        this.model.bind('reset', this.render);
    },


})
