sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        onShowHello() {
            alert("Hello World");
        },
        onHiAuthor() {
            // show a native JavaScript alert
            alert("Hello brKlaus");
        }
    });
});