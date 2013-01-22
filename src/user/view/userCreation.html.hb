new user:
<form>
    {{#fields}}
    <p>
        <span class="fieldName"> {{title}} </span>
        <span class="fieldValue">
            {{#equal type 'text'}}
            <input type="text" name="{{title}}" value="{{value}}"></input>
            {{/equal}}
            {{#equal type 'select'}}
            <select name="{{title}}">
                {{#selectOptions options value}}{{/selectOptions}}
            </select>
            {{/equal}}
    </p>
    {{/fields}}
    <p>
        <span class="fieldName"> password </span>
        <span class="fieldValue"> <input name="password"></input></span>
    </p>
    <input type="submit" value="save"></input>
</form>
