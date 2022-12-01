import type { NextPage } from 'next'
import { useState, useEffect,useRef } from "react"
import Head from 'next/head'
import style from '../styles/basicDetail.module.css'
import SmallRadio from '../components/ui components/radio/smallRadio'
import RectangleRadio from '../components/ui components/radio/rectangleRadio'
import SquareRadio from '../components/ui components/radio/squareRadio'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import { basicDetailsSchema } from '../components/validationSchema'
import { increment } from '../slices/progressBarSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { useRouter } from "next/router"
import { Icon } from '@iconify/react';
import { changeInfo } from '../slices/payPopSlice'


const BasicDetail: NextPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.progressBar.value);
  const router = useRouter();
  const [info, setInfo] = useState("");


  const initialValues = {
    adCategory: "",
    propertyType: "",
    propertyCategory: ""
  }

  const details: any = {
    for: "",
    type: "",
    category: "",
    wardNumber: "",
    // streetName: "",
    city: "",
    locality: "",
    areaMetric: '',
    totalArea: "",
    buildUpArea: "",
    facing: "",
    unit: "",
    access: "",
    roadType: "",
    buildYear: '',
    totalFloors: '',
    furnishing: '',
    amenities: [],
    youtubeLink: '',
    title: '',
    description: '',
    price: '',
    ownerId: '',
    name: '',
    phone: '',
    email: '',
    // country:USA
    // availability:"",
    //status:active
    kitchen: "",
    bedroom: "",
    bathroom: "",
    // parking: "",
    livingRoom: ""
  }

  const firstRender=useRef(true)
  useEffect(()=>{
    if (firstRender.current){
    document.title = "Basic Details";
    // sessionStorage.setItem("details",JSON.stringify(details))
    sessionStorage.setItem("page","1")
    }
  })

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: basicDetailsSchema,
    onSubmit: (values, formikHelpers) => {
      console.log("basic Details")
      console.log(values)
      if (page == 1){
        dispatch(increment())
        sessionStorage.setItem("page","2")
      } 
      details.for=values.adCategory;
      details.type=values.propertyType;
      details.category=values.propertyCategory;
      console.log(details)
      sessionStorage.setItem("details",JSON.stringify(details))
      router.push('/propertyDetails');
    }
  })




  return (
    <>
      <Layout onSubmit={handleSubmit} topic="Basic Details" page="1" back="none" previous="none" info={info} next=" :Property Detail">
        <div className={style.basicDetailWrapper}>
          <div className={style.adCategoryDiv} >
            <p className={style.topic}>Ad Category
              <a style={{ display: "flex" }} href='#' onClick={() => { dispatch(changeInfo("Ad Category")) }}>
                <Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} />
              </a>
            </p>
            <div className={style.radioDiv}>
              <SmallRadio value="Sale" name="adCategory" onChange={handleChange} />
              <SmallRadio value="Rent" name="adCategory" onChange={handleChange} />
              {/* <SmallRadio value="Lease" name="adCategory" onChange={handleChange} /> */}
            </div>
            {errors.adCategory && <span className={style.error}>{errors.adCategory}</span>}
          </div>

          <div className={style.propertyTypeDiv} >
            <p className={style.topic}>
              Property Type
              <a style={{ display: "flex" }} href='#' onClick={() => { dispatch(changeInfo("Property Type")) }} >
                <Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} />
              </a>
            </p>

            <div className={style.propertyTypeDivRow}>
              <RectangleRadio icon={<Icon icon="bx:home" width="20" height="20" inline={true} />} value="Residential" onChange={handleChange} />
              <RectangleRadio icon={<Icon icon="icon-park-outline:building-two" width="16" height="20" inline={true} />}
                value="Commercial" onChange={handleChange} />
              <RectangleRadio icon={<Icon icon="icon-park-outline:landscape" width="16" height="18" inline={true} />}
                value="Agricultural" onChange={handleChange} />
            </div>
            {errors.propertyType && <span className={style.error}>{errors.propertyType}</span>}
          </div>

          <div className={style.propertyCategoryDiv} >
            <p className={style.topic}>Property Category
              <a style={{ display: "flex" }} href='#' onClick={() => { dispatch(changeInfo("Property Category")) }}>
                <Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} />
              </a>
            </p>
            <div className={style.propertyCategoryRow} >
              <SquareRadio value="House" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="Land" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="Flat" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="Apartment" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="Business" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="Office" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
            </div>
            {errors.propertyCategory && <span className={style.error}>{errors.propertyCategory}</span>}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BasicDetail