import * as Yup from 'yup'
const areaRegex = RegExp(
    /^\(?([0-9]{1})\)?[- ]?([0-9]{1})[- ]?([0-9]{1})[- ]?([0-9]{1})$/
  );

export const basicDetailsSchema=Yup.object({
    adCategory: Yup.string().required("Please select aleast one option"),
    propertyType: Yup.string().required("Please select aleast one option"),
    propertyCategory:Yup.string().required("Please select aleast one option")
})

export const propertyDetailsSchema =Yup.object({
    wardNumber:Yup.number().required("Please enter Ward Number"),
    city:Yup.string().min(3).max(25).required("Please enter City"),
    propertyArea:Yup.string().min(3).max(25).required("Please enter Location"),
    areaMetric:Yup.string().required("Please enter Metric"),
    totalArea:Yup.string().matches(areaRegex, "Invalid area").required("Please enter Area"),
    // totalAreaUnit:Yup.string().required("required"),
    builtUpArea:Yup.string().matches(areaRegex, "Invalid area").required("Please enter Area"),
    // builtUpAreaUnit:Yup.string().required("required"),
    propertyFace:Yup.string().required("Please enter Property Facing"),
    roadAreaMetric:Yup.string().required("Please enter Metric"),
    roadAccess:Yup.number().required("Please enter Road Access"),
    roadType:Yup.string().required("Please enter Road Type"),
    builtYear:Yup.date().required("Please enter Built Year"),
    totalFloors:Yup.number().required("Please enter No. of Floors"),
    furnishing:Yup.string().required("Please enter Furnishing status"),
    numberOFUnits:Yup.string().required("Please enter No. of Units"),
    NoOfBedroom:Yup.string().required("Please enter No. of Bed Room"),
    NoOfBathroom:Yup.string().required("Please enter No. of Bath Room"),
    NoOfKitchen:Yup.string().required("Please enter No. of Kitchen"),
    NoOfLivingroom:Yup.string().required("Please enter No. of Living Room"),
    amenities:Yup.array().of(Yup.string()).min(1,"Require more amenities")
}) 


export const adDetailsSchema=Yup.object ({
    image:Yup.array().required("Please enter Images").max(10,"You can only enter 10 images").min(1,"Please enter Images"),
    youtubeLink:Yup.string().required("Please enter Youtube link"),
    propertyTitle:Yup.string().required("Please enter Propoerty Title"),
    propertyPrice:Yup.number().required("Please enter Price"),
    label:Yup.string().required("Please enter Unit"),
    description:Yup.string().required("Please enter Description")
})


export const otherDetailsSchema=Yup.object({
    adPricingtype:Yup.string().required("Please select atleast one option"),
    email:Yup.string().email("Not a valid Email").required("Please enter Email"),
    name:Yup.string().required("Please enter Naame"),
    ownerType:Yup.string().required("Please select atleast one option"),
    phoneNumber:Yup.number()
    .typeError("That doesn't look like a Phone Number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1000000000,"Must have 10 digit").max(9999999999,"Must have 10 digit only")
    .required('Please enter phone number')
})