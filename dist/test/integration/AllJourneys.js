jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 OrdersSet in the list
// * All 3 OrdersSet have at least one NavOrderItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"pizza/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"pizza/test/integration/pages/App",
	"pizza/test/integration/pages/Browser",
	"pizza/test/integration/pages/Master",
	"pizza/test/integration/pages/Detail",
	"pizza/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "pizza.view."
	});

	sap.ui.require([
		"pizza/test/integration/MasterJourney",
		"pizza/test/integration/NavigationJourney",
		"pizza/test/integration/NotFoundJourney",
		"pizza/test/integration/BusyJourney",
		"pizza/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});