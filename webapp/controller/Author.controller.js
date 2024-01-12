sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("com.genrep.book.controller.Author", {
	  
		  onInit: function(){
			var r = sap.ui.core.UIComponent.getRouterFor(this)
			r.getRoute('author').attachPatternMatched(this,this._onRouteMatched,this)

		  },
		  onExit: function() {
			
		  },
		  _onRouteMatched: function(event) {
			let aName = event.getParameter('arguments').authorName
			alert('Reading param author name:'+aName)
		  }
		
	});
});