sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("com.genrep.book.controller.App", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});
function getSrcUrl() {
	return "https://upload.wikimedia.org/wikipedia/commons/b/b1/Laser_Towards_Milky_Ways_Centre_Wallpaper.jpg";
  }
