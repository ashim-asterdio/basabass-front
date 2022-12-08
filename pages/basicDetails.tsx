import type { NextPage } from 'next'
import { useState, useEffect, useRef } from "react"
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
    country: 'Nepal',
    // availability:'available',
    //status:active,
    kitchen: "2",
    bedroom: "2",
    bathroom: "2",
    parking: "2",
    livingRoom: "2",
    // propertyImage:[]
  }

  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      document.title = "Basic Details";
      // sessionStorage.setItem("details",JSON.stringify(details))
      sessionStorage.setItem("page", "1")
    }
  })

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: basicDetailsSchema,
    onSubmit: (values, formikHelpers) => {
      sessionStorage.setItem("page", "2")
      console.log("basic Details")
      console.log(values)
      if (page == 1) {
        dispatch(increment())
      }
      details.for = values.adCategory;
      details.type = values.propertyType;
      details.category = values.propertyCategory;
      console.log(details)
      sessionStorage.setItem("details", JSON.stringify(details))
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
              <SmallRadio value="sale" name="adCategory" onChange={handleChange} />
              <SmallRadio value="rent" name="adCategory" onChange={handleChange} />
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
              <RectangleRadio icon={<Icon icon="bx:home" width="20" height="20" inline={true} />} value="residential" onChange={handleChange} />
              <RectangleRadio icon={<Icon icon="icon-park-outline:building-two" width="16" height="20" inline={true} />}
                value="commercial" onChange={handleChange} />
              <RectangleRadio icon={<Icon icon="icon-park-outline:landscape" width="16" height="18" inline={true} />}
                value="agricultural" onChange={handleChange} />
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
              <SquareRadio value="house" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="land" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="flat" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="apartment" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="business" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
              <SquareRadio value="office" icon={<Icon icon="bx:home" width="18" height="18" inline={true} />} onChange={handleChange} />
            </div>
            {errors.propertyCategory && <span className={style.error}>{errors.propertyCategory}</span>}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BasicDetail