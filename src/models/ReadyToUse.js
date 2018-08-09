var ImageAnnotationCollection = function (jsonObject) {

            this.setPerson = function (type_Person) {
                this.person = type_Person;
            };

            this.getPerson = function () {
                return this.person;
            };

			
			var imageAnnotationsTemp = new imageAnnotations();

			this.addImageAnnotation = function (type_ImageAnnotation) {
				imageAnnotationsTemp.addMarkupEntity(type_ImageAnnotation);
				this.setMarkupEntityCollection(imageAnnotationsTemp);
			};

			this.setImageAnnotations= function (type_imageAnnotations) {
				this.imageAnnotations= type_imageAnnotations;
			};

			this.getImageAnnotations = function () {
				return this.imageAnnotations;
			};


            //*** ImageAnnotations
            /*var imageAnnotationsTemp = [];

            this.addImageAnnotation = function (type_ImageAnnotation) {
                imageAnnotationsTemp.push(type_ImageAnnotation);
                this.setImageAnnotations(imageAnnotationsTemp);
            };

            this.setImageAnnotations = function (type_arrayOf_ImageAnnotation) {
                this.imageAnnotations = type_arrayOf_ImageAnnotation;
				imageAnnotationsTemp = type_arrayOf_ImageAnnotation;
            };

            this.getImageAnnotations = function () {
                return this.imageAnnotations;
            };

            this.getImageAnnotationsCount = function () {
                return imageAnnotationsTemp.length;
            };

            this.getImageAnnotation = function (index) {
                if (imageAnnotationsTemp.length != undefined && imageAnnotationsTemp.length >= index)
                    return imageAnnotationsTemp[index];
                return null;
            }*/

            this.setUniqueIdentifier = function (type_II) {
                this.uniqueIdentifier = type_II;
            };

            this.getUniqueIdentifier = function () {
                return this.uniqueIdentifier;
            };

            this.setDescription = function (type_ST) {
                this.description = type_ST;
            };

            this.getDescription = function () {
                return this.description;
            };

            this.setDateTime = function (type_String) {
                this.dateTime = new PrimitiveType(type_String);
            };

            this.getDateTime = function () {
                return this.dateTime.getValue();
            };

            this.setUser = function (type_User) {
                this.user = type_User;
            };

            this.getUser = function () {
                return this.user;
            };

            this.setEquipment = function (type_Equipment) {
                this.equipment = type_Equipment;
            };

            this.getEquipment = function () {
                return this.equipment;
            };

            this.setAimVersion = function (type_String) {
                this.attr_aimVersion = type_String;
            };

            this.getAimVersion = function () {
                return this.attr_aimVersion;
            };

            this.getJson = function () {

                var findAttribute = 'attr_';
                var replaceAttribute = new RegExp(findAttribute, 'g');
                var findTilda = '~';
                var replaceTilda = new RegExp(findTilda, 'g');
                var findXsiType = 'xsiType';
                var replaceXsiType = new RegExp(findXsiType, 'g');
                var findXmlnsRdf = 'xmlnsRdf';
                var replaceXmlnsRdf = new RegExp(findXmlnsRdf, 'g');              
                var findXmlnsXsi = 'xmlnsXsi';
                var replaceXmlnsXsi = new RegExp(findXmlnsXsi, 'g');
                var findXsiSchemaLocation = 'xsiSchemaLocation';
                var replaceXsiSchemaLocation = new RegExp(findXsiSchemaLocation, 'g');

                this.attr_xmlns = "gme://caCORE.caCORE/4.4/edu.northwestern.radiology.AIM";
                this.attr_xmlnsRdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
                this.attr_xmlnsXsi = "http://www.w3.org/2001/XMLSchema-instance";
                this.attr_xsiSchemaLocation = "gme://caCORE.caCORE/4.4/edu.northwestern.radiology.AIM AIM_v4_rv44_XML.xsd";

                var json = JSON.stringify(this).replace(replaceAttribute, "-");                    
                json = json.replace(replaceXsiType, "xsi:type");
                json = json.replace(replaceXmlnsRdf, "xmlns:rdf");
                json = json.replace(replaceXmlnsXsi, "xmlns:xsi");
                json = json.replace(replaceXsiSchemaLocation, "xsi:schemaLocation");
                json = json.replace(replaceTilda, '"');

                return '{ "ImageAnnotationCollection": ' + json + " }";
            }

            if (jsonObject != null) {
                if (jsonObject.person != null) {
                    this.person = new Person(jsonObject.person);
                }
				
				if (jsonObject.imageAnnotations != null) {
				this.imageAnnotations = new imageAnnotations(jsonObject.imageAnnotations);
			    }


                /*if (jsonObject.imageAnnotations != null) {
                    var isArray = true;
                    if (jsonObject.imageAnnotations.length == undefined)
                        isArray = false;
                    if (isArray) {
                        for (i = 0; i < jsonObject.imageAnnotations.length; i++) {
                            this.addImageAnnotation(new ImageAnnotation(jsonObject.imageAnnotations[i]));
                        }
                    }
                    else
                        this.addImageAnnotation(new ImageAnnotation(jsonObject.imageAnnotations));
                }*/
                if (jsonObject.uniqueIdentifier != null) {
                    this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
                }
                if (jsonObject.description != null) {
                    this.description = new ST(jsonObject.description);
                }
                if (jsonObject.dateTime != null) {
                    this.dateTime = new PrimitiveType(jsonObject.dateTime.value);
                }
                if (jsonObject.user != null) {
                    this.user = new User(jsonObject.user);
                }
                if (jsonObject.equipment != null) {
                    this.equipment = new Equipment(jsonObject.equipment);
                }
                if (jsonObject.aimVersion != null) {
                    this.attr_aimVersion = jsonObject.aimVersion;
                }
            };
        };
			
			
		var PrimitiveType = function (value) {
            this.attr_value = value;

            this.setValue = function (value) {
                this.attr_value = value;
            };

            this.getValue = function () {
                return this.attr_value;
            };
        };

		
		var ST = function (jsonObject) {

            var translationTemp = [];

            this.addTranslation = function (type_ST) {
                translationTemp.push(type_ST);
                this.setTranslation(translationTemp);
            };

            this.setTranslation = function (type_arrayOf_ST) {
                this.translation = type_arrayOf_ST;
            };

            this.getTranslation = function () {
                return this.translation;
            };

            this.getTranslationCount = function () {
                return translationTemp.length;
            };

            this.getTranslation = function (index) {
                if (translationTemp.length != undefined && translationTemp.length >= index)
                return translationTemp[index];
                return null;
            }

            this.setValue = function (type_String) {
                this.attr_value= type_String;
            };

            this.getValue = function () {
                return this.attr_value;
            };

            this.setLanguage = function (type_String) {
                this.attr_language= type_String;
            };

            this.getLanguage = function () {
                return this.attr_language;
            };


            if (jsonObject != null) {				
				if(jsonObject instanceof Object)
				{
					if (jsonObject.translation != null) {
						var isArray = true;
						if (jsonObject.translation.length == undefined)
							isArray = false;
						if (isArray) {
							for (i = 0; i < jsonObject.translation.length; i++) {
								this.addTranslation(new ST(jsonObject.translation[i]));
							}
						}
						else
							this.addTranslation(new ST(jsonObject.translation));
					}

					if (jsonObject.value != null) {
						this.attr_value = jsonObject.value;
					}

					if (jsonObject.language != null) {
						this.attr_language = jsonObject.language;
					}
				}
				else
					this.attr_value = jsonObject;
            };
        };
		
		
		
	var imageAnnotations = function (jsonObject) {
	var temp = [];  

	this.addImageAnnotation = function (type_ImageAnnotation) {
		temp.push(type_ImageAnnotation);
		this.setImageAnnotationList(temp);
	};

	this.setImageAnnotationList = function (type_arrayOf_ImageAnnotation) {
		this.ImageAnnotation = type_arrayOf_ImageAnnotation;
		temp = type_arrayOf_ImageAnnotation
	};

	this.getImageAnnotationList = function () {
		return this.ImageAnnotation;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ImageAnnotation != null) {
		var isArray = true;
		if (jsonObject.ImageAnnotation.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ImageAnnotation.length; i++) {
				if(jsonObject.ImageAnnotation[i].xsiType == null) {
					this.addImageAnnotation(new ImageAnnotation(jsonObject.ImageAnnotation[i]));
				}
				else{
					var xsiType = jsonObject.ImageAnnotation[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.ImageAnnotation.xsiType == null) {
				this.addImageAnnotation(new ImageAnnotation(jsonObject.ImageAnnotation));
			}
			else{
				var xsiType = jsonObject.ImageAnnotation.xsiType;
				
			} 
		}
	}
};
		