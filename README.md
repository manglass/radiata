### ♄adiata 🌝

> mmm. pie.

#### use

```html
<script src="dist/radiata.js"></script>
```

```html
<nav class="radial circular-menu">
  <div id="radial-menu" class="radial circle">
    <!-- <a href="#" class="fa fa-home fa-2x">*</a> -->
    <!-- <a href="#" class="fa fa-facebook fa-2x">*</a> -->
    <!-- <a href="#" class="fa fa-twitter fa-2x">*</a> -->
  </div>

  <a href="#" class="radial menu-button fa fa-bars fa-2x"></a>
</nav>
```


```javascript
radiata.makeRadial('radial-menu', { spread: 1, spreadSection: 1, updown: -0.5, distance: 45, leftTight: 0, topTight: 0 }, [
  {class: 'bigger', value: '☎'},
  {class: 'bigger', value: '👤'},
  {class: 'bigger', value: '✓'},
  {class: 'bigger', value: '♫'},
  {class: 'bigger', value: '☂'},
  {class: 'bigger', value: '🐈'},
  {class: 'bigger', value: '📝'},
  {class: 'bigger', value: '✄'},
  {class: 'bigger', value: '🚫'},
  {class: 'bigger', value: '🍏'},
  {class: 'bigger', value: '🌐'}
]);
```

#### thoughts
- http://unicode-table.com/en/

#### TODO
- [ ] build out single div, add parent nav and sibling div
- [ ] browserify into single file including css
- [ ] settings OR keyword for type of spread
- [ ] make delegation... add even if element isnt on page yet?
- [ ] choose between hover/click, etc...
- [ ] another variation, follow mouse (open at coordinates on key press)
- [ ] use: http://github.e-sites.nl/perimeter.js/ instead of mouseover/mouseout
- [ ] create github page for example: https://pages.github.com/

#### resources
- https://en.wikipedia.org/wiki/Pie_menu
- https://en.wikipedia.org/wiki/Symmetry_in_biology#Radial_symmetry
