import { useFormik } from "formik"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import style from "../styles/otherDetails.module.css"
import Layout from "../components/Layout"
import SmallRadio from "../components/ui components/radio/smallRadio"
import { otherDetailsSchema } from "../components/validationSchema"
import { useRouter } from "next/router"
import { useState, useEffect, useRef } from "react"
import PaymentPop from '../components/paymentPopUps/paymentPop'
import PropertyRegisteredPopUp from "../components/PopUps/propertyRegisteredPopUp"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { change, changeInfo, changePaymentStatus, changepopUpBg, changeRegistrationStatus } from "../slices/payPopSlice"
import { Icon } from "@iconify/react"
import axios from "axios"





const OtherDetails: NextPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [info, setInfo] = useState("");
    // const [pay, setPay] = useState(false);
    const page = useSelector((state: RootState) => state.progressBar.value)
    const pay = useSelector((state: RootState) => state.payPop.paymentStatus);
    const id = router.query
    // console.log(id) 
    
    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            document.title = "Other Details"
        }
        // try {
        //     if (page == 1)
        //         router.push('/basicDetails')
        // }
        // catch {
        //     console.log("milena")
        // }
    })


    const previous = (e: Event) => {
        e.preventDefault()
        router.push('/adDetails')
    }

    const initialValues = {
        ownerType: "",
        name: "",
        email: "",
        phoneNumber: null,
        adPricingtype: ""
    }
    const { values, errors, touched, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: otherDetailsSchema,
        onSubmit: async (values, formikHelpers) => {
            // console.log("call Ad Details")
            // console.log(values)
            // console.log(initialValues)
            var details: any = JSON.parse(sessionStorage.getItem("details") ?? ' ')
            // const photo:File=sessionStorage.getItem("propertyImage")
            details.name = values.name
            details.email = values.email
            details.phone = values.phoneNumber
            delete details.propertyImage
            // details.ownerId = ""
            // console.log("data",details.propertyImage[0] as Blob)
            // async function getFileFromUrl(url:string, name:string, defaultType = 'image/jpeg'){
            //     const response = await fetch(url);
            //     const data = await response.blob();
            //     return new File([data], name, {
            //       type: data.type || defaultType,
            //     });
            //   }
              delete details.propertyImage
            try {
                const config = {
                    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg4NDc4YzY0ODI5YzhlMzg4ODYzOWUiLCJyb2xlIjoic3VwZXJhZG1pbiIsImlhdCI6MTY2OTk4MjAxOSwiZXhwIjoyMjc0NzgyMDE5fQ.K3ereptAn2D5QkNgDpyb5azImuXU9wxcwccjlfkwqiM` }
                };
                // console.log(details)
                const ashim: any = {
                    for: "rent",
                    type: "agricultural",
                    category: "land",
                    coordinates: "41.40338,2.17403",
                    wardNumber: "12",
                    streetName: "asterdio road",
                    city: "6375e1d9a771ab4368586e55",
                    locality: "Sankhamul",
                    areaMetric: "bigha",
                    totalArea: "10-1-1-1",
                    buildUpArea: "10-1-1-1",
                    facing: "east",
                    unit: "feet",
                    access: '8',
                    roadType: 'gravelled',
                    buildYear: '2020',
                    totalFloors: '7',
                    furnishing: 'unfurnished',
                    amenities: ['6364c9050910364b36d1644d', '6364c9870910364b36d16458'],
                    view360Link: 'https://www.youtube.com/watch?v=H2lRuOsfUlU',
                    youtubeLink: 'https://www.youtube.com/watch?v=H2lRuOsfUlU',
                    title: 'Basobaas',
                    description: 'Build your dream building  here',
                    price: '1000000000000',
                    deal: 'negotiable',
                    label: 'onwards',
                    ownerId: "22626asas",
                    name: 'Niru Mishr',
                    phone: '981186as5755',
                    email: 'ashrestha@asterdio.com',
                    country: 'USA',
                    kitchen: "2",
                    bedroom: "2",
                    bathroom: "2",
                    parking: "2",
                    livingRoom: "2",
                    // propertyImage:[""]
                }
                const response: any = await axios.post("https://basobaasnew.asterdio.xyz/api/properties",
                    details, config)
                console.log("response : ",response)
                sessionStorage.setItem("propertyToken",response?.data.property._id)

            } catch (err) {
                console.log(err)
            }


            if (values.adPricingtype == "Paid Listing")
            {
                if(pay)
                {
                    dispatch(changepopUpBg())
                    dispatch(changeRegistrationStatus(true))
                }
                else
                {
                    dispatch(change())
                }
            }
            else
            {   
                dispatch(changepopUpBg())
                dispatch(changeRegistrationStatus(true))
            } 

        }
    })

    return (
        <>
            <PropertyRegisteredPopUp />
            <PaymentPop />
            <Layout topic="Other Details" onSubmit={handleSubmit} page="4" back=": Ad Detail" previous={previous} info={info} next=": Save & Continue">
                <div className={style.otherDetailsContainer}>
                    <div className={style.ownerInfo} >
                        <p className={style.title}>Owner Info
                            <Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => { dispatch(changeInfo("Owner Info")) }} />
                        </p>
                        <div className={style.ownerRadioDiv}>
                            <SmallRadio name="ownerType" value="Use my info" onChange={handleChange} />
                            <SmallRadio name="ownerType" value="Use Different Owner" onChange={handleChange} />
                        </div>
                        {errors.ownerType && <span style={{ marginTop: "-15px" }} className={style.error}>{errors.ownerType}</span>}

                        <div className={style.ownerInfoDiv}>
                            <div className={style.inputFeildRow}>
                                <div className={style.inputFeildDiv}>
                                    <input
                                        className={style.inputFeild}
                                        placeholder="Full Name"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                    />
                                    {errors.name && <span className={style.error}>{errors.name}</span>}
                                </div>
                                <div className={style.inputFeildDiv}>
                                    <input
                                        className={style.inputFeild}
                                        placeholder="Email"
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span className={style.error}>{errors.email}</span>}
                                </div>
                            </div>
                            <div className={style.inputFeildDiv}>
                                <input
                                    className={style.inputFeild}
                                    placeholder="Phone Number"
                                    type="text"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                />
                                {errors.phoneNumber && <span className={style.error}>{errors.phoneNumber}</span>}
                            </div>
                        </div>
                    </div>

                    <div className={style.adPricingDiv} >
                        <p className={style.title}>Ad Pricing Plan
                            <Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => { dispatch(changeInfo("Ad Pricing Plan")) }} />
                        </p>
                        <div className={style.adPricingRadioDiv}>
                            <SmallRadio name="adPricingtype" value="Free Listing" onChange={handleChange} />
                            <SmallRadio name="adPricingtype" value="Paid Listing" onChange={handleChange} />
                        </div>
                        {errors.adPricingtype && <span style={{ marginTop: "-15px" }} className={style.error}>{errors.adPricingtype}</span>}
                    </div>
                    {/* <img src={sessionStorage.getItem("propertyImage")??""} alt="no image"/> */}
                </div>
            </Layout>
        </>
    )
}

export default OtherDetails