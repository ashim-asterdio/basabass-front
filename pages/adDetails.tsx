import type { NextPage } from "next";
import UploadZone from "../components/ui components/uploadZone";
import styles from "../styles/adDetails.module.css";
import uiStyle from "../styles/uiComponents.module.css";
import React, { useState, useEffect, useRef } from "react";
import {
  CustomizableInputs,
  CustomizableInputButtonsWithSelect,
} from "../components/ui components/input/InputButtons";
import Layout from '../components/Layout'
import Head from 'next/head'
import { useFormik } from "formik";
import { adDetailsSchema } from "../components/validationSchema";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { increment } from "../slices/progressBarSlice";
import { Icon } from '@iconify/react'
import { changeInfo } from "../slices/payPopSlice";



const AdDetails: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.progressBar.value)
  const [info, setInfo] = useState("");

  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      document.title = "Ad Details";
    }
  })
  // useEffect(() => {
  //     if (page===1)
  //         router.push('/basicDetails')
  //   })

  const previous = (e: Event) => {
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
      if (page == 3){
        dispatch(increment())
      }
      sessionStorage.setItem("page","4")
      var details:any=JSON.parse(sessionStorage.getItem("details")??' ')
      details.propertyImages=values.image
      details.youtubeLink=values.youtubeLink
      details.title=values.propertyTitle
      details.price=values.propertyPrice
      details.label=values.currency
      details.description=values.description

      sessionStorage.setItem("details",JSON.stringify(details))
      router.push('/otherDetails');
    }
  })
  return (
    <>
      <Layout topic="Ad Details" onSubmit={handleSubmit} page="3" back=": Property Details" previous={previous} info={info} next=" : Owner Details">
        <div className={styles.adDetailsMainWrapper}>
          {/* <div className={styles.adDetailsLine}></div> */}

          <div className={styles.adDetailsUploads}>
            <label>
              Upload Images
              <a href='#' style={{ display: "flex" }}>
                <Icon icon="humbleicons:info-circle" width="20" height="20" className={styles.infoIcon} onClick={() => { dispatch(changeInfo("Upload Image")) }} />
              </a>
            </label>

            <div className={styles.image}>
              <UploadZone />
              {/* <label><UploadZone/></label> */}
            </div>
            <div>
              <small id="emailHelp" className="form-text text-muted">
                *The first image is thumbnail for this listing
              </small>
            </div>
            {errors.image && <span className={styles.error}>{errors.image}</span>}
          </div>

          <div className={styles.adDetailsYoutube} onClick={() => { setInfo("Youtube Video Link") }}>
            <label>
              Youtube Video Link
              <a href='#' style={{ display: "flex" }}><Icon icon="humbleicons:info-circle" width="20" height="20" className={styles.infoIcon} onClick={() => { dispatch(changeInfo("Youtube Video Link")) }} /></a>
            </label>
            <div className={styles.inputWrapper}>
              <CustomizableInputs
                type={"text"}
                placeholder={"eg.www.youtube.com/asada"}
                id={""}
                name="youtubeLink"
                onChange={handleChange}
              />
              {errors.youtubeLink && <span className={styles.error}>{errors.youtubeLink}</span>}
            </div>
          </div>

          <div className={styles.flexTwo}>
            <div className={styles.adDetailsTitle} onClick={() => { setInfo("Title") }}>
              <label>
                Title
                <a href='#' style={{ display: "flex" }}>
                  <Icon icon="humbleicons:info-circle" width="20" height="20" className={styles.infoIcon} onClick={() => { dispatch(changeInfo("Title")) }} />
                </a>
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

            <div className={styles.adDetailsPrice} onClick={() => { setInfo("Price") }}>
              <label>
                Price
                <a href='#' style={{ display: "flex" }}><Icon icon="humbleicons:info-circle" width="20" height="20" className={styles.infoIcon} onClick={() => { dispatch(changeInfo("Price")) }} /></a>
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

          <div className={styles.adDetailsFormDescription} onClick={() => { setInfo("Description") }}>
            <label>
              Description{" "}
              <a href='#' style={{ display: "flex" }}><Icon icon="humbleicons:info-circle" width="20" height="20" className={styles.infoIcon} onClick={() => { dispatch(changeInfo("Description")) }} /></a>
            </label>
            <div className={styles.descriptionDiv}>
              <input
                className={styles.textArea}
                id="adDetailsFormDescription"
                placeholder="Description about your property"
                name="description"
                onChange={handleChange}
              />
            </div>

            {errors.description && <span className={styles.error}>{errors.description}</span>}
          </div>

        </div>
        {/* <a href='/basicDetail'>test</a>  */}
      </Layout>
    </>
  );
};
export default AdDetails;