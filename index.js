// dependencies
var toArray = require("to-array");

var bruteForce = [
    "button",
    "fieldset",
    "input",
    "keygen",
    "object",
    "output",
    "select",
    "textarea"
].join(",");


/**
 * Retrieves a list of valid controls from a given root element.
 *
 * If the `root` element is not either a `<form>` or `<fieldset>`, or does not
 * expose a `HTMLFormControlCollection` interface, then a "brute-force" search
 * retrieves the valid "listed controls" is used.
 *
 * @see http://www.w3.org/TR/html5/forms.html#category-listed
 *
 * @param  {HTMLElement} root
 * @returns {Array:HTMLElement}
 */

module.exports = function (root) {
    if (!root) {
        throw new TypeError("a root element is required");
    }

    return toArray(root.elements || root.querySelectorAll(bruteForce));
};
