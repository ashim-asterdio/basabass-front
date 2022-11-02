import { useFormik } from "formik"
import { NextPage } from "next"
import Head from "next/head"
import style from "../styles/otherDetails.module.css"
import Layout from "../components/Layout"
import SmallRadio from "../components/ui components/radio/smallRadio"
import { HiOutlineInformationCircle } from "react-icons/hi"

const OtherDetails:NextPage=()=> {
    const initialValues={
        image:null,
        youtubeLink:"",
        propertyTitle:"",
        propertyPrice:"",
        currency:"",
        description:""
      }
      const {values,errors,touched,handleSubmit,handleChange}=useFormik({
        initialValues:initialValues,
        validationSchema:"",
        onSubmit:(values, formikHelpers)=>{
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
                        <SmallRadio name="ownertype" value="Use my info" />
                        <SmallRadio name="ownertype" value="Use Different Owner" />
                    </div>

                    <div className={style.ownerInfoDiv}>
                        <input
                            className={style.inputFeild}
                            placeholder="Full Name"
                            type="text" 
                        />
                        <input
                            className={style.inputFeild}
                            placeholder="Email"
                            type="text" 
                        />
                        <input
                            className={style.inputFeild}
                            placeholder="Phone Number"
                            type="text" 
                        />
                    </div>
                </div>

                <div className={style.adPricingDiv}>
                <p className={style.title}>Ad Pricing Plan <HiOutlineInformationCircle className={style.infoIcon} /></p>
                    <div className={style.adPricingRadioDiv}>
                        <SmallRadio name="adPricingtype" value="Use my info" />
                        <SmallRadio name="adPricingtype" value="Use Different Owner" />
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default OtherDetails