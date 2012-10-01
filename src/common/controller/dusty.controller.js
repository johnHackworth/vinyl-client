dusty.controller = SeedView.extend({
    render: function() {
        this.$el.html(this.template(this.model.getFormattedData()));
    },
    initialize: function() {
        this.updateElement = this.updateElement.bind(this);
    },
    updateElement: function(ev) {
        var $currentElement = $(ev.currentTarget)
        var name = $currentElement.attr('name');
        if(name) {
            this.model.set(name, $currentElement.val());
            this.model.trigger('change');
            this.model.trigger('updated');
        }
    }
})
