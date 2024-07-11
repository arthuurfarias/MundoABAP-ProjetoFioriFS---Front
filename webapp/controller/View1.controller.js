sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("zov.controller.View1", {
            onInit: function () {

            },

            onNewCustomer: function () {
                var Customer = sap.ui.core.UIComponent.getRouterFor(this);
                Customer.navTo("RouteToNewCustomer");
            }
        });
    });
