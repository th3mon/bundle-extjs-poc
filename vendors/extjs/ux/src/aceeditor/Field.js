Ext.define('Ext.ux.aceeditor.Field', {
	extend: 'Ext.form.FieldContainer',

	mixins: {
		field: 'Ext.form.field.Field',
		editor: 'Ext.ux.aceeditor.Editor'
	},

	stateful: true,
	layout: 'fit',
	border: true,

	listeners: {
		resize: function () {
			if (this.editor) {
				this.editor.resize();
			}
		},

		activate: function () {
			if (this.editor) {
				this.editor.focus();
			}
		}
	},

	initComponent: function () {
		this.editorId = Ext.id()
		this.items = {
			xtype: 'component',
			id: this.editorId
		}

		this.callParent(arguments);
	},

	onRender: function () {
		this.oldSourceCode = this.sourceCode;
		this.callParent(arguments);

		// init editor on afterlayout
		this.on('afterlayout', () => {
			this.initEditor();
		}, this, {
			single: true
		})
	},

	getValue: function () {
		return this.editor.getSession().getValue();
	},

	setValue: function (value) {
		if (this.editor)
			this.editor.getSession().setValue(value || '');
		else {
			setTimeout(() => {
				this.setValue(value || '')
			}, 200);
		}
	},
});