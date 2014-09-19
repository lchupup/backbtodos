define([],function(){
	return Backbone.Model.extend({
		defaults: {
			total: 0
			,checked: false
		}
		,toggle: function(){
			this.set({'checked': !this.get('checked')});
		}
	})
})