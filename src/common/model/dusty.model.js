dusty.model = SeedModel.extend({
    getFormattedData: function() {
        return this.toJSON();
    }
})

dusty.collection = Backbone.Collection.extend({
    getFormattedData: function() {
        return this.toJSON();
    },
    set: function(prop, val) {
        this[prop] = val;
    }
})
