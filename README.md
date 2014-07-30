# form-controls

A helper for retrieving all of the controls for a given root element.


## Usage

```html
<form id="my-form">
    <input type="hidden" name="id" value="123456">
    <input type="text" name="username" value="dominicbarnes">
    <input type="url" name="website" value="http://dbarnes.info/">
</form>
```

```js
var controls = require("form");
var el = document.querySelector("#my-form");

controls(el);
// => [
//     <input type="hidden" name="id" value="123456">,
//     <input type="text" name="username" value="dominicbarnes">,
//     <input type="url" name="website" value="http://dbarnes.info/">
// ]
```


## API

### controls(root)

Returns an `Array` of `HTMLElement` that represent the
[listed controls](http://www.w3.org/TR/html5/forms.html#category-listed)
for the `root` element.

It is *recommended* that you use either a `<form>` or `<fieldset>` as the `root`,
as there is already a DOM API for this operation. However, other arbitrary elements
are supported, mostly because I needed a "brute-force" fallback for when IE doesn't
work anyways.
