var res = { 
	localSetting : {
				autoLogin : function() { return localStorage.autoLogin; }
				,email : function() { return localStorage.email; }
				,language : function() { return localStorage.language; }
				},
	Quote : "", 
	BuySellFX : "",
	FAQ : "",
	Settings : "",
	Language : "",
	Email : "",
	AutoLogin : "",

	setLanguage : function(a_lang)
	{
		if (a_lang == "eng") {
			this.Quote = "FX Quote"; 
			this.BuySellFX = "Buy / Sell FX";
			this.FAQ = "Tutorial And FAQ";
			this.Settings = "Settings";
			this.Language = "Language";
			this.Email = "Email";
			this.AutoLogin = "Auto Login";
		} else {
			this.Quote = "外幣報價";
			this.BuySellFX = "買賣外幣";
			this.FAQ = "常見問題";
			this.Settings = "設定";
			this.Language = "語言";
			this.Email = "電郵";
			this.AutoLogin = "自動登入";
		}
		kendo.bind(document.body, this);
	}
};
