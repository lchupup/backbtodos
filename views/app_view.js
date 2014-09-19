define(["models/alldone_model"
		,"models/input_model"
		,"models/item_model"
		,"collections/item_collection"
		,"views/input_view"
		,"views/item_view"
		,"views/alldone_view"
		,"views/status_view"
	]
	,function(AlldoneModel
			,InputModel 
			,ItemModel 
			,ItemCollection
			,InputView
			,ItemView
			,AlldoneView
			,StatusView	
		){
		return Backbone.View.extend({
			initialize:function(){
				var alldonemodel = new AlldoneModel;
				var inputmodel = new InputModel;
				var itemmodel = new ItemModel;
				var itemcollection = new ItemCollection({
					model: itemmodel
				});
				var alldoneview = new AlldoneView({
					model: alldonemodel
				});
				var inputview = new InputView({
					model: inputmodel
				});
				var itemview = new ItemView({
					model: itemmodel
				});
				var statusview = new StatusView;

				itemmodel.set({order: itemcollection.nextOrder()})
				
				this.listenTo(inputmodel,"change",this.AddTo);
				this.listenTo(itemcollection, "add", this.addOne);
				this.listenTo(itemcollection, "reset", this.addAll);
				this.listenTo(itemcollection, "all", this.render);

			}
			,AddTo:function(){
				var content = inputmodel.get("title");
				itemcollection.create({content: content})
			}
			,addOne:function(todo){
				var view = itemview({model:todo});
				$("#todos_list").append(view.render().el);
			}
			,addAll:function(){
				itemcollection.each(this.addOne,this);
			}
			,render:function(){
				alldoneview.render();
				statusview .render();
			}
		})
	})