dusty.controller = SeedView.extend({
    render: function() {
        this.$el.html(this.template(this.getContext()));
    },
    initialize: function() {
        this.updateElement = this.updateElement.bind(this);
    },
    updateElement: function(ev, silent) {
        var $currentElement = $(ev.currentTarget)
        var name = $currentElement.attr('name');
        var silent = silent? silent : false;
        console.log(silent);
        if(name) {
            var data = {}
            data[name] = $currentElement.val();
            this.model.set(data, {silent: silent});
            if(!silent) {
                this.model.trigger('change');
            }
            this.model.trigger('updated');
        }
    },
    updateSilentElement: function(ev) {
        return this.updateElement(ev, true);
    },
    getContext: function() {
        return this.model.getFormattedData();
    },
    killEvent: function(ev) {
        if(ev && ev.preventDefault) {
            ev.preventDefault();
        }
        if(ev && ev.stopPropagation) {
            ev.stopPropagation();
        }
    }
})


Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
    if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
    console.log(lvalue);
    console.log(rvalue);
    if( lvalue!=rvalue ) {

        return options.inverse(this);
    } else {
        return options.fn(this);
    }
});


Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {

    var operators, result;

    if (arguments.length < 3) {
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    }

    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }

    operators = {
        '==': function (l, r) { return l == r; },
        '===': function (l, r) { return l === r; },
        '!=': function (l, r) { return l != r; },
        '!==': function (l, r) { return l !== r; },
        '<': function (l, r) { return l < r; },
        '>': function (l, r) { return l > r; },
        '<=': function (l, r) { return l <= r; },
        '>=': function (l, r) { return l >= r; },
        'typeof': function (l, r) { return typeof l == r; }
    };

    if (!operators[operator]) {
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
    }

    result = operators[operator](lvalue, rvalue);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});


Handlebars.registerHelper('selectOptions', function(items, value, options) {
  var out = '';
  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<option  value='"+items[i].value + "' ";
    if(items[i].value == value) out = out + " selected='selected' ";
    out = out +">" + items[i].text + "</option>";
  }

  return out;
});
