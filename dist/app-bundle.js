Ext.define("components.buttons.ShowMessage", {
  extend: "Ext.Button",
  alias: "button.ShowMessage",
  text: "Show Message",
  handler() {
    Ext.Msg.alert("Message", "42!");
  },
});

Ext.define("components.main-panel.MainPanel", {
  extend: "Ext.panel.Panel",
  alias: "widget.MainPanel",
  title: "Sample App",
  html: "The sample app",
  layout: "fit",
  border: false,
  items: [Ext.create("components.buttons.ShowMessage")],
});

const App = () => {
  Ext.create("components.main-panel.MainPanel", {
    renderTo: Ext.getBody(),
  });
};

try {
  App();
} catch {
  Ext.onReady(() => App());
}
