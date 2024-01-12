sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("com.genrep.book.controller.Main", {
		onInit: function () {
			this._myDelegate = {
				onmouseover: this._showPopover,
				onmouseout: this._clearPopover,
			};
			this.byId("idAuthor").addEventDelegate(this._myDelegate, this);
		},
		_showPopover: function () {
			// this._timeId = setTimeout(() => {
			// 	MessageBox.show("Message on Mouse Over");
			// }, 5000);

		},

		_clearPopover: function () {
			clearTimeout(this._timeId);
		},

		onExit: function () {
			this._clearPopover();
			this.byId("idAuthor").removeEventDelegate(this._myDelegate);
		},
		onPlayVideo: function (author,title,link) {
			let record={'author':author,'title':title,'link':link}
			
			var r = sap.ui.core.UIComponent.getRouterFor(this)
			r.navTo('play',record)
		},
		onSelectionChange: function () {
			MessageBox.show("Selection change....");
		},
		onAuthorPress: function () {

		}
	});
});
