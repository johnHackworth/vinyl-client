Dusty
Country:
<select id="currency" name="currency">
    <option>All</option>
    <option value="EUR">Spain</option>
    <option value="GBP">Great Britain</option>
    <option value="USD">Usa</option>
</select>

Max price: <input id="maxPrice" name="maxPrice"></input>
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
