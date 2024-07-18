sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
],
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("zov.controller.View1", {
            formatter: formatter,
            
            onInit: function () {

            },

            onNewCustomer: function () {
                var Customer = sap.ui.core.UIComponent.getRouterFor(this);
                Customer.navTo("RouteToNewCustomer");
            }
        });
    });
