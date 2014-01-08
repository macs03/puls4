Puls4.Routers.Base =  Backbone.Router.extend({

	routes : {

		"" : "root",
		"article/:id" : "articleSingle"

	},
	root : function(){
		console.log("estamos en el root de nuestra aplicacion");

		window.app.state = "root";
		window.app.article = null;
	},
	articleSingle : function(id){
		console.log('estamos en el article single');

		window.app.state = "articleSingle";
		window.app.article = id;
	}

});