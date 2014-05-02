Globalize.culture(navigator.language || navigator.browserLanguage);

// NOTE object below must be a valid JSON
window.FXChange = $.extend(true, window.FXChange, {
    "config": {
        "endpoints": {
            "db": {
                "local": "",
                "production": ""
            }
        }
        , "services": {
            "db": {
                "entities": {
                }
            }
        }
        , "navigation" : [
            {
                "title": Globalize.localize("FXQuote"),
                "action": "#quote",
                "icon": "money"
            }
            , {
                "title": Globalize.localize("AboutUs"),
                "action": "#about",
                "icon": "info"
            }
            , {
                "title": Globalize.localize("UserRegistration"),
                "action": "#user_registration",
                "icon": "user"
            }
        ]
    }
});
