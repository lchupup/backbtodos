define([],function(){
	return Backbone.View.extend({
		el: $("#list_status")
		,template: _.template($("#status_template").html())
		,initialize: function(){
			
		}
		,events: {
			"click #bottom_right": "clearCompleted"
		}
		,render: function(){
			var done=this.collection.done().length;
			var remaining=this.collection.remaining().length;
			$(this.el).html(this.template({done: done, remaining: remaining}));
		}
		,clearCompleted: function(){
			_.invoke(this.collection.done(), "destroy");
      		return false;
		}
	})
})