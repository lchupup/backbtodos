define([],function(){
	return Backbone.Model.extend({
		defaults:{
			content: "empty todo.."
			,order: 0
			,done: false
			,editing: false
		}
		,initialize: function() {
			this.validate();
		}
		,validate: function(){
			if(this.get("contnet")==""){
				this.set({"content": this.defaults.content});
			}
		}
		,toggle: function(){
			this.set({"done": !this.get("done")});
		}
		,toggleEdit: function(){
			this.set({"editing": !this.get("editing")});
		}
	})
})