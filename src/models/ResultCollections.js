var AnnotationOfAnnotationStatementCollection = function (jsonObject) {
	var temp = [];  

	this.addAnnotationOfAnnotationStatement = function (type_AnnotationOfAnnotationStatement) {
		temp.push(type_AnnotationOfAnnotationStatement);
		this.setAnnotationOfAnnotationStatementList(temp);
	};

	this.setAnnotationOfAnnotationStatementList = function (type_arrayOf_AnnotationOfAnnotationStatement) {
		this.AnnotationOfAnnotationStatement = type_arrayOf_AnnotationOfAnnotationStatement;
		temp = type_arrayOf_AnnotationOfAnnotationStatement;
	};

	this.getAnnotationOfAnnotationStatementList = function () {
		return this.AnnotationOfAnnotationStatement;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.AnnotationOfAnnotationStatement != null) {
		var isArray = true;
		if (jsonObject.AnnotationOfAnnotationStatement.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.AnnotationOfAnnotationStatement.length; i++) {
				if(jsonObject.AnnotationOfAnnotationStatement[i].xsiType == null) {
					this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
				}
				else{
					var xsiType = jsonObject.AnnotationOfAnnotationStatement[i].xsiType;
					if(xsiType == 'ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'GeneralLesionObservationEntityHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new GeneralLesionObservationEntityHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasTextAnnotationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasTextAnnotationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'UriImageReferenceEntityHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new UriImageReferenceEntityHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'DicomImageReferenceEntityHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new DicomImageReferenceEntityHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasInferenceEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasInferenceEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasGeneralLesionObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasGeneralLesionObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'UriImageReferenceEntityHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new UriImageReferenceEntityHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'DicomImageReferenceEntityHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new DicomImageReferenceEntityHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasDicomImageReferenceEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasDicomImageReferenceEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'DicomSegmentationEntityHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new DicomSegmentationEntityHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'TimePointLesionObservationEntityHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new TimePointLesionObservationEntityHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'DicomImageReferenceEntityHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new DicomImageReferenceEntityHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasTimePointLesionObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasTimePointLesionObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'UriImageReferenceEntityHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new UriImageReferenceEntityHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasChildImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasChildImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasTextAnnotationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasTextAnnotationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasUriImageReferenceEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasUriImageReferenceEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasDicomSegmentationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasDicomSegmentationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationEntityHasPerformedTaskContextEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationEntityHasPerformedTaskContextEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'CalculationEntityReferencesCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new CalculationEntityReferencesCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationEntityHasPlannedTaskContextEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationEntityHasPlannedTaskContextEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'CalculationEntityUsesCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new CalculationEntityUsesCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasAnnotationOfAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasAnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasAnnotationRoleEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasAnnotationRoleEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasInferenceEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasInferenceEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationIsComparedWithImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationIsComparedWithImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'CalculationEntityIsComparedWithCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new CalculationEntityIsComparedWithCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationIsComparedWithImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationIsComparedWithImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasAnnotationRoleEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasAnnotationRoleEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement[i]));
}

				}                        
			}
		}
		else
		{
			if(jsonObject.AnnotationOfAnnotationStatement.xsiType == null) {
				this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
			}
			else{
				var xsiType = jsonObject.AnnotationOfAnnotationStatement.xsiType;
				if(xsiType == 'ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'GeneralLesionObservationEntityHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new GeneralLesionObservationEntityHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasTextAnnotationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasTextAnnotationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'UriImageReferenceEntityHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new UriImageReferenceEntityHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'DicomImageReferenceEntityHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new DicomImageReferenceEntityHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasInferenceEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasInferenceEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasGeneralLesionObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasGeneralLesionObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'UriImageReferenceEntityHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new UriImageReferenceEntityHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'DicomImageReferenceEntityHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new DicomImageReferenceEntityHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasDicomImageReferenceEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasDicomImageReferenceEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'DicomSegmentationEntityHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new DicomSegmentationEntityHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'TimePointLesionObservationEntityHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new TimePointLesionObservationEntityHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'DicomImageReferenceEntityHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new DicomImageReferenceEntityHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasTimePointLesionObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasTimePointLesionObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'UriImageReferenceEntityHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new UriImageReferenceEntityHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasChildImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasChildImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasTextAnnotationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasTextAnnotationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasUriImageReferenceEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasUriImageReferenceEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasDicomSegmentationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasDicomSegmentationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationEntityHasPerformedTaskContextEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationEntityHasPerformedTaskContextEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'CalculationEntityReferencesCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new CalculationEntityReferencesCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationEntityHasPlannedTaskContextEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationEntityHasPlannedTaskContextEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImagingPhysicalEntityHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'CalculationEntityUsesCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new CalculationEntityUsesCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasAnnotationOfAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasAnnotationOfAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasAnnotationRoleEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasAnnotationRoleEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasInferenceEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasInferenceEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasImagingObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasImagingObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationIsComparedWithImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationIsComparedWithImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'CalculationEntityIsComparedWithCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new CalculationEntityIsComparedWithCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationIsComparedWithImageAnnotationStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationIsComparedWithImageAnnotationStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasAnnotationRoleEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new ImageAnnotationHasAnnotationRoleEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasImagingPhysicalEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasImagingPhysicalEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasCalculationEntityStatement') { 
this.addAnnotationOfAnnotationStatement(new AnnotationOfAnnotationHasCalculationEntityStatement(jsonObject.AnnotationOfAnnotationStatement));
}

			} 
		}
	}
};

var AnnotationRoleEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addAnnotationRoleEntity = function (type_AnnotationRoleEntity) {
		temp.push(type_AnnotationRoleEntity);
		this.setAnnotationRoleEntityList(temp);
	};

	this.setAnnotationRoleEntityList = function (type_arrayOf_AnnotationRoleEntity) {
		this.AnnotationRoleEntity = type_arrayOf_AnnotationRoleEntity;
		temp = type_arrayOf_AnnotationRoleEntity;
	};

	this.getAnnotationRoleEntityList = function () {
		return this.AnnotationRoleEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.AnnotationRoleEntity != null) {
		var isArray = true;
		if (jsonObject.AnnotationRoleEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.AnnotationRoleEntity.length; i++) {
				if(jsonObject.AnnotationRoleEntity[i].xsiType == null) {
					this.addAnnotationRoleEntity(new AnnotationRoleEntity(jsonObject.AnnotationRoleEntity[i]));
				}
				else{
					var xsiType = jsonObject.AnnotationRoleEntity[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.AnnotationRoleEntity.xsiType == null) {
				this.addAnnotationRoleEntity(new AnnotationRoleEntity(jsonObject.AnnotationRoleEntity));
			}
			else{
				var xsiType = jsonObject.AnnotationRoleEntity.xsiType;
				
			} 
		}
	}
};

var AuditTrailCollection = function (jsonObject) {
	var temp = [];  

	this.addAuditTrail = function (type_AuditTrail) {
		temp.push(type_AuditTrail);
		this.setAuditTrailList(temp);
	};

	this.setAuditTrailList = function (type_arrayOf_AuditTrail) {
		this.AuditTrail = type_arrayOf_AuditTrail;
		temp = type_arrayOf_AuditTrail;
	};

	this.getAuditTrailList = function () {
		return this.AuditTrail;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.AuditTrail != null) {
		var isArray = true;
		if (jsonObject.AuditTrail.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.AuditTrail.length; i++) {
				if(jsonObject.AuditTrail[i].xsiType == null) {
					this.addAuditTrail(new AuditTrail(jsonObject.AuditTrail[i]));
				}
				else{
					var xsiType = jsonObject.AuditTrail[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.AuditTrail.xsiType == null) {
				this.addAuditTrail(new AuditTrail(jsonObject.AuditTrail));
			}
			else{
				var xsiType = jsonObject.AuditTrail.xsiType;
				
			} 
		}
	}
};

var CalculationDataCollection = function (jsonObject) {
	var temp = [];  

	this.addCalculationData = function (type_CalculationData) {
		temp.push(type_CalculationData);
		this.setCalculationDataList(temp);
	};

	this.setCalculationDataList = function (type_arrayOf_CalculationData) {
		this.CalculationData = type_arrayOf_CalculationData;
		temp = type_arrayOf_CalculationData;
	};

	this.getCalculationDataList = function () {
		return this.CalculationData;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.CalculationData != null) {
		var isArray = true;
		if (jsonObject.CalculationData.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.CalculationData.length; i++) {
				if(jsonObject.CalculationData[i].xsiType == null) {
					this.addCalculationData(new CalculationData(jsonObject.CalculationData[i]));
				}
				else{
					var xsiType = jsonObject.CalculationData[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.CalculationData.xsiType == null) {
				this.addCalculationData(new CalculationData(jsonObject.CalculationData));
			}
			else{
				var xsiType = jsonObject.CalculationData.xsiType;
				
			} 
		}
	}
};

var CalculationEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addCalculationEntity = function (type_CalculationEntity) {
		temp.push(type_CalculationEntity);
		this.setCalculationEntityList(temp);
	};

	this.setCalculationEntityList = function (type_arrayOf_CalculationEntity) {
		this.CalculationEntity = type_arrayOf_CalculationEntity;
		temp = type_arrayOf_CalculationEntity;
	};

	this.getCalculationEntityList = function () {
		return this.CalculationEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.CalculationEntity != null) {
		var isArray = true;
		if (jsonObject.CalculationEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.CalculationEntity.length; i++) {
				if(jsonObject.CalculationEntity[i].xsiType == null) {
					this.addCalculationEntity(new CalculationEntity(jsonObject.CalculationEntity[i]));
				}
				else{
					var xsiType = jsonObject.CalculationEntity[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.CalculationEntity.xsiType == null) {
				this.addCalculationEntity(new CalculationEntity(jsonObject.CalculationEntity));
			}
			else{
				var xsiType = jsonObject.CalculationEntity.xsiType;
				
			} 
		}
	}
};

var CalculationResultCollection = function (jsonObject) {
	var temp = [];  

	this.addCalculationResult = function (type_CalculationResult) {
		temp.push(type_CalculationResult);
		this.setCalculationResultList(temp);
	};

	this.setCalculationResultList = function (type_arrayOf_CalculationResult) {
		this.CalculationResult = type_arrayOf_CalculationResult;
		temp = type_arrayOf_CalculationResult;
	};

	this.getCalculationResultList = function () {
		return this.CalculationResult;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.CalculationResult != null) {
		var isArray = true;
		if (jsonObject.CalculationResult.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.CalculationResult.length; i++) {
				if(jsonObject.CalculationResult[i].xsiType == null) {
					this.addCalculationResult(new CalculationResult(jsonObject.CalculationResult[i]));
				}
				else{
					var xsiType = jsonObject.CalculationResult[i].xsiType;
					if(xsiType == 'CompactCalculationResult') { 
this.addCalculationResult(new CompactCalculationResult(jsonObject.CalculationResult[i]));
}
if(xsiType == 'ExtendedCalculationResult') { 
this.addCalculationResult(new ExtendedCalculationResult(jsonObject.CalculationResult[i]));
}

				}                        
			}
		}
		else
		{
			if(jsonObject.CalculationResult.xsiType == null) {
				this.addCalculationResult(new CalculationResult(jsonObject.CalculationResult));
			}
			else{
				var xsiType = jsonObject.CalculationResult.xsiType;
				if(xsiType == 'CompactCalculationResult') { 
this.addCalculationResult(new CompactCalculationResult(jsonObject.CalculationResult));
}
if(xsiType == 'ExtendedCalculationResult') { 
this.addCalculationResult(new ExtendedCalculationResult(jsonObject.CalculationResult));
}

			} 
		}
	}
};

var CharacteristicQuantificationCollection = function (jsonObject) {
	var temp = [];  

	this.addCharacteristicQuantification = function (type_CharacteristicQuantification) {
		temp.push(type_CharacteristicQuantification);
		this.setCharacteristicQuantificationList(temp);
	};

	this.setCharacteristicQuantificationList = function (type_arrayOf_CharacteristicQuantification) {
		this.CharacteristicQuantification = type_arrayOf_CharacteristicQuantification;
		temp = type_arrayOf_CharacteristicQuantification;
	};

	this.getCharacteristicQuantificationList = function () {
		return this.CharacteristicQuantification;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.CharacteristicQuantification != null) {
		var isArray = true;
		if (jsonObject.CharacteristicQuantification.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.CharacteristicQuantification.length; i++) {
				if(jsonObject.CharacteristicQuantification[i].xsiType == null) {
					this.addCharacteristicQuantification(new CharacteristicQuantification(jsonObject.CharacteristicQuantification[i]));
				}
				else{
					var xsiType = jsonObject.CharacteristicQuantification[i].xsiType;
					if(xsiType == 'Quantile') { 
this.addCharacteristicQuantification(new Quantile(jsonObject.CharacteristicQuantification[i]));
}
if(xsiType == 'NonQuantifiable') { 
this.addCharacteristicQuantification(new NonQuantifiable(jsonObject.CharacteristicQuantification[i]));
}
if(xsiType == 'Scale') { 
this.addCharacteristicQuantification(new Scale(jsonObject.CharacteristicQuantification[i]));
}
if(xsiType == 'Numerical') { 
this.addCharacteristicQuantification(new Numerical(jsonObject.CharacteristicQuantification[i]));
}
if(xsiType == 'Interval') { 
this.addCharacteristicQuantification(new Interval(jsonObject.CharacteristicQuantification[i]));
}

				}                        
			}
		}
		else
		{
			if(jsonObject.CharacteristicQuantification.xsiType == null) {
				this.addCharacteristicQuantification(new CharacteristicQuantification(jsonObject.CharacteristicQuantification));
			}
			else{
				var xsiType = jsonObject.CharacteristicQuantification.xsiType;
				if(xsiType == 'Quantile') { 
this.addCharacteristicQuantification(new Quantile(jsonObject.CharacteristicQuantification));
}
if(xsiType == 'NonQuantifiable') { 
this.addCharacteristicQuantification(new NonQuantifiable(jsonObject.CharacteristicQuantification));
}
if(xsiType == 'Scale') { 
this.addCharacteristicQuantification(new Scale(jsonObject.CharacteristicQuantification));
}
if(xsiType == 'Numerical') { 
this.addCharacteristicQuantification(new Numerical(jsonObject.CharacteristicQuantification));
}
if(xsiType == 'Interval') { 
this.addCharacteristicQuantification(new Interval(jsonObject.CharacteristicQuantification));
}

			} 
		}
	}
};

var CoordinateCollection = function (jsonObject) {
	var temp = [];  

	this.addCoordinate = function (type_Coordinate) {
		temp.push(type_Coordinate);
		this.setCoordinateList(temp);
	};

	this.setCoordinateList = function (type_arrayOf_Coordinate) {
		this.Coordinate = type_arrayOf_Coordinate;
		temp = type_arrayOf_Coordinate;
	};

	this.getCoordinateList = function () {
		return this.Coordinate;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.Coordinate != null) {
		var isArray = true;
		if (jsonObject.Coordinate.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.Coordinate.length; i++) {
				if(jsonObject.Coordinate[i].xsiType == null) {
					this.addCoordinate(new Coordinate(jsonObject.Coordinate[i]));
				}
				else{
					var xsiType = jsonObject.Coordinate[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.Coordinate.xsiType == null) {
				this.addCoordinate(new Coordinate(jsonObject.Coordinate));
			}
			else{
				var xsiType = jsonObject.Coordinate.xsiType;
				
			} 
		}
	}
};

var DimensionCollection = function (jsonObject) {
	var temp = [];  

	this.addDimension = function (type_Dimension) {
		temp.push(type_Dimension);
		this.setDimensionList(temp);
	};

	this.setDimensionList = function (type_arrayOf_Dimension) {
		this.Dimension = type_arrayOf_Dimension;
		temp = type_arrayOf_Dimension;
	};

	this.getDimensionList = function () {
		return this.Dimension;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.Dimension != null) {
		var isArray = true;
		if (jsonObject.Dimension.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.Dimension.length; i++) {
				if(jsonObject.Dimension[i].xsiType == null) {
					this.addDimension(new Dimension(jsonObject.Dimension[i]));
				}
				else{
					var xsiType = jsonObject.Dimension[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.Dimension.xsiType == null) {
				this.addDimension(new Dimension(jsonObject.Dimension));
			}
			else{
				var xsiType = jsonObject.Dimension.xsiType;
				
			} 
		}
	}
};

var ImageAnnotationStatementCollection = function (jsonObject) {
	var temp = [];  

	this.addImageAnnotationStatement = function (type_ImageAnnotationStatement) {
		temp.push(type_ImageAnnotationStatement);
		this.setImageAnnotationStatementList(temp);
	};

	this.setImageAnnotationStatementList = function (type_arrayOf_ImageAnnotationStatement) {
		this.ImageAnnotationStatement = type_arrayOf_ImageAnnotationStatement;
		temp = type_arrayOf_ImageAnnotationStatement;
	};

	this.getImageAnnotationStatementList = function () {
		return this.ImageAnnotationStatement;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ImageAnnotationStatement != null) {
		var isArray = true;
		if (jsonObject.ImageAnnotationStatement.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ImageAnnotationStatement.length; i++) {
				if(jsonObject.ImageAnnotationStatement[i].xsiType == null) {
					this.addImageAnnotationStatement(new ImageAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
				}
				else{
					var xsiType = jsonObject.ImageAnnotationStatement[i].xsiType;
					if(xsiType == 'ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'GeneralLesionObservationEntityHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new GeneralLesionObservationEntityHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasTextAnnotationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasTextAnnotationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'UriImageReferenceEntityHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new UriImageReferenceEntityHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'DicomImageReferenceEntityHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new DicomImageReferenceEntityHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasInferenceEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasInferenceEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasGeneralLesionObservationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasGeneralLesionObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'UriImageReferenceEntityHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new UriImageReferenceEntityHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'DicomImageReferenceEntityHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new DicomImageReferenceEntityHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasDicomImageReferenceEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasDicomImageReferenceEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'DicomSegmentationEntityHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new DicomSegmentationEntityHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'TimePointLesionObservationEntityHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new TimePointLesionObservationEntityHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'DicomImageReferenceEntityHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new DicomImageReferenceEntityHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasTimePointLesionObservationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasTimePointLesionObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'UriImageReferenceEntityHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new UriImageReferenceEntityHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasChildImageAnnotationStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasChildImageAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasTextAnnotationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasTextAnnotationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasUriImageReferenceEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasUriImageReferenceEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasDicomSegmentationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasDicomSegmentationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationEntityHasPerformedTaskContextEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationEntityHasPerformedTaskContextEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'CalculationEntityReferencesCalculationEntityStatement') { 
this.addImageAnnotationStatement(new CalculationEntityReferencesCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationEntityHasPlannedTaskContextEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationEntityHasPlannedTaskContextEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImagingPhysicalEntityHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'CalculationEntityUsesCalculationEntityStatement') { 
this.addImageAnnotationStatement(new CalculationEntityUsesCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasAnnotationOfAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasAnnotationOfAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasAnnotationRoleEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasAnnotationRoleEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasInferenceEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasInferenceEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationIsComparedWithImageAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationIsComparedWithImageAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'CalculationEntityIsComparedWithCalculationEntityStatement') { 
this.addImageAnnotationStatement(new CalculationEntityIsComparedWithCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasImageAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasImageAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationIsComparedWithImageAnnotationStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationIsComparedWithImageAnnotationStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'ImageAnnotationHasAnnotationRoleEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasAnnotationRoleEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}
if(xsiType == 'AnnotationOfAnnotationHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement[i]));
}

				}                        
			}
		}
		else
		{
			if(jsonObject.ImageAnnotationStatement.xsiType == null) {
				this.addImageAnnotationStatement(new ImageAnnotationStatement(jsonObject.ImageAnnotationStatement));
			}
			else{
				var xsiType = jsonObject.ImageAnnotationStatement.xsiType;
				if(xsiType == 'ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationIsComparedWithAnnotationOfAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ThreeDimensionGeometricShapeEntityIsComprisedOfThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'GeneralLesionObservationEntityHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new GeneralLesionObservationEntityHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasTextAnnotationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasTextAnnotationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityIsIdentifiedByTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ThreeDimensionGeometricShapeEntityExcludesThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'UriImageReferenceEntityHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new UriImageReferenceEntityHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'DicomImageReferenceEntityHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new DicomImageReferenceEntityHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityIsIdentifiedByTextAnnotationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new TwoDimensionGeometricShapeEntityIsComprisedOfTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasInferenceEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasInferenceEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasGeneralLesionObservationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasGeneralLesionObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'UriImageReferenceEntityHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new UriImageReferenceEntityHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'DicomImageReferenceEntityHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new DicomImageReferenceEntityHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityIsIdentifiedByThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasDicomImageReferenceEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasDicomImageReferenceEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'DicomSegmentationEntityHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new DicomSegmentationEntityHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'TimePointLesionObservationEntityHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new TimePointLesionObservationEntityHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'DicomImageReferenceEntityHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new DicomImageReferenceEntityHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasTimePointLesionObservationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasTimePointLesionObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'UriImageReferenceEntityHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new UriImageReferenceEntityHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new TwoDimensionGeometricShapeEntityExcludesTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasChildImageAnnotationStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasChildImageAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasTwoDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasTextAnnotationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasTextAnnotationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasUriImageReferenceEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasUriImageReferenceEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasDicomSegmentationEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasDicomSegmentationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasThreeDimensionGeometricShapeEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationEntityHasPerformedTaskContextEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationEntityHasPerformedTaskContextEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'CalculationEntityReferencesCalculationEntityStatement') { 
this.addImageAnnotationStatement(new CalculationEntityReferencesCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationEntityHasPlannedTaskContextEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationEntityHasPlannedTaskContextEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new ImagingObservationEntityIsFoundInImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationIsComparedWithAnnotationOfAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImagingPhysicalEntityHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new ImagingPhysicalEntityHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'CalculationEntityUsesCalculationEntityStatement') { 
this.addImageAnnotationStatement(new CalculationEntityUsesCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasAnnotationOfAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasAnnotationOfAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasAnnotationRoleEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasAnnotationRoleEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasInferenceEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasInferenceEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasImagingObservationEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasImagingObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationIsComparedWithImageAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationIsComparedWithImageAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasGeneralLesionObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'CalculationEntityIsComparedWithCalculationEntityStatement') { 
this.addImageAnnotationStatement(new CalculationEntityIsComparedWithCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasTimePointLesionObservationEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasImageAnnotationStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasImageAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationIsComparedWithImageAnnotationStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationIsComparedWithImageAnnotationStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'ImageAnnotationHasAnnotationRoleEntityStatement') { 
this.addImageAnnotationStatement(new ImageAnnotationHasAnnotationRoleEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasImagingPhysicalEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasImagingPhysicalEntityStatement(jsonObject.ImageAnnotationStatement));
}
if(xsiType == 'AnnotationOfAnnotationHasCalculationEntityStatement') { 
this.addImageAnnotationStatement(new AnnotationOfAnnotationHasCalculationEntityStatement(jsonObject.ImageAnnotationStatement));
}

			} 
		}
	}
};

var ImageCollection = function (jsonObject) {
	var temp = [];  

	this.addImage = function (type_Image) {
		temp.push(type_Image);
		this.setImageList(temp);
	};

	this.setImageList = function (type_arrayOf_Image) {
		this.Image = type_arrayOf_Image;
		temp = type_arrayOf_Image;
	};

	this.getImageList = function () {
		return this.Image;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.Image != null) {
		var isArray = true;
		if (jsonObject.Image.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.Image.length; i++) {
				if(jsonObject.Image[i].xsiType == null) {
					this.addImage(new Image(jsonObject.Image[i]));
				}
				else{
					var xsiType = jsonObject.Image[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.Image.xsiType == null) {
				this.addImage(new Image(jsonObject.Image));
			}
			else{
				var xsiType = jsonObject.Image.xsiType;
				
			} 
		}
	}
};

var ImageReferenceEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addImageReferenceEntity = function (type_ImageReferenceEntity) {
		temp.push(type_ImageReferenceEntity);
		this.setImageReferenceEntityList(temp);
	};

	this.setImageReferenceEntityList = function (type_arrayOf_ImageReferenceEntity) {
		this.ImageReferenceEntity = type_arrayOf_ImageReferenceEntity;
		temp = type_arrayOf_ImageReferenceEntity;
	};

	this.getImageReferenceEntityList = function () {
		return this.ImageReferenceEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ImageReferenceEntity != null) {
		var isArray = true;
		if (jsonObject.ImageReferenceEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ImageReferenceEntity.length; i++) {
				if(jsonObject.ImageReferenceEntity[i].xsiType == null) {
					this.addImageReferenceEntity(new ImageReferenceEntity(jsonObject.ImageReferenceEntity[i]));
				}
				else{
					var xsiType = jsonObject.ImageReferenceEntity[i].xsiType;
					if(xsiType == 'DicomImageReferenceEntity') { 
this.addImageReferenceEntity(new DicomImageReferenceEntity(jsonObject.ImageReferenceEntity[i]));
}
if(xsiType == 'UriImageReferenceEntity') { 
this.addImageReferenceEntity(new UriImageReferenceEntity(jsonObject.ImageReferenceEntity[i]));
}

				}                        
			}
		}
		else
		{
			if(jsonObject.ImageReferenceEntity.xsiType == null) {
				this.addImageReferenceEntity(new ImageReferenceEntity(jsonObject.ImageReferenceEntity));
			}
			else{
				var xsiType = jsonObject.ImageReferenceEntity.xsiType;
				if(xsiType == 'DicomImageReferenceEntity') { 
this.addImageReferenceEntity(new DicomImageReferenceEntity(jsonObject.ImageReferenceEntity));
}
if(xsiType == 'UriImageReferenceEntity') { 
this.addImageReferenceEntity(new UriImageReferenceEntity(jsonObject.ImageReferenceEntity));
}

			} 
		}
	}
};

var ImagingObservationCharacteristicCollection = function (jsonObject) {
	var temp = [];  

	this.addImagingObservationCharacteristic = function (type_ImagingObservationCharacteristic) {
		temp.push(type_ImagingObservationCharacteristic);
		this.setImagingObservationCharacteristicList(temp);
	};

	this.setImagingObservationCharacteristicList = function (type_arrayOf_ImagingObservationCharacteristic) {
		this.ImagingObservationCharacteristic = type_arrayOf_ImagingObservationCharacteristic;
		temp = type_arrayOf_ImagingObservationCharacteristic;
	};

	this.getImagingObservationCharacteristicList = function () {
		return this.ImagingObservationCharacteristic;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ImagingObservationCharacteristic != null) {
		var isArray = true;
		if (jsonObject.ImagingObservationCharacteristic.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ImagingObservationCharacteristic.length; i++) {
				if(jsonObject.ImagingObservationCharacteristic[i].xsiType == null) {
					this.addImagingObservationCharacteristic(new ImagingObservationCharacteristic(jsonObject.ImagingObservationCharacteristic[i]));
				}
				else{
					var xsiType = jsonObject.ImagingObservationCharacteristic[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.ImagingObservationCharacteristic.xsiType == null) {
				this.addImagingObservationCharacteristic(new ImagingObservationCharacteristic(jsonObject.ImagingObservationCharacteristic));
			}
			else{
				var xsiType = jsonObject.ImagingObservationCharacteristic.xsiType;
				
			} 
		}
	}
};

var ImagingObservationEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addImagingObservationEntity = function (type_ImagingObservationEntity) {
		temp.push(type_ImagingObservationEntity);
		this.setImagingObservationEntityList(temp);
	};

	this.setImagingObservationEntityList = function (type_arrayOf_ImagingObservationEntity) {
		this.ImagingObservationEntity = type_arrayOf_ImagingObservationEntity;
		temp = type_arrayOf_ImagingObservationEntity;
	};

	this.getImagingObservationEntityList = function () {
		return this.ImagingObservationEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ImagingObservationEntity != null) {
		var isArray = true;
		if (jsonObject.ImagingObservationEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ImagingObservationEntity.length; i++) {
				if(jsonObject.ImagingObservationEntity[i].xsiType == null) {
					this.addImagingObservationEntity(new ImagingObservationEntity(jsonObject.ImagingObservationEntity[i]));
				}
				else{
					var xsiType = jsonObject.ImagingObservationEntity[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.ImagingObservationEntity.xsiType == null) {
				this.addImagingObservationEntity(new ImagingObservationEntity(jsonObject.ImagingObservationEntity));
			}
			else{
				var xsiType = jsonObject.ImagingObservationEntity.xsiType;
				
			} 
		}
	}
};

var ImagingPhysicalEntityCharacteristicCollection = function (jsonObject) {
	var temp = [];  

	this.addImagingPhysicalEntityCharacteristic = function (type_ImagingPhysicalEntityCharacteristic) {
		temp.push(type_ImagingPhysicalEntityCharacteristic);
		this.setImagingPhysicalEntityCharacteristicList(temp);
	};

	this.setImagingPhysicalEntityCharacteristicList = function (type_arrayOf_ImagingPhysicalEntityCharacteristic) {
		this.ImagingPhysicalEntityCharacteristic = type_arrayOf_ImagingPhysicalEntityCharacteristic;
		temp = type_arrayOf_ImagingPhysicalEntityCharacteristic;
	};

	this.getImagingPhysicalEntityCharacteristicList = function () {
		return this.ImagingPhysicalEntityCharacteristic;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ImagingPhysicalEntityCharacteristic != null) {
		var isArray = true;
		if (jsonObject.ImagingPhysicalEntityCharacteristic.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ImagingPhysicalEntityCharacteristic.length; i++) {
				if(jsonObject.ImagingPhysicalEntityCharacteristic[i].xsiType == null) {
					this.addImagingPhysicalEntityCharacteristic(new ImagingPhysicalEntityCharacteristic(jsonObject.ImagingPhysicalEntityCharacteristic[i]));
				}
				else{
					var xsiType = jsonObject.ImagingPhysicalEntityCharacteristic[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.ImagingPhysicalEntityCharacteristic.xsiType == null) {
				this.addImagingPhysicalEntityCharacteristic(new ImagingPhysicalEntityCharacteristic(jsonObject.ImagingPhysicalEntityCharacteristic));
			}
			else{
				var xsiType = jsonObject.ImagingPhysicalEntityCharacteristic.xsiType;
				
			} 
		}
	}
};

var ImagingPhysicalEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addImagingPhysicalEntity = function (type_ImagingPhysicalEntity) {
		temp.push(type_ImagingPhysicalEntity);
		this.setImagingPhysicalEntityList(temp);
	};

	this.setImagingPhysicalEntityList = function (type_arrayOf_ImagingPhysicalEntity) {
		this.ImagingPhysicalEntity = type_arrayOf_ImagingPhysicalEntity;
		temp = type_arrayOf_ImagingPhysicalEntity;
	};

	this.getImagingPhysicalEntityList = function () {
		return this.ImagingPhysicalEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ImagingPhysicalEntity != null) {
		var isArray = true;
		if (jsonObject.ImagingPhysicalEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ImagingPhysicalEntity.length; i++) {
				if(jsonObject.ImagingPhysicalEntity[i].xsiType == null) {
					this.addImagingPhysicalEntity(new ImagingPhysicalEntity(jsonObject.ImagingPhysicalEntity[i]));
				}
				else{
					var xsiType = jsonObject.ImagingPhysicalEntity[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.ImagingPhysicalEntity.xsiType == null) {
				this.addImagingPhysicalEntity(new ImagingPhysicalEntity(jsonObject.ImagingPhysicalEntity));
			}
			else{
				var xsiType = jsonObject.ImagingPhysicalEntity.xsiType;
				
			} 
		}
	}
};

var InferenceEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addInferenceEntity = function (type_InferenceEntity) {
		temp.push(type_InferenceEntity);
		this.setInferenceEntityList(temp);
	};

	this.setInferenceEntityList = function (type_arrayOf_InferenceEntity) {
		this.InferenceEntity = type_arrayOf_InferenceEntity;
		temp = type_arrayOf_InferenceEntity;
	};

	this.getInferenceEntityList = function () {
		return this.InferenceEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.InferenceEntity != null) {
		var isArray = true;
		if (jsonObject.InferenceEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.InferenceEntity.length; i++) {
				if(jsonObject.InferenceEntity[i].xsiType == null) {
					this.addInferenceEntity(new InferenceEntity(jsonObject.InferenceEntity[i]));
				}
				else{
					var xsiType = jsonObject.InferenceEntity[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.InferenceEntity.xsiType == null) {
				this.addInferenceEntity(new InferenceEntity(jsonObject.InferenceEntity));
			}
			else{
				var xsiType = jsonObject.InferenceEntity.xsiType;
				
			} 
		}
	}
};

var LesionObservationEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addLesionObservationEntity = function (type_LesionObservationEntity) {
		temp.push(type_LesionObservationEntity);
		this.setLesionObservationEntityList(temp);
	};

	this.setLesionObservationEntityList = function (type_arrayOf_LesionObservationEntity) {
		this.LesionObservationEntity = type_arrayOf_LesionObservationEntity;
		temp = type_arrayOf_LesionObservationEntity;
	};

	this.getLesionObservationEntityList = function () {
		return this.LesionObservationEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.LesionObservationEntity != null) {
		var isArray = true;
		if (jsonObject.LesionObservationEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.LesionObservationEntity.length; i++) {
				if(jsonObject.LesionObservationEntity[i].xsiType == null) {
					this.addLesionObservationEntity(new LesionObservationEntity(jsonObject.LesionObservationEntity[i]));
				}
				else{
					var xsiType = jsonObject.LesionObservationEntity[i].xsiType;
					if(xsiType == 'TimePointLesionObservationEntity') { 
this.addLesionObservationEntity(new TimePointLesionObservationEntity(jsonObject.LesionObservationEntity[i]));
}
if(xsiType == 'GeneralLesionObservationEntity') { 
this.addLesionObservationEntity(new GeneralLesionObservationEntity(jsonObject.LesionObservationEntity[i]));
}

				}                        
			}
		}
		else
		{
			if(jsonObject.LesionObservationEntity.xsiType == null) {
				this.addLesionObservationEntity(new LesionObservationEntity(jsonObject.LesionObservationEntity));
			}
			else{
				var xsiType = jsonObject.LesionObservationEntity.xsiType;
				if(xsiType == 'TimePointLesionObservationEntity') { 
this.addLesionObservationEntity(new TimePointLesionObservationEntity(jsonObject.LesionObservationEntity));
}
if(xsiType == 'GeneralLesionObservationEntity') { 
this.addLesionObservationEntity(new GeneralLesionObservationEntity(jsonObject.LesionObservationEntity));
}

			} 
		}
	}
};

var MarkupEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addMarkupEntity = function (type_MarkupEntity) {
		temp.push(type_MarkupEntity);
		this.setMarkupEntityList(temp);
	};

	this.setMarkupEntityList = function (type_arrayOf_MarkupEntity) {
		this.MarkupEntity = type_arrayOf_MarkupEntity;
		temp = type_arrayOf_MarkupEntity;
	};

	this.getMarkupEntityList = function () {
		return this.MarkupEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.MarkupEntity != null) {
		var isArray = true;
		if (jsonObject.MarkupEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.MarkupEntity.length; i++) {
				if(jsonObject.MarkupEntity[i].xsiType == null) {
					this.addMarkupEntity(new MarkupEntity(jsonObject.MarkupEntity[i]));
				}
				else{
					var xsiType = jsonObject.MarkupEntity[i].xsiType;
					if(xsiType == 'TextAnnotationEntity') { 
this.addMarkupEntity(new TextAnnotationEntity(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'GeometricShapeEntity') { 
this.addMarkupEntity(new GeometricShapeEntity(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntity') { 
this.addMarkupEntity(new ThreeDimensionGeometricShapeEntity(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'ThreeDimensionPoint') { 
this.addMarkupEntity(new ThreeDimensionPoint(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'ThreeDimensionPolygon') { 
this.addMarkupEntity(new ThreeDimensionPolygon(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'ThreeDimensionPolyline') { 
this.addMarkupEntity(new ThreeDimensionPolyline(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'ThreeDimensionEllipse') { 
this.addMarkupEntity(new ThreeDimensionEllipse(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'ThreeDimensionEllipsoid') { 
this.addMarkupEntity(new ThreeDimensionEllipsoid(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'ThreeDimensionMultiPoint') { 
this.addMarkupEntity(new ThreeDimensionMultiPoint(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'TwoDimensionGeometricShapeEntity') { 
this.addMarkupEntity(new TwoDimensionGeometricShapeEntity(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'TwoDimensionMultiPoint') { 
this.addMarkupEntity(new TwoDimensionMultiPoint(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'TwoDimensionPoint') { 
this.addMarkupEntity(new TwoDimensionPoint(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'TwoDimensionCircle') { 
this.addMarkupEntity(new TwoDimensionCircle(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'TwoDimensionEllipse') { 
this.addMarkupEntity(new TwoDimensionEllipse(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'TwoDimensionPolyline') { 
this.addMarkupEntity(new TwoDimensionPolyline(jsonObject.MarkupEntity[i]));
}
if(xsiType == 'TwoDimensionSpline') { 
this.addMarkupEntity(new TwoDimensionSpline(jsonObject.MarkupEntity[i]));
}

				}                        
			}
		}
		else
		{
			if(jsonObject.MarkupEntity.xsiType == null) {
				this.addMarkupEntity(new MarkupEntity(jsonObject.MarkupEntity));
			}
			else{
				var xsiType = jsonObject.MarkupEntity.xsiType;
				if(xsiType == 'TextAnnotationEntity') { 
this.addMarkupEntity(new TextAnnotationEntity(jsonObject.MarkupEntity));
}
if(xsiType == 'GeometricShapeEntity') { 
this.addMarkupEntity(new GeometricShapeEntity(jsonObject.MarkupEntity));
}
if(xsiType == 'ThreeDimensionGeometricShapeEntity') { 
this.addMarkupEntity(new ThreeDimensionGeometricShapeEntity(jsonObject.MarkupEntity));
}
if(xsiType == 'ThreeDimensionPoint') { 
this.addMarkupEntity(new ThreeDimensionPoint(jsonObject.MarkupEntity));
}
if(xsiType == 'ThreeDimensionPolygon') { 
this.addMarkupEntity(new ThreeDimensionPolygon(jsonObject.MarkupEntity));
}
if(xsiType == 'ThreeDimensionPolyline') { 
this.addMarkupEntity(new ThreeDimensionPolyline(jsonObject.MarkupEntity));
}
if(xsiType == 'ThreeDimensionEllipse') { 
this.addMarkupEntity(new ThreeDimensionEllipse(jsonObject.MarkupEntity));
}
if(xsiType == 'ThreeDimensionEllipsoid') { 
this.addMarkupEntity(new ThreeDimensionEllipsoid(jsonObject.MarkupEntity));
}
if(xsiType == 'ThreeDimensionMultiPoint') { 
this.addMarkupEntity(new ThreeDimensionMultiPoint(jsonObject.MarkupEntity));
}
if(xsiType == 'TwoDimensionGeometricShapeEntity') { 
this.addMarkupEntity(new TwoDimensionGeometricShapeEntity(jsonObject.MarkupEntity));
}
if(xsiType == 'TwoDimensionMultiPoint') { 
this.addMarkupEntity(new TwoDimensionMultiPoint(jsonObject.MarkupEntity));
}
if(xsiType == 'TwoDimensionPoint') { 
this.addMarkupEntity(new TwoDimensionPoint(jsonObject.MarkupEntity));
}
if(xsiType == 'TwoDimensionCircle') { 
this.addMarkupEntity(new TwoDimensionCircle(jsonObject.MarkupEntity));
}
if(xsiType == 'TwoDimensionEllipse') { 
this.addMarkupEntity(new TwoDimensionEllipse(jsonObject.MarkupEntity));
}
if(xsiType == 'TwoDimensionPolyline') { 
this.addMarkupEntity(new TwoDimensionPolyline(jsonObject.MarkupEntity));
}
if(xsiType == 'TwoDimensionSpline') { 
this.addMarkupEntity(new TwoDimensionSpline(jsonObject.MarkupEntity));
}

			} 
		}
	}
};

var ParameterCollection = function (jsonObject) {
	var temp = [];  

	this.addParameter = function (type_Parameter) {
		temp.push(type_Parameter);
		this.setParameterList(temp);
	};

	this.setParameterList = function (type_arrayOf_Parameter) {
		this.Parameter = type_arrayOf_Parameter;
		temp = type_arrayOf_Parameter;
	};

	this.getParameterList = function () {
		return this.Parameter;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.Parameter != null) {
		var isArray = true;
		if (jsonObject.Parameter.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.Parameter.length; i++) {
				if(jsonObject.Parameter[i].xsiType == null) {
					this.addParameter(new Parameter(jsonObject.Parameter[i]));
				}
				else{
					var xsiType = jsonObject.Parameter[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.Parameter.xsiType == null) {
				this.addParameter(new Parameter(jsonObject.Parameter));
			}
			else{
				var xsiType = jsonObject.Parameter.xsiType;
				
			} 
		}
	}
};

var ReferencedDicomObjectCollection = function (jsonObject) {
	var temp = [];  

	this.addReferencedDicomObject = function (type_ReferencedDicomObject) {
		temp.push(type_ReferencedDicomObject);
		this.setReferencedDicomObjectList(temp);
	};

	this.setReferencedDicomObjectList = function (type_arrayOf_ReferencedDicomObject) {
		this.ReferencedDicomObject = type_arrayOf_ReferencedDicomObject;
		temp = type_arrayOf_ReferencedDicomObject;
	};

	this.getReferencedDicomObjectList = function () {
		return this.ReferencedDicomObject;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ReferencedDicomObject != null) {
		var isArray = true;
		if (jsonObject.ReferencedDicomObject.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ReferencedDicomObject.length; i++) {
				if(jsonObject.ReferencedDicomObject[i].xsiType == null) {
					this.addReferencedDicomObject(new ReferencedDicomObject(jsonObject.ReferencedDicomObject[i]));
				}
				else{
					var xsiType = jsonObject.ReferencedDicomObject[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.ReferencedDicomObject.xsiType == null) {
				this.addReferencedDicomObject(new ReferencedDicomObject(jsonObject.ReferencedDicomObject));
			}
			else{
				var xsiType = jsonObject.ReferencedDicomObject.xsiType;
				
			} 
		}
	}
};

var SegmentationEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addSegmentationEntity = function (type_SegmentationEntity) {
		temp.push(type_SegmentationEntity);
		this.setSegmentationEntityList(temp);
	};

	this.setSegmentationEntityList = function (type_arrayOf_SegmentationEntity) {
		this.SegmentationEntity = type_arrayOf_SegmentationEntity;
		temp = type_arrayOf_SegmentationEntity;
	};

	this.getSegmentationEntityList = function () {
		return this.SegmentationEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.SegmentationEntity != null) {
		var isArray = true;
		if (jsonObject.SegmentationEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.SegmentationEntity.length; i++) {
				if(jsonObject.SegmentationEntity[i].xsiType == null) {
					this.addSegmentationEntity(new SegmentationEntity(jsonObject.SegmentationEntity[i]));
				}
				else{
					var xsiType = jsonObject.SegmentationEntity[i].xsiType;
					if(xsiType == 'DicomSegmentationEntity') { 
this.addSegmentationEntity(new DicomSegmentationEntity(jsonObject.SegmentationEntity[i]));
}

				}                        
			}
		}
		else
		{
			if(jsonObject.SegmentationEntity.xsiType == null) {
				this.addSegmentationEntity(new SegmentationEntity(jsonObject.SegmentationEntity));
			}
			else{
				var xsiType = jsonObject.SegmentationEntity.xsiType;
				if(xsiType == 'DicomSegmentationEntity') { 
this.addSegmentationEntity(new DicomSegmentationEntity(jsonObject.SegmentationEntity));
}

			} 
		}
	}
};

var TaskContextEntityCollection = function (jsonObject) {
	var temp = [];  

	this.addTaskContextEntity = function (type_TaskContextEntity) {
		temp.push(type_TaskContextEntity);
		this.setTaskContextEntityList(temp);
	};

	this.setTaskContextEntityList = function (type_arrayOf_TaskContextEntity) {
		this.TaskContextEntity = type_arrayOf_TaskContextEntity;
		temp = type_arrayOf_TaskContextEntity;
	};

	this.getTaskContextEntityList = function () {
		return this.TaskContextEntity;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.TaskContextEntity != null) {
		var isArray = true;
		if (jsonObject.TaskContextEntity.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.TaskContextEntity.length; i++) {
				if(jsonObject.TaskContextEntity[i].xsiType == null) {
					this.addTaskContextEntity(new TaskContextEntity(jsonObject.TaskContextEntity[i]));
				}
				else{
					var xsiType = jsonObject.TaskContextEntity[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.TaskContextEntity.xsiType == null) {
				this.addTaskContextEntity(new TaskContextEntity(jsonObject.TaskContextEntity));
			}
			else{
				var xsiType = jsonObject.TaskContextEntity.xsiType;
				
			} 
		}
	}
};

var ThreeDimensionSpatialCoordinateCollection = function (jsonObject) {
	var temp = [];  

	this.addThreeDimensionSpatialCoordinate = function (type_ThreeDimensionSpatialCoordinate) {
		temp.push(type_ThreeDimensionSpatialCoordinate);
		this.setThreeDimensionSpatialCoordinateList(temp);
	};

	this.setThreeDimensionSpatialCoordinateList = function (type_arrayOf_ThreeDimensionSpatialCoordinate) {
		this.ThreeDimensionSpatialCoordinate = type_arrayOf_ThreeDimensionSpatialCoordinate;
		temp = type_arrayOf_ThreeDimensionSpatialCoordinate;
	};

	this.getThreeDimensionSpatialCoordinateList = function () {
		return this.ThreeDimensionSpatialCoordinate;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.ThreeDimensionSpatialCoordinate != null) {
		var isArray = true;
		if (jsonObject.ThreeDimensionSpatialCoordinate.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.ThreeDimensionSpatialCoordinate.length; i++) {
				if(jsonObject.ThreeDimensionSpatialCoordinate[i].xsiType == null) {
					this.addThreeDimensionSpatialCoordinate(new ThreeDimensionSpatialCoordinate(jsonObject.ThreeDimensionSpatialCoordinate[i]));
				}
				else{
					var xsiType = jsonObject.ThreeDimensionSpatialCoordinate[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.ThreeDimensionSpatialCoordinate.xsiType == null) {
				this.addThreeDimensionSpatialCoordinate(new ThreeDimensionSpatialCoordinate(jsonObject.ThreeDimensionSpatialCoordinate));
			}
			else{
				var xsiType = jsonObject.ThreeDimensionSpatialCoordinate.xsiType;
				
			} 
		}
	}
};

var TwoDimensionSpatialCoordinateCollection = function (jsonObject) {
	var temp = [];  

	this.addTwoDimensionSpatialCoordinate = function (type_TwoDimensionSpatialCoordinate) {
		temp.push(type_TwoDimensionSpatialCoordinate);
		this.setTwoDimensionSpatialCoordinateList(temp);
	};

	this.setTwoDimensionSpatialCoordinateList = function (type_arrayOf_TwoDimensionSpatialCoordinate) {
		this.TwoDimensionSpatialCoordinate = type_arrayOf_TwoDimensionSpatialCoordinate;
		temp = type_arrayOf_TwoDimensionSpatialCoordinate;
	};

	this.getTwoDimensionSpatialCoordinateList = function () {
		return this.TwoDimensionSpatialCoordinate;
	};

	this.getSize = function () {
		return temp.length;
	};

	this.getItem = function (index) {
		if (temp.length != undefined && temp.length >= index)
			return temp[index];
		return null;
	}

	if (jsonObject != null && jsonObject.TwoDimensionSpatialCoordinate != null) {
		var isArray = true;
		if (jsonObject.TwoDimensionSpatialCoordinate.length == undefined)
			isArray = false;
		if (isArray) {
			for (i = 0; i < jsonObject.TwoDimensionSpatialCoordinate.length; i++) {
				if(jsonObject.TwoDimensionSpatialCoordinate[i].xsiType == null) {
					this.addTwoDimensionSpatialCoordinate(new TwoDimensionSpatialCoordinate(jsonObject.TwoDimensionSpatialCoordinate[i]));
				}
				else{
					var xsiType = jsonObject.TwoDimensionSpatialCoordinate[i].xsiType;
					
				}                        
			}
		}
		else
		{
			if(jsonObject.TwoDimensionSpatialCoordinate.xsiType == null) {
				this.addTwoDimensionSpatialCoordinate(new TwoDimensionSpatialCoordinate(jsonObject.TwoDimensionSpatialCoordinate));
			}
			else{
				var xsiType = jsonObject.TwoDimensionSpatialCoordinate.xsiType;
				
			} 
		}
	}
};


