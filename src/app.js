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
