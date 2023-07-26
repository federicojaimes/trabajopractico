sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("Exaccs.trabajopractico.controller.Main", {
            onInit: function () {

            },
            onItemPress: function (oEvent) {
                console.log("press");
                var oTabla = this.getView().byId("familia");
                oTabla.bindElement("Clientes>" + oEvent.getSource().getBindingContextPath());
                var opanel = this.getView().byId("pfamilia");
                opanel.setVisible(true);
            },

            formatter: function () {

            },
            calculateAge: function (oEdad) {
                const fechaActual = new Date();
                var year = parseInt(oEdad.substring(0, 4));
                var month = parseInt(oEdad.substring(4, 6));
                var day = parseInt(oEdad.substring(6, 8));
                var fechaNac = new Date(year, month, day);
                let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
                return edad;

            },
            formatPercentage: function (value) {
                return (value * 1).toFixed(2) + "%";
            },
            formatterCusttype: function () {

            }
        });
    });
