var assert = require("assert");
var domify = require("domify");
var formControls = require("form-controls");
var formElement = require("form-element");
var form = domify(require("form-controls/test/form.html"));


describe("controls(root)", function () {
    it("should return an array", function () {
        var controls = formControls(form);
        assert(Array.isArray(controls));
    });

    it("should return the expected number of elements", function () {
        var controls = formControls(form);
        assert(controls.length === 6);
    });

    it("should return the elements in the proper order", function () {
        var controls = formControls(form);

        assert(controls[0], formElement(form, "username"));
        assert(controls[1], formElement(form, "password"));
        assert(controls[2], formElement(form, "group1"));
        assert(controls[3], formElement(form, "input1"));
        assert(controls[4], formElement(form, "input2"));
        assert(controls[5], formElement(form, "input3"));
    });

    it("should work with a <fieldset>", function () {
        var fieldset = formElement(form, "group1");
        var controls = formControls(fieldset);

        assert(controls.length === 3);
        assert(controls[0], formElement(fieldset, "input1"));
        assert(controls[1], formElement(fieldset, "input2"));
        assert(controls[2], formElement(fieldset, "input3"));
    });

    it("should work with an arbitrary element", function () {
        var div = form.querySelector("#test");
        var controls = formControls(div);

        assert(controls.length === 2);
        assert(controls[0], formElement(div, "input2"));
        assert(controls[1], formElement(div, "input3"));
    });

    it("should throw when no root element is present", function () {
        assert.throws(function () {
            formControls(null);
        });
    });
});
