import * as Yup from 'yup'
const areaRegex = RegExp(
    /^\(?([0-9]{1})\)?[- ]?([0-9]{1})[- ]?([0-9]{1})[- ]?([0-9]{1})$/
  );

export const basicDetailsSchema=Yup.object({
    adCategory: Yup.string().required("Must select aleast one option"),
    propertyType: Yup.string().required("Must select aleast one option"),
    propertyCategory:Yup.string().required("Must select aleast one option")
})

export const propertyDetailsSchema =Yup.object({
    wardNumber:Yup.number().required("Must enter ward number"),
    city:Yup.string().min(3).max(25).required("Must enter City"),
    propertyArea:Yup.string().min(3).max(25).required("Must enter Location"),
    areaMetric:Yup.string().required("Enter Metric"),
    totalArea:Yup.string().matches(areaRegex, "Invalid area").required("select unit"),
    totalAreaUnit:Yup.string().required("required"),
    builtUpArea:Yup.string().matches(areaRegex, "Invalid area").required("required"),
    builtUpAreaUnit:Yup.string().required("required"),
    propertyFace:Yup.string().required("required"),
    roadAreaMetric:Yup.string().required("required"),
    roadAccess:Yup.number().required("required"),
    roadType:Yup.string().required("required"),
    builtYear:Yup.date().required("required"),
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


export const otherDetailsSchema=Yup.object({
    adPricingtype:Yup.string().required("required"),
    email:Yup.string().email("Not a valid email").required("required"),
    fullName:Yup.string().required("required"),
    ownerType:Yup.string().required("required"),
    phoneNumber:Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1000000000,"Must have 10 digit").max(9999999999,"Must have 10 digit only")
    .required('A phone number is required')
})