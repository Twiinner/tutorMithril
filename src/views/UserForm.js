var m = require("mithril")
var User = require("../models/User")

module.exports = {
   oninit: function(vnode) {User.load(vnode.attrs.id)},
   view: function() {
      return m("form", {
              onsubmit: function(e) {
                  e.preventDefault()
                  User.save()
              }
          }, [
          m("lable.lable", "First name"),
          m("input.input[type=text][placeholder=First name]", {
              oninput: m.withAttr("value", function(value) {User.current.firstName = value}),
          }),
          m("lable.lable", "Last name"),
          m("input.input[placeholder=Last name]", {
              oninput: m.withAttr("value", function(value) {User.current.lastName = value}),
          }),
          m("button.button[type=button]", "Save"),
      ])
   }
}
