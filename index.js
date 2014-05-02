
$(function () {
    var navigationType = FXChange.config.navigationType,
        startupView = "quote";
    //startupView = "about";
    //startupView = "user_registration";

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    if (DevExpress.devices.real.platform === "win8" && DevExpress.devices.real.deviceType === "phone") {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {
        document.addEventListener("backbutton", onBackKeyDown, false);
        FXChange.app.navigatingBack.add(function () {
            if (!FXChange.app.canBack() && window.external) {
                window.external.Notify("DevExpress.ExitApp");
            }
        });
    }

    function onBackKeyDown() {
        DevExpress.hardwareBackButton.fire();
    }

    FXChange.app = new DevExpress.framework.html.HtmlApplication({
        namespace: FXChange,
        navigationType: navigationType,
        navigation: FXChange.config.navigation
    });

    $(window).unload(function () {
        FXChange.app.saveState();
    });

    FXChange.app.router.register(":view/:id", { view: startupView, id: undefined });
    FXChange.app.navigate();
});
