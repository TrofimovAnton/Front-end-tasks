var moduleTasksList = (function(){
	var tasksList = function(param) {
		var butADD = $('#task-form input[type="submit"]');
		var taskName = $('#task-name');
		var tasksUL = $('#tasks-list');
		//add new element in tasks-list		
		butADD.on('click', function(){
			//append new element
			tasksUL.append(newTasks('<li>', param.btnEdit, param.btnComplite, param.btnSave, param.btnCancel));
			//define buttons and text
			var lastLI = tasksUL.children('li:last-child');
			var btnEdit = lastLI.find('.' + param.btnEdit);
			var btnComplite = lastLI.find('.' + param.btnComplite);
			var btnSave = lastLI.find('.' + param.btnSave);
			var btnCancel = lastLI.find('.' + param.btnCancel);
			var listText = lastLI.find('input[type="text"]');	
			//save text value from task-name
			var oldVal = taskName.val();	
				listText.val(oldVal);
			//visibility buttons
			visibilityBtn(listText, btnEdit, btnComplite, btnSave, btnCancel);
			//save/cancel buttons
			saveCancelBtn(listText, btnSave, btnCancel);	
		});
	}
	//create new element	
	function newTasks(newLI, classBtn1, classBtn2, classBtn3, classBtn4){
		var newTask = $(newLI).append('<form action="#">\
										<fieldset>\
											<input type="text" value="" style="border:0" readonly="readonly"/>\
											<input class="' + classBtn1 + '" type="button" value="Edit" style="display:none"/>\
											<input class="' + classBtn2 + '" type="button" value="Complite" style="display:none"/>\
										</fieldset>\
									   </form>\
									   <input class="' + classBtn3 + '" type="button" value="Save" style="display:none"/>\
									   <input class="' + classBtn4 + '" type="button" value="Cancel" style="display:none"/>');
		return newTask;
	}
	//function visibility buttons
	function visibilityBtn(textName, btnName1, btnName2, btnName3, btnName4){
		textName
			.on('mouseenter', function(){
				btnName1.show();
				btnName2.show();
			});
		btnName1
			.on('click', function(){
				btnName3.show();
				btnName4.show();
				textName.removeAttr("readonly");
				textName.css("color", "black");
			});
		btnName2
			.on('click', function(){
				btnName1.hide();
				btnName2.hide();
				btnName3.hide();
				btnName4.hide();
				textName.attr("readonly", "readonly");
				textName.css("color", "grey");
			});	
	}
	//function save/cancel listText
	function saveCancelBtn(textName, btnName3, btnName4){
		var oldTextVal = textName.val();
		btnName3
			.on('click', function(){
				textName.attr("readonly", "readonly");
				textName.css("color", "grey");
				btnName3.hide();
				btnName4.hide();
				oldTextVal = textName.val();
			});
		btnName4
			.on('click', function(){
				textName.val(oldTextVal);
				textName.attr("readonly", "readonly");
				textName.css("color", "grey");
				btnName3.hide();
				btnName4.hide();
			});
	}
	return {
		tasksList: tasksList
	}
})();

moduleTasksList.tasksList({
	btnEdit: 'btnEdit',
	btnComplite: 'btnComplite',
	btnSave: 'btnSave',
	btnCancel: 'btnCancel'
});


