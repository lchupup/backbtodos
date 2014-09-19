define(function(){
	return Backbone.View.extend({
		tagName: "li"
		,template:_.template($("#items_template").html())
		,events:{
			"click .itemdone": "toggleDone"
			,"dbclick .item_manage": "edit"
			,"click .del": "clear"
			,"keypress .item_edit": "updateOnEnter"
			,"blur .item_edit": "close"
		}
		,initialize:function(){	
			this.listenTo(this.model,"change",this.render);
			this.listenTo(this.model,"destroy",this.remove);
		}
		,render:function(){
			this.$el.html(this.template(this.model.toJSON()));
			this.input = this.$(".item_edit");
			return this;
		}
		,toggleDone: function(){
			this.model.toggle();
		}
		,edit: function(){
			this.model.toggleEdit();
			this.input.focus();
		}
		,updateOnEnter: function(e){
			if(e.keyCode==13) this.close();
		}
		,close: function(){
			if(this.input.val()!=''){
				this.model.save({content: this.input.val()});
				this.model.toggleEdit();
			}else{
				this.clear();
			}	
		}
		,clear: function(){
			this.model.destroy();
		}
	})
})