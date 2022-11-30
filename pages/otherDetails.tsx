import { useFormik } from "formik"
import { NextPage } from "next"
import Head from "next/head"
import style from "../styles/otherDetails.module.css"
import Layout from "../components/Layout"
import SmallRadio from "../components/ui components/radio/smallRadio"
import { otherDetailsSchema } from "../components/validationSchema"
import { useRouter } from "next/router"
import { useState, useEffect,useRef } from "react"
import PaymentPop from '../components/paymentPopUps/paymentPop'
import PropertyRegisteredPopUp from "../components/PopUps/propertyRegisteredPopUp"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { change,changeInfo,changePaymentStatus,changepopUpBg, changeRegistrationStatus } from "../slices/payPopSlice"
import { Icon } from "@iconify/react"

const OtherDetails: NextPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [info, setInfo] = useState("");
    // const [pay, setPay] = useState(false);
    const page = useSelector((state: RootState) => state.progressBar.value)
    const pay = useSelector((state: RootState) => state.payPop.paymentStatus);
    const id = router.query
    console.log(id) 

    const firstRender=useRef(true)
    useEffect(() => {
        if (firstRender.current){
            firstRender.current=false
            document.title="Other Details"
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
        fullName: "",
        email: "",
        phoneNumber: null,
        adPricingtype: ""
    }
    const { values, errors, touched, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: otherDetailsSchema,
        onSubmit: async (values, formikHelpers) => {
            console.log("call Ad Details")
            console.log(values)
            console.log(initialValues)
            var details:any=JSON.parse(sessionStorage.getItem("details")??' ')
            
            details.name=values.fullName
            details.email=values.email
            details.phone=values.phoneNumber
            sessionStorage.setItem("details",JSON.stringify(details))
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
            <PropertyRegisteredPopUp/>
            <PaymentPop />
            <Layout topic="Other Details" onSubmit={handleSubmit} page="4" back=": Ad Detail" previous={previous} info={info} next=": Save & Continue">
                <div className={style.otherDetailsContainer}>
                    <div className={style.ownerInfo} >
                        <p className={style.title}>Owner Info 
                            <Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => {dispatch(changeInfo("Owner Info")) }} />
                        </p>
                        <div className={style.ownerRadioDiv}>
                            <SmallRadio name="ownerType" value="Use my info" onChange={handleChange} />
                            <SmallRadio name="ownerType" value="Use Different Owner" onChange={handleChange} />
                            {errors.ownerType && <span className={style.error}>{errors.ownerType}</span>}
                        </div>

                        <div className={style.ownerInfoDiv}>
                            <div className={style.inputFeildRow}>
                                <div className={style.inputFeildDiv}>
                                    <input
                                        className={style.inputFeild}
                                        placeholder="Full Name"
                                        type="text"
                                        name="fullName"
                                        onChange={handleChange}
                                    />
                                    {errors.fullName && <span className={style.error}>{errors.fullName}</span>}
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
                            {errors.adPricingtype && <span className={style.error}>{errors.adPricingtype}</span>}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default OtherDetails