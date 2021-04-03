jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"pizza/test/integration/NavigationJourneyPhone",
		"pizza/test/integration/NotFoundJourneyPhone",
		"pizza/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});