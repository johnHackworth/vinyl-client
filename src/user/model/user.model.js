dusty.models.User = dusty.model.extend({
    defaults: {
        login: null,
        name: null,
        lastName: null,
        gender: 1
    },

    publicFields: [
        {name:'login', type:"text"},
        {name:'username', type:"text"},
        {name:'email', type:"text"},
        {   name:'gender',
            type:"select",
            options: [
                {value:"1", text:"M"},
                {value:"0", text:"F"},
            ]
        }
    ],

    url: function() {
        return dusty.url('user');
    },

    urlSession: function() {
        return dusty.url['session'];
    },

    getFormattedData: function() {
        var data = {};
        data.fields = [];
        for(var i = 0, l = this.publicFields.length; i < l; i++) {
            data.fields.push({
                "title": this.publicFields[i].name,
                "value":  this.get(this.publicFields[i].name),
                "type": this.publicFields[i].type,
                "options": this.publicFields[i].options,
            })

        }
        return data;
    },
});
