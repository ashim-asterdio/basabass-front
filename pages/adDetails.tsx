import type { NextPage } from "next";
import UploadZone from "../components/ui components/uploadZone";
import styles from "../styles/adDetails.module.css";
import uiStyle from "../styles/uiComponents.module.css";
import React, { useState } from "react";
import {
  CustomizableInputs,
  CustomizableInputButtonsWithSelect,
} from "../components/ui components/input/InputButtons";
import { IoInformationCircleOutline } from "react-icons/io5";
import Layout from '../components/Layout'
import Head from 'next/head'
import { useFormik } from "formik";
import { adDetailsSchema } from "../components/validationSchema";
import { useRouter } from "next/router";
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '../store'
import { increment } from "../slices/progressBarSlice";


const AdDetails: NextPage = () => {
  const router=useRouter()
  const dispatch=useDispatch();
  const page=useSelector((state:RootState)=>state.progressBar.value)

  const previous=(e:Event)=>{
    e.preventDefault()
    router.push('/propertyDetails')
}

  const initialValues = {
    image: null,
    youtubeLink: "",
    propertyTitle: "",
    propertyPrice: "",
    currency: "",
    description: ""
  }
  // const [file, setFile] = useState(null);
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: adDetailsSchema,
    onSubmit: (values, formikHelpers) => {
      console.log("call Ad Details")
      console.log(values)
      if(page==3)
        dispatch(increment())
      router.push ('/otherDetails'); 
    }
  })
  return (
    <>
      <Head>
        <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
      </Head>
      <Layout topic="Ad Deatils" onSubmit={handleSubmit} page="3" previous={previous}>
        <div className={styles.adDetailsMainWrapper}>
          <div className={styles.adDetailsLine}></div>

          <div className={styles.adDetailsUploads}>
            <label>
              Upload Images
              <IoInformationCircleOutline className={uiStyle.reactIconI} />
            </label>

            <div className={styles.image}>
              <UploadZone />
              {/* <label><UploadZone/></label> */}
            </div>
            <small id="emailHelp" className="form-text text-muted">
              *The first image is thumbnail for this listing
            </small>
            {errors.image && <span className={styles.error}>{errors.image}</span>}
          </div>

          <div className={styles.adDetailsYoutube}>
            <label>
              Youtube Video Link
              <IoInformationCircleOutline className={uiStyle.reactIconI} />
            </label>
            <CustomizableInputs
              type={"text"}
              placeholder={"eg.www.youtube.com/asada"}
              id={""}
              name="youtubeLink"
              onChange={handleChange}
            />
            {errors.youtubeLink && <span className={styles.error}>{errors.youtubeLink}</span>}
          </div>

          <div className={styles.flexTwo}>
            <div className={styles.adDetailsTitle}>
              <label>
                Title <IoInformationCircleOutline className={uiStyle.reactIconI} />
              </label>
              <CustomizableInputs
                type={"text"}
                placeholder={"Enter Property Title"}
                id={""}
                name="propertyTitle"
                onChange={handleChange}
              />
              {errors.propertyTitle && <span className={styles.error}>{errors.propertyTitle}</span>}
            </div>

            <div className={styles.adDetailsPrice}>
              <label>
                Price <IoInformationCircleOutline className={uiStyle.reactIconI} />
              </label>
              <CustomizableInputButtonsWithSelect
                type={"text"}
                placeholder={"Property Price"}
                value1={"Label"}
                value2={"Rupees"}
                name1="propertyPrice"
                name2="currency"
                onChange={handleChange}
              />
              {(errors.propertyPrice || errors.currency) && <span className={styles.doubleError}>
                <span className={styles.error}>{errors.propertyPrice}</span>
                {errors.currency && <span className={styles.error}>{errors.currency}</span>}
              </span>}
            </div>
          </div>

          <div className={styles.adDetailsFormDescription}>
            <label>
              Description{" "}
              <IoInformationCircleOutline className={uiStyle.reactIconI} />
            </label>
            <input
              className={styles.textArea}
              id="adDetailsFormDescription"
              placeholder="Description about your property"
              name="description"
              onChange={handleChange}
            ></input>
            {errors.description && <span className={styles.error}>{errors.description}</span>}
          </div>

        </div>
        {/* <a href='/basicDetail'>test</a>  */}
      </Layout>
    </>
  );
};
export default AdDetails;