sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("zov.controller.CustomerForm", {
            onInit: function () {
                 /* var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.getRoute("RouteToNewCustomer").attachMatched(this._onRouteMatchNew, this);
                oRouter.getRoute("RouteToEditCustomer").attachMatched(this._onRouteMatchEdit, this);
*/
            },

            onNavBack: function () {
                /* const oHistory = sap.ui.core.routing.History.getInstace();
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else { */
                    var Customer = sap.ui.core.UIComponent.getRouterFor(this);
                    Customer.navTo("RouteView1");
                /* } */
            },

            /* _onRouteMatchNew: function(oEvent){
                            alert("Modo Criação");  
                        }
            */
        });
    });
