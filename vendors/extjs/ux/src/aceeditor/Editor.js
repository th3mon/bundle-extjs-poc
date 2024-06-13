Ext.define('Ext.ux.aceeditor.Editor', {
	// extend: 'Ext.form.FieldContainer',

    path: '',
    sourceCode: '',
    fontSize: '12px',
	parser: 'csharp',
    theme: 'github',
    printMargin: false,
    highlightActiveLine: true,
    tabSize: 2,
    useSoftTabs: false,
    showInvisible: false,
    useWrapMode: true,
    wrapMin: 60,
    wrapMax: 100,
    HScrollBarAlwaysVisible: false,
    showGutter: true,

    initEditor: function () {
        require([
            "ace/ace",
            //"ace/mode/ruby",
			//"ace/mode/" + this.parser,
			//"ace/theme/" + this.theme
            //"ace/theme/twilight"
        ], (ace) => {
            this.editor = ace.edit(this.editorId);
            this.setMode(this.parser);
            this.setTheme(this.theme);
            this.editor.$blockScrolling = Infinity;
            this.editor.getSession().setUseWrapMode(this.useWrapMode);
            this.editor.getSession().setWrapLimitRange(this.wrapMin, this.wrapMax)
            this.editor.setShowInvisibles(this.showInvisible);
            this.setFontSize(this.fontSize);
            this.editor.setShowPrintMargin(this.printMargin);
            this.editor.setHighlightActiveLine(this.highlightActiveLine);
            this.editor.renderer.setHScrollBarAlwaysVisible(this.HScrollBarAlwaysVisible);
            this.editor.renderer.setShowGutter(this.showGutter);
            this.editor.getSession().setTabSize(this.tabSize);
            this.editor.getSession().setUseSoftTabs(this.useSoftTabs);
            this.setValue(this.sourceCode);
            this.editor.getSession().on('change', () => {
                this.fireEvent('change', this);
            });
            this.editor.focus();
        });
    },

    getEditor: function () {
        return this.editor;
    },

    getSession: function () {
        return this.editor.getSession();
    },

    getTheme: function () {
        this.editor.getTheme();
    },

    setTheme: function (name) {
        this.editor.setTheme("ace/theme/" + name);
    },

    setMode: function (mode) {
        this.editor.getSession().setMode("ace/mode/" + mode);
    },

    getValue: function () {
        this.editor.getValue();
    },

    setValue: function (value) {
    	if (this.editor)
    		this.editor.getSession().setValue(value);
    	else{
    		setTimeout(() => {
    			this.setValue(value);
    		}, 200);
		}
    },

    setFontSize: function (value) {
        this.editor.setFontSize(value);
    },

    undo: function () {
        this.editor.undo();
    },

    redo: function () {
        this.editor.redo();
    }
});
