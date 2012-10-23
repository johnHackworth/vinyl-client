dusty.model = SeedModel.extend({
    initialize: function() {
        _.bindAll(this, 'getFormattedData', 'triggerError');
    },
    getFormattedData: function() {
        return this.toJSON();
    },
    triggerError: function() {
        this.trigger('error');
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
