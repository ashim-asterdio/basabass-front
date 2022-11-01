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
    amenities:Yup.array().of(Yup.string()).required()
}) 


export const adDetailsSchema=Yup.object ({
    image:Yup.mixed().nullable(),
    youtubeLink:Yup.string().required("required"),
    propertyTitle:Yup.string().required("required"),
    propertyPrice:Yup.string().required("required"),
    currency:Yup.string().required("required"),
    description:Yup.string().required("required")
})