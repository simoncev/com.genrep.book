sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("com.genrep.book.controller.Main", {
		onPlayVideo: function () {
			MessageBox.show("Open Page to Play Video");
		}
	});
});
