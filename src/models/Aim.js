var Aim = function (jsonObject) {
	var imageAnnotationCollection = new ImageAnnotationCollection();
	var user = new User();

	this.setUser = function(user) {
		var user = {name: user, loginName: user};
		var userObject = {user: user};
		imageAnnotationCollection.setUser(userObject);
	}

	this.setEquipment = function(manufacturer) {
		
	}
	
}