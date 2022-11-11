import type { NextPage } from 'next'
import { useState } from "react"
import Head from 'next/head'
import style from '../styles/basicDetail.module.css'
import { HiOutlineInformationCircle } from "react-icons/hi"
import { BiHome } from "react-icons/bi"
import Image from 'next/image'
import commercial from "../Images/commercial.svg"
import agriculture from "../Images/agriculture.svg"
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
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: basicDetailsSchema,
    onSubmit: (values, formikHelpers) => {
      console.log("basic Details")
      console.log(values)
      if (page == 1)
        dispatch(increment())
      router.push('/propertyDetails');
    }
  })

    console.log(info)

  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
        <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
      </Head>

      <Layout onSubmit={handleSubmit} topic="Basic Details" page="1" previous={"none"} info={info}>
        <div className={style.adCategoryDiv} onClick={()=>{setInfo("Ad Category")}}>
          <p className={style.topic}>Ad Category <HiOutlineInformationCircle className={style.infoIcon} /></p>
          <div className={style.radioDiv} >
            <SmallRadio value="Sale" name="adCategory" onChange={handleChange} />
            <SmallRadio value="Rent" name="adCategory" onChange={handleChange}  />
            <SmallRadio value="Lease" name="adCategory" onChange={handleChange} />
            {errors.adCategory && <span className={style.error}>{errors.adCategory}</span>}
          </div>
        </div>

        <div className={style.propertyTypeDiv} onClick={()=>{setInfo("Property Type")}}>
          <p className={style.topic}>Property Type <HiOutlineInformationCircle className={style.infoIcon} /> </p>

          <div className={style.propertyTypeDivRow}>
            <RectangleRadio icon={<BiHome />} value="Residential" onChange={handleChange} />
            <RectangleRadio icon={<Image src={commercial} alt="image" />} value="Commercial" onChange={handleChange} />
            <RectangleRadio icon={<Image src={agriculture} alt="image" />} value="Agriculture" onChange={handleChange} />
            {errors.propertyType && <span className={style.error}>{errors.propertyType}</span>}
          </div>
        </div>

        <div className={style.propertyCategoryDiv} onClick={()=>{setInfo("Property Category")}}>
          <p className={style.topic}>Porperty Category<HiOutlineInformationCircle className={style.infoIcon} /></p>
          <div className={style.propertyCategoryRow} >
            <SquareRadio value="House" icon={<BiHome />} onChange={handleChange} />
            <SquareRadio value="Land" icon={<BiHome />} onChange={handleChange} />
            <SquareRadio value="Flat" icon={<BiHome />} onChange={handleChange}  />
            <SquareRadio value="Apartment" icon={<BiHome />} onChange={handleChange} />
            <SquareRadio value="Buginess" icon={<BiHome />} onChange={handleChange} />
            <SquareRadio value="Office" icon={<BiHome />} onChange={handleChange} />
          </div>
          {errors.propertyCategory && <span className={style.error}>{errors.propertyCategory}</span>}
        </div>
      </Layout>
    </>
  )
}

export default BasicDetail