Ext.define("components.buttons.ShowMessage", {
  extend: "Ext.Button",
  alias: "button.ShowMessage",
  text: "Show Message",
  handler() {
    Ext.Msg.alert("Message", "42!");
  },
});
