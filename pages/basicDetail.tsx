import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import style from '../styles/basicDetail.module.css'
import {HiOutlineInformationCircle} from "react-icons/hi"
import {BiHome} from "react-icons/bi"
import Image from 'next/image'
import commercial from "../Images/commercial.svg"
import agriculture from "../Images/agriculture.svg"
import SmallRadio from '../components/ui components/radio/smallRadio'
import RectangleRadio from '../components/ui components/radio/rectangleRadio'
import SquareRadio from '../components/ui components/radio/squareRadio'
import { boolean } from 'yup/lib/locale'
import Layout from '../components/Layout'

const BasicDetail:NextPage =(e)=> {
const [aCategory,setCategory]=useState(
  [{key:"adCategory",value:""},
  {key:"propertyType",value:""},
  {key:"propertyCategory",value:""}]
);

const buttonClick=(e:Event)=>{
  e.preventDefault();
  var arr1=document.getElementsByName('adCategory')
  var arr2=document.getElementsByName('propertyType')
  var arr3=document.getElementsByName('propertyCategory')
  var i:number;
  var checkFlag:boolean=true;
  for(i = 0; i < arr1.length; i++) {
    if(arr1[i].checked)
    {
      document.getElementById("adCategoryError").innerHTML="" ;
      checkFlag=true;
      break;
    }
    else
    {
      document.getElementById("adCategoryError").innerHTML="Must select atleast one option" ;
      checkFlag=false;
    }
    
  }
  for(i = 0; i < arr2.length; i++) {
    if(arr2[i].checked){
      document.getElementById("propertyTypeError").innerHTML="" ;
      if (checkFlag===true) checkFlag=true;
      break;
    }
    else
    {
      document.getElementById("propertyTypeError").innerHTML="Must select atleast one option" ;
      checkFlag=false;
    }
  }
  for(i = 0; i < arr3.length; i++) {
    if(arr3[i].checked){
      document.getElementById("propertyCategoryError").innerHTML="" ;
      if (checkFlag===true) checkFlag=true;
      break;
    }
    else
    {
      document.getElementById("propertyCategoryError").innerHTML="Must select atleast one option" ;
      checkFlag=false;
    }
  }
  if(checkFlag)  window.location.href = '/propertyDetails';
  console.log(arr1)
}
  return (
  <>
    <Head>
      {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
      <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
      <style>
        {/* @import url('http://fonts.cdnfonts.com/css/product-sans'); */}
      </style>
      </Head>
  
      <Layout onSubmit={buttonClick} topic="Basic Details">
        <div className={style.adCategoryDiv}>
          <p className={style.topic}>Ad Category <HiOutlineInformationCircle className={style.infoIcon} /></p>
          <div className={style.radioDiv} >
            <SmallRadio value="Sale" />
            <SmallRadio value="Rent" />
            <SmallRadio value="Lease" />
            <span id='adCategoryError'></span>
          </div>
      </div>

      <div className={style.propertyTypeDiv}>
      <p className={style.topic}>Property Type <HiOutlineInformationCircle className={style.infoIcon} /> </p>
                      
          <div className={style.propertyTypeDivRow}>
            <RectangleRadio icon={<BiHome/>} value="Residential" />
            <RectangleRadio icon={<Image src={commercial} alt="image" />} value="Commercial" />
            <RectangleRadio icon={<Image src={agriculture} alt="image" />} value="Agriculture" />
            <span id='propertyTypeError'></span>
          </div>
      </div>

      <div className={style.propertyCategoryDiv}>
        <p className={style.topic}>Porperty Category<HiOutlineInformationCircle className={style.infoIcon} /></p>
        <div className={style.propertyCategoryRow}>
          <SquareRadio value="House" icon={<BiHome/>} />
          <SquareRadio value="Land" icon={<BiHome/>} />
          <SquareRadio value="Flat" icon={<BiHome/>} />
          <SquareRadio value="Apartment" icon={<BiHome/>} />
          <SquareRadio value="Buginess" icon={<BiHome/>} />
          <SquareRadio value="Office" icon={<BiHome/>} />
          </div>
          <span id='propertyCategoryError'></span>
        </div>
      </Layout>
    </>
  )
}

export default BasicDetail