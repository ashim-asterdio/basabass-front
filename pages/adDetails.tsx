import type { NextPage } from "next";
import CustomUploadZone from "../components/customUploadZone";
import styles from "../styles/adDetails.module.css";
import style from "../styles/uiComponents.module.css";
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
import { changeInfo, saveFiles } from "../slices/payPopSlice";
import UploadZone from "../components/ui components/uploadZone";



function dataURItoBlob(dataURI: string) {
  var byteString = atob(dataURI.split(',')[1]);

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });


}


function BlobToDataNinja(file: any) {
  const reader = new FileReader();
  reader.onloadend = (e) => {
    console.log(e.target?.result, 'ello');
    return Promise.resolve(e.target?.result)
  }
  reader.readAsDataURL(file)

  //  console.log(result,'result')
}
async function fileToBase64(file: any) {
  return new Promise((resolve, reject) => {
    if (!file.type.match('image')) {
      return reject(new Error('INVALID_FILE'));
    }

    if (!file.type.match('jpeg') && !file.type.match('jpg') && !file.type.match('png')) {
      return reject(new Error('INVALID_FILE'));
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
}

const AdDetails: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.progressBar.value)
  const [info, setInfo] = useState("");
  const [images, setImages] = useState<any[]>();
  const [persist,setPersist]=useState<any[]>([])
  // const [processedImages, setProcessedImages] = useState([]);
  const files = useSelector((state: RootState) => state.payPop.files)

  let i = typeof window !== 'undefined' && sessionStorage.getItem("image") as any

  // console.log('filesfrom', dataURItoBlob(files[0]))
  console.log('filesfrom str',files)
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      document.title = "Ad Details";
    }
  })
  // useEffect(()=>{
  //   if(persist.length) dispatch(saveFiles(persist)) 
  // },[persist])
  useEffect(() => {
    let changedImage: any = []
    if (images?.length) {
      console.log(images.length, "array")
      let arr:any=[]
      for (var i: number = 0; i < images.length; i++) {
        // const reader = new FileReader();
        // reader.addEventListener("load", () => {
        //   changedImage.push(reader.result)
        // })
        // let f: Blob = images[i] as Blob
        // console.log(i)
        // reader.readAsDataURL(f as Blob);
}
values.image = changedImage
}
}, [images])


const previous = (e: Event) => {
  e.preventDefault()
  router.push('/propertyDetails')
}

const initialValues = {
  image: [],
  youtubeLink: "",
  propertyTitle: "",
  propertyPrice: "",
  label: "",
  description: ""
}

// const [file, setFile] = useState(null);
const { values, errors, touched, handleSubmit, handleChange } = useFormik({
  initialValues: initialValues,
  validationSchema: adDetailsSchema,
  onSubmit: (values, formikHelpers) => {
    // console.log("call Ad Details")
    console.log(values)
    if (page == 3) {
      dispatch(increment())
    }
    // let parsedImages=images?.map((i)=> {
    //   let r=new FileReader()
    //   let result=Array()
    //   function readerFn()
    //   {
    //     console.log('reder funciton ',r.result)
    //    r.readAsDataURL(i as Blob);
    //       result.push(r.result);
    //   }
    //     r.addEventListener('load',readerFn)
    //   return result;
    // })
    // console.log(parsedImages,'parsedImages')
    sessionStorage.setItem("page", "4")
    var details: any = JSON.parse(sessionStorage.getItem("details") ?? {} as any)
    // details.propertyImages=values.image
    details.youtubeLink = values.youtubeLink
    details.title = values.propertyTitle
    details.price = values.propertyPrice
    details.label = values.label
    details.description = values.description
    // details.propertyImage = values.image;

    console.log("images", values.image)

    sessionStorage.setItem("details", JSON.stringify(details))
    router.push('/otherDetails')
  }
})


return (
  <>
    <Layout topic="Ad Details" onSubmit={handleSubmit} page="3" back=": Property Details" previous={previous} info={info} next=" : Owner Details">
      <div className={styles.adDetailsMainWrapper}>
        {
          // files.length ? <div>
          //   <img src={files[0]}></img>
          //   <span>here {JSON.stringify(URL.revokeObjectURL(files[0]))}</span>
          // </div>:null
        }
        {/* <div className={styles.adDetailsLine}></div> */}

        <div className={styles.adDetailsUploads}>
          <label className={styles.topic}>
            Upload Images
            <a href='#' style={{ display: "flex" }}>
              <Icon icon="humbleicons:info-circle" width="20" height="20" className={styles.infoIcon} onClick={() => { dispatch(changeInfo("Upload Image")) }} />
            </a>
          </label>

          <div className={styles.image}>
            {/* <CustomUploadZone /> */}
            {/* <label>
              <UploadZone/>
              </label> */}
            {/* <UploadZone setImages={setImages} files={images} /> */}
            <CustomUploadZone setImages={setImages} files={images} />
          </div>
          <div>
            <small id="emailHelp" className="form-text text-muted">
              *The first image is thumbnail for this listing
            </small>
          </div>
          {errors.image && <span className={styles.error}>{errors.image}</span>}
        </div>

        <div className={styles.adDetailsYoutube} onClick={() => { setInfo("Youtube Video Link") }}>
          <label className={styles.topic}>
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
            <label className={styles.topic}>
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
            <label className={styles.topic}>
              Price
              <a href='#' style={{ display: "flex" }}><Icon icon="humbleicons:info-circle" width="20" height="20" className={styles.infoIcon} onClick={() => { dispatch(changeInfo("Price")) }} /></a>
            </label>

            {/* <CustomizableInputButtonsWithSelect
                type={"text"}
                placeholder={"Property Price"}
                value0={"Deals"}
                value1={"Label"}
                value2={"Rupees"}
                name1="propertyPrice"
                name2="label"
                onChange={handleChange}
              /> */}
            <div className={style.customizableInputButtonsWithSelect}>
              <input
                className={style.customizableInputPartOnly}
                type="text"
                placeholder="Property Price"
                name="propertyPrice"
                onChange={handleChange}
              ></input>
              <div className={style.partationDiv}></div>
              <div className={style.customizableSelectPartOnly}>
                <select
                  name="label"
                  onChange={handleChange}
                >

                  <option value="Label" selected disabled>
                    Label
                  </option>
                  <option value="onwards">Onwards</option>
                  <option value="per sqft">Per Sqft</option>
                  <option value="per month">Per Month</option>
                  <option value="per sqm">Per Sqm</option>
                </select>
              </div>
            </div>
            {(errors.propertyPrice || errors.label) && <span className={styles.doubleError}>
              <span className={styles.error}>{errors.propertyPrice}</span>
              {errors.label && <span className={styles.error}>{errors.label}</span>}
            </span>}

          </div>
        </div>

        <div className={styles.adDetailsFormDescription} onClick={() => { setInfo("Description") }}>
          <label className={styles.topic}>
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