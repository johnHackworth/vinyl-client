dusty.collections.Albums = dusty.collection.extend({
    model: dusty.models.Album,
})

dusty.collections.LastFmCol = dusty.collections.Albums.extend({
    url: function() {
        return dusty.url('lastFmUserCol', this.username) + this.getParams();
    },
    initialize: function(params) {
        this.username = params.username;
        this.bind('updated', this.fetch);
    },
    getFormattedData: function() {
        return {'albums': this.toJSON()};
    },
    getParams: function() {
        var params = [];
        if(this.currency != null) {
            params.push("currency="+this.currency);
        }
        if(this.maxPrice != null) {
            params.push("maxPrice="+this.maxPrice);
        }
        if(this.excludeSingles != null) {
            params.push("excludeSingles="+this.excludeSingles);
        }
        return "?"+params.join('&');
    },
    setMaxPrice: function(pr) {
        this.maxPrice = pr;
    },
    setCurrency: function(cu) {
        this.currency = cu;
    },
    setExcludeSingles: function(es) {
        this.excludeSingles = (es == true);
    }

})
