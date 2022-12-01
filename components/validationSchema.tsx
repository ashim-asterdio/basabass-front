import * as Yup from 'yup'
const areaRegex = RegExp(
    /^\(?([0-9]{1})\)?[- ]?([0-9]{1})[- ]?([0-9]{1})[- ]?([0-9]{1})$/
  );

export const basicDetailsSchema=Yup.object({
    adCategory: Yup.string().required("PLease select aleast one option"),
    propertyType: Yup.string().required("PLease select aleast one option"),
    propertyCategory:Yup.string().required("PLease select aleast one option")
})

export const propertyDetailsSchema =Yup.object({
    wardNumber:Yup.number().required("Please enter ward number"),
    city:Yup.string().min(3).max(25).required("Please enter City"),
    propertyArea:Yup.string().min(3).max(25).required("Please enter Location"),
    areaMetric:Yup.string().required("Please enter Metric"),
    totalArea:Yup.string().matches(areaRegex, "Invalid area").required("Please enter Area"),
    // totalAreaUnit:Yup.string().required("required"),
    builtUpArea:Yup.string().matches(areaRegex, "Invalid area").required("Please enter Area"),
    // builtUpAreaUnit:Yup.string().required("required"),
    propertyFace:Yup.string().required("Please enter property facing"),
    roadAreaMetric:Yup.string().required("Please enter metric"),
    roadAccess:Yup.number().required("Please enter road access"),
    roadType:Yup.string().required("Please enter road type"),
    builtYear:Yup.date().required("Please enter built year"),
    totalFloors:Yup.number().required("Please enter no. of floors"),
    furnishing:Yup.string().required("Please enter furnishing status"),
    numberOFUnits:Yup.string().required("Please enter no. of units"),
    noOfBedroom:Yup.string().required("Please enter no. of bedroom"),
    noOfBathroom:Yup.string().required("Please enter no. of bathroom"),
    noOfKitchen:Yup.string().required("Please enter no. of kitchen"),
    noOfLivingroom:Yup.string().required("Please enter no. of livingroom"),
    amenities:Yup.array().of(Yup.string()).min(1,"Require more amenities")
}) 


export const adDetailsSchema=Yup.object ({
    image:Yup.mixed().nullable(),
    youtubeLink:Yup.string().required("Please enter Youtube link"),
    propertyTitle:Yup.string().required("Please enter propoerty title"),
    propertyPrice:Yup.string().required("Please enter price"),
    currency:Yup.string().required("Please enter Unit"),
    description:Yup.string().required("Please enter description")
})


export const otherDetailsSchema=Yup.object({
    adPricingtype:Yup.string().required("Please select atleast one option"),
    email:Yup.string().email("Not a valid email").required("Please enter email"),
    fullName:Yup.string().required("Please enter name"),
    ownerType:Yup.string().required("Please select atleast one option"),
    phoneNumber:Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1000000000,"Must have 10 digit").max(9999999999,"Must have 10 digit only")
    .required('Please enter phone number')
})