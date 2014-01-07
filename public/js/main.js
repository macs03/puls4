$(document).ready(function(){
	console.log('main.js loaded');

	window.views.app =  new Puls4.Views.App( $('body') );
	//conectadonse al socket.io
	window.ponyExpress = new PonyExpress({
		io : window.location.origin
	});

	window.ponyExpress.bind('connect', function () {
		window.plugs.article = new PonyExpress.BackbonePlug({
			collection : window.collections.articles
		});

	 });

	//c= new Puls4.Collections.Articles()
	window.collections.articles = new Puls4.Collections.Articles();
	window.collections.articles.on('add',function(model){
		//console.log('Se agrego un nuevo articulo',model.toJSON())
		//aqui agregamos una vista àra cada uno de nuestros articulos
		var view = new Puls4.Views.Article({model:model});

		view.render();

		view.$el.prependTo('.posts');
	});

	window.collections.articles.fetch();
});
