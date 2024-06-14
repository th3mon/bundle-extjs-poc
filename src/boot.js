Ext.onReady(function () {
  Ext.Loader.setConfig({
    enabled: true,
    paths: {
      MyApp: "src",
      components: "src/components",
    },
  });

  Ext.require("MyApp.app");
});
