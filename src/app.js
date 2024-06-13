Ext.onReady(() => {
  Ext.create("Ext.Panel", {
    renderTo: "app",
    title: "Sample App",
    html: "The sample app",
    layout: "fit",
    border: false,
  });
});
