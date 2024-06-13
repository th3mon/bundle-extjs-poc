/**
 * @class Ext.ux.Exporter
 * @author Ed Spencer (http://edspencer.net), with modifications from iwiznia.
 * Class providing a common way of downloading data in .xls or .csv format
 */
Ext.define('Ext.ux.exporter.Exporter', {
  uses: [
    'Ext.ux.exporter.Base64',
    'Ext.ux.exporter.Button',
    'Ext.ux.exporter.csvFormatter.CsvFormatter',
    'Ext.ux.exporter.excelFormatter.ExcelFormatter',
  ],

  statics: {
    exportAny(component, formatter, config) {
      let func = 'export'

      if (!component.is) {
        func += 'Store'
      } else if (component.is('gridpanel')) {
        func += 'Grid'
      } else if (component.is('treepanel')) {
        func += 'Tree'
      } else {
        func += 'Store'
        component = component.getStore()
      }

      return this[func](component, formatter, config)
    },

    /**
     * Exports a grid, using the .xls formatter by default
     * @param {Ext.grid.GridPanel} grid The grid to export from
     * @param {Object} config Optional config settings for the formatter
     */
    exportGrid(grid, formatter, config = {}) {
      Ext.applyIf(config, {
        title: grid.title,
        columns: grid.getColumns(),
      })

      formatter = this.getFormatterByName(formatter)

      return formatter.format(grid.store, config)
    },

    exportStore(store, formatter, config = {}) {
      Ext.applyIf(config, {
        columns: store.fields
          ? store.fields.items
          : store.model.prototype.fields.items,
      })

      formatter = this.getFormatterByName(formatter)

      return formatter.format(store, config)
    },

    exportTree(tree, formatter, config = {}) {
      const store = tree.store || config.store

      Ext.applyIf(config, {
        title: tree.title,
      })

      formatter = this.getFormatterByName(formatter)

      return formatter.format(tree, config)
    },

    getFormatterByName(formatter) {
      formatter = formatter ? formatter : 'excel'
      formatter = !Ext.isString(formatter)
        ? formatter
        : Ext.create(
            `Ext.ux.exporter.${formatter}Formatter.${Ext.String.capitalize(
              formatter,
            )}Formatter`,
          )

      return formatter
    },
  },
})
