Dusty
Country:
<select id="currency" name="currency">
    <option>All</option>
    <option value="EUR" {{#equal currency   'EUR'}}selected="selected" {{/equal}}>Spain</option>
    <option value="GBP" {{#equal currency 'GBP'}}selected="selected" {{/equal}}>Great Britain</option>
    <option value="USD" {{#equal currency 'USD'}}selected="selected" {{/equal}}>Usa</option>
</select>

Max price: <input id="maxPrice" name="maxPrice" value={{maxPrice}}></input>

Exclude singles:<select id="excludeSingles" name="excludeSingles">
    <option value="False" {{#equal excludeSingles 'False'}}selected="selected" {{/equal}}>No</option>
    <option value="True" {{#equal excludeSingles 'True'}}selected="selected" {{/equal}}>Yes</option>
</select>
{{#albums}}
<p>
<a href="{{URL}}" class="album">
    <h3>{{artist.name}}</h3>
    <img src="{{thumbnail}}"></img>
    <span>{{title}}</span>
    <span> {{currentPrice}} {{currency}}
</a>
</p>
{{/albums}}
