import * as Yup from 'yup'

export const propertyDetailsSchema =Yup.object({
    wardNumber:Yup.number().required("Must enter ward number"),
    city:Yup.string().min(3).max(25).required("Must enter City"),
    propertyArea:Yup.string().min(3).max(25).required("Must enter Location"),
    areaMetric:Yup.string().required("Enter Metric"),
    totalArea:Yup.number().required("select unit"),
    measurementUnit:Yup.string().required(),
    builtUpArea:Yup.number().required(),
    propertyFace:Yup.string().required(),
    roadAreaMetric:Yup.string().required(),
    roadAccess:Yup.number().required(),
    roadType:Yup.string().required(),
    buildYear:Yup.date().required(),
    furnishing:Yup.string().required(),
    numberOFUnits:Yup.string().required(),
    noOfBedroom:Yup.string().required(),
    noOfBathroom:Yup.string().required(),
    noOfKitchen:Yup.string().required(),
    noOfLivingroom:Yup.string().required(),
}) 