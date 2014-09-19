define([],function(){
	return Backbone.View.extend({
		el: $("#all_done")
		,template:_.template($("#alldone_template").html())
		,events:{
			"click #alldone": "toggleAllComplete"
		}
		,initialize: function(){

		}
		,render: function(){
			this.model.save({'total': this.collection.length});
			$(this.el).html(this.template(this.model.toJSON()));
		}
		,toggleAllComplete: function(){
			this.model.toggle();
			var done = this.$("#alldone").checked;
      		this.collection.each(function (todo) { 
      			todo.save({'done': done}); 
      		});
		}
	})
})