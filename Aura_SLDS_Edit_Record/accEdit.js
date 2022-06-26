({
	saveAccoount : function(component, event, helper) {
        component.find("editrecord").saveRecord($A.getCallback(function(saveResult){
            if(saveResult.state=="SUCCESS" || saveResult.state === "DRAFT"){
                
            }
        }));
	}
})