var res = {
    eng: {
        AutoLogin: "Auto Login",
        Back: "Back",
        BuySellFX: "Buy / Sell FX",
        Email: "Email",
        FAQ: "Tutorial And FAQ",
        Language: "Language",
        Quote: "FX Quote",
        Save: "Save",
        SaveCompleted: "Save Completed",
        Settings: "Settings"
    },

    big5: {
        AutoLogin: "自動登入",
        Back: "上頁",
        BuySellFX: "買賣外幣",
        Email: "電郵",
        FAQ: "常見問題",
        Language: "語言",
        Quote: "外幣報價",
        Save: "儲存",
        SaveCompleted: "儲存完成",
        Settings: "設定"
    },

    currentLang: "big5",

    getMsg: function (a_res_key) {
        return this[this.currentLang][a_res_key];
    },

    setLanguage: function (a_lang) {
        // kendo.bind(document.body, this);
        if (a_lang == "eng" || a_lang == "big5" || a_lang == "gb") {
            this.currentLang = a_lang;
        }
        this.applyToHtml();
    },

    translateViewTitle: function (e) {
        // e.view.options.title = this[e.view.options.title];
        // e.view.options.title = this[this.currentLang][e.view.options.title];
        /*
        for (key in e.view.options) {
        alert(key);
        }		
        */
        /*
        var view_id = e.view.id;
        if (view_id == "/") view_id = "#tab-quote";
        e.view.options.title = this[this.currentLang][$(view_id).data("res")];
        */
        //alert(view_id);
        //alert($(view_id).data("res"));
        var view;
        view = $("#tab-quote").data("kendoMobileView");
        if (view != undefined) view.options.title = this[this.currentLang][$("#tab-quote").data("res")];
        view = $("#tab-bs").data("kendoMobileView");
        if (view != undefined) view.options.title = this[this.currentLang][$("#tab-bs").data("res")];
        view = $("#tab-tutorial").data("kendoMobileView");
        if (view != undefined) view.options.title = this[this.currentLang][$("#tab-tutorial").data("res")];
        view = $("#tab-settings").data("kendoMobileView");
        if (view != undefined) view.options.title = this[this.currentLang][$("#tab-settings").data("res")];
    },

    applyToHtml: function () {
        var key, value, _ref;
        _ref = this[this.currentLang];
        for (key in _ref) {
            value = _ref[key];
            $("span[data-res='" + key + "']").html(value);
        }
    }
};

function translateViewTitle(e)
{
	res.translateViewTitle(e);
}
