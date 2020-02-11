function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZXA_GENERIC_COCKPIT_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}