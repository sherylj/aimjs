
var AdjudicationObservation = function (jsonObject) {
	

	
this.setObservationUid = function (type_II) {
	this.observationUid = type_II;
};

this.getObservationUid= function () {
	return this.observationUid;
};

this.setObservationScope = function (type_CD) {
	this.observationScope = type_CD;
};

this.getObservationScope= function () {
	return this.observationScope;
};

this.setPersonObserversRoleInThisProcedure = function (type_CD) {
	this.personObserversRoleInThisProcedure = type_CD;
};

this.getPersonObserversRoleInThisProcedure= function () {
	return this.personObserversRoleInThisProcedure;
};

var identifierWithinAcceptedPersonObserversRoleTemp = [];

this.addIdentifierWithinAcceptedPersonObserversRole = function (type_ST) {
	identifierWithinAcceptedPersonObserversRoleTemp.push(type_ST);
	this.setIdentifierWithinAcceptedPersonObserversRole(identifierWithinAcceptedPersonObserversRoleTemp);
};

this.setIdentifierWithinAcceptedPersonObserversRole = function (type_arrayOf_ST) {
	this.identifierWithinAcceptedPersonObserversRole = type_arrayOf_ST;
};

this.getIdentifierWithinAcceptedPersonObserversRole = function () {
	return this.identifierWithinAcceptedPersonObserversRole;
};

this.getIdentifierWithinAcceptedPersonObserversRoleCount = function () {
	return identifierWithinAcceptedPersonObserversRoleTemp.length;
};

this.getIdentifierWithinAcceptedPersonObserversRole = function (index) {
	if (identifierWithinAcceptedPersonObserversRoleTemp.length != undefined && identifierWithinAcceptedPersonObserversRoleTemp.length >= index)
		return identifierWithinAcceptedPersonObserversRoleTemp[index];
	return null;
}

var identifierWithinRejectedPersonObserversRoleTemp = [];

this.addIdentifierWithinRejectedPersonObserversRole = function (type_ST) {
	identifierWithinRejectedPersonObserversRoleTemp.push(type_ST);
	this.setIdentifierWithinRejectedPersonObserversRole(identifierWithinRejectedPersonObserversRoleTemp);
};

this.setIdentifierWithinRejectedPersonObserversRole = function (type_arrayOf_ST) {
	this.identifierWithinRejectedPersonObserversRole = type_arrayOf_ST;
};

this.getIdentifierWithinRejectedPersonObserversRole = function () {
	return this.identifierWithinRejectedPersonObserversRole;
};

this.getIdentifierWithinRejectedPersonObserversRoleCount = function () {
	return identifierWithinRejectedPersonObserversRoleTemp.length;
};

this.getIdentifierWithinRejectedPersonObserversRole = function (index) {
	if (identifierWithinRejectedPersonObserversRoleTemp.length != undefined && identifierWithinRejectedPersonObserversRoleTemp.length >= index)
		return identifierWithinRejectedPersonObserversRoleTemp[index];
	return null;
}

this.setReasonForChoice = function (type_CD) {
	this.reasonForChoice = type_CD;
};

this.getReasonForChoice= function () {
	return this.reasonForChoice;
};

this.setReasonForDiscordance = function (type_CD) {
	this.reasonForDiscordance = type_CD;
};

this.getReasonForDiscordance= function () {
	return this.reasonForDiscordance;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setImageQualityIssuesDiscordance = function (type_Boolean) {
	this.imageQualityIssuesDiscordance = new PrimitiveType(type_Boolean);
};

this.getImageQualityIssuesDiscordance = function () {
	return this.imageQualityIssuesDiscordance.getValue();
};


if (jsonObject != null) {
	if(jsonObject.AdjudicationObservation != null) {
		jsonObject = jsonObject.AdjudicationObservation;
	}
	
if (jsonObject.observationUid != null) {
	this.observationUid = new II(jsonObject.observationUid);
}

if (jsonObject.observationScope != null) {
	this.observationScope = new CD(jsonObject.observationScope);
}

if (jsonObject.personObserversRoleInThisProcedure != null) {
	this.personObserversRoleInThisProcedure = new CD(jsonObject.personObserversRoleInThisProcedure);
}

if (jsonObject.identifierWithinAcceptedPersonObserversRole != null) {
	var isArray = true;
	if (jsonObject.identifierWithinAcceptedPersonObserversRole.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.identifierWithinAcceptedPersonObserversRole.length; i++) {
			this.addIdentifierWithinAcceptedPersonObserversRole(new ST(jsonObject.identifierWithinAcceptedPersonObserversRole[i]));
		}
	}
	else
		this.addIdentifierWithinAcceptedPersonObserversRole(new ST(jsonObject.identifierWithinAcceptedPersonObserversRole));
}

if (jsonObject.identifierWithinRejectedPersonObserversRole != null) {
	var isArray = true;
	if (jsonObject.identifierWithinRejectedPersonObserversRole.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.identifierWithinRejectedPersonObserversRole.length; i++) {
			this.addIdentifierWithinRejectedPersonObserversRole(new ST(jsonObject.identifierWithinRejectedPersonObserversRole[i]));
		}
	}
	else
		this.addIdentifierWithinRejectedPersonObserversRole(new ST(jsonObject.identifierWithinRejectedPersonObserversRole));
}

if (jsonObject.reasonForChoice != null) {
	this.reasonForChoice = new CD(jsonObject.reasonForChoice);
}

if (jsonObject.reasonForDiscordance != null) {
	this.reasonForDiscordance = new CD(jsonObject.reasonForDiscordance);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.imageQualityIssuesDiscordance != null) {
	this.imageQualityIssuesDiscordance = new PrimitiveType(jsonObject.imageQualityIssuesDiscordance.value);
}

};
	
};

var Algorithm = function (jsonObject) {
	

	
this.setName = function (type_ST) {
	this.name = type_ST;
};

this.getName= function () {
	return this.name;
};

var typeTemp = [];

this.addType = function (type_CD) {
	typeTemp.push(type_CD);
	this.setType(typeTemp);
};

this.setType = function (type_arrayOf_CD) {
	this.type = type_arrayOf_CD;
};

this.getType = function () {
	return this.type;
};

this.getTypeCount = function () {
	return typeTemp.length;
};

this.getType = function (index) {
	if (typeTemp.length != undefined && typeTemp.length >= index)
		return typeTemp[index];
	return null;
}

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setVersion = function (type_ST) {
	this.version = type_ST;
};

this.getVersion= function () {
	return this.version;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

var parameterCollectionTemp = new ParameterCollection();

this.addParameter = function (type_Parameter) {
	parameterCollectionTemp.addParameter(type_Parameter);
	this.setParameterCollection(parameterCollectionTemp);
};

this.setParameterCollection = function (type_ParameterCollection) {
	this.parameterCollection = type_ParameterCollection;
};

this.getParameterCollection = function () {
	return this.parameterCollection;
};

this.getParameterCount = function () {
	return parameterCollectionTemp.length;
};

this.getParameter = function (index) {
	if (parameterCollectionTemp.length != undefined && parameterCollectionTemp.length >= index)
		return parameterCollectionTemp[index];
	return null;
}


if (jsonObject != null) {
	if(jsonObject.Algorithm != null) {
		jsonObject = jsonObject.Algorithm;
	}
	
if (jsonObject.name != null) {
	this.name = new ST(jsonObject.name);
}

if (jsonObject.type != null) {
	var isArray = true;
	if (jsonObject.type.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.type.length; i++) {
			this.addType(new CD(jsonObject.type[i]));
		}
	}
	else
		this.addType(new CD(jsonObject.type));
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.version != null) {
	this.version = new ST(jsonObject.version);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.parameterCollection != null) {
	this.parameterCollection = new ParameterCollection(jsonObject.parameterCollection);
}

};
	
};

var AnnotationEntityHasPerformedTaskContextEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationEntityHasPerformedTaskContextEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationEntityHasPerformedTaskContextEntityStatement != null) {
		jsonObject = jsonObject.AnnotationEntityHasPerformedTaskContextEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationEntityHasPlannedTaskContextEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationEntityHasPlannedTaskContextEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationEntityHasPlannedTaskContextEntityStatement != null) {
		jsonObject = jsonObject.AnnotationEntityHasPlannedTaskContextEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotation = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotation';

	
this.setAdjudicationObservation = function (type_AdjudicationObservation) {
	this.adjudicationObservation = type_AdjudicationObservation;
};

this.getAdjudicationObservation= function () {
	return this.adjudicationObservation;
};

var annotationOfAnnotationStatementCollectionTemp = new AnnotationOfAnnotationStatementCollection();

this.addAnnotationStatement = function (type_AnnotationStatement) {
	annotationOfAnnotationStatementCollectionTemp.addAnnotationStatement(type_AnnotationStatement);
	this.setAnnotationOfAnnotationStatementCollection(annotationOfAnnotationStatementCollectionTemp);
};

this.setAnnotationOfAnnotationStatementCollection = function (type_AnnotationOfAnnotationStatementCollection) {
	this.annotationOfAnnotationStatementCollection = type_AnnotationOfAnnotationStatementCollection;
};

this.getAnnotationOfAnnotationStatementCollection = function () {
	return this.annotationOfAnnotationStatementCollection;
};

this.getAnnotationStatementCount = function () {
	return annotationOfAnnotationStatementCollectionTemp.length;
};

this.getAnnotationStatement = function (index) {
	if (annotationOfAnnotationStatementCollectionTemp.length != undefined && annotationOfAnnotationStatementCollectionTemp.length >= index)
		return annotationOfAnnotationStatementCollectionTemp[index];
	return null;
}

var typeCodeTemp = [];

this.addTypeCode = function (type_CD) {
	typeCodeTemp.push(type_CD);
	this.setTypeCode(typeCodeTemp);
};

this.setTypeCode = function (type_arrayOf_CD) {
	this.typeCode = type_arrayOf_CD;
};

this.getTypeCode = function () {
	return this.typeCode;
};

this.getTypeCodeCount = function () {
	return typeCodeTemp.length;
};

this.getTypeCode = function (index) {
	if (typeCodeTemp.length != undefined && typeCodeTemp.length >= index)
		return typeCodeTemp[index];
	return null;
}

this.setDateTime = function (type_String) {
	this.dateTime = new PrimitiveType(type_String);
};

this.getDateTime = function () {
	return this.dateTime.getValue();
};

this.setName = function (type_ST) {
	this.name = type_ST;
};

this.getName= function () {
	return this.name;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setPrecedentReferencedAnnotationUid = function (type_II) {
	this.precedentReferencedAnnotationUid = type_II;
};

this.getPrecedentReferencedAnnotationUid= function () {
	return this.precedentReferencedAnnotationUid;
};

this.setTemplateUid = function (type_II) {
	this.templateUid = type_II;
};

this.getTemplateUid= function () {
	return this.templateUid;
};

var auditTrailCollectionTemp = new AuditTrailCollection();

this.addAuditTrail = function (type_AuditTrail) {
	auditTrailCollectionTemp.addAuditTrail(type_AuditTrail);
	this.setAuditTrailCollection(auditTrailCollectionTemp);
};

this.setAuditTrailCollection = function (type_AuditTrailCollection) {
	this.auditTrailCollection = type_AuditTrailCollection;
};

this.getAuditTrailCollection = function () {
	return this.auditTrailCollection;
};

this.getAuditTrailCount = function () {
	return auditTrailCollectionTemp.length;
};

this.getAuditTrail = function (index) {
	if (auditTrailCollectionTemp.length != undefined && auditTrailCollectionTemp.length >= index)
		return auditTrailCollectionTemp[index];
	return null;
}

var imagingPhysicalEntityCollectionTemp = new ImagingPhysicalEntityCollection();

this.addImagingPhysicalEntity = function (type_ImagingPhysicalEntity) {
	imagingPhysicalEntityCollectionTemp.addImagingPhysicalEntity(type_ImagingPhysicalEntity);
	this.setImagingPhysicalEntityCollection(imagingPhysicalEntityCollectionTemp);
};

this.setImagingPhysicalEntityCollection = function (type_ImagingPhysicalEntityCollection) {
	this.imagingPhysicalEntityCollection = type_ImagingPhysicalEntityCollection;
};

this.getImagingPhysicalEntityCollection = function () {
	return this.imagingPhysicalEntityCollection;
};

this.getImagingPhysicalEntityCount = function () {
	return imagingPhysicalEntityCollectionTemp.length;
};

this.getImagingPhysicalEntity = function (index) {
	if (imagingPhysicalEntityCollectionTemp.length != undefined && imagingPhysicalEntityCollectionTemp.length >= index)
		return imagingPhysicalEntityCollectionTemp[index];
	return null;
}

var calculationEntityCollectionTemp = new CalculationEntityCollection();

this.addCalculationEntity = function (type_CalculationEntity) {
	calculationEntityCollectionTemp.addCalculationEntity(type_CalculationEntity);
	this.setCalculationEntityCollection(calculationEntityCollectionTemp);
};

this.setCalculationEntityCollection = function (type_CalculationEntityCollection) {
	this.calculationEntityCollection = type_CalculationEntityCollection;
};

this.getCalculationEntityCollection = function () {
	return this.calculationEntityCollection;
};

this.getCalculationEntityCount = function () {
	return calculationEntityCollectionTemp.length;
};

this.getCalculationEntity = function (index) {
	if (calculationEntityCollectionTemp.length != undefined && calculationEntityCollectionTemp.length >= index)
		return calculationEntityCollectionTemp[index];
	return null;
}

var inferenceEntityCollectionTemp = new InferenceEntityCollection();

this.addInferenceEntity = function (type_InferenceEntity) {
	inferenceEntityCollectionTemp.addInferenceEntity(type_InferenceEntity);
	this.setInferenceEntityCollection(inferenceEntityCollectionTemp);
};

this.setInferenceEntityCollection = function (type_InferenceEntityCollection) {
	this.inferenceEntityCollection = type_InferenceEntityCollection;
};

this.getInferenceEntityCollection = function () {
	return this.inferenceEntityCollection;
};

this.getInferenceEntityCount = function () {
	return inferenceEntityCollectionTemp.length;
};

this.getInferenceEntity = function (index) {
	if (inferenceEntityCollectionTemp.length != undefined && inferenceEntityCollectionTemp.length >= index)
		return inferenceEntityCollectionTemp[index];
	return null;
}

var annotationRoleEntityCollectionTemp = new AnnotationRoleEntityCollection();

this.addAnnotationRoleEntity = function (type_AnnotationRoleEntity) {
	annotationRoleEntityCollectionTemp.addAnnotationRoleEntity(type_AnnotationRoleEntity);
	this.setAnnotationRoleEntityCollection(annotationRoleEntityCollectionTemp);
};

this.setAnnotationRoleEntityCollection = function (type_AnnotationRoleEntityCollection) {
	this.annotationRoleEntityCollection = type_AnnotationRoleEntityCollection;
};

this.getAnnotationRoleEntityCollection = function () {
	return this.annotationRoleEntityCollection;
};

this.getAnnotationRoleEntityCount = function () {
	return annotationRoleEntityCollectionTemp.length;
};

this.getAnnotationRoleEntity = function (index) {
	if (annotationRoleEntityCollectionTemp.length != undefined && annotationRoleEntityCollectionTemp.length >= index)
		return annotationRoleEntityCollectionTemp[index];
	return null;
}

var lesionObservationEntityCollectionTemp = new LesionObservationEntityCollection();

this.addLesionObservationEntity = function (type_LesionObservationEntity) {
	lesionObservationEntityCollectionTemp.addLesionObservationEntity(type_LesionObservationEntity);
	this.setLesionObservationEntityCollection(lesionObservationEntityCollectionTemp);
};

this.setLesionObservationEntityCollection = function (type_LesionObservationEntityCollection) {
	this.lesionObservationEntityCollection = type_LesionObservationEntityCollection;
};

this.getLesionObservationEntityCollection = function () {
	return this.lesionObservationEntityCollection;
};

this.getLesionObservationEntityCount = function () {
	return lesionObservationEntityCollectionTemp.length;
};

this.getLesionObservationEntity = function (index) {
	if (lesionObservationEntityCollectionTemp.length != undefined && lesionObservationEntityCollectionTemp.length >= index)
		return lesionObservationEntityCollectionTemp[index];
	return null;
}

var imagingObservationEntityCollectionTemp = new ImagingObservationEntityCollection();

this.addImagingObservationEntity = function (type_ImagingObservationEntity) {
	imagingObservationEntityCollectionTemp.addImagingObservationEntity(type_ImagingObservationEntity);
	this.setImagingObservationEntityCollection(imagingObservationEntityCollectionTemp);
};

this.setImagingObservationEntityCollection = function (type_ImagingObservationEntityCollection) {
	this.imagingObservationEntityCollection = type_ImagingObservationEntityCollection;
};

this.getImagingObservationEntityCollection = function () {
	return this.imagingObservationEntityCollection;
};

this.getImagingObservationEntityCount = function () {
	return imagingObservationEntityCollectionTemp.length;
};

this.getImagingObservationEntity = function (index) {
	if (imagingObservationEntityCollectionTemp.length != undefined && imagingObservationEntityCollectionTemp.length >= index)
		return imagingObservationEntityCollectionTemp[index];
	return null;
}

var taskContextEntityCollectionTemp = new TaskContextEntityCollection();

this.addTaskContextEntity = function (type_TaskContextEntity) {
	taskContextEntityCollectionTemp.addTaskContextEntity(type_TaskContextEntity);
	this.setTaskContextEntityCollection(taskContextEntityCollectionTemp);
};

this.setTaskContextEntityCollection = function (type_TaskContextEntityCollection) {
	this.taskContextEntityCollection = type_TaskContextEntityCollection;
};

this.getTaskContextEntityCollection = function () {
	return this.taskContextEntityCollection;
};

this.getTaskContextEntityCount = function () {
	return taskContextEntityCollectionTemp.length;
};

this.getTaskContextEntity = function (index) {
	if (taskContextEntityCollectionTemp.length != undefined && taskContextEntityCollectionTemp.length >= index)
		return taskContextEntityCollectionTemp[index];
	return null;
}

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotation != null) {
		jsonObject = jsonObject.AnnotationOfAnnotation;
	}
	
if (jsonObject.adjudicationObservation != null) {
	this.adjudicationObservation = new AdjudicationObservation(jsonObject.adjudicationObservation);
}

if (jsonObject.annotationOfAnnotationStatementCollection != null) {
	this.annotationOfAnnotationStatementCollection = new AnnotationOfAnnotationStatementCollection(jsonObject.annotationOfAnnotationStatementCollection);
}

if (jsonObject.typeCode != null) {
	var isArray = true;
	if (jsonObject.typeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.typeCode.length; i++) {
			this.addTypeCode(new CD(jsonObject.typeCode[i]));
		}
	}
	else
		this.addTypeCode(new CD(jsonObject.typeCode));
}

if (jsonObject.dateTime != null) {
	this.dateTime = new PrimitiveType(jsonObject.dateTime.value);
}

if (jsonObject.name != null) {
	this.name = new ST(jsonObject.name);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.precedentReferencedAnnotationUid != null) {
	this.precedentReferencedAnnotationUid = new II(jsonObject.precedentReferencedAnnotationUid);
}

if (jsonObject.templateUid != null) {
	this.templateUid = new II(jsonObject.templateUid);
}

if (jsonObject.auditTrailCollection != null) {
	this.auditTrailCollection = new AuditTrailCollection(jsonObject.auditTrailCollection);
}

if (jsonObject.imagingPhysicalEntityCollection != null) {
	this.imagingPhysicalEntityCollection = new ImagingPhysicalEntityCollection(jsonObject.imagingPhysicalEntityCollection);
}

if (jsonObject.calculationEntityCollection != null) {
	this.calculationEntityCollection = new CalculationEntityCollection(jsonObject.calculationEntityCollection);
}

if (jsonObject.inferenceEntityCollection != null) {
	this.inferenceEntityCollection = new InferenceEntityCollection(jsonObject.inferenceEntityCollection);
}

if (jsonObject.annotationRoleEntityCollection != null) {
	this.annotationRoleEntityCollection = new AnnotationRoleEntityCollection(jsonObject.annotationRoleEntityCollection);
}

if (jsonObject.lesionObservationEntityCollection != null) {
	this.lesionObservationEntityCollection = new LesionObservationEntityCollection(jsonObject.lesionObservationEntityCollection);
}

if (jsonObject.imagingObservationEntityCollection != null) {
	this.imagingObservationEntityCollection = new ImagingObservationEntityCollection(jsonObject.imagingObservationEntityCollection);
}

if (jsonObject.taskContextEntityCollection != null) {
	this.taskContextEntityCollection = new TaskContextEntityCollection(jsonObject.taskContextEntityCollection);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationCollection = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationCollection';

	
this.setAnnotationOfAnnotations = function (type_) {
	this.annotationOfAnnotations = type_;
};

this.getAnnotationOfAnnotations= function () {
	return this.annotationOfAnnotations;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
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

this.getUser= function () {
	return this.user;
};

this.setEquipment = function (type_Equipment) {
	this.equipment = type_Equipment;
};

this.getEquipment= function () {
	return this.equipment;
};

this.setAimVersion = function (type_AimVersion) {
	this.attr_aimVersion= type_AimVersion;
};

this.getAimVersion = function () {
	return this.attr_aimVersion;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationCollection != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationCollection;
	}
	
if (jsonObject.annotationOfAnnotations != null) {
	this.annotationOfAnnotations = new (jsonObject.annotationOfAnnotations);
}

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

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasAnnotationOfAnnotationStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasAnnotationOfAnnotationStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasAnnotationOfAnnotationStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasAnnotationOfAnnotationStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasAnnotationRoleEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasAnnotationRoleEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasAnnotationRoleEntityStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasAnnotationRoleEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasCalculationEntityStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasImageAnnotationStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasImageAnnotationStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasImageAnnotationStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasImageAnnotationStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasImagingObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasImagingObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasImagingObservationEntityStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasImagingObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasImagingPhysicalEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasImagingPhysicalEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasImagingPhysicalEntityStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasImagingPhysicalEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasInferenceEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasInferenceEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasInferenceEntityStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasInferenceEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationOfAnnotationIsComparedWithImageAnnotationStatement = function (jsonObject) {
	this.attr_xsiType = 'AnnotationOfAnnotationIsComparedWithImageAnnotationStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationOfAnnotationIsComparedWithImageAnnotationStatement != null) {
		jsonObject = jsonObject.AnnotationOfAnnotationIsComparedWithImageAnnotationStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AnnotationRoleEntity = function (jsonObject) {
	this.attr_xsiType = 'AnnotationRoleEntity';

	
this.setRoleCode = function (type_CD) {
	this.roleCode = type_CD;
};

this.getRoleCode= function () {
	return this.roleCode;
};

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setRoleSequenceNumber = function (type_Integer) {
	this.roleSequenceNumber = new PrimitiveType(type_Integer);
};

this.getRoleSequenceNumber = function () {
	return this.roleSequenceNumber.getValue();
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.AnnotationRoleEntity != null) {
		jsonObject = jsonObject.AnnotationRoleEntity;
	}
	
if (jsonObject.roleCode != null) {
	this.roleCode = new CD(jsonObject.roleCode);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.roleSequenceNumber != null) {
	this.roleSequenceNumber = new PrimitiveType(jsonObject.roleSequenceNumber.value);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var AuditTrail = function (jsonObject) {
	

	
this.setStatusCode = function (type_CD) {
	this.statusCode = type_CD;
};

this.getStatusCode= function () {
	return this.statusCode;
};

this.setDateTime = function (type_String) {
	this.dateTime = new PrimitiveType(type_String);
};

this.getDateTime = function () {
	return this.dateTime.getValue();
};

this.setChangeReason = function (type_CD) {
	this.changeReason = type_CD;
};

this.getChangeReason= function () {
	return this.changeReason;
};

this.setWorklistSubtaskUid = function (type_II) {
	this.worklistSubtaskUid = type_II;
};

this.getWorklistSubtaskUid= function () {
	return this.worklistSubtaskUid;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};


if (jsonObject != null) {
	if(jsonObject.AuditTrail != null) {
		jsonObject = jsonObject.AuditTrail;
	}
	
if (jsonObject.statusCode != null) {
	this.statusCode = new CD(jsonObject.statusCode);
}

if (jsonObject.dateTime != null) {
	this.dateTime = new PrimitiveType(jsonObject.dateTime.value);
}

if (jsonObject.changeReason != null) {
	this.changeReason = new CD(jsonObject.changeReason);
}

if (jsonObject.worklistSubtaskUid != null) {
	this.worklistSubtaskUid = new II(jsonObject.worklistSubtaskUid);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

};
	
};

var CalculationData = function (jsonObject) {
	

	
this.setValue = function (type_ST) {
	this.value = type_ST;
};

this.getValue= function () {
	return this.value;
};

var coordinateCollectionTemp = new CoordinateCollection();

this.addCoordinate = function (type_Coordinate) {
	coordinateCollectionTemp.addCoordinate(type_Coordinate);
	this.setCoordinateCollection(coordinateCollectionTemp);
};

this.setCoordinateCollection = function (type_CoordinateCollection) {
	this.coordinateCollection = type_CoordinateCollection;
};

this.getCoordinateCollection = function () {
	return this.coordinateCollection;
};

this.getCoordinateCount = function () {
	return coordinateCollectionTemp.length;
};

this.getCoordinate = function (index) {
	if (coordinateCollectionTemp.length != undefined && coordinateCollectionTemp.length >= index)
		return coordinateCollectionTemp[index];
	return null;
}


if (jsonObject != null) {
	if(jsonObject.CalculationData != null) {
		jsonObject = jsonObject.CalculationData;
	}
	
if (jsonObject.value != null) {
	this.value = new ST(jsonObject.value);
}

if (jsonObject.coordinateCollection != null) {
	this.coordinateCollection = new CoordinateCollection(jsonObject.coordinateCollection);
}

};
	
};

var CalculationEntity = function (jsonObject) {
	this.attr_xsiType = 'CalculationEntity';

	
var typeCodeTemp = [];

this.addTypeCode = function (type_CD) {
	typeCodeTemp.push(type_CD);
	this.setTypeCode(typeCodeTemp);
};

this.setTypeCode = function (type_arrayOf_CD) {
	this.typeCode = type_arrayOf_CD;
};

this.getTypeCode = function () {
	return this.typeCode;
};

this.getTypeCodeCount = function () {
	return typeCodeTemp.length;
};

this.getTypeCode = function (index) {
	if (typeCodeTemp.length != undefined && typeCodeTemp.length >= index)
		return typeCodeTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setMathML = function (type_ST) {
	this.mathML = type_ST;
};

this.getMathML= function () {
	return this.mathML;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

var calculationResultCollectionTemp = new CalculationResultCollection();

this.addCalculationResult = function (type_CalculationResult) {
	calculationResultCollectionTemp.addCalculationResult(type_CalculationResult);
	this.setCalculationResultCollection(calculationResultCollectionTemp);
};

this.setCalculationResultCollection = function (type_CalculationResultCollection) {
	this.calculationResultCollection = type_CalculationResultCollection;
};

this.getCalculationResultCollection = function () {
	return this.calculationResultCollection;
};

this.getCalculationResultCount = function () {
	return calculationResultCollectionTemp.length;
};

this.getCalculationResult = function (index) {
	if (calculationResultCollectionTemp.length != undefined && calculationResultCollectionTemp.length >= index)
		return calculationResultCollectionTemp[index];
	return null;
}

this.setAlgorithm = function (type_Algorithm) {
	this.algorithm = type_Algorithm;
};

this.getAlgorithm= function () {
	return this.algorithm;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.CalculationEntity != null) {
		jsonObject = jsonObject.CalculationEntity;
	}
	
if (jsonObject.typeCode != null) {
	var isArray = true;
	if (jsonObject.typeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.typeCode.length; i++) {
			this.addTypeCode(new CD(jsonObject.typeCode[i]));
		}
	}
	else
		this.addTypeCode(new CD(jsonObject.typeCode));
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.mathML != null) {
	this.mathML = new ST(jsonObject.mathML);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.calculationResultCollection != null) {
	this.calculationResultCollection = new CalculationResultCollection(jsonObject.calculationResultCollection);
}

if (jsonObject.algorithm != null) {
	this.algorithm = new Algorithm(jsonObject.algorithm);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var CalculationEntityIsComparedWithCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'CalculationEntityIsComparedWithCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.CalculationEntityIsComparedWithCalculationEntityStatement != null) {
		jsonObject = jsonObject.CalculationEntityIsComparedWithCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var CalculationEntityReferencesCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'CalculationEntityReferencesCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.CalculationEntityReferencesCalculationEntityStatement != null) {
		jsonObject = jsonObject.CalculationEntityReferencesCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var CalculationEntityUsesCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'CalculationEntityUsesCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.CalculationEntityUsesCalculationEntityStatement != null) {
		jsonObject = jsonObject.CalculationEntityUsesCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var CD = function (jsonObject) {
	

	
this.setDisplayName = function (type_ST) {
	this.displayName = type_ST;
};

this.getDisplayName= function () {
	return this.displayName;
};

this.setOriginalText = function (type_ED_Text) {
	this.originalText = type_ED_Text;
};

this.getOriginalText= function () {
	return this.originalText;
};

var qualifierTemp = [];

this.addQualifier = function (type_CR) {
	qualifierTemp.push(type_CR);
	this.setQualifier(qualifierTemp);
};

this.setQualifier = function (type_arrayOf_CR) {
	this.qualifier = type_arrayOf_CR;
};

this.getQualifier = function () {
	return this.qualifier;
};

this.getQualifierCount = function () {
	return qualifierTemp.length;
};

this.getQualifier = function (index) {
	if (qualifierTemp.length != undefined && qualifierTemp.length >= index)
		return qualifierTemp[index];
	return null;
}

var groupTemp = [];

this.addGroup = function (type_CDGroup) {
	groupTemp.push(type_CDGroup);
	this.setGroup(groupTemp);
};

this.setGroup = function (type_arrayOf_CDGroup) {
	this.group = type_arrayOf_CDGroup;
};

this.getGroup = function () {
	return this.group;
};

this.getGroupCount = function () {
	return groupTemp.length;
};

this.getGroup = function (index) {
	if (groupTemp.length != undefined && groupTemp.length >= index)
		return groupTemp[index];
	return null;
}

var translationTemp = [];

this.addTranslation = function (type_CD) {
	translationTemp.push(type_CD);
	this.setTranslation(translationTemp);
};

this.setTranslation = function (type_arrayOf_CD) {
	this.translation = type_arrayOf_CD;
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

this.setSource = function (type_XReference) {
	this.source = type_XReference;
};

this.getSource= function () {
	return this.source;
};

this.setCode = function (type_String) {
	this.attr_code= type_String;
};

this.getCode = function () {
	return this.attr_code;
};

this.setCodeSystem = function (type_String) {
	this.attr_codeSystem= type_String;
};

this.getCodeSystem = function () {
	return this.attr_codeSystem;
};

this.setCodeSystemName = function (type_String) {
	this.attr_codeSystemName= type_String;
};

this.getCodeSystemName = function () {
	return this.attr_codeSystemName;
};

this.setCodeSystemVersion = function (type_String) {
	this.attr_codeSystemVersion= type_String;
};

this.getCodeSystemVersion = function () {
	return this.attr_codeSystemVersion;
};

this.setValueSet = function (type_String) {
	this.attr_valueSet= type_String;
};

this.getValueSet = function () {
	return this.attr_valueSet;
};

this.setValueSetVersion = function (type_String) {
	this.attr_valueSetVersion= type_String;
};

this.getValueSetVersion = function () {
	return this.attr_valueSetVersion;
};

this.setId = function (type_String) {
	this.attr_id= type_String;
};

this.getId = function () {
	return this.attr_id;
};

this.setCodingRationale = function (type_set_CodingRationale) {
	this.attr_codingRationale= type_set_CodingRationale;
};

this.getCodingRationale = function () {
	return this.attr_codingRationale;
};


if (jsonObject != null) {
	if(jsonObject.CD != null) {
		jsonObject = jsonObject.CD;
	}
	
if (jsonObject.displayName != null) {
	this.displayName = new ST(jsonObject.displayName);
}

if (jsonObject.originalText != null) {
	this.originalText = new ED_Text(jsonObject.originalText);
}

if (jsonObject.qualifier != null) {
	var isArray = true;
	if (jsonObject.qualifier.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.qualifier.length; i++) {
			this.addQualifier(new CR(jsonObject.qualifier[i]));
		}
	}
	else
		this.addQualifier(new CR(jsonObject.qualifier));
}

if (jsonObject.group != null) {
	var isArray = true;
	if (jsonObject.group.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.group.length; i++) {
			this.addGroup(new CDGroup(jsonObject.group[i]));
		}
	}
	else
		this.addGroup(new CDGroup(jsonObject.group));
}

if (jsonObject.translation != null) {
	var isArray = true;
	if (jsonObject.translation.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.translation.length; i++) {
			this.addTranslation(new CD(jsonObject.translation[i]));
		}
	}
	else
		this.addTranslation(new CD(jsonObject.translation));
}

if (jsonObject.source != null) {
	this.source = new XReference(jsonObject.source);
}

if (jsonObject.code != null) {
	this.attr_code = jsonObject.code;
}

if (jsonObject.codeSystem != null) {
	this.attr_codeSystem = jsonObject.codeSystem;
}

if (jsonObject.codeSystemName != null) {
	this.attr_codeSystemName = jsonObject.codeSystemName;
}

if (jsonObject.codeSystemVersion != null) {
	this.attr_codeSystemVersion = jsonObject.codeSystemVersion;
}

if (jsonObject.valueSet != null) {
	this.attr_valueSet = jsonObject.valueSet;
}

if (jsonObject.valueSetVersion != null) {
	this.attr_valueSetVersion = jsonObject.valueSetVersion;
}

if (jsonObject.id != null) {
	this.attr_id = jsonObject.id;
}

if (jsonObject.codingRationale != null) {
	this.attr_codingRationale = jsonObject.codingRationale;
}

};
	
};

var CD_CV = function (jsonObject) {
	

	
this.setDisplayName = function (type_ST) {
	this.displayName = type_ST;
};

this.getDisplayName= function () {
	return this.displayName;
};

this.setOriginalText = function (type_ED_Text) {
	this.originalText = type_ED_Text;
};

this.getOriginalText= function () {
	return this.originalText;
};

var qualifierTemp = [];

this.addQualifier = function (type_CR) {
	qualifierTemp.push(type_CR);
	this.setQualifier(qualifierTemp);
};

this.setQualifier = function (type_arrayOf_CR) {
	this.qualifier = type_arrayOf_CR;
};

this.getQualifier = function () {
	return this.qualifier;
};

this.getQualifierCount = function () {
	return qualifierTemp.length;
};

this.getQualifier = function (index) {
	if (qualifierTemp.length != undefined && qualifierTemp.length >= index)
		return qualifierTemp[index];
	return null;
}

var groupTemp = [];

this.addGroup = function (type_CDGroup) {
	groupTemp.push(type_CDGroup);
	this.setGroup(groupTemp);
};

this.setGroup = function (type_arrayOf_CDGroup) {
	this.group = type_arrayOf_CDGroup;
};

this.getGroup = function () {
	return this.group;
};

this.getGroupCount = function () {
	return groupTemp.length;
};

this.getGroup = function (index) {
	if (groupTemp.length != undefined && groupTemp.length >= index)
		return groupTemp[index];
	return null;
}

this.setTranslation = function (type_CD) {
	this.translation = type_CD;
};

this.getTranslation= function () {
	return this.translation;
};

this.setSource = function (type_XReference) {
	this.source = type_XReference;
};

this.getSource= function () {
	return this.source;
};


if (jsonObject != null) {
	if(jsonObject.CD_CV != null) {
		jsonObject = jsonObject.CD_CV;
	}
	
if (jsonObject.displayName != null) {
	this.displayName = new ST(jsonObject.displayName);
}

if (jsonObject.originalText != null) {
	this.originalText = new ED_Text(jsonObject.originalText);
}

if (jsonObject.qualifier != null) {
	var isArray = true;
	if (jsonObject.qualifier.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.qualifier.length; i++) {
			this.addQualifier(new CR(jsonObject.qualifier[i]));
		}
	}
	else
		this.addQualifier(new CR(jsonObject.qualifier));
}

if (jsonObject.group != null) {
	var isArray = true;
	if (jsonObject.group.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.group.length; i++) {
			this.addGroup(new CDGroup(jsonObject.group[i]));
		}
	}
	else
		this.addGroup(new CDGroup(jsonObject.group));
}

if (jsonObject.translation != null) {
	this.translation = new CD(jsonObject.translation);
}

if (jsonObject.source != null) {
	this.source = new XReference(jsonObject.source);
}

};
	
};

var CDGroup = function (jsonObject) {
	

	
var qualifierTemp = [];

this.addQualifier = function (type_CR) {
	qualifierTemp.push(type_CR);
	this.setQualifier(qualifierTemp);
};

this.setQualifier = function (type_arrayOf_CR) {
	this.qualifier = type_arrayOf_CR;
};

this.getQualifier = function () {
	return this.qualifier;
};

this.getQualifierCount = function () {
	return qualifierTemp.length;
};

this.getQualifier = function (index) {
	if (qualifierTemp.length != undefined && qualifierTemp.length >= index)
		return qualifierTemp[index];
	return null;
}


if (jsonObject != null) {
	if(jsonObject.CDGroup != null) {
		jsonObject = jsonObject.CDGroup;
	}
	
if (jsonObject.qualifier != null) {
	var isArray = true;
	if (jsonObject.qualifier.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.qualifier.length; i++) {
			this.addQualifier(new CR(jsonObject.qualifier[i]));
		}
	}
	else
		this.addQualifier(new CR(jsonObject.qualifier));
}

};
	
};

var CompactCalculationResult = function (jsonObject) {
	this.attr_xsiType = 'CompactCalculationResult';

	
this.setValue = function (type_ST) {
	this.value = type_ST;
};

this.getValue= function () {
	return this.value;
};

this.setEncoding = function (type_CD) {
	this.encoding = type_CD;
};

this.getEncoding= function () {
	return this.encoding;
};

this.setCompression = function (type_CD) {
	this.compression = type_CD;
};

this.getCompression= function () {
	return this.compression;
};

this.setUnitOfMeasure = function (type_ST) {
	this.unitOfMeasure = type_ST;
};

this.getUnitOfMeasure= function () {
	return this.unitOfMeasure;
};

this.setDataType = function (type_CD) {
	this.dataType = type_CD;
};

this.getDataType= function () {
	return this.dataType;
};

var dimensionCollectionTemp = new DimensionCollection();

this.addDimension = function (type_Dimension) {
	dimensionCollectionTemp.addDimension(type_Dimension);
	this.setDimensionCollection(dimensionCollectionTemp);
};

this.setDimensionCollection = function (type_DimensionCollection) {
	this.dimensionCollection = type_DimensionCollection;
};

this.getDimensionCollection = function () {
	return this.dimensionCollection;
};

this.getDimensionCount = function () {
	return dimensionCollectionTemp.length;
};

this.getDimension = function (index) {
	if (dimensionCollectionTemp.length != undefined && dimensionCollectionTemp.length >= index)
		return dimensionCollectionTemp[index];
	return null;
}

this.setType = function (type_CalculationResultIdentifier) {
	this.attr_type= type_CalculationResultIdentifier;
};

this.getType = function () {
	return this.attr_type;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.CompactCalculationResult != null) {
		jsonObject = jsonObject.CompactCalculationResult;
	}
	
if (jsonObject.value != null) {
	this.value = new ST(jsonObject.value);
}

if (jsonObject.encoding != null) {
	this.encoding = new CD(jsonObject.encoding);
}

if (jsonObject.compression != null) {
	this.compression = new CD(jsonObject.compression);
}

if (jsonObject.unitOfMeasure != null) {
	this.unitOfMeasure = new ST(jsonObject.unitOfMeasure);
}

if (jsonObject.dataType != null) {
	this.dataType = new CD(jsonObject.dataType);
}

if (jsonObject.dimensionCollection != null) {
	this.dimensionCollection = new DimensionCollection(jsonObject.dimensionCollection);
}

if (jsonObject.type != null) {
	this.attr_type = jsonObject.type;
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var Coordinate = function (jsonObject) {
	

	
this.setDimensionIndex = function (type_Integer) {
	this.dimensionIndex = new PrimitiveType(type_Integer);
};

this.getDimensionIndex = function () {
	return this.dimensionIndex.getValue();
};

this.setPosition = function (type_Integer) {
	this.position = new PrimitiveType(type_Integer);
};

this.getPosition = function () {
	return this.position.getValue();
};


if (jsonObject != null) {
	if(jsonObject.Coordinate != null) {
		jsonObject = jsonObject.Coordinate;
	}
	
if (jsonObject.dimensionIndex != null) {
	this.dimensionIndex = new PrimitiveType(jsonObject.dimensionIndex.value);
}

if (jsonObject.position != null) {
	this.position = new PrimitiveType(jsonObject.position.value);
}

};
	
};

var CR = function (jsonObject) {
	

	
this.setName = function (type_CD_CV) {
	this.name = type_CD_CV;
};

this.getName= function () {
	return this.name;
};

this.setValue = function (type_CD) {
	this.value = type_CD;
};

this.getValue= function () {
	return this.value;
};

this.setInverted = function (type_Boolean) {
	this.attr_inverted= type_Boolean;
};

this.getInverted = function () {
	return this.attr_inverted;
};


if (jsonObject != null) {
	if(jsonObject.CR != null) {
		jsonObject = jsonObject.CR;
	}
	
if (jsonObject.name != null) {
	this.name = new CD_CV(jsonObject.name);
}

if (jsonObject.value != null) {
	this.value = new CD(jsonObject.value);
}

if (jsonObject.inverted != null) {
	this.attr_inverted = jsonObject.inverted;
}

};
	
};

var DicomImageReferenceEntity = function (jsonObject) {
	this.attr_xsiType = 'DicomImageReferenceEntity';

	
this.setImageStudy = function (type_ImageStudy) {
	this.imageStudy = type_ImageStudy;
};

this.getImageStudy= function () {
	return this.imageStudy;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.DicomImageReferenceEntity != null) {
		jsonObject = jsonObject.DicomImageReferenceEntity;
	}
	
if (jsonObject.imageStudy != null) {
	this.imageStudy = new ImageStudy(jsonObject.imageStudy);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var DicomImageReferenceEntityHasCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'DicomImageReferenceEntityHasCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.DicomImageReferenceEntityHasCalculationEntityStatement != null) {
		jsonObject = jsonObject.DicomImageReferenceEntityHasCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var DicomImageReferenceEntityHasImagingObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'DicomImageReferenceEntityHasImagingObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.DicomImageReferenceEntityHasImagingObservationEntityStatement != null) {
		jsonObject = jsonObject.DicomImageReferenceEntityHasImagingObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var DicomImageReferenceEntityHasImagingPhysicalEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'DicomImageReferenceEntityHasImagingPhysicalEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.DicomImageReferenceEntityHasImagingPhysicalEntityStatement != null) {
		jsonObject = jsonObject.DicomImageReferenceEntityHasImagingPhysicalEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var DicomSegmentationEntity = function (jsonObject) {
	this.attr_xsiType = 'DicomSegmentationEntity';

	
this.setSopInstanceUid = function (type_II) {
	this.sopInstanceUid = type_II;
};

this.getSopInstanceUid= function () {
	return this.sopInstanceUid;
};

this.setSopClassUid = function (type_II) {
	this.sopClassUid = type_II;
};

this.getSopClassUid= function () {
	return this.sopClassUid;
};

this.setReferencedSopInstanceUid = function (type_II) {
	this.referencedSopInstanceUid = type_II;
};

this.getReferencedSopInstanceUid= function () {
	return this.referencedSopInstanceUid;
};

this.setSegmentNumber = function (type_Integer) {
	this.segmentNumber = new PrimitiveType(type_Integer);
};

this.getSegmentNumber = function () {
	return this.segmentNumber.getValue();
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.DicomSegmentationEntity != null) {
		jsonObject = jsonObject.DicomSegmentationEntity;
	}
	
if (jsonObject.sopInstanceUid != null) {
	this.sopInstanceUid = new II(jsonObject.sopInstanceUid);
}

if (jsonObject.sopClassUid != null) {
	this.sopClassUid = new II(jsonObject.sopClassUid);
}

if (jsonObject.referencedSopInstanceUid != null) {
	this.referencedSopInstanceUid = new II(jsonObject.referencedSopInstanceUid);
}

if (jsonObject.segmentNumber != null) {
	this.segmentNumber = new PrimitiveType(jsonObject.segmentNumber.value);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var DicomSegmentationEntityHasImagingObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'DicomSegmentationEntityHasImagingObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.DicomSegmentationEntityHasImagingObservationEntityStatement != null) {
		jsonObject = jsonObject.DicomSegmentationEntityHasImagingObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var Dimension = function (jsonObject) {
	

	
this.setIndex = function (type_Integer) {
	this.index = new PrimitiveType(type_Integer);
};

this.getIndex = function () {
	return this.index.getValue();
};

this.setSize = function (type_Integer) {
	this.size = new PrimitiveType(type_Integer);
};

this.getSize = function () {
	return this.size.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};


if (jsonObject != null) {
	if(jsonObject.Dimension != null) {
		jsonObject = jsonObject.Dimension;
	}
	
if (jsonObject.index != null) {
	this.index = new PrimitiveType(jsonObject.index.value);
}

if (jsonObject.size != null) {
	this.size = new PrimitiveType(jsonObject.size.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

};
	
};

var ED = function (jsonObject) {
	

	
this.setData = function (type_Object) {
	this.data = new PrimitiveType(type_Object);
};

this.getData = function () {
	return this.data.getValue();
};

this.setXml = function (type_Object) {
	this.xml = new PrimitiveType(type_Object);
};

this.getXml = function () {
	return this.xml.getValue();
};

this.setReference = function (type_TEL) {
	this.reference = type_TEL;
};

this.getReference= function () {
	return this.reference;
};

this.setIntegrityCheck = function (type_Object) {
	this.integrityCheck = new PrimitiveType(type_Object);
};

this.getIntegrityCheck = function () {
	return this.integrityCheck.getValue();
};

this.setThumbnail = function (type_ED) {
	this.thumbnail = type_ED;
};

this.getThumbnail= function () {
	return this.thumbnail;
};

var translationTemp = [];

this.addTranslation = function (type_ED) {
	translationTemp.push(type_ED);
	this.setTranslation(translationTemp);
};

this.setTranslation = function (type_arrayOf_ED) {
	this.translation = type_arrayOf_ED;
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

this.setMediaType = function (type_String) {
	this.attr_mediaType= type_String;
};

this.getMediaType = function () {
	return this.attr_mediaType;
};

this.setCharset = function (type_String) {
	this.attr_charset= type_String;
};

this.getCharset = function () {
	return this.attr_charset;
};

this.setLanguage = function (type_String) {
	this.attr_language= type_String;
};

this.getLanguage = function () {
	return this.attr_language;
};

this.setCompression = function (type_Compression) {
	this.attr_compression= type_Compression;
};

this.getCompression = function () {
	return this.attr_compression;
};

this.setIntegrityCheckAlgorithm = function (type_IntegrityCheckAlgorithm) {
	this.attr_integrityCheckAlgorithm= type_IntegrityCheckAlgorithm;
};

this.getIntegrityCheckAlgorithm = function () {
	return this.attr_integrityCheckAlgorithm;
};


if (jsonObject != null) {
	if(jsonObject.ED != null) {
		jsonObject = jsonObject.ED;
	}
	
if (jsonObject.data != null) {
	this.data = new PrimitiveType(jsonObject.data.value);
}

if (jsonObject.xml != null) {
	this.xml = new PrimitiveType(jsonObject.xml.value);
}

if (jsonObject.reference != null) {
	this.reference = new TEL(jsonObject.reference);
}

if (jsonObject.integrityCheck != null) {
	this.integrityCheck = new PrimitiveType(jsonObject.integrityCheck.value);
}

if (jsonObject.thumbnail != null) {
	this.thumbnail = new ED(jsonObject.thumbnail);
}

if (jsonObject.translation != null) {
	var isArray = true;
	if (jsonObject.translation.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.translation.length; i++) {
			this.addTranslation(new ED(jsonObject.translation[i]));
		}
	}
	else
		this.addTranslation(new ED(jsonObject.translation));
}

if (jsonObject.value != null) {
	this.attr_value = jsonObject.value;
}

if (jsonObject.mediaType != null) {
	this.attr_mediaType = jsonObject.mediaType;
}

if (jsonObject.charset != null) {
	this.attr_charset = jsonObject.charset;
}

if (jsonObject.language != null) {
	this.attr_language = jsonObject.language;
}

if (jsonObject.compression != null) {
	this.attr_compression = jsonObject.compression;
}

if (jsonObject.integrityCheckAlgorithm != null) {
	this.attr_integrityCheckAlgorithm = jsonObject.integrityCheckAlgorithm;
}

};
	
};

var ED_Text = function (jsonObject) {
	

	
this.setData = function (type_Object) {
	this.data = new PrimitiveType(type_Object);
};

this.getData = function () {
	return this.data.getValue();
};

this.setXml = function (type_Object) {
	this.xml = new PrimitiveType(type_Object);
};

this.getXml = function () {
	return this.xml.getValue();
};

this.setReference = function (type_TEL) {
	this.reference = type_TEL;
};

this.getReference= function () {
	return this.reference;
};

this.setIntegrityCheck = function (type_Object) {
	this.integrityCheck = new PrimitiveType(type_Object);
};

this.getIntegrityCheck = function () {
	return this.integrityCheck.getValue();
};

this.setThumbnail = function (type_ED) {
	this.thumbnail = type_ED;
};

this.getThumbnail= function () {
	return this.thumbnail;
};

this.setTranslation = function (type_ED) {
	this.translation = type_ED;
};

this.getTranslation= function () {
	return this.translation;
};

this.setMediaType = function (type_String) {
	this.attr_mediaType= type_String;
};

this.getMediaType = function () {
	return this.attr_mediaType;
};

this.setCompression = function (type_Compression) {
	this.attr_compression= type_Compression;
};

this.getCompression = function () {
	return this.attr_compression;
};


if (jsonObject != null) {
	if(jsonObject.ED_Text != null) {
		jsonObject = jsonObject.ED_Text;
	}
	
if (jsonObject.data != null) {
	this.data = new PrimitiveType(jsonObject.data.value);
}

if (jsonObject.xml != null) {
	this.xml = new PrimitiveType(jsonObject.xml.value);
}

if (jsonObject.reference != null) {
	this.reference = new TEL(jsonObject.reference);
}

if (jsonObject.integrityCheck != null) {
	this.integrityCheck = new PrimitiveType(jsonObject.integrityCheck.value);
}

if (jsonObject.thumbnail != null) {
	this.thumbnail = new ED(jsonObject.thumbnail);
}

if (jsonObject.translation != null) {
	this.translation = new ED(jsonObject.translation);
}

if (jsonObject.mediaType != null) {
	this.attr_mediaType = jsonObject.mediaType;
}

if (jsonObject.compression != null) {
	this.attr_compression = jsonObject.compression;
}

};
	
};

var Equipment = function (jsonObject) {
	

	
this.setManufacturerName = function (type_ST) {
	this.manufacturerName = type_ST;
};

this.getManufacturerName= function () {
	return this.manufacturerName;
};

this.setManufacturerModelName = function (type_ST) {
	this.manufacturerModelName = type_ST;
};

this.getManufacturerModelName= function () {
	return this.manufacturerModelName;
};

this.setDeviceSerialNumber = function (type_ST) {
	this.deviceSerialNumber = type_ST;
};

this.getDeviceSerialNumber= function () {
	return this.deviceSerialNumber;
};

this.setSoftwareVersion = function (type_ST) {
	this.softwareVersion = type_ST;
};

this.getSoftwareVersion= function () {
	return this.softwareVersion;
};


if (jsonObject != null) {
	if(jsonObject.Equipment != null) {
		jsonObject = jsonObject.Equipment;
	}
	
if (jsonObject.manufacturerName != null) {
	this.manufacturerName = new ST(jsonObject.manufacturerName);
}

if (jsonObject.manufacturerModelName != null) {
	this.manufacturerModelName = new ST(jsonObject.manufacturerModelName);
}

if (jsonObject.deviceSerialNumber != null) {
	this.deviceSerialNumber = new ST(jsonObject.deviceSerialNumber);
}

if (jsonObject.softwareVersion != null) {
	this.softwareVersion = new ST(jsonObject.softwareVersion);
}

};
	
};

var ExtendedCalculationResult = function (jsonObject) {
	this.attr_xsiType = 'ExtendedCalculationResult';

	
var calculationDataCollectionTemp = new CalculationDataCollection();

this.addCalculationData = function (type_CalculationData) {
	calculationDataCollectionTemp.addCalculationData(type_CalculationData);
	this.setCalculationDataCollection(calculationDataCollectionTemp);
};

this.setCalculationDataCollection = function (type_CalculationDataCollection) {
	this.calculationDataCollection = type_CalculationDataCollection;
};

this.getCalculationDataCollection = function () {
	return this.calculationDataCollection;
};

this.getCalculationDataCount = function () {
	return calculationDataCollectionTemp.length;
};

this.getCalculationData = function (index) {
	if (calculationDataCollectionTemp.length != undefined && calculationDataCollectionTemp.length >= index)
		return calculationDataCollectionTemp[index];
	return null;
}

this.setUnitOfMeasure = function (type_ST) {
	this.unitOfMeasure = type_ST;
};

this.getUnitOfMeasure= function () {
	return this.unitOfMeasure;
};

this.setDataType = function (type_CD) {
	this.dataType = type_CD;
};

this.getDataType= function () {
	return this.dataType;
};

var dimensionCollectionTemp = new DimensionCollection();

this.addDimension = function (type_Dimension) {
	dimensionCollectionTemp.addDimension(type_Dimension);
	this.setDimensionCollection(dimensionCollectionTemp);
};

this.setDimensionCollection = function (type_DimensionCollection) {
	this.dimensionCollection = type_DimensionCollection;
};

this.getDimensionCollection = function () {
	return this.dimensionCollection;
};

this.getDimensionCount = function () {
	return dimensionCollectionTemp.length;
};

this.getDimension = function (index) {
	if (dimensionCollectionTemp.length != undefined && dimensionCollectionTemp.length >= index)
		return dimensionCollectionTemp[index];
	return null;
}

this.setType = function (type_CalculationResultIdentifier) {
	this.attr_type= type_CalculationResultIdentifier;
};

this.getType = function () {
	return this.attr_type;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ExtendedCalculationResult != null) {
		jsonObject = jsonObject.ExtendedCalculationResult;
	}
	
if (jsonObject.calculationDataCollection != null) {
	this.calculationDataCollection = new CalculationDataCollection(jsonObject.calculationDataCollection);
}

if (jsonObject.unitOfMeasure != null) {
	this.unitOfMeasure = new ST(jsonObject.unitOfMeasure);
}

if (jsonObject.dataType != null) {
	this.dataType = new CD(jsonObject.dataType);
}

if (jsonObject.dimensionCollection != null) {
	this.dimensionCollection = new DimensionCollection(jsonObject.dimensionCollection);
}

if (jsonObject.type != null) {
	this.attr_type = jsonObject.type;
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var GeneralImage = function (jsonObject) {
	

	
this.setPatientOrientationColumn = function (type_ST) {
	this.patientOrientationColumn = type_ST;
};

this.getPatientOrientationColumn= function () {
	return this.patientOrientationColumn;
};

this.setPatientOrientationRow = function (type_ST) {
	this.patientOrientationRow = type_ST;
};

this.getPatientOrientationRow= function () {
	return this.patientOrientationRow;
};


if (jsonObject != null) {
	if(jsonObject.GeneralImage != null) {
		jsonObject = jsonObject.GeneralImage;
	}
	
if (jsonObject.patientOrientationColumn != null) {
	this.patientOrientationColumn = new ST(jsonObject.patientOrientationColumn);
}

if (jsonObject.patientOrientationRow != null) {
	this.patientOrientationRow = new ST(jsonObject.patientOrientationRow);
}

};
	
};

var GeneralLesionObservationEntity = function (jsonObject) {
	this.attr_xsiType = 'GeneralLesionObservationEntity';

	
this.setTrackingIdentifier = function (type_ST) {
	this.trackingIdentifier = type_ST;
};

this.getTrackingIdentifier= function () {
	return this.trackingIdentifier;
};

this.setLesionType = function (type_CD) {
	this.lesionType = type_CD;
};

this.getLesionType= function () {
	return this.lesionType;
};

this.setReconstructionInterval = function (type_CD) {
	this.reconstructionInterval = type_CD;
};

this.getReconstructionInterval= function () {
	return this.reconstructionInterval;
};

this.setLaterality = function (type_CD) {
	this.laterality = type_CD;
};

this.getLaterality= function () {
	return this.laterality;
};

this.setLesionUniqueIdentifier = function (type_II) {
	this.lesionUniqueIdentifier = type_II;
};

this.getLesionUniqueIdentifier= function () {
	return this.lesionUniqueIdentifier;
};

this.setIsAdditionalObservation = function (type_Boolean) {
	this.isAdditionalObservation = new PrimitiveType(type_Boolean);
};

this.getIsAdditionalObservation = function () {
	return this.isAdditionalObservation.getValue();
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.GeneralLesionObservationEntity != null) {
		jsonObject = jsonObject.GeneralLesionObservationEntity;
	}
	
if (jsonObject.trackingIdentifier != null) {
	this.trackingIdentifier = new ST(jsonObject.trackingIdentifier);
}

if (jsonObject.lesionType != null) {
	this.lesionType = new CD(jsonObject.lesionType);
}

if (jsonObject.reconstructionInterval != null) {
	this.reconstructionInterval = new CD(jsonObject.reconstructionInterval);
}

if (jsonObject.laterality != null) {
	this.laterality = new CD(jsonObject.laterality);
}

if (jsonObject.lesionUniqueIdentifier != null) {
	this.lesionUniqueIdentifier = new II(jsonObject.lesionUniqueIdentifier);
}

if (jsonObject.isAdditionalObservation != null) {
	this.isAdditionalObservation = new PrimitiveType(jsonObject.isAdditionalObservation.value);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var GeneralLesionObservationEntityHasImagingPhysicalEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'GeneralLesionObservationEntityHasImagingPhysicalEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.GeneralLesionObservationEntityHasImagingPhysicalEntityStatement != null) {
		jsonObject = jsonObject.GeneralLesionObservationEntityHasImagingPhysicalEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var II = function (jsonObject) {
	

	
this.setRoot = function (type_String) {
	this.attr_root= type_String;
};

this.getRoot = function () {
	return this.attr_root;
};

this.setExtension = function (type_String) {
	this.attr_extension= type_String;
};

this.getExtension = function () {
	return this.attr_extension;
};

this.setIdentifierName = function (type_String) {
	this.attr_identifierName= type_String;
};

this.getIdentifierName = function () {
	return this.attr_identifierName;
};

this.setDisplayable = function (type_Boolean) {
	this.attr_displayable= type_Boolean;
};

this.getDisplayable = function () {
	return this.attr_displayable;
};

this.setScope = function (type_IdentifierScope) {
	this.attr_scope= type_IdentifierScope;
};

this.getScope = function () {
	return this.attr_scope;
};

this.setReliability = function (type_IdentifierReliability) {
	this.attr_reliability= type_IdentifierReliability;
};

this.getReliability = function () {
	return this.attr_reliability;
};


if (jsonObject != null) {
	if(jsonObject.II != null) {
		jsonObject = jsonObject.II;
	}
	
if (jsonObject.root != null) {
	this.attr_root = jsonObject.root;
}

if (jsonObject.extension != null) {
	this.attr_extension = jsonObject.extension;
}

if (jsonObject.identifierName != null) {
	this.attr_identifierName = jsonObject.identifierName;
}

if (jsonObject.displayable != null) {
	this.attr_displayable = jsonObject.displayable;
}

if (jsonObject.scope != null) {
	this.attr_scope = jsonObject.scope;
}

if (jsonObject.reliability != null) {
	this.attr_reliability = jsonObject.reliability;
}

};
	
};

var Image = function (jsonObject) {
	

	
this.setSopClassUid = function (type_II) {
	this.sopClassUid = type_II;
};

this.getSopClassUid= function () {
	return this.sopClassUid;
};

this.setSopInstanceUid = function (type_II) {
	this.sopInstanceUid = type_II;
};

this.getSopInstanceUid= function () {
	return this.sopInstanceUid;
};

this.setImagePlane = function (type_ImagePlane) {
	this.imagePlane = type_ImagePlane;
};

this.getImagePlane= function () {
	return this.imagePlane;
};

this.setGeneralImage = function (type_GeneralImage) {
	this.generalImage = type_GeneralImage;
};

this.getGeneralImage= function () {
	return this.generalImage;
};


if (jsonObject != null) {
	if(jsonObject.Image != null) {
		jsonObject = jsonObject.Image;
	}
	
if (jsonObject.sopClassUid != null) {
	this.sopClassUid = new II(jsonObject.sopClassUid);
}

if (jsonObject.sopInstanceUid != null) {
	this.sopInstanceUid = new II(jsonObject.sopInstanceUid);
}

if (jsonObject.imagePlane != null) {
	this.imagePlane = new ImagePlane(jsonObject.imagePlane);
}

if (jsonObject.generalImage != null) {
	this.generalImage = new GeneralImage(jsonObject.generalImage);
}

};
	
};

var ImageAnnotation = function (jsonObject) {
	

	
var segmentationEntityCollectionTemp = new SegmentationEntityCollection();

this.addSegmentationEntity = function (type_SegmentationEntity) {
	segmentationEntityCollectionTemp.addSegmentationEntity(type_SegmentationEntity);
	this.setSegmentationEntityCollection(segmentationEntityCollectionTemp);
};

this.setSegmentationEntityCollection = function (type_SegmentationEntityCollection) {
	this.segmentationEntityCollection = type_SegmentationEntityCollection;
};

this.getSegmentationEntityCollection = function () {
	return this.segmentationEntityCollection;
};

this.getSegmentationEntityCount = function () {
	return segmentationEntityCollectionTemp.length;
};

this.getSegmentationEntity = function (index) {
	if (segmentationEntityCollectionTemp.length != undefined && segmentationEntityCollectionTemp.length >= index)
		return segmentationEntityCollectionTemp[index];
	return null;
}

var markupEntityCollectionTemp = new MarkupEntityCollection();

this.addMarkupEntity = function (type_MarkupEntity) {
	markupEntityCollectionTemp.addMarkupEntity(type_MarkupEntity);
	this.setMarkupEntityCollection(markupEntityCollectionTemp);
};

this.setMarkupEntityCollection = function (type_MarkupEntityCollection) {
	this.markupEntityCollection = type_MarkupEntityCollection;
};

this.getMarkupEntityCollection = function () {
	return this.markupEntityCollection;
};

this.getMarkupEntityCount = function () {
	return markupEntityCollectionTemp.length;
};

this.getMarkupEntity = function (index) {
	if (markupEntityCollectionTemp.length != undefined && markupEntityCollectionTemp.length >= index)
		return markupEntityCollectionTemp[index];
	return null;
}

var imageAnnotationStatementCollectionTemp = new ImageAnnotationStatementCollection();

this.addAnnotationStatement = function (type_AnnotationStatement) {
	imageAnnotationStatementCollectionTemp.addAnnotationStatement(type_AnnotationStatement);
	this.setImageAnnotationStatementCollection(imageAnnotationStatementCollectionTemp);
};

this.setImageAnnotationStatementCollection = function (type_ImageAnnotationStatementCollection) {
	this.imageAnnotationStatementCollection = type_ImageAnnotationStatementCollection;
};

this.getImageAnnotationStatementCollection = function () {
	return this.imageAnnotationStatementCollection;
};

this.getAnnotationStatementCount = function () {
	return imageAnnotationStatementCollectionTemp.length;
};

this.getAnnotationStatement = function (index) {
	if (imageAnnotationStatementCollectionTemp.length != undefined && imageAnnotationStatementCollectionTemp.length >= index)
		return imageAnnotationStatementCollectionTemp[index];
	return null;
}

var imageReferenceEntityCollectionTemp = new ImageReferenceEntityCollection();

this.addImageReferenceEntity = function (type_ImageReferenceEntity) {
	imageReferenceEntityCollectionTemp.addImageReferenceEntity(type_ImageReferenceEntity);
	this.setImageReferenceEntityCollection(imageReferenceEntityCollectionTemp);
};

this.setImageReferenceEntityCollection = function (type_ImageReferenceEntityCollection) {
	this.imageReferenceEntityCollection = type_ImageReferenceEntityCollection;
};

this.getImageReferenceEntityCollection = function () {
	return this.imageReferenceEntityCollection;
};

this.getImageReferenceEntityCount = function () {
	return imageReferenceEntityCollectionTemp.length;
};

this.getImageReferenceEntity = function (index) {
	if (imageReferenceEntityCollectionTemp.length != undefined && imageReferenceEntityCollectionTemp.length >= index)
		return imageReferenceEntityCollectionTemp[index];
	return null;
}

var typeCodeTemp = [];

this.addTypeCode = function (type_CD) {
	typeCodeTemp.push(type_CD);
	this.setTypeCode(typeCodeTemp);
};

this.setTypeCode = function (type_arrayOf_CD) {
	this.typeCode = type_arrayOf_CD;
};

this.getTypeCode = function () {
	return this.typeCode;
};

this.getTypeCodeCount = function () {
	return typeCodeTemp.length;
};

this.getTypeCode = function (index) {
	if (typeCodeTemp.length != undefined && typeCodeTemp.length >= index)
		return typeCodeTemp[index];
	return null;
}

this.setDateTime = function (type_String) {
	this.dateTime = new PrimitiveType(type_String);
};

this.getDateTime = function () {
	return this.dateTime.getValue();
};

this.setName = function (type_ST) {
	this.name = type_ST;
};

this.getName= function () {
	return this.name;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setPrecedentReferencedAnnotationUid = function (type_II) {
	this.precedentReferencedAnnotationUid = type_II;
};

this.getPrecedentReferencedAnnotationUid= function () {
	return this.precedentReferencedAnnotationUid;
};

this.setTemplateUid = function (type_II) {
	this.templateUid = type_II;
};

this.getTemplateUid= function () {
	return this.templateUid;
};

var auditTrailCollectionTemp = new AuditTrailCollection();

this.addAuditTrail = function (type_AuditTrail) {
	auditTrailCollectionTemp.addAuditTrail(type_AuditTrail);
	this.setAuditTrailCollection(auditTrailCollectionTemp);
};

this.setAuditTrailCollection = function (type_AuditTrailCollection) {
	this.auditTrailCollection = type_AuditTrailCollection;
};

this.getAuditTrailCollection = function () {
	return this.auditTrailCollection;
};

this.getAuditTrailCount = function () {
	return auditTrailCollectionTemp.length;
};

this.getAuditTrail = function (index) {
	if (auditTrailCollectionTemp.length != undefined && auditTrailCollectionTemp.length >= index)
		return auditTrailCollectionTemp[index];
	return null;
}

var imagingPhysicalEntityCollectionTemp = new ImagingPhysicalEntityCollection();

this.addImagingPhysicalEntity = function (type_ImagingPhysicalEntity) {
	imagingPhysicalEntityCollectionTemp.addImagingPhysicalEntity(type_ImagingPhysicalEntity);
	this.setImagingPhysicalEntityCollection(imagingPhysicalEntityCollectionTemp);
};

this.setImagingPhysicalEntityCollection = function (type_ImagingPhysicalEntityCollection) {
	this.imagingPhysicalEntityCollection = type_ImagingPhysicalEntityCollection;
};

this.getImagingPhysicalEntityCollection = function () {
	return this.imagingPhysicalEntityCollection;
};

this.getImagingPhysicalEntityCount = function () {
	return imagingPhysicalEntityCollectionTemp.length;
};

this.getImagingPhysicalEntity = function (index) {
	if (imagingPhysicalEntityCollectionTemp.length != undefined && imagingPhysicalEntityCollectionTemp.length >= index)
		return imagingPhysicalEntityCollectionTemp[index];
	return null;
}

var calculationEntityCollectionTemp = new CalculationEntityCollection();

this.addCalculationEntity = function (type_CalculationEntity) {
	calculationEntityCollectionTemp.addCalculationEntity(type_CalculationEntity);
	this.setCalculationEntityCollection(calculationEntityCollectionTemp);
};

this.setCalculationEntityCollection = function (type_CalculationEntityCollection) {
	this.calculationEntityCollection = type_CalculationEntityCollection;
};

this.getCalculationEntityCollection = function () {
	return this.calculationEntityCollection;
};

this.getCalculationEntityCount = function () {
	return calculationEntityCollectionTemp.length;
};

this.getCalculationEntity = function (index) {
	if (calculationEntityCollectionTemp.length != undefined && calculationEntityCollectionTemp.length >= index)
		return calculationEntityCollectionTemp[index];
	return null;
}

var inferenceEntityCollectionTemp = new InferenceEntityCollection();

this.addInferenceEntity = function (type_InferenceEntity) {
	inferenceEntityCollectionTemp.addInferenceEntity(type_InferenceEntity);
	this.setInferenceEntityCollection(inferenceEntityCollectionTemp);
};

this.setInferenceEntityCollection = function (type_InferenceEntityCollection) {
	this.inferenceEntityCollection = type_InferenceEntityCollection;
};

this.getInferenceEntityCollection = function () {
	return this.inferenceEntityCollection;
};

this.getInferenceEntityCount = function () {
	return inferenceEntityCollectionTemp.length;
};

this.getInferenceEntity = function (index) {
	if (inferenceEntityCollectionTemp.length != undefined && inferenceEntityCollectionTemp.length >= index)
		return inferenceEntityCollectionTemp[index];
	return null;
}

var annotationRoleEntityCollectionTemp = new AnnotationRoleEntityCollection();

this.addAnnotationRoleEntity = function (type_AnnotationRoleEntity) {
	annotationRoleEntityCollectionTemp.addAnnotationRoleEntity(type_AnnotationRoleEntity);
	this.setAnnotationRoleEntityCollection(annotationRoleEntityCollectionTemp);
};

this.setAnnotationRoleEntityCollection = function (type_AnnotationRoleEntityCollection) {
	this.annotationRoleEntityCollection = type_AnnotationRoleEntityCollection;
};

this.getAnnotationRoleEntityCollection = function () {
	return this.annotationRoleEntityCollection;
};

this.getAnnotationRoleEntityCount = function () {
	return annotationRoleEntityCollectionTemp.length;
};

this.getAnnotationRoleEntity = function (index) {
	if (annotationRoleEntityCollectionTemp.length != undefined && annotationRoleEntityCollectionTemp.length >= index)
		return annotationRoleEntityCollectionTemp[index];
	return null;
}

var lesionObservationEntityCollectionTemp = new LesionObservationEntityCollection();

this.addLesionObservationEntity = function (type_LesionObservationEntity) {
	lesionObservationEntityCollectionTemp.addLesionObservationEntity(type_LesionObservationEntity);
	this.setLesionObservationEntityCollection(lesionObservationEntityCollectionTemp);
};

this.setLesionObservationEntityCollection = function (type_LesionObservationEntityCollection) {
	this.lesionObservationEntityCollection = type_LesionObservationEntityCollection;
};

this.getLesionObservationEntityCollection = function () {
	return this.lesionObservationEntityCollection;
};

this.getLesionObservationEntityCount = function () {
	return lesionObservationEntityCollectionTemp.length;
};

this.getLesionObservationEntity = function (index) {
	if (lesionObservationEntityCollectionTemp.length != undefined && lesionObservationEntityCollectionTemp.length >= index)
		return lesionObservationEntityCollectionTemp[index];
	return null;
}

var imagingObservationEntityCollectionTemp = new ImagingObservationEntityCollection();

this.addImagingObservationEntity = function (type_ImagingObservationEntity) {
	imagingObservationEntityCollectionTemp.addImagingObservationEntity(type_ImagingObservationEntity);
	this.setImagingObservationEntityCollection(imagingObservationEntityCollectionTemp);
};

this.setImagingObservationEntityCollection = function (type_ImagingObservationEntityCollection) {
	this.imagingObservationEntityCollection = type_ImagingObservationEntityCollection;
};

this.getImagingObservationEntityCollection = function () {
	return this.imagingObservationEntityCollection;
};

this.getImagingObservationEntityCount = function () {
	return imagingObservationEntityCollectionTemp.length;
};

this.getImagingObservationEntity = function (index) {
	if (imagingObservationEntityCollectionTemp.length != undefined && imagingObservationEntityCollectionTemp.length >= index)
		return imagingObservationEntityCollectionTemp[index];
	return null;
}

var taskContextEntityCollectionTemp = new TaskContextEntityCollection();

this.addTaskContextEntity = function (type_TaskContextEntity) {
	taskContextEntityCollectionTemp.addTaskContextEntity(type_TaskContextEntity);
	this.setTaskContextEntityCollection(taskContextEntityCollectionTemp);
};

this.setTaskContextEntityCollection = function (type_TaskContextEntityCollection) {
	this.taskContextEntityCollection = type_TaskContextEntityCollection;
};

this.getTaskContextEntityCollection = function () {
	return this.taskContextEntityCollection;
};

this.getTaskContextEntityCount = function () {
	return taskContextEntityCollectionTemp.length;
};

this.getTaskContextEntity = function (index) {
	if (taskContextEntityCollectionTemp.length != undefined && taskContextEntityCollectionTemp.length >= index)
		return taskContextEntityCollectionTemp[index];
	return null;
}

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotation != null) {
		jsonObject = jsonObject.ImageAnnotation;
	}
	
if (jsonObject.segmentationEntityCollection != null) {
	this.segmentationEntityCollection = new SegmentationEntityCollection(jsonObject.segmentationEntityCollection);
}

if (jsonObject.markupEntityCollection != null) {
	this.markupEntityCollection = new MarkupEntityCollection(jsonObject.markupEntityCollection);
}

if (jsonObject.imageAnnotationStatementCollection != null) {
	this.imageAnnotationStatementCollection = new ImageAnnotationStatementCollection(jsonObject.imageAnnotationStatementCollection);
}

if (jsonObject.imageReferenceEntityCollection != null) {
	this.imageReferenceEntityCollection = new ImageReferenceEntityCollection(jsonObject.imageReferenceEntityCollection);
}

if (jsonObject.typeCode != null) {
	var isArray = true;
	if (jsonObject.typeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.typeCode.length; i++) {
			this.addTypeCode(new CD(jsonObject.typeCode[i]));
		}
	}
	else
		this.addTypeCode(new CD(jsonObject.typeCode));
}

if (jsonObject.dateTime != null) {
	this.dateTime = new PrimitiveType(jsonObject.dateTime.value);
}

if (jsonObject.name != null) {
	this.name = new ST(jsonObject.name);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.precedentReferencedAnnotationUid != null) {
	this.precedentReferencedAnnotationUid = new II(jsonObject.precedentReferencedAnnotationUid);
}

if (jsonObject.templateUid != null) {
	this.templateUid = new II(jsonObject.templateUid);
}

if (jsonObject.auditTrailCollection != null) {
	this.auditTrailCollection = new AuditTrailCollection(jsonObject.auditTrailCollection);
}

if (jsonObject.imagingPhysicalEntityCollection != null) {
	this.imagingPhysicalEntityCollection = new ImagingPhysicalEntityCollection(jsonObject.imagingPhysicalEntityCollection);
}

if (jsonObject.calculationEntityCollection != null) {
	this.calculationEntityCollection = new CalculationEntityCollection(jsonObject.calculationEntityCollection);
}

if (jsonObject.inferenceEntityCollection != null) {
	this.inferenceEntityCollection = new InferenceEntityCollection(jsonObject.inferenceEntityCollection);
}

if (jsonObject.annotationRoleEntityCollection != null) {
	this.annotationRoleEntityCollection = new AnnotationRoleEntityCollection(jsonObject.annotationRoleEntityCollection);
}

if (jsonObject.lesionObservationEntityCollection != null) {
	this.lesionObservationEntityCollection = new LesionObservationEntityCollection(jsonObject.lesionObservationEntityCollection);
}

if (jsonObject.imagingObservationEntityCollection != null) {
	this.imagingObservationEntityCollection = new ImagingObservationEntityCollection(jsonObject.imagingObservationEntityCollection);
}

if (jsonObject.taskContextEntityCollection != null) {
	this.taskContextEntityCollection = new TaskContextEntityCollection(jsonObject.taskContextEntityCollection);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

};
	
};

var ImageAnnotationHasAnnotationRoleEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasAnnotationRoleEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasAnnotationRoleEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasAnnotationRoleEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasCalculationEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasChildImageAnnotationStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasChildImageAnnotationStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasChildImageAnnotationStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasChildImageAnnotationStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasDicomImageReferenceEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasDicomImageReferenceEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasDicomImageReferenceEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasDicomImageReferenceEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasDicomSegmentationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasDicomSegmentationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasDicomSegmentationEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasDicomSegmentationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasGeneralLesionObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasGeneralLesionObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasGeneralLesionObservationEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasGeneralLesionObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasImagingObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasImagingObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasImagingObservationEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasImagingObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasImagingPhysicalEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasImagingPhysicalEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasImagingPhysicalEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasImagingPhysicalEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasInferenceEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasInferenceEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasInferenceEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasInferenceEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasTextAnnotationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasTextAnnotationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasTextAnnotationEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasTextAnnotationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasTimePointLesionObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasTimePointLesionObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasTimePointLesionObservationEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasTimePointLesionObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationHasUriImageReferenceEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationHasUriImageReferenceEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationHasUriImageReferenceEntityStatement != null) {
		jsonObject = jsonObject.ImageAnnotationHasUriImageReferenceEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement != null) {
		jsonObject = jsonObject.ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImageAnnotationIsComparedWithImageAnnotationStatement = function (jsonObject) {
	this.attr_xsiType = 'ImageAnnotationIsComparedWithImageAnnotationStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImageAnnotationIsComparedWithImageAnnotationStatement != null) {
		jsonObject = jsonObject.ImageAnnotationIsComparedWithImageAnnotationStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagePlane = function (jsonObject) {
	

	
this.setRowImageOrientationX = function (type_Double) {
	this.rowImageOrientationX = new PrimitiveType(type_Double);
};

this.getRowImageOrientationX = function () {
	return this.rowImageOrientationX.getValue();
};

this.setRowImageOrientationY = function (type_Double) {
	this.rowImageOrientationY = new PrimitiveType(type_Double);
};

this.getRowImageOrientationY = function () {
	return this.rowImageOrientationY.getValue();
};

this.setRowImageOrientationZ = function (type_Double) {
	this.rowImageOrientationZ = new PrimitiveType(type_Double);
};

this.getRowImageOrientationZ = function () {
	return this.rowImageOrientationZ.getValue();
};

this.setColumnImageOrientationX = function (type_Double) {
	this.columnImageOrientationX = new PrimitiveType(type_Double);
};

this.getColumnImageOrientationX = function () {
	return this.columnImageOrientationX.getValue();
};

this.setColumnImageOrientationY = function (type_Double) {
	this.columnImageOrientationY = new PrimitiveType(type_Double);
};

this.getColumnImageOrientationY = function () {
	return this.columnImageOrientationY.getValue();
};

this.setColumnImageOrientationZ = function (type_Double) {
	this.columnImageOrientationZ = new PrimitiveType(type_Double);
};

this.getColumnImageOrientationZ = function () {
	return this.columnImageOrientationZ.getValue();
};

this.setVerticalPixelSpacing = function (type_Double) {
	this.verticalPixelSpacing = new PrimitiveType(type_Double);
};

this.getVerticalPixelSpacing = function () {
	return this.verticalPixelSpacing.getValue();
};

this.setHorizontalPixelSpacing = function (type_Double) {
	this.horizontalPixelSpacing = new PrimitiveType(type_Double);
};

this.getHorizontalPixelSpacing = function () {
	return this.horizontalPixelSpacing.getValue();
};

this.setSliceThickness = function (type_Double) {
	this.sliceThickness = new PrimitiveType(type_Double);
};

this.getSliceThickness = function () {
	return this.sliceThickness.getValue();
};

this.setImagePositionX = function (type_Double) {
	this.imagePositionX = new PrimitiveType(type_Double);
};

this.getImagePositionX = function () {
	return this.imagePositionX.getValue();
};

this.setImagePositionY = function (type_Double) {
	this.imagePositionY = new PrimitiveType(type_Double);
};

this.getImagePositionY = function () {
	return this.imagePositionY.getValue();
};

this.setImagePositionZ = function (type_Double) {
	this.imagePositionZ = new PrimitiveType(type_Double);
};

this.getImagePositionZ = function () {
	return this.imagePositionZ.getValue();
};


if (jsonObject != null) {
	if(jsonObject.ImagePlane != null) {
		jsonObject = jsonObject.ImagePlane;
	}
	
if (jsonObject.rowImageOrientationX != null) {
	this.rowImageOrientationX = new PrimitiveType(jsonObject.rowImageOrientationX.value);
}

if (jsonObject.rowImageOrientationY != null) {
	this.rowImageOrientationY = new PrimitiveType(jsonObject.rowImageOrientationY.value);
}

if (jsonObject.rowImageOrientationZ != null) {
	this.rowImageOrientationZ = new PrimitiveType(jsonObject.rowImageOrientationZ.value);
}

if (jsonObject.columnImageOrientationX != null) {
	this.columnImageOrientationX = new PrimitiveType(jsonObject.columnImageOrientationX.value);
}

if (jsonObject.columnImageOrientationY != null) {
	this.columnImageOrientationY = new PrimitiveType(jsonObject.columnImageOrientationY.value);
}

if (jsonObject.columnImageOrientationZ != null) {
	this.columnImageOrientationZ = new PrimitiveType(jsonObject.columnImageOrientationZ.value);
}

if (jsonObject.verticalPixelSpacing != null) {
	this.verticalPixelSpacing = new PrimitiveType(jsonObject.verticalPixelSpacing.value);
}

if (jsonObject.horizontalPixelSpacing != null) {
	this.horizontalPixelSpacing = new PrimitiveType(jsonObject.horizontalPixelSpacing.value);
}

if (jsonObject.sliceThickness != null) {
	this.sliceThickness = new PrimitiveType(jsonObject.sliceThickness.value);
}

if (jsonObject.imagePositionX != null) {
	this.imagePositionX = new PrimitiveType(jsonObject.imagePositionX.value);
}

if (jsonObject.imagePositionY != null) {
	this.imagePositionY = new PrimitiveType(jsonObject.imagePositionY.value);
}

if (jsonObject.imagePositionZ != null) {
	this.imagePositionZ = new PrimitiveType(jsonObject.imagePositionZ.value);
}

};
	
};

var ImageSeries = function (jsonObject) {
	

	
this.setInstanceUid = function (type_II) {
	this.instanceUid = type_II;
};

this.getInstanceUid= function () {
	return this.instanceUid;
};

this.setModality = function (type_CD) {
	this.modality = type_CD;
};

this.getModality= function () {
	return this.modality;
};

var imageCollectionTemp = new ImageCollection();

this.addImage = function (type_Image) {
	imageCollectionTemp.addImage(type_Image);
	this.setImageCollection(imageCollectionTemp);
};

this.setImageCollection = function (type_ImageCollection) {
	this.imageCollection = type_ImageCollection;
};

this.getImageCollection = function () {
	return this.imageCollection;
};

this.getImageCount = function () {
	return imageCollectionTemp.length;
};

this.getImage = function (index) {
	if (imageCollectionTemp.length != undefined && imageCollectionTemp.length >= index)
		return imageCollectionTemp[index];
	return null;
}


if (jsonObject != null) {
	if(jsonObject.ImageSeries != null) {
		jsonObject = jsonObject.ImageSeries;
	}
	
if (jsonObject.instanceUid != null) {
	this.instanceUid = new II(jsonObject.instanceUid);
}

if (jsonObject.modality != null) {
	this.modality = new CD(jsonObject.modality);
}

if (jsonObject.imageCollection != null) {
	this.imageCollection = new ImageCollection(jsonObject.imageCollection);
}

};
	
};

var ImageStudy = function (jsonObject) {
	

	
this.setInstanceUid = function (type_II) {
	this.instanceUid = type_II;
};

this.getInstanceUid= function () {
	return this.instanceUid;
};

this.setStartDate = function (type_String) {
	this.startDate = new PrimitiveType(type_String);
};

this.getStartDate = function () {
	return this.startDate.getValue();
};

this.setStartTime = function (type_String) {
	this.startTime = new PrimitiveType(type_String);
};

this.getStartTime = function () {
	return this.startTime.getValue();
};

this.setProcedureDescription = function (type_ST) {
	this.procedureDescription = type_ST;
};

this.getProcedureDescription= function () {
	return this.procedureDescription;
};

this.setImageSeries = function (type_ImageSeries) {
	this.imageSeries = type_ImageSeries;
};

this.getImageSeries= function () {
	return this.imageSeries;
};

var referencedDicomObjectCollectionTemp = new ReferencedDicomObjectCollection();

this.addReferencedDicomObject = function (type_ReferencedDicomObject) {
	referencedDicomObjectCollectionTemp.addReferencedDicomObject(type_ReferencedDicomObject);
	this.setReferencedDicomObjectCollection(referencedDicomObjectCollectionTemp);
};

this.setReferencedDicomObjectCollection = function (type_ReferencedDicomObjectCollection) {
	this.referencedDicomObjectCollection = type_ReferencedDicomObjectCollection;
};

this.getReferencedDicomObjectCollection = function () {
	return this.referencedDicomObjectCollection;
};

this.getReferencedDicomObjectCount = function () {
	return referencedDicomObjectCollectionTemp.length;
};

this.getReferencedDicomObject = function (index) {
	if (referencedDicomObjectCollectionTemp.length != undefined && referencedDicomObjectCollectionTemp.length >= index)
		return referencedDicomObjectCollectionTemp[index];
	return null;
}


if (jsonObject != null) {
	if(jsonObject.ImageStudy != null) {
		jsonObject = jsonObject.ImageStudy;
	}
	
if (jsonObject.instanceUid != null) {
	this.instanceUid = new II(jsonObject.instanceUid);
}

if (jsonObject.startDate != null) {
	this.startDate = new PrimitiveType(jsonObject.startDate.value);
}

if (jsonObject.startTime != null) {
	this.startTime = new PrimitiveType(jsonObject.startTime.value);
}

if (jsonObject.procedureDescription != null) {
	this.procedureDescription = new ST(jsonObject.procedureDescription);
}

if (jsonObject.imageSeries != null) {
	this.imageSeries = new ImageSeries(jsonObject.imageSeries);
}

if (jsonObject.referencedDicomObjectCollection != null) {
	this.referencedDicomObjectCollection = new ReferencedDicomObjectCollection(jsonObject.referencedDicomObjectCollection);
}

};
	
};

var ImagingObservationCharacteristic = function (jsonObject) {
	

	
var typeCodeTemp = [];

this.addTypeCode = function (type_CD) {
	typeCodeTemp.push(type_CD);
	this.setTypeCode(typeCodeTemp);
};

this.setTypeCode = function (type_arrayOf_CD) {
	this.typeCode = type_arrayOf_CD;
};

this.getTypeCode = function () {
	return this.typeCode;
};

this.getTypeCodeCount = function () {
	return typeCodeTemp.length;
};

this.getTypeCode = function (index) {
	if (typeCodeTemp.length != undefined && typeCodeTemp.length >= index)
		return typeCodeTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

var characteristicQuantificationCollectionTemp = new CharacteristicQuantificationCollection();

this.addCharacteristicQuantification = function (type_CharacteristicQuantification) {
	characteristicQuantificationCollectionTemp.addCharacteristicQuantification(type_CharacteristicQuantification);
	this.setCharacteristicQuantificationCollection(characteristicQuantificationCollectionTemp);
};

this.setCharacteristicQuantificationCollection = function (type_CharacteristicQuantificationCollection) {
	this.characteristicQuantificationCollection = type_CharacteristicQuantificationCollection;
};

this.getCharacteristicQuantificationCollection = function () {
	return this.characteristicQuantificationCollection;
};

this.getCharacteristicQuantificationCount = function () {
	return characteristicQuantificationCollectionTemp.length;
};

this.getCharacteristicQuantification = function (index) {
	if (characteristicQuantificationCollectionTemp.length != undefined && characteristicQuantificationCollectionTemp.length >= index)
		return characteristicQuantificationCollectionTemp[index];
	return null;
}


if (jsonObject != null) {
	if(jsonObject.ImagingObservationCharacteristic != null) {
		jsonObject = jsonObject.ImagingObservationCharacteristic;
	}
	
if (jsonObject.typeCode != null) {
	var isArray = true;
	if (jsonObject.typeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.typeCode.length; i++) {
			this.addTypeCode(new CD(jsonObject.typeCode[i]));
		}
	}
	else
		this.addTypeCode(new CD(jsonObject.typeCode));
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.characteristicQuantificationCollection != null) {
	this.characteristicQuantificationCollection = new CharacteristicQuantificationCollection(jsonObject.characteristicQuantificationCollection);
}

};
	
};

var ImagingObservationEntity = function (jsonObject) {
	this.attr_xsiType = 'ImagingObservationEntity';

	
var typeCodeTemp = [];

this.addTypeCode = function (type_CD) {
	typeCodeTemp.push(type_CD);
	this.setTypeCode(typeCodeTemp);
};

this.setTypeCode = function (type_arrayOf_CD) {
	this.typeCode = type_arrayOf_CD;
};

this.getTypeCode = function () {
	return this.typeCode;
};

this.getTypeCodeCount = function () {
	return typeCodeTemp.length;
};

this.getTypeCode = function (index) {
	if (typeCodeTemp.length != undefined && typeCodeTemp.length >= index)
		return typeCodeTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setIsPresent = function (type_Boolean) {
	this.isPresent = new PrimitiveType(type_Boolean);
};

this.getIsPresent = function () {
	return this.isPresent.getValue();
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

var imagingObservationCharacteristicCollectionTemp = new ImagingObservationCharacteristicCollection();

this.addImagingObservationCharacteristic = function (type_ImagingObservationCharacteristic) {
	imagingObservationCharacteristicCollectionTemp.addImagingObservationCharacteristic(type_ImagingObservationCharacteristic);
	this.setImagingObservationCharacteristicCollection(imagingObservationCharacteristicCollectionTemp);
};

this.setImagingObservationCharacteristicCollection = function (type_ImagingObservationCharacteristicCollection) {
	this.imagingObservationCharacteristicCollection = type_ImagingObservationCharacteristicCollection;
};

this.getImagingObservationCharacteristicCollection = function () {
	return this.imagingObservationCharacteristicCollection;
};

this.getImagingObservationCharacteristicCount = function () {
	return imagingObservationCharacteristicCollectionTemp.length;
};

this.getImagingObservationCharacteristic = function (index) {
	if (imagingObservationCharacteristicCollectionTemp.length != undefined && imagingObservationCharacteristicCollectionTemp.length >= index)
		return imagingObservationCharacteristicCollectionTemp[index];
	return null;
}

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingObservationEntity != null) {
		jsonObject = jsonObject.ImagingObservationEntity;
	}
	
if (jsonObject.typeCode != null) {
	var isArray = true;
	if (jsonObject.typeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.typeCode.length; i++) {
			this.addTypeCode(new CD(jsonObject.typeCode[i]));
		}
	}
	else
		this.addTypeCode(new CD(jsonObject.typeCode));
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.isPresent != null) {
	this.isPresent = new PrimitiveType(jsonObject.isPresent.value);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.imagingObservationCharacteristicCollection != null) {
	this.imagingObservationCharacteristicCollection = new ImagingObservationCharacteristicCollection(jsonObject.imagingObservationCharacteristicCollection);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingObservationEntityHasCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingObservationEntityHasCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingObservationEntityHasCalculationEntityStatement != null) {
		jsonObject = jsonObject.ImagingObservationEntityHasCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement != null) {
		jsonObject = jsonObject.ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement != null) {
		jsonObject = jsonObject.ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingPhysicalEntity = function (jsonObject) {
	this.attr_xsiType = 'ImagingPhysicalEntity';

	
var typeCodeTemp = [];

this.addTypeCode = function (type_CD) {
	typeCodeTemp.push(type_CD);
	this.setTypeCode(typeCodeTemp);
};

this.setTypeCode = function (type_arrayOf_CD) {
	this.typeCode = type_arrayOf_CD;
};

this.getTypeCode = function () {
	return this.typeCode;
};

this.getTypeCodeCount = function () {
	return typeCodeTemp.length;
};

this.getTypeCode = function (index) {
	if (typeCodeTemp.length != undefined && typeCodeTemp.length >= index)
		return typeCodeTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setIsPresent = function (type_Boolean) {
	this.isPresent = new PrimitiveType(type_Boolean);
};

this.getIsPresent = function () {
	return this.isPresent.getValue();
};

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

var imagingPhysicalEntityCharacteristicCollectionTemp = new ImagingPhysicalEntityCharacteristicCollection();

this.addImagingPhysicalEntityCharacteristic = function (type_ImagingPhysicalEntityCharacteristic) {
	imagingPhysicalEntityCharacteristicCollectionTemp.addImagingPhysicalEntityCharacteristic(type_ImagingPhysicalEntityCharacteristic);
	this.setImagingPhysicalEntityCharacteristicCollection(imagingPhysicalEntityCharacteristicCollectionTemp);
};

this.setImagingPhysicalEntityCharacteristicCollection = function (type_ImagingPhysicalEntityCharacteristicCollection) {
	this.imagingPhysicalEntityCharacteristicCollection = type_ImagingPhysicalEntityCharacteristicCollection;
};

this.getImagingPhysicalEntityCharacteristicCollection = function () {
	return this.imagingPhysicalEntityCharacteristicCollection;
};

this.getImagingPhysicalEntityCharacteristicCount = function () {
	return imagingPhysicalEntityCharacteristicCollectionTemp.length;
};

this.getImagingPhysicalEntityCharacteristic = function (index) {
	if (imagingPhysicalEntityCharacteristicCollectionTemp.length != undefined && imagingPhysicalEntityCharacteristicCollectionTemp.length >= index)
		return imagingPhysicalEntityCharacteristicCollectionTemp[index];
	return null;
}

var imagingObservationCharacteristicCollectionTemp = new ImagingObservationCharacteristicCollection();

this.addImagingObservationCharacteristic = function (type_ImagingObservationCharacteristic) {
	imagingObservationCharacteristicCollectionTemp.addImagingObservationCharacteristic(type_ImagingObservationCharacteristic);
	this.setImagingObservationCharacteristicCollection(imagingObservationCharacteristicCollectionTemp);
};

this.setImagingObservationCharacteristicCollection = function (type_ImagingObservationCharacteristicCollection) {
	this.imagingObservationCharacteristicCollection = type_ImagingObservationCharacteristicCollection;
};

this.getImagingObservationCharacteristicCollection = function () {
	return this.imagingObservationCharacteristicCollection;
};

this.getImagingObservationCharacteristicCount = function () {
	return imagingObservationCharacteristicCollectionTemp.length;
};

this.getImagingObservationCharacteristic = function (index) {
	if (imagingObservationCharacteristicCollectionTemp.length != undefined && imagingObservationCharacteristicCollectionTemp.length >= index)
		return imagingObservationCharacteristicCollectionTemp[index];
	return null;
}

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingPhysicalEntity != null) {
		jsonObject = jsonObject.ImagingPhysicalEntity;
	}
	
if (jsonObject.typeCode != null) {
	var isArray = true;
	if (jsonObject.typeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.typeCode.length; i++) {
			this.addTypeCode(new CD(jsonObject.typeCode[i]));
		}
	}
	else
		this.addTypeCode(new CD(jsonObject.typeCode));
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.isPresent != null) {
	this.isPresent = new PrimitiveType(jsonObject.isPresent.value);
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.imagingPhysicalEntityCharacteristicCollection != null) {
	this.imagingPhysicalEntityCharacteristicCollection = new ImagingPhysicalEntityCharacteristicCollection(jsonObject.imagingPhysicalEntityCharacteristicCollection);
}

if (jsonObject.imagingObservationCharacteristicCollection != null) {
	this.imagingObservationCharacteristicCollection = new ImagingObservationCharacteristicCollection(jsonObject.imagingObservationCharacteristicCollection);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingPhysicalEntityCharacteristic = function (jsonObject) {
	

	
var typeCodeTemp = [];

this.addTypeCode = function (type_CD) {
	typeCodeTemp.push(type_CD);
	this.setTypeCode(typeCodeTemp);
};

this.setTypeCode = function (type_arrayOf_CD) {
	this.typeCode = type_arrayOf_CD;
};

this.getTypeCode = function () {
	return this.typeCode;
};

this.getTypeCodeCount = function () {
	return typeCodeTemp.length;
};

this.getTypeCode = function (index) {
	if (typeCodeTemp.length != undefined && typeCodeTemp.length >= index)
		return typeCodeTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

var characteristicQuantificationCollectionTemp = new CharacteristicQuantificationCollection();

this.addCharacteristicQuantification = function (type_CharacteristicQuantification) {
	characteristicQuantificationCollectionTemp.addCharacteristicQuantification(type_CharacteristicQuantification);
	this.setCharacteristicQuantificationCollection(characteristicQuantificationCollectionTemp);
};

this.setCharacteristicQuantificationCollection = function (type_CharacteristicQuantificationCollection) {
	this.characteristicQuantificationCollection = type_CharacteristicQuantificationCollection;
};

this.getCharacteristicQuantificationCollection = function () {
	return this.characteristicQuantificationCollection;
};

this.getCharacteristicQuantificationCount = function () {
	return characteristicQuantificationCollectionTemp.length;
};

this.getCharacteristicQuantification = function (index) {
	if (characteristicQuantificationCollectionTemp.length != undefined && characteristicQuantificationCollectionTemp.length >= index)
		return characteristicQuantificationCollectionTemp[index];
	return null;
}


if (jsonObject != null) {
	if(jsonObject.ImagingPhysicalEntityCharacteristic != null) {
		jsonObject = jsonObject.ImagingPhysicalEntityCharacteristic;
	}
	
if (jsonObject.typeCode != null) {
	var isArray = true;
	if (jsonObject.typeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.typeCode.length; i++) {
			this.addTypeCode(new CD(jsonObject.typeCode[i]));
		}
	}
	else
		this.addTypeCode(new CD(jsonObject.typeCode));
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.characteristicQuantificationCollection != null) {
	this.characteristicQuantificationCollection = new CharacteristicQuantificationCollection(jsonObject.characteristicQuantificationCollection);
}

};
	
};

var ImagingPhysicalEntityHasCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingPhysicalEntityHasCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingPhysicalEntityHasCalculationEntityStatement != null) {
		jsonObject = jsonObject.ImagingPhysicalEntityHasCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingPhysicalEntityHasImagingObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingPhysicalEntityHasImagingObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingPhysicalEntityHasImagingObservationEntityStatement != null) {
		jsonObject = jsonObject.ImagingPhysicalEntityHasImagingObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingPhysicalEntityHasTextAnnotationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingPhysicalEntityHasTextAnnotationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingPhysicalEntityHasTextAnnotationEntityStatement != null) {
		jsonObject = jsonObject.ImagingPhysicalEntityHasTextAnnotationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var InferenceEntity = function (jsonObject) {
	this.attr_xsiType = 'InferenceEntity';

	
this.setImageEvidence = function (type_Boolean) {
	this.imageEvidence = new PrimitiveType(type_Boolean);
};

this.getImageEvidence = function () {
	return this.imageEvidence.getValue();
};

this.setIsPresent = function (type_Boolean) {
	this.isPresent = new PrimitiveType(type_Boolean);
};

this.getIsPresent = function () {
	return this.isPresent.getValue();
};

var typeCodeTemp = [];

this.addTypeCode = function (type_CD) {
	typeCodeTemp.push(type_CD);
	this.setTypeCode(typeCodeTemp);
};

this.setTypeCode = function (type_arrayOf_CD) {
	this.typeCode = type_arrayOf_CD;
};

this.getTypeCode = function () {
	return this.typeCode;
};

this.getTypeCodeCount = function () {
	return typeCodeTemp.length;
};

this.getTypeCode = function (index) {
	if (typeCodeTemp.length != undefined && typeCodeTemp.length >= index)
		return typeCodeTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.InferenceEntity != null) {
		jsonObject = jsonObject.InferenceEntity;
	}
	
if (jsonObject.imageEvidence != null) {
	this.imageEvidence = new PrimitiveType(jsonObject.imageEvidence.value);
}

if (jsonObject.isPresent != null) {
	this.isPresent = new PrimitiveType(jsonObject.isPresent.value);
}

if (jsonObject.typeCode != null) {
	var isArray = true;
	if (jsonObject.typeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.typeCode.length; i++) {
			this.addTypeCode(new CD(jsonObject.typeCode[i]));
		}
	}
	else
		this.addTypeCode(new CD(jsonObject.typeCode));
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var Interval = function (jsonObject) {
	this.attr_xsiType = 'Interval';

	
this.setMinValue = function (type_Double) {
	this.minValue = new PrimitiveType(type_Double);
};

this.getMinValue = function () {
	return this.minValue.getValue();
};

this.setMaxValue = function (type_Double) {
	this.maxValue = new PrimitiveType(type_Double);
};

this.getMaxValue = function () {
	return this.maxValue.getValue();
};

this.setUcumString = function (type_ST) {
	this.ucumString = type_ST;
};

this.getUcumString= function () {
	return this.ucumString;
};

this.setMinOperator = function (type_ComparisonOperator) {
	this.attr_minOperator= type_ComparisonOperator;
};

this.getMinOperator = function () {
	return this.attr_minOperator;
};

this.setMaxOperator = function (type_ComparisonOperator) {
	this.attr_maxOperator= type_ComparisonOperator;
};

this.getMaxOperator = function () {
	return this.attr_maxOperator;
};

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setCharacteristicQuantificationIndex = function (type_Integer) {
	this.characteristicQuantificationIndex = new PrimitiveType(type_Integer);
};

this.getCharacteristicQuantificationIndex = function () {
	return this.characteristicQuantificationIndex.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setValueLabel = function (type_ST) {
	this.valueLabel = type_ST;
};

this.getValueLabel= function () {
	return this.valueLabel;
};

this.setValueDescription = function (type_ST) {
	this.valueDescription = type_ST;
};

this.getValueDescription= function () {
	return this.valueDescription;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.Interval != null) {
		jsonObject = jsonObject.Interval;
	}
	
if (jsonObject.minValue != null) {
	this.minValue = new PrimitiveType(jsonObject.minValue.value);
}

if (jsonObject.maxValue != null) {
	this.maxValue = new PrimitiveType(jsonObject.maxValue.value);
}

if (jsonObject.ucumString != null) {
	this.ucumString = new ST(jsonObject.ucumString);
}

if (jsonObject.minOperator != null) {
	this.attr_minOperator = jsonObject.minOperator;
}

if (jsonObject.maxOperator != null) {
	this.attr_maxOperator = jsonObject.maxOperator;
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.characteristicQuantificationIndex != null) {
	this.characteristicQuantificationIndex = new PrimitiveType(jsonObject.characteristicQuantificationIndex.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.valueLabel != null) {
	this.valueLabel = new ST(jsonObject.valueLabel);
}

if (jsonObject.valueDescription != null) {
	this.valueDescription = new ST(jsonObject.valueDescription);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var NonQuantifiable = function (jsonObject) {
	this.attr_xsiType = 'NonQuantifiable';

	
this.setTypeCode = function (type_CD) {
	this.typeCode = type_CD;
};

this.getTypeCode= function () {
	return this.typeCode;
};

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setCharacteristicQuantificationIndex = function (type_Integer) {
	this.characteristicQuantificationIndex = new PrimitiveType(type_Integer);
};

this.getCharacteristicQuantificationIndex = function () {
	return this.characteristicQuantificationIndex.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setValueLabel = function (type_ST) {
	this.valueLabel = type_ST;
};

this.getValueLabel= function () {
	return this.valueLabel;
};

this.setValueDescription = function (type_ST) {
	this.valueDescription = type_ST;
};

this.getValueDescription= function () {
	return this.valueDescription;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.NonQuantifiable != null) {
		jsonObject = jsonObject.NonQuantifiable;
	}
	
if (jsonObject.typeCode != null) {
	this.typeCode = new CD(jsonObject.typeCode);
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.characteristicQuantificationIndex != null) {
	this.characteristicQuantificationIndex = new PrimitiveType(jsonObject.characteristicQuantificationIndex.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.valueLabel != null) {
	this.valueLabel = new ST(jsonObject.valueLabel);
}

if (jsonObject.valueDescription != null) {
	this.valueDescription = new ST(jsonObject.valueDescription);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var Numerical = function (jsonObject) {
	this.attr_xsiType = 'Numerical';

	
this.setUcumString = function (type_ST) {
	this.ucumString = type_ST;
};

this.getUcumString= function () {
	return this.ucumString;
};

this.setValue = function (type_Double) {
	this.value = new PrimitiveType(type_Double);
};

this.getValue = function () {
	return this.value.getValue();
};

this.setOperator = function (type_ComparisonOperator) {
	this.attr_operator= type_ComparisonOperator;
};

this.getOperator = function () {
	return this.attr_operator;
};

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setCharacteristicQuantificationIndex = function (type_Integer) {
	this.characteristicQuantificationIndex = new PrimitiveType(type_Integer);
};

this.getCharacteristicQuantificationIndex = function () {
	return this.characteristicQuantificationIndex.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setValueLabel = function (type_ST) {
	this.valueLabel = type_ST;
};

this.getValueLabel= function () {
	return this.valueLabel;
};

this.setValueDescription = function (type_ST) {
	this.valueDescription = type_ST;
};

this.getValueDescription= function () {
	return this.valueDescription;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.Numerical != null) {
		jsonObject = jsonObject.Numerical;
	}
	
if (jsonObject.ucumString != null) {
	this.ucumString = new ST(jsonObject.ucumString);
}

if (jsonObject.value != null) {
	this.value = new PrimitiveType(jsonObject.value.value);
}

if (jsonObject.operator != null) {
	this.attr_operator = jsonObject.operator;
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.characteristicQuantificationIndex != null) {
	this.characteristicQuantificationIndex = new PrimitiveType(jsonObject.characteristicQuantificationIndex.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.valueLabel != null) {
	this.valueLabel = new ST(jsonObject.valueLabel);
}

if (jsonObject.valueDescription != null) {
	this.valueDescription = new ST(jsonObject.valueDescription);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var Parameter = function (jsonObject) {
	

	
this.setName = function (type_ST) {
	this.name = type_ST;
};

this.getName= function () {
	return this.name;
};

this.setValue = function (type_ST) {
	this.value = type_ST;
};

this.getValue= function () {
	return this.value;
};

this.setDataType = function (type_CD) {
	this.dataType = type_CD;
};

this.getDataType= function () {
	return this.dataType;
};


if (jsonObject != null) {
	if(jsonObject.Parameter != null) {
		jsonObject = jsonObject.Parameter;
	}
	
if (jsonObject.name != null) {
	this.name = new ST(jsonObject.name);
}

if (jsonObject.value != null) {
	this.value = new ST(jsonObject.value);
}

if (jsonObject.dataType != null) {
	this.dataType = new CD(jsonObject.dataType);
}

};
	
};

var Person = function (jsonObject) {
	

	
this.setName = function (type_ST) {
	this.name = type_ST;
};

this.getName= function () {
	return this.name;
};

this.setId = function (type_ST) {
	this.id = type_ST;
};

this.getId= function () {
	return this.id;
};

this.setBirthDate = function (type_String) {
	this.birthDate = new PrimitiveType(type_String);
};

this.getBirthDate = function () {
	return this.birthDate.getValue();
};

this.setSex = function (type_ST) {
	this.sex = type_ST;
};

this.getSex= function () {
	return this.sex;
};

this.setEthnicGroup = function (type_ST) {
	this.ethnicGroup = type_ST;
};

this.getEthnicGroup= function () {
	return this.ethnicGroup;
};


if (jsonObject != null) {
	if(jsonObject.Person != null) {
		jsonObject = jsonObject.Person;
	}
	
if (jsonObject.name != null) {
	this.name = new ST(jsonObject.name);
}

if (jsonObject.id != null) {
	this.id = new ST(jsonObject.id);
}

if (jsonObject.birthDate != null) {
	this.birthDate = new PrimitiveType(jsonObject.birthDate.value);
}

if (jsonObject.sex != null) {
	this.sex = new ST(jsonObject.sex);
}

if (jsonObject.ethnicGroup != null) {
	this.ethnicGroup = new ST(jsonObject.ethnicGroup);
}

};
	
};

var QSET_TS = function (jsonObject) {
	

	
this.setOriginalText = function (type_ED_Text) {
	this.originalText = type_ED_Text;
};

this.getOriginalText= function () {
	return this.originalText;
};


if (jsonObject != null) {
	if(jsonObject.QSET_TS != null) {
		jsonObject = jsonObject.QSET_TS;
	}
	
if (jsonObject.originalText != null) {
	this.originalText = new ED_Text(jsonObject.originalText);
}

};
	
};

var Quantile = function (jsonObject) {
	this.attr_xsiType = 'Quantile';

	
this.setBins = function (type_Integer) {
	this.bins = new PrimitiveType(type_Integer);
};

this.getBins = function () {
	return this.bins.getValue();
};

this.setSelectedBin = function (type_Integer) {
	this.selectedBin = new PrimitiveType(type_Integer);
};

this.getSelectedBin = function () {
	return this.selectedBin.getValue();
};

this.setMinValue = function (type_Double) {
	this.minValue = new PrimitiveType(type_Double);
};

this.getMinValue = function () {
	return this.minValue.getValue();
};

this.setMaxValue = function (type_Double) {
	this.maxValue = new PrimitiveType(type_Double);
};

this.getMaxValue = function () {
	return this.maxValue.getValue();
};

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setCharacteristicQuantificationIndex = function (type_Integer) {
	this.characteristicQuantificationIndex = new PrimitiveType(type_Integer);
};

this.getCharacteristicQuantificationIndex = function () {
	return this.characteristicQuantificationIndex.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setValueLabel = function (type_ST) {
	this.valueLabel = type_ST;
};

this.getValueLabel= function () {
	return this.valueLabel;
};

this.setValueDescription = function (type_ST) {
	this.valueDescription = type_ST;
};

this.getValueDescription= function () {
	return this.valueDescription;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.Quantile != null) {
		jsonObject = jsonObject.Quantile;
	}
	
if (jsonObject.bins != null) {
	this.bins = new PrimitiveType(jsonObject.bins.value);
}

if (jsonObject.selectedBin != null) {
	this.selectedBin = new PrimitiveType(jsonObject.selectedBin.value);
}

if (jsonObject.minValue != null) {
	this.minValue = new PrimitiveType(jsonObject.minValue.value);
}

if (jsonObject.maxValue != null) {
	this.maxValue = new PrimitiveType(jsonObject.maxValue.value);
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.characteristicQuantificationIndex != null) {
	this.characteristicQuantificationIndex = new PrimitiveType(jsonObject.characteristicQuantificationIndex.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.valueLabel != null) {
	this.valueLabel = new ST(jsonObject.valueLabel);
}

if (jsonObject.valueDescription != null) {
	this.valueDescription = new ST(jsonObject.valueDescription);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ReferencedDicomObject = function (jsonObject) {
	

	
this.setModality = function (type_CD) {
	this.modality = type_CD;
};

this.getModality= function () {
	return this.modality;
};

this.setSopInstanceUid = function (type_II) {
	this.sopInstanceUid = type_II;
};

this.getSopInstanceUid= function () {
	return this.sopInstanceUid;
};


if (jsonObject != null) {
	if(jsonObject.ReferencedDicomObject != null) {
		jsonObject = jsonObject.ReferencedDicomObject;
	}
	
if (jsonObject.modality != null) {
	this.modality = new CD(jsonObject.modality);
}

if (jsonObject.sopInstanceUid != null) {
	this.sopInstanceUid = new II(jsonObject.sopInstanceUid);
}

};
	
};

var Scale = function (jsonObject) {
	this.attr_xsiType = 'Scale';

	
this.setValue = function (type_ST) {
	this.value = type_ST;
};

this.getValue= function () {
	return this.value;
};

this.setType = function (type_ScaleType) {
	this.attr_type= type_ScaleType;
};

this.getType = function () {
	return this.attr_type;
};

this.setAnnotatorConfidence = function (type_Double) {
	this.annotatorConfidence = new PrimitiveType(type_Double);
};

this.getAnnotatorConfidence = function () {
	return this.annotatorConfidence.getValue();
};

this.setCharacteristicQuantificationIndex = function (type_Integer) {
	this.characteristicQuantificationIndex = new PrimitiveType(type_Integer);
};

this.getCharacteristicQuantificationIndex = function () {
	return this.characteristicQuantificationIndex.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setValueLabel = function (type_ST) {
	this.valueLabel = type_ST;
};

this.getValueLabel= function () {
	return this.valueLabel;
};

this.setValueDescription = function (type_ST) {
	this.valueDescription = type_ST;
};

this.getValueDescription= function () {
	return this.valueDescription;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.Scale != null) {
		jsonObject = jsonObject.Scale;
	}
	
if (jsonObject.value != null) {
	this.value = new ST(jsonObject.value);
}

if (jsonObject.type != null) {
	this.attr_type = jsonObject.type;
}

if (jsonObject.annotatorConfidence != null) {
	this.annotatorConfidence = new PrimitiveType(jsonObject.annotatorConfidence.value);
}

if (jsonObject.characteristicQuantificationIndex != null) {
	this.characteristicQuantificationIndex = new PrimitiveType(jsonObject.characteristicQuantificationIndex.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.valueLabel != null) {
	this.valueLabel = new ST(jsonObject.valueLabel);
}

if (jsonObject.valueDescription != null) {
	this.valueDescription = new ST(jsonObject.valueDescription);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TaskContextEntity = function (jsonObject) {
	this.attr_xsiType = 'TaskContextEntity';

	
this.setWorklistTaskUid = function (type_II) {
	this.worklistTaskUid = type_II;
};

this.getWorklistTaskUid= function () {
	return this.worklistTaskUid;
};

this.setWorklistTaskName = function (type_ST) {
	this.worklistTaskName = type_ST;
};

this.getWorklistTaskName= function () {
	return this.worklistTaskName;
};

this.setWorklistTaskDescription = function (type_ST) {
	this.worklistTaskDescription = type_ST;
};

this.getWorklistTaskDescription= function () {
	return this.worklistTaskDescription;
};

this.setWorklistTaskCategory = function (type_CD) {
	this.worklistTaskCategory = type_CD;
};

this.getWorklistTaskCategory= function () {
	return this.worklistTaskCategory;
};

this.setWorklistTaskLevel = function (type_CD) {
	this.worklistTaskLevel = type_CD;
};

this.getWorklistTaskLevel= function () {
	return this.worklistTaskLevel;
};

this.setWorklistTaskType = function (type_CD) {
	this.worklistTaskType = type_CD;
};

this.getWorklistTaskType= function () {
	return this.worklistTaskType;
};

this.setWorklistTaskRepeatType = function (type_CD) {
	this.worklistTaskRepeatType = type_CD;
};

this.getWorklistTaskRepeatType= function () {
	return this.worklistTaskRepeatType;
};

this.setWorklistTaskVariabilityType = function (type_CD) {
	this.worklistTaskVariabilityType = type_CD;
};

this.getWorklistTaskVariabilityType= function () {
	return this.worklistTaskVariabilityType;
};

this.setWorklistTaskVersion = function (type_ST) {
	this.worklistTaskVersion = type_ST;
};

this.getWorklistTaskVersion= function () {
	return this.worklistTaskVersion;
};

this.setWorklistSubtaskUid = function (type_II) {
	this.worklistSubtaskUid = type_II;
};

this.getWorklistSubtaskUid= function () {
	return this.worklistSubtaskUid;
};

this.setWorklistSubtaskName = function (type_ST) {
	this.worklistSubtaskName = type_ST;
};

this.getWorklistSubtaskName= function () {
	return this.worklistSubtaskName;
};

this.setWorklistSubtaskStartDateTime = function (type_String) {
	this.worklistSubtaskStartDateTime = new PrimitiveType(type_String);
};

this.getWorklistSubtaskStartDateTime = function () {
	return this.worklistSubtaskStartDateTime.getValue();
};

this.setWorklistSubtaskClosedDateTime = function (type_String) {
	this.worklistSubtaskClosedDateTime = new PrimitiveType(type_String);
};

this.getWorklistSubtaskClosedDateTime = function () {
	return this.worklistSubtaskClosedDateTime.getValue();
};

var taskContextEntityCollectionTemp = new TaskContextEntityCollection();

this.addTaskContextEntity = function (type_TaskContextEntity) {
	taskContextEntityCollectionTemp.addTaskContextEntity(type_TaskContextEntity);
	this.setTaskContextEntityCollection(taskContextEntityCollectionTemp);
};

this.setTaskContextEntityCollection = function (type_TaskContextEntityCollection) {
	this.taskContextEntityCollection = type_TaskContextEntityCollection;
};

this.getTaskContextEntityCollection = function () {
	return this.taskContextEntityCollection;
};

this.getTaskContextEntityCount = function () {
	return taskContextEntityCollectionTemp.length;
};

this.getTaskContextEntity = function (index) {
	if (taskContextEntityCollectionTemp.length != undefined && taskContextEntityCollectionTemp.length >= index)
		return taskContextEntityCollectionTemp[index];
	return null;
}

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TaskContextEntity != null) {
		jsonObject = jsonObject.TaskContextEntity;
	}
	
if (jsonObject.worklistTaskUid != null) {
	this.worklistTaskUid = new II(jsonObject.worklistTaskUid);
}

if (jsonObject.worklistTaskName != null) {
	this.worklistTaskName = new ST(jsonObject.worklistTaskName);
}

if (jsonObject.worklistTaskDescription != null) {
	this.worklistTaskDescription = new ST(jsonObject.worklistTaskDescription);
}

if (jsonObject.worklistTaskCategory != null) {
	this.worklistTaskCategory = new CD(jsonObject.worklistTaskCategory);
}

if (jsonObject.worklistTaskLevel != null) {
	this.worklistTaskLevel = new CD(jsonObject.worklistTaskLevel);
}

if (jsonObject.worklistTaskType != null) {
	this.worklistTaskType = new CD(jsonObject.worklistTaskType);
}

if (jsonObject.worklistTaskRepeatType != null) {
	this.worklistTaskRepeatType = new CD(jsonObject.worklistTaskRepeatType);
}

if (jsonObject.worklistTaskVariabilityType != null) {
	this.worklistTaskVariabilityType = new CD(jsonObject.worklistTaskVariabilityType);
}

if (jsonObject.worklistTaskVersion != null) {
	this.worklistTaskVersion = new ST(jsonObject.worklistTaskVersion);
}

if (jsonObject.worklistSubtaskUid != null) {
	this.worklistSubtaskUid = new II(jsonObject.worklistSubtaskUid);
}

if (jsonObject.worklistSubtaskName != null) {
	this.worklistSubtaskName = new ST(jsonObject.worklistSubtaskName);
}

if (jsonObject.worklistSubtaskStartDateTime != null) {
	this.worklistSubtaskStartDateTime = new PrimitiveType(jsonObject.worklistSubtaskStartDateTime.value);
}

if (jsonObject.worklistSubtaskClosedDateTime != null) {
	this.worklistSubtaskClosedDateTime = new PrimitiveType(jsonObject.worklistSubtaskClosedDateTime.value);
}

if (jsonObject.taskContextEntityCollection != null) {
	this.taskContextEntityCollection = new TaskContextEntityCollection(jsonObject.taskContextEntityCollection);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TEL = function (jsonObject) {
	this.attr_xsiType = 'TEL';

	
this.setUseablePeriod = function (type_QSET_TS) {
	this.useablePeriod = type_QSET_TS;
};

this.getUseablePeriod= function () {
	return this.useablePeriod;
};

this.setUse = function (type_set_TelecommunicationAddressUse) {
	this.attr_use= type_set_TelecommunicationAddressUse;
};

this.getUse = function () {
	return this.attr_use;
};

this.setValue = function (type_String) {
	this.attr_value= type_String;
};

this.getValue = function () {
	return this.attr_value;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TEL != null) {
		jsonObject = jsonObject.TEL;
	}
	
if (jsonObject.useablePeriod != null) {
	this.useablePeriod = new QSET_TS(jsonObject.useablePeriod);
}

if (jsonObject.use != null) {
	this.attr_use = jsonObject.use;
}

if (jsonObject.value != null) {
	this.attr_value = jsonObject.value;
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TextAnnotationEntity = function (jsonObject) {
	this.attr_xsiType = 'TextAnnotationEntity';

	
this.setText = function (type_ST) {
	this.text = type_ST;
};

this.getText= function () {
	return this.text;
};

this.setFont = function (type_ST) {
	this.font = type_ST;
};

this.getFont= function () {
	return this.font;
};

this.setFontColor = function (type_ST) {
	this.fontColor = type_ST;
};

this.getFontColor= function () {
	return this.fontColor;
};

this.setFontEffect = function (type_ST) {
	this.fontEffect = type_ST;
};

this.getFontEffect= function () {
	return this.fontEffect;
};

this.setFontSize = function (type_ST) {
	this.fontSize = type_ST;
};

this.getFontSize= function () {
	return this.fontSize;
};

this.setFontStyle = function (type_ST) {
	this.fontStyle = type_ST;
};

this.getFontStyle= function () {
	return this.fontStyle;
};

this.setTextJustify = function (type_ST) {
	this.textJustify = type_ST;
};

this.getTextJustify= function () {
	return this.textJustify;
};

this.setFontOpacity = function (type_ST) {
	this.fontOpacity = type_ST;
};

this.getFontOpacity= function () {
	return this.fontOpacity;
};

this.setGeometricShapeEntity = function (type_GeometricShapeEntity) {
	this.geometricShapeEntity = type_GeometricShapeEntity;
};

this.getGeometricShapeEntity= function () {
	return this.geometricShapeEntity;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TextAnnotationEntity != null) {
		jsonObject = jsonObject.TextAnnotationEntity;
	}
	
if (jsonObject.text != null) {
	this.text = new ST(jsonObject.text);
}

if (jsonObject.font != null) {
	this.font = new ST(jsonObject.font);
}

if (jsonObject.fontColor != null) {
	this.fontColor = new ST(jsonObject.fontColor);
}

if (jsonObject.fontEffect != null) {
	this.fontEffect = new ST(jsonObject.fontEffect);
}

if (jsonObject.fontSize != null) {
	this.fontSize = new ST(jsonObject.fontSize);
}

if (jsonObject.fontStyle != null) {
	this.fontStyle = new ST(jsonObject.fontStyle);
}

if (jsonObject.textJustify != null) {
	this.textJustify = new ST(jsonObject.textJustify);
}

if (jsonObject.fontOpacity != null) {
	this.fontOpacity = new ST(jsonObject.fontOpacity);
}

if (jsonObject.geometricShapeEntity != null) {
	this.geometricShapeEntity = new GeometricShapeEntity(jsonObject.geometricShapeEntity);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionEllipse = function (jsonObject) {
	this.attr_xsiType = 'ThreeDimensionEllipse';

	
this.setFrameOfReferenceUid = function (type_II) {
	this.frameOfReferenceUid = type_II;
};

this.getFrameOfReferenceUid= function () {
	return this.frameOfReferenceUid;
};

this.setFiducialUid = function (type_II) {
	this.fiducialUid = type_II;
};

this.getFiducialUid= function () {
	return this.fiducialUid;
};

var threeDimensionSpatialCoordinateCollectionTemp = new ThreeDimensionSpatialCoordinateCollection();

this.addThreeDimensionSpatialCoordinate = function (type_ThreeDimensionSpatialCoordinate) {
	threeDimensionSpatialCoordinateCollectionTemp.addThreeDimensionSpatialCoordinate(type_ThreeDimensionSpatialCoordinate);
	this.setThreeDimensionSpatialCoordinateCollection(threeDimensionSpatialCoordinateCollectionTemp);
};

this.setThreeDimensionSpatialCoordinateCollection = function (type_ThreeDimensionSpatialCoordinateCollection) {
	this.threeDimensionSpatialCoordinateCollection = type_ThreeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCollection = function () {
	return this.threeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCount = function () {
	return threeDimensionSpatialCoordinateCollectionTemp.length;
};

this.getThreeDimensionSpatialCoordinate = function (index) {
	if (threeDimensionSpatialCoordinateCollectionTemp.length != undefined && threeDimensionSpatialCoordinateCollectionTemp.length >= index)
		return threeDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionEllipse != null) {
		jsonObject = jsonObject.ThreeDimensionEllipse;
	}
	
if (jsonObject.frameOfReferenceUid != null) {
	this.frameOfReferenceUid = new II(jsonObject.frameOfReferenceUid);
}

if (jsonObject.fiducialUid != null) {
	this.fiducialUid = new II(jsonObject.fiducialUid);
}

if (jsonObject.threeDimensionSpatialCoordinateCollection != null) {
	this.threeDimensionSpatialCoordinateCollection = new ThreeDimensionSpatialCoordinateCollection(jsonObject.threeDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionEllipsoid = function (jsonObject) {
	this.attr_xsiType = 'ThreeDimensionEllipsoid';

	
this.setFrameOfReferenceUid = function (type_II) {
	this.frameOfReferenceUid = type_II;
};

this.getFrameOfReferenceUid= function () {
	return this.frameOfReferenceUid;
};

this.setFiducialUid = function (type_II) {
	this.fiducialUid = type_II;
};

this.getFiducialUid= function () {
	return this.fiducialUid;
};

var threeDimensionSpatialCoordinateCollectionTemp = new ThreeDimensionSpatialCoordinateCollection();

this.addThreeDimensionSpatialCoordinate = function (type_ThreeDimensionSpatialCoordinate) {
	threeDimensionSpatialCoordinateCollectionTemp.addThreeDimensionSpatialCoordinate(type_ThreeDimensionSpatialCoordinate);
	this.setThreeDimensionSpatialCoordinateCollection(threeDimensionSpatialCoordinateCollectionTemp);
};

this.setThreeDimensionSpatialCoordinateCollection = function (type_ThreeDimensionSpatialCoordinateCollection) {
	this.threeDimensionSpatialCoordinateCollection = type_ThreeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCollection = function () {
	return this.threeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCount = function () {
	return threeDimensionSpatialCoordinateCollectionTemp.length;
};

this.getThreeDimensionSpatialCoordinate = function (index) {
	if (threeDimensionSpatialCoordinateCollectionTemp.length != undefined && threeDimensionSpatialCoordinateCollectionTemp.length >= index)
		return threeDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionEllipsoid != null) {
		jsonObject = jsonObject.ThreeDimensionEllipsoid;
	}
	
if (jsonObject.frameOfReferenceUid != null) {
	this.frameOfReferenceUid = new II(jsonObject.frameOfReferenceUid);
}

if (jsonObject.fiducialUid != null) {
	this.fiducialUid = new II(jsonObject.fiducialUid);
}

if (jsonObject.threeDimensionSpatialCoordinateCollection != null) {
	this.threeDimensionSpatialCoordinateCollection = new ThreeDimensionSpatialCoordinateCollection(jsonObject.threeDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionMultiPoint = function (jsonObject) {
	this.attr_xsiType = 'ThreeDimensionMultiPoint';

	
this.setFrameOfReferenceUid = function (type_II) {
	this.frameOfReferenceUid = type_II;
};

this.getFrameOfReferenceUid= function () {
	return this.frameOfReferenceUid;
};

this.setFiducialUid = function (type_II) {
	this.fiducialUid = type_II;
};

this.getFiducialUid= function () {
	return this.fiducialUid;
};

var threeDimensionSpatialCoordinateCollectionTemp = new ThreeDimensionSpatialCoordinateCollection();

this.addThreeDimensionSpatialCoordinate = function (type_ThreeDimensionSpatialCoordinate) {
	threeDimensionSpatialCoordinateCollectionTemp.addThreeDimensionSpatialCoordinate(type_ThreeDimensionSpatialCoordinate);
	this.setThreeDimensionSpatialCoordinateCollection(threeDimensionSpatialCoordinateCollectionTemp);
};

this.setThreeDimensionSpatialCoordinateCollection = function (type_ThreeDimensionSpatialCoordinateCollection) {
	this.threeDimensionSpatialCoordinateCollection = type_ThreeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCollection = function () {
	return this.threeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCount = function () {
	return threeDimensionSpatialCoordinateCollectionTemp.length;
};

this.getThreeDimensionSpatialCoordinate = function (index) {
	if (threeDimensionSpatialCoordinateCollectionTemp.length != undefined && threeDimensionSpatialCoordinateCollectionTemp.length >= index)
		return threeDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionMultiPoint != null) {
		jsonObject = jsonObject.ThreeDimensionMultiPoint;
	}
	
if (jsonObject.frameOfReferenceUid != null) {
	this.frameOfReferenceUid = new II(jsonObject.frameOfReferenceUid);
}

if (jsonObject.fiducialUid != null) {
	this.fiducialUid = new II(jsonObject.fiducialUid);
}

if (jsonObject.threeDimensionSpatialCoordinateCollection != null) {
	this.threeDimensionSpatialCoordinateCollection = new ThreeDimensionSpatialCoordinateCollection(jsonObject.threeDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionPoint = function (jsonObject) {
	this.attr_xsiType = 'ThreeDimensionPoint';

	
this.setFrameOfReferenceUid = function (type_II) {
	this.frameOfReferenceUid = type_II;
};

this.getFrameOfReferenceUid= function () {
	return this.frameOfReferenceUid;
};

this.setFiducialUid = function (type_II) {
	this.fiducialUid = type_II;
};

this.getFiducialUid= function () {
	return this.fiducialUid;
};

var threeDimensionSpatialCoordinateCollectionTemp = new ThreeDimensionSpatialCoordinateCollection();

this.addThreeDimensionSpatialCoordinate = function (type_ThreeDimensionSpatialCoordinate) {
	threeDimensionSpatialCoordinateCollectionTemp.addThreeDimensionSpatialCoordinate(type_ThreeDimensionSpatialCoordinate);
	this.setThreeDimensionSpatialCoordinateCollection(threeDimensionSpatialCoordinateCollectionTemp);
};

this.setThreeDimensionSpatialCoordinateCollection = function (type_ThreeDimensionSpatialCoordinateCollection) {
	this.threeDimensionSpatialCoordinateCollection = type_ThreeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCollection = function () {
	return this.threeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCount = function () {
	return threeDimensionSpatialCoordinateCollectionTemp.length;
};

this.getThreeDimensionSpatialCoordinate = function (index) {
	if (threeDimensionSpatialCoordinateCollectionTemp.length != undefined && threeDimensionSpatialCoordinateCollectionTemp.length >= index)
		return threeDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionPoint != null) {
		jsonObject = jsonObject.ThreeDimensionPoint;
	}
	
if (jsonObject.frameOfReferenceUid != null) {
	this.frameOfReferenceUid = new II(jsonObject.frameOfReferenceUid);
}

if (jsonObject.fiducialUid != null) {
	this.fiducialUid = new II(jsonObject.fiducialUid);
}

if (jsonObject.threeDimensionSpatialCoordinateCollection != null) {
	this.threeDimensionSpatialCoordinateCollection = new ThreeDimensionSpatialCoordinateCollection(jsonObject.threeDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionPolygon = function (jsonObject) {
	this.attr_xsiType = 'ThreeDimensionPolygon';

	
this.setFrameOfReferenceUid = function (type_II) {
	this.frameOfReferenceUid = type_II;
};

this.getFrameOfReferenceUid= function () {
	return this.frameOfReferenceUid;
};

this.setFiducialUid = function (type_II) {
	this.fiducialUid = type_II;
};

this.getFiducialUid= function () {
	return this.fiducialUid;
};

var threeDimensionSpatialCoordinateCollectionTemp = new ThreeDimensionSpatialCoordinateCollection();

this.addThreeDimensionSpatialCoordinate = function (type_ThreeDimensionSpatialCoordinate) {
	threeDimensionSpatialCoordinateCollectionTemp.addThreeDimensionSpatialCoordinate(type_ThreeDimensionSpatialCoordinate);
	this.setThreeDimensionSpatialCoordinateCollection(threeDimensionSpatialCoordinateCollectionTemp);
};

this.setThreeDimensionSpatialCoordinateCollection = function (type_ThreeDimensionSpatialCoordinateCollection) {
	this.threeDimensionSpatialCoordinateCollection = type_ThreeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCollection = function () {
	return this.threeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCount = function () {
	return threeDimensionSpatialCoordinateCollectionTemp.length;
};

this.getThreeDimensionSpatialCoordinate = function (index) {
	if (threeDimensionSpatialCoordinateCollectionTemp.length != undefined && threeDimensionSpatialCoordinateCollectionTemp.length >= index)
		return threeDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionPolygon != null) {
		jsonObject = jsonObject.ThreeDimensionPolygon;
	}
	
if (jsonObject.frameOfReferenceUid != null) {
	this.frameOfReferenceUid = new II(jsonObject.frameOfReferenceUid);
}

if (jsonObject.fiducialUid != null) {
	this.fiducialUid = new II(jsonObject.fiducialUid);
}

if (jsonObject.threeDimensionSpatialCoordinateCollection != null) {
	this.threeDimensionSpatialCoordinateCollection = new ThreeDimensionSpatialCoordinateCollection(jsonObject.threeDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionPolyline = function (jsonObject) {
	this.attr_xsiType = 'ThreeDimensionPolyline';

	
this.setFrameOfReferenceUid = function (type_II) {
	this.frameOfReferenceUid = type_II;
};

this.getFrameOfReferenceUid= function () {
	return this.frameOfReferenceUid;
};

this.setFiducialUid = function (type_II) {
	this.fiducialUid = type_II;
};

this.getFiducialUid= function () {
	return this.fiducialUid;
};

var threeDimensionSpatialCoordinateCollectionTemp = new ThreeDimensionSpatialCoordinateCollection();

this.addThreeDimensionSpatialCoordinate = function (type_ThreeDimensionSpatialCoordinate) {
	threeDimensionSpatialCoordinateCollectionTemp.addThreeDimensionSpatialCoordinate(type_ThreeDimensionSpatialCoordinate);
	this.setThreeDimensionSpatialCoordinateCollection(threeDimensionSpatialCoordinateCollectionTemp);
};

this.setThreeDimensionSpatialCoordinateCollection = function (type_ThreeDimensionSpatialCoordinateCollection) {
	this.threeDimensionSpatialCoordinateCollection = type_ThreeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCollection = function () {
	return this.threeDimensionSpatialCoordinateCollection;
};

this.getThreeDimensionSpatialCoordinateCount = function () {
	return threeDimensionSpatialCoordinateCollectionTemp.length;
};

this.getThreeDimensionSpatialCoordinate = function (index) {
	if (threeDimensionSpatialCoordinateCollectionTemp.length != undefined && threeDimensionSpatialCoordinateCollectionTemp.length >= index)
		return threeDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionPolyline != null) {
		jsonObject = jsonObject.ThreeDimensionPolyline;
	}
	
if (jsonObject.frameOfReferenceUid != null) {
	this.frameOfReferenceUid = new II(jsonObject.frameOfReferenceUid);
}

if (jsonObject.fiducialUid != null) {
	this.fiducialUid = new II(jsonObject.fiducialUid);
}

if (jsonObject.threeDimensionSpatialCoordinateCollection != null) {
	this.threeDimensionSpatialCoordinateCollection = new ThreeDimensionSpatialCoordinateCollection(jsonObject.threeDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var ThreeDimensionSpatialCoordinate = function (jsonObject) {
	

	
this.setCoordinateIndex = function (type_Integer) {
	this.coordinateIndex = new PrimitiveType(type_Integer);
};

this.getCoordinateIndex = function () {
	return this.coordinateIndex.getValue();
};

this.setX = function (type_Double) {
	this.x = new PrimitiveType(type_Double);
};

this.getX = function () {
	return this.x.getValue();
};

this.setY = function (type_Double) {
	this.y = new PrimitiveType(type_Double);
};

this.getY = function () {
	return this.y.getValue();
};

this.setZ = function (type_Double) {
	this.z = new PrimitiveType(type_Double);
};

this.getZ = function () {
	return this.z.getValue();
};


if (jsonObject != null) {
	if(jsonObject.ThreeDimensionSpatialCoordinate != null) {
		jsonObject = jsonObject.ThreeDimensionSpatialCoordinate;
	}
	
if (jsonObject.coordinateIndex != null) {
	this.coordinateIndex = new PrimitiveType(jsonObject.coordinateIndex.value);
}

if (jsonObject.x != null) {
	this.x = new PrimitiveType(jsonObject.x.value);
}

if (jsonObject.y != null) {
	this.y = new PrimitiveType(jsonObject.y.value);
}

if (jsonObject.z != null) {
	this.z = new PrimitiveType(jsonObject.z.value);
}

};
	
};

var TimePointLesionObservationEntity = function (jsonObject) {
	this.attr_xsiType = 'TimePointLesionObservationEntity';

	
this.setCalibration = function (type_Boolean) {
	this.calibration = new PrimitiveType(type_Boolean);
};

this.getCalibration = function () {
	return this.calibration.getValue();
};

this.setPredecessorLesionTrackingUid = function (type_II) {
	this.predecessorLesionTrackingUid = type_II;
};

this.getPredecessorLesionTrackingUid= function () {
	return this.predecessorLesionTrackingUid;
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setTherapeuticResponse = function (type_CD) {
	this.therapeuticResponse = type_CD;
};

this.getTherapeuticResponse= function () {
	return this.therapeuticResponse;
};

this.setQualitativeAssessment = function (type_CD) {
	this.qualitativeAssessment = type_CD;
};

this.getQualitativeAssessment= function () {
	return this.qualitativeAssessment;
};

this.setCanEvaluateLesion = function (type_Boolean) {
	this.canEvaluateLesion = new PrimitiveType(type_Boolean);
};

this.getCanEvaluateLesion = function () {
	return this.canEvaluateLesion.getValue();
};

this.setReasonUnableToEvaluate = function (type_CD) {
	this.reasonUnableToEvaluate = type_CD;
};

this.getReasonUnableToEvaluate= function () {
	return this.reasonUnableToEvaluate;
};

this.setCanMeasureLesion = function (type_Boolean) {
	this.canMeasureLesion = new PrimitiveType(type_Boolean);
};

this.getCanMeasureLesion = function () {
	return this.canMeasureLesion.getValue();
};

this.setReasonUnableToMeasure = function (type_CD) {
	this.reasonUnableToMeasure = type_CD;
};

this.getReasonUnableToMeasure= function () {
	return this.reasonUnableToMeasure;
};

this.setIsUnequivocalProgression = function (type_Boolean) {
	this.isUnequivocalProgression = new PrimitiveType(type_Boolean);
};

this.getIsUnequivocalProgression = function () {
	return this.isUnequivocalProgression.getValue();
};

this.setLesionUniqueIdentifier = function (type_II) {
	this.lesionUniqueIdentifier = type_II;
};

this.getLesionUniqueIdentifier= function () {
	return this.lesionUniqueIdentifier;
};

this.setIsAdditionalObservation = function (type_Boolean) {
	this.isAdditionalObservation = new PrimitiveType(type_Boolean);
};

this.getIsAdditionalObservation = function () {
	return this.isAdditionalObservation.getValue();
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TimePointLesionObservationEntity != null) {
		jsonObject = jsonObject.TimePointLesionObservationEntity;
	}
	
if (jsonObject.calibration != null) {
	this.calibration = new PrimitiveType(jsonObject.calibration.value);
}

if (jsonObject.predecessorLesionTrackingUid != null) {
	this.predecessorLesionTrackingUid = new II(jsonObject.predecessorLesionTrackingUid);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.therapeuticResponse != null) {
	this.therapeuticResponse = new CD(jsonObject.therapeuticResponse);
}

if (jsonObject.qualitativeAssessment != null) {
	this.qualitativeAssessment = new CD(jsonObject.qualitativeAssessment);
}

if (jsonObject.canEvaluateLesion != null) {
	this.canEvaluateLesion = new PrimitiveType(jsonObject.canEvaluateLesion.value);
}

if (jsonObject.reasonUnableToEvaluate != null) {
	this.reasonUnableToEvaluate = new CD(jsonObject.reasonUnableToEvaluate);
}

if (jsonObject.canMeasureLesion != null) {
	this.canMeasureLesion = new PrimitiveType(jsonObject.canMeasureLesion.value);
}

if (jsonObject.reasonUnableToMeasure != null) {
	this.reasonUnableToMeasure = new CD(jsonObject.reasonUnableToMeasure);
}

if (jsonObject.isUnequivocalProgression != null) {
	this.isUnequivocalProgression = new PrimitiveType(jsonObject.isUnequivocalProgression.value);
}

if (jsonObject.lesionUniqueIdentifier != null) {
	this.lesionUniqueIdentifier = new II(jsonObject.lesionUniqueIdentifier);
}

if (jsonObject.isAdditionalObservation != null) {
	this.isAdditionalObservation = new PrimitiveType(jsonObject.isAdditionalObservation.value);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TimePointLesionObservationEntityHasImagingPhysicalEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'TimePointLesionObservationEntityHasImagingPhysicalEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TimePointLesionObservationEntityHasImagingPhysicalEntityStatement != null) {
		jsonObject = jsonObject.TimePointLesionObservationEntityHasImagingPhysicalEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TwoDimensionCircle = function (jsonObject) {
	this.attr_xsiType = 'TwoDimensionCircle';

	
this.setImageReferenceUid = function (type_II) {
	this.imageReferenceUid = type_II;
};

this.getImageReferenceUid= function () {
	return this.imageReferenceUid;
};

this.setReferencedFrameNumber = function (type_Integer) {
	this.referencedFrameNumber = new PrimitiveType(type_Integer);
};

this.getReferencedFrameNumber = function () {
	return this.referencedFrameNumber.getValue();
};

this.setUri = function (type_ST) {
	this.uri = type_ST;
};

this.getUri= function () {
	return this.uri;
};

var twoDimensionSpatialCoordinateCollectionTemp = new TwoDimensionSpatialCoordinateCollection();

this.addTwoDimensionSpatialCoordinate = function (type_TwoDimensionSpatialCoordinate) {
	twoDimensionSpatialCoordinateCollectionTemp.addTwoDimensionSpatialCoordinate(type_TwoDimensionSpatialCoordinate);
	this.setTwoDimensionSpatialCoordinateCollection(twoDimensionSpatialCoordinateCollectionTemp);
};

this.setTwoDimensionSpatialCoordinateCollection = function (type_TwoDimensionSpatialCoordinateCollection) {
	this.twoDimensionSpatialCoordinateCollection = type_TwoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCollection = function () {
	return this.twoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCount = function () {
	return twoDimensionSpatialCoordinateCollectionTemp.length;
};

this.getTwoDimensionSpatialCoordinate = function (index) {
	if (twoDimensionSpatialCoordinateCollectionTemp.length != undefined && twoDimensionSpatialCoordinateCollectionTemp.length >= index)
		return twoDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TwoDimensionCircle != null) {
		jsonObject = jsonObject.TwoDimensionCircle;
	}
	
if (jsonObject.imageReferenceUid != null) {
	this.imageReferenceUid = new II(jsonObject.imageReferenceUid);
}

if (jsonObject.referencedFrameNumber != null) {
	this.referencedFrameNumber = new PrimitiveType(jsonObject.referencedFrameNumber.value);
}

if (jsonObject.uri != null) {
	this.uri = new ST(jsonObject.uri);
}

if (jsonObject.twoDimensionSpatialCoordinateCollection != null) {
	this.twoDimensionSpatialCoordinateCollection = new TwoDimensionSpatialCoordinateCollection(jsonObject.twoDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TwoDimensionEllipse = function (jsonObject) {
	this.attr_xsiType = 'TwoDimensionEllipse';

	
this.setImageReferenceUid = function (type_II) {
	this.imageReferenceUid = type_II;
};

this.getImageReferenceUid= function () {
	return this.imageReferenceUid;
};

this.setReferencedFrameNumber = function (type_Integer) {
	this.referencedFrameNumber = new PrimitiveType(type_Integer);
};

this.getReferencedFrameNumber = function () {
	return this.referencedFrameNumber.getValue();
};

this.setUri = function (type_ST) {
	this.uri = type_ST;
};

this.getUri= function () {
	return this.uri;
};

var twoDimensionSpatialCoordinateCollectionTemp = new TwoDimensionSpatialCoordinateCollection();

this.addTwoDimensionSpatialCoordinate = function (type_TwoDimensionSpatialCoordinate) {
	twoDimensionSpatialCoordinateCollectionTemp.addTwoDimensionSpatialCoordinate(type_TwoDimensionSpatialCoordinate);
	this.setTwoDimensionSpatialCoordinateCollection(twoDimensionSpatialCoordinateCollectionTemp);
};

this.setTwoDimensionSpatialCoordinateCollection = function (type_TwoDimensionSpatialCoordinateCollection) {
	this.twoDimensionSpatialCoordinateCollection = type_TwoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCollection = function () {
	return this.twoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCount = function () {
	return twoDimensionSpatialCoordinateCollectionTemp.length;
};

this.getTwoDimensionSpatialCoordinate = function (index) {
	if (twoDimensionSpatialCoordinateCollectionTemp.length != undefined && twoDimensionSpatialCoordinateCollectionTemp.length >= index)
		return twoDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TwoDimensionEllipse != null) {
		jsonObject = jsonObject.TwoDimensionEllipse;
	}
	
if (jsonObject.imageReferenceUid != null) {
	this.imageReferenceUid = new II(jsonObject.imageReferenceUid);
}

if (jsonObject.referencedFrameNumber != null) {
	this.referencedFrameNumber = new PrimitiveType(jsonObject.referencedFrameNumber.value);
}

if (jsonObject.uri != null) {
	this.uri = new ST(jsonObject.uri);
}

if (jsonObject.twoDimensionSpatialCoordinateCollection != null) {
	this.twoDimensionSpatialCoordinateCollection = new TwoDimensionSpatialCoordinateCollection(jsonObject.twoDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement != null) {
		jsonObject = jsonObject.TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TwoDimensionMultiPoint = function (jsonObject) {
	this.attr_xsiType = 'TwoDimensionMultiPoint';

	
this.setImageReferenceUid = function (type_II) {
	this.imageReferenceUid = type_II;
};

this.getImageReferenceUid= function () {
	return this.imageReferenceUid;
};

this.setReferencedFrameNumber = function (type_Integer) {
	this.referencedFrameNumber = new PrimitiveType(type_Integer);
};

this.getReferencedFrameNumber = function () {
	return this.referencedFrameNumber.getValue();
};

this.setUri = function (type_ST) {
	this.uri = type_ST;
};

this.getUri= function () {
	return this.uri;
};

var twoDimensionSpatialCoordinateCollectionTemp = new TwoDimensionSpatialCoordinateCollection();

this.addTwoDimensionSpatialCoordinate = function (type_TwoDimensionSpatialCoordinate) {
	twoDimensionSpatialCoordinateCollectionTemp.addTwoDimensionSpatialCoordinate(type_TwoDimensionSpatialCoordinate);
	this.setTwoDimensionSpatialCoordinateCollection(twoDimensionSpatialCoordinateCollectionTemp);
};

this.setTwoDimensionSpatialCoordinateCollection = function (type_TwoDimensionSpatialCoordinateCollection) {
	this.twoDimensionSpatialCoordinateCollection = type_TwoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCollection = function () {
	return this.twoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCount = function () {
	return twoDimensionSpatialCoordinateCollectionTemp.length;
};

this.getTwoDimensionSpatialCoordinate = function (index) {
	if (twoDimensionSpatialCoordinateCollectionTemp.length != undefined && twoDimensionSpatialCoordinateCollectionTemp.length >= index)
		return twoDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TwoDimensionMultiPoint != null) {
		jsonObject = jsonObject.TwoDimensionMultiPoint;
	}
	
if (jsonObject.imageReferenceUid != null) {
	this.imageReferenceUid = new II(jsonObject.imageReferenceUid);
}

if (jsonObject.referencedFrameNumber != null) {
	this.referencedFrameNumber = new PrimitiveType(jsonObject.referencedFrameNumber.value);
}

if (jsonObject.uri != null) {
	this.uri = new ST(jsonObject.uri);
}

if (jsonObject.twoDimensionSpatialCoordinateCollection != null) {
	this.twoDimensionSpatialCoordinateCollection = new TwoDimensionSpatialCoordinateCollection(jsonObject.twoDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};

var TwoDimensionPoint = function (jsonObject) {
	this.attr_xsiType = 'TwoDimensionPoint';

	
this.setImageReferenceUid = function (type_II) {
	this.imageReferenceUid = type_II;
};

this.getImageReferenceUid= function () {
	return this.imageReferenceUid;
};

this.setReferencedFrameNumber = function (type_Integer) {
	this.referencedFrameNumber = new PrimitiveType(type_Integer);
};

this.getReferencedFrameNumber = function () {
	return this.referencedFrameNumber.getValue();
};

this.setUri = function (type_ST) {
	this.uri = type_ST;
};

this.getUri= function () {
	return this.uri;
};

var twoDimensionSpatialCoordinateCollectionTemp = new TwoDimensionSpatialCoordinateCollection();

this.addTwoDimensionSpatialCoordinate = function (type_TwoDimensionSpatialCoordinate) {
	twoDimensionSpatialCoordinateCollectionTemp.addTwoDimensionSpatialCoordinate(type_TwoDimensionSpatialCoordinate);
	this.setTwoDimensionSpatialCoordinateCollection(twoDimensionSpatialCoordinateCollectionTemp);
};

this.setTwoDimensionSpatialCoordinateCollection = function (type_TwoDimensionSpatialCoordinateCollection) {
	this.twoDimensionSpatialCoordinateCollection = type_TwoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCollection = function () {
	return this.twoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCount = function () {
	return twoDimensionSpatialCoordinateCollectionTemp.length;
};

this.getTwoDimensionSpatialCoordinate = function (index) {
	if (twoDimensionSpatialCoordinateCollectionTemp.length != undefined && twoDimensionSpatialCoordinateCollectionTemp.length >= index)
		return twoDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TwoDimensionPoint != null) {
		jsonObject = jsonObject.TwoDimensionPoint;
	}
	
if (jsonObject.imageReferenceUid != null) {
	this.imageReferenceUid = new II(jsonObject.imageReferenceUid);
}

if (jsonObject.referencedFrameNumber != null) {
	this.referencedFrameNumber = new PrimitiveType(jsonObject.referencedFrameNumber.value);
}

if (jsonObject.uri != null) {
	this.uri = new ST(jsonObject.uri);
}

if (jsonObject.twoDimensionSpatialCoordinateCollection != null) {
	this.twoDimensionSpatialCoordinateCollection = new TwoDimensionSpatialCoordinateCollection(jsonObject.twoDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TwoDimensionPolyline = function (jsonObject) {
	this.attr_xsiType = 'TwoDimensionPolyline';

	
this.setImageReferenceUid = function (type_II) {
	this.imageReferenceUid = type_II;
};

this.getImageReferenceUid= function () {
	return this.imageReferenceUid;
};

this.setReferencedFrameNumber = function (type_Integer) {
	this.referencedFrameNumber = new PrimitiveType(type_Integer);
};

this.getReferencedFrameNumber = function () {
	return this.referencedFrameNumber.getValue();
};

this.setUri = function (type_ST) {
	this.uri = type_ST;
};

this.getUri= function () {
	return this.uri;
};

var twoDimensionSpatialCoordinateCollectionTemp = new TwoDimensionSpatialCoordinateCollection();

this.addTwoDimensionSpatialCoordinate = function (type_TwoDimensionSpatialCoordinate) {
	twoDimensionSpatialCoordinateCollectionTemp.addTwoDimensionSpatialCoordinate(type_TwoDimensionSpatialCoordinate);
	this.setTwoDimensionSpatialCoordinateCollection(twoDimensionSpatialCoordinateCollectionTemp);
};

this.setTwoDimensionSpatialCoordinateCollection = function (type_TwoDimensionSpatialCoordinateCollection) {
	this.twoDimensionSpatialCoordinateCollection = type_TwoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCollection = function () {
	return this.twoDimensionSpatialCoordinateCollection;
};

this.getTwoDimensionSpatialCoordinateCount = function () {
	return twoDimensionSpatialCoordinateCollectionTemp.length;
};

this.getTwoDimensionSpatialCoordinate = function (index) {
	if (twoDimensionSpatialCoordinateCollectionTemp.length != undefined && twoDimensionSpatialCoordinateCollectionTemp.length >= index)
		return twoDimensionSpatialCoordinateCollectionTemp[index];
	return null;
}

var questionTypeCodeTemp = [];

this.addQuestionTypeCode = function (type_CD) {
	questionTypeCodeTemp.push(type_CD);
	this.setQuestionTypeCode(questionTypeCodeTemp);
};

this.setQuestionTypeCode = function (type_arrayOf_CD) {
	this.questionTypeCode = type_arrayOf_CD;
};

this.getQuestionTypeCode = function () {
	return this.questionTypeCode;
};

this.getQuestionTypeCodeCount = function () {
	return questionTypeCodeTemp.length;
};

this.getQuestionTypeCode = function (index) {
	if (questionTypeCodeTemp.length != undefined && questionTypeCodeTemp.length >= index)
		return questionTypeCodeTemp[index];
	return null;
}

this.setShapeIdentifier = function (type_Integer) {
	this.shapeIdentifier = new PrimitiveType(type_Integer);
};

this.getShapeIdentifier = function () {
	return this.shapeIdentifier.getValue();
};

this.setLabel = function (type_ST) {
	this.label = type_ST;
};

this.getLabel= function () {
	return this.label;
};

this.setDescription = function (type_ST) {
	this.description = type_ST;
};

this.getDescription= function () {
	return this.description;
};

this.setIncludeFlag = function (type_Boolean) {
	this.includeFlag = new PrimitiveType(type_Boolean);
};

this.getIncludeFlag = function () {
	return this.includeFlag.getValue();
};

this.setComment = function (type_ST) {
	this.comment = type_ST;
};

this.getComment= function () {
	return this.comment;
};

this.setLineColor = function (type_ST) {
	this.lineColor = type_ST;
};

this.getLineColor= function () {
	return this.lineColor;
};

this.setLineOpacity = function (type_ST) {
	this.lineOpacity = type_ST;
};

this.getLineOpacity= function () {
	return this.lineOpacity;
};

this.setLineStyle = function (type_ST) {
	this.lineStyle = type_ST;
};

this.getLineStyle= function () {
	return this.lineStyle;
};

this.setLineThickness = function (type_ST) {
	this.lineThickness = type_ST;
};

this.getLineThickness= function () {
	return this.lineThickness;
};

this.setQuestionIndex = function (type_Integer) {
	this.questionIndex = new PrimitiveType(type_Integer);
};

this.getQuestionIndex = function () {
	return this.questionIndex.getValue();
};

this.setInterpolationMethod = function (type_CD) {
	this.interpolationMethod = type_CD;
};

this.getInterpolationMethod= function () {
	return this.interpolationMethod;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.TwoDimensionPolyline != null) {
		jsonObject = jsonObject.TwoDimensionPolyline;
	}
	
if (jsonObject.imageReferenceUid != null) {
	this.imageReferenceUid = new II(jsonObject.imageReferenceUid);
}

if (jsonObject.referencedFrameNumber != null) {
	this.referencedFrameNumber = new PrimitiveType(jsonObject.referencedFrameNumber.value);
}

if (jsonObject.uri != null) {
	this.uri = new ST(jsonObject.uri);
}

if (jsonObject.twoDimensionSpatialCoordinateCollection != null) {
	this.twoDimensionSpatialCoordinateCollection = new TwoDimensionSpatialCoordinateCollection(jsonObject.twoDimensionSpatialCoordinateCollection);
}

if (jsonObject.questionTypeCode != null) {
	var isArray = true;
	if (jsonObject.questionTypeCode.length == undefined)
		isArray = false;
	if (isArray) {
		for (i = 0; i < jsonObject.questionTypeCode.length; i++) {
			this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode[i]));
		}
	}
	else
		this.addQuestionTypeCode(new CD(jsonObject.questionTypeCode));
}

if (jsonObject.shapeIdentifier != null) {
	this.shapeIdentifier = new PrimitiveType(jsonObject.shapeIdentifier.value);
}

if (jsonObject.label != null) {
	this.label = new ST(jsonObject.label);
}

if (jsonObject.description != null) {
	this.description = new ST(jsonObject.description);
}

if (jsonObject.includeFlag != null) {
	this.includeFlag = new PrimitiveType(jsonObject.includeFlag.value);
}

if (jsonObject.comment != null) {
	this.comment = new ST(jsonObject.comment);
}

if (jsonObject.lineColor != null) {
	this.lineColor = new ST(jsonObject.lineColor);
}

if (jsonObject.lineOpacity != null) {
	this.lineOpacity = new ST(jsonObject.lineOpacity);
}

if (jsonObject.lineStyle != null) {
	this.lineStyle = new ST(jsonObject.lineStyle);
}

if (jsonObject.lineThickness != null) {
	this.lineThickness = new ST(jsonObject.lineThickness);
}

if (jsonObject.questionIndex != null) {
	this.questionIndex = new PrimitiveType(jsonObject.questionIndex.value);
}

if (jsonObject.interpolationMethod != null) {
	this.interpolationMethod = new CD(jsonObject.interpolationMethod);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var TwoDimensionSpatialCoordinate = function (jsonObject) {
	

	
this.setCoordinateIndex = function (type_Integer) {
	this.coordinateIndex = new PrimitiveType(type_Integer);
};

this.getCoordinateIndex = function () {
	return this.coordinateIndex.getValue();
};

this.setX = function (type_Double) {
	this.x = new PrimitiveType(type_Double);
};

this.getX = function () {
	return this.x.getValue();
};

this.setY = function (type_Double) {
	this.y = new PrimitiveType(type_Double);
};

this.getY = function () {
	return this.y.getValue();
};


if (jsonObject != null) {
	if(jsonObject.TwoDimensionSpatialCoordinate != null) {
		jsonObject = jsonObject.TwoDimensionSpatialCoordinate;
	}
	
if (jsonObject.coordinateIndex != null) {
	this.coordinateIndex = new PrimitiveType(jsonObject.coordinateIndex.value);
}

if (jsonObject.x != null) {
	this.x = new PrimitiveType(jsonObject.x.value);
}

if (jsonObject.y != null) {
	this.y = new PrimitiveType(jsonObject.y.value);
}

};
	
};

var UriImageReferenceEntity = function (jsonObject) {
	this.attr_xsiType = 'UriImageReferenceEntity';

	
this.setUri = function (type_ST) {
	this.uri = type_ST;
};

this.getUri= function () {
	return this.uri;
};

this.setMimeType = function (type_ST) {
	this.mimeType = type_ST;
};

this.getMimeType= function () {
	return this.mimeType;
};

this.setUniqueIdentifier = function (type_II) {
	this.uniqueIdentifier = type_II;
};

this.getUniqueIdentifier= function () {
	return this.uniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.UriImageReferenceEntity != null) {
		jsonObject = jsonObject.UriImageReferenceEntity;
	}
	
if (jsonObject.uri != null) {
	this.uri = new ST(jsonObject.uri);
}

if (jsonObject.mimeType != null) {
	this.mimeType = new ST(jsonObject.mimeType);
}

if (jsonObject.uniqueIdentifier != null) {
	this.uniqueIdentifier = new II(jsonObject.uniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var UriImageReferenceEntityHasCalculationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'UriImageReferenceEntityHasCalculationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.UriImageReferenceEntityHasCalculationEntityStatement != null) {
		jsonObject = jsonObject.UriImageReferenceEntityHasCalculationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var UriImageReferenceEntityHasImagingObservationEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'UriImageReferenceEntityHasImagingObservationEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.UriImageReferenceEntityHasImagingObservationEntityStatement != null) {
		jsonObject = jsonObject.UriImageReferenceEntityHasImagingObservationEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var UriImageReferenceEntityHasImagingPhysicalEntityStatement = function (jsonObject) {
	this.attr_xsiType = 'UriImageReferenceEntityHasImagingPhysicalEntityStatement';

	
this.setSubjectUniqueIdentifier = function (type_II) {
	this.subjectUniqueIdentifier = type_II;
};

this.getSubjectUniqueIdentifier= function () {
	return this.subjectUniqueIdentifier;
};

this.setObjectUniqueIdentifier = function (type_II) {
	this.objectUniqueIdentifier = type_II;
};

this.getObjectUniqueIdentifier= function () {
	return this.objectUniqueIdentifier;
};

this.setXsiType = function (type_String) {
	this.attr_xsiType= type_String;
};

this.getXsiType = function () {
	return this.attr_xsiType;
};


if (jsonObject != null) {
	if(jsonObject.UriImageReferenceEntityHasImagingPhysicalEntityStatement != null) {
		jsonObject = jsonObject.UriImageReferenceEntityHasImagingPhysicalEntityStatement;
	}
	
if (jsonObject.subjectUniqueIdentifier != null) {
	this.subjectUniqueIdentifier = new II(jsonObject.subjectUniqueIdentifier);
}

if (jsonObject.objectUniqueIdentifier != null) {
	this.objectUniqueIdentifier = new II(jsonObject.objectUniqueIdentifier);
}

if (jsonObject.xsiType != null) {
	this.attr_xsiType = jsonObject.xsiType;
}

};
	
};

var User = function (jsonObject) {
	

	
this.setName = function (type_ST) {
	this.name = type_ST;
};

this.getName= function () {
	return this.name;
};

this.setLoginName = function (type_ST) {
	this.loginName = type_ST;
};

this.getLoginName= function () {
	return this.loginName;
};

this.setRoleInTrial = function (type_ST) {
	this.roleInTrial = type_ST;
};

this.getRoleInTrial= function () {
	return this.roleInTrial;
};

this.setNumberWithinRoleOfClinicalTrial = function (type_Integer) {
	this.numberWithinRoleOfClinicalTrial = new PrimitiveType(type_Integer);
};

this.getNumberWithinRoleOfClinicalTrial = function () {
	return this.numberWithinRoleOfClinicalTrial.getValue();
};


if (jsonObject != null) {
	if(jsonObject.User != null) {
		jsonObject = jsonObject.User;
	}
	
if (jsonObject.name != null) {
	this.name = new ST(jsonObject.name);
}

if (jsonObject.loginName != null) {
	this.loginName = new ST(jsonObject.loginName);
}

if (jsonObject.roleInTrial != null) {
	this.roleInTrial = new ST(jsonObject.roleInTrial);
}

if (jsonObject.numberWithinRoleOfClinicalTrial != null) {
	this.numberWithinRoleOfClinicalTrial = new PrimitiveType(jsonObject.numberWithinRoleOfClinicalTrial.value);
}

}
	
};

var XReference = function (jsonObject) {
	

	
this.setXref = function (type_String) {
	this.attr_xref= type_String;
};

this.getXref = function () {
	return this.attr_xref;
};


if (jsonObject != null) {
	if(jsonObject.XReference != null) {
		jsonObject = jsonObject.XReference;
	}
	
	if (jsonObject.xref != null) {
	this.attr_xref = jsonObject.xref;
	}
}

};
};
