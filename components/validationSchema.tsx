import * as Yup from 'yup'

export const propertyDetailsSchema =Yup.object({
    wardNumber:Yup.number().required("Must enter ward number"),
    city:Yup.string().min(3).max(25).required("Must enter City"),
    propertyArea:Yup.string().min(3).max(25).required("Must enter Location"),
    areaMetric:Yup.string().required("Enter Metric"),
    totalArea:Yup.number().required("select unit"),
    totalAreaUnit:Yup.string().required("required"),
    builtUpArea:Yup.number().required("required"),
    builtUpAreaUnit:Yup.string().required("required"),
    propertyFace:Yup.string().required("required"),
    roadAreaMetric:Yup.string().required("required"),
    roadAccess:Yup.number().required("required"),
    roadType:Yup.string().required("required"),
    buildYear:Yup.date().required("required"),
    totalFloors:Yup.number().required("required"),
    furnishing:Yup.string().required("required"),
    numberOFUnits:Yup.string().required("required"),
    noOfBedroom:Yup.string().required("required"),
    noOfBathroom:Yup.string().required("required"),
    noOfKitchen:Yup.string().required("required"),
    noOfLivingroom:Yup.string().required("required"),
    amenities:Yup.array().of(Yup.string()).min(1,"Require more amenities")
}) 


export const adDetailsSchema=Yup.object ({
    image:Yup.mixed().nullable(),
    youtubeLink:Yup.string().required("required"),
    propertyTitle:Yup.string().required("required"),
    propertyPrice:Yup.string().required("required"),
    currency:Yup.string().required("required"),
    description:Yup.string().required("required")
})