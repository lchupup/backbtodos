define([],function(){
	return Backbone.View.extend({
		el:$("#addtxt")
		,initialize:function(){
			
		}
		,events:{
			"keypress #addtxt" : "createOnEnter"
		}
		,createOnEnter:function(e){
			if (e.keyCode == 13) {
				if (this.val() != "") {
					this.model.save({title: this.val()});
					this.val("");
				};
			};
		}
	})
})