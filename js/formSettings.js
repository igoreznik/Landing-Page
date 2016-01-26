var formSettings = {
	init: function() {
		utils.inputs.on('input', formSettings.validation);
	},

	validation : function(){
            var detailsForm = $(this).closest('.details-form'),
                inputs = detailsForm.find('input'),
                inputsArr = [].slice.call(inputs),
                emptyInputs = inputsArr.every(function(element){
                    var element = $(element);
                    return !element.val();   
                });

            inputs.prop('required', true); 
            if(emptyInputs){
                inputs.removeProp('required'); 
            }  

        }
}