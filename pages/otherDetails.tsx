import { useFormik } from "formik"
import { NextPage } from "next"
import Head from "next/head"
import style from "../styles/otherDetails.module.css"
import Layout from "../components/Layout"
import SmallRadio from "../components/ui components/radio/smallRadio"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { otherDetailsSchema } from "../components/validationSchema"

const OtherDetails: NextPage = () => {
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
        onSubmit: (values, formikHelpers) => {
            console.log("call Ad Details")
            console.log(values)
            console.log(initialValues)
        }
    })
    return (
        <>
            <Head>
                <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
            </Head>
            <Layout topic="Other Details" onSubmit={handleSubmit}>
                <div className={style.mainContainer}>
                    <div className={style.ownerInfo}>
                        <p className={style.title}>Owner Info <HiOutlineInformationCircle className={style.infoIcon} /></p>
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

                    <div className={style.adPricingDiv}>
                        <p className={style.title}>Ad Pricing Plan <HiOutlineInformationCircle className={style.infoIcon} /></p>
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