Ext.define("components.main-panel.MainPanel", {
  extend: "Ext.panel.Panel",
  alias: "widget.MainPanel",
  title: "Sample App",
  html: "The sample app",
  layout: "fit",
  border: false,
  items: [Ext.create("components.buttons.ShowMessage")],
});
