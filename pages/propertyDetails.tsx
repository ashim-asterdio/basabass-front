import type { NextPage } from 'next'
import style from '../styles/propertyDetails.module.css'
// import DigitalPaymentPop from '../components/digitalPaymantPop'
import AmenitiesCheckbox from '../components/ui components/customCheckbox'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import { propertyDetailsSchema } from '../components/validationSchema'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { increment } from "../slices/progressBarSlice";
import { useState, useEffect,useRef } from "react"
import { changeInfo } from '../slices/payPopSlice'
import { Icon } from '@iconify/react'


const PropertyDetails: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const page = useSelector((state: RootState) => state.progressBar.value)
    const [info, setInfo] = useState("");
    const firstRender=useRef(true)
    useEffect(()=>{
      if (firstRender.current){
      document.title = "Property Details";
      }
    })

    // useEffect(() => {
    //     if (page==1)
    //         router.push('/basicDetails')
    //   })

    const previous = (e: Event) => {
        e.preventDefault()
        router.push('/basicDetails')
    }

    const amenities = ['Lawn', 'Drainage', 'Jacuzzi', 'Garage', 'Parking', 'Air Condition', 'Balcony', 'Deck', 'Fencing',
        'Garden', 'CCTV', 'Gym', 'Microwave', 'Modular Kitchen', 'Swimming Pool', 'TV Cable', 'Electricity Backup',
        'Intercom', 'Internet', 'Kids Playground', 'Lift', 'Maintainance', 'Security Staff', 'Store Room'];

    const initialValues = {
        wardNumber: "",
        city: "",
        propertyArea: "",
        areaMetric: "",
        totalArea: "",
        totalAreaUnit: "",
        builtUpArea: "",
        builtUpAreaUnit: "",
        propertyFace: "",
        roadAreaMetric: "",
        roadAccess: "",
        roadType: "",
        builtYear: "",
        totalFloors: "",
        furnishing: "",
        numberOFUnits: "",
        noOfBedroom: "",
        noOfBathroom: "",
        noOfKitchen: "",
        noOfLivingroom: "",
        amenities: []
    }

    const { values, errors, touched, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: propertyDetailsSchema,
        onSubmit(values, formikHelpers) {
            // console.log(errors)
            // console.log("call")
            // console.log(values)
            if (page == 2)
            {
                dispatch(increment())
            }  
            var details:any=JSON.parse(sessionStorage.getItem("details")??' ')
            console.log(details)
            details.wardNumber=values.wardNumber;
            details.city=values.city;
            details.locality=values.propertyArea
            details.areaMetric=values.areaMetric
            details.totalArea=values.totalArea
            details.areaMetric=values.totalAreaUnit
            details.buildUpArea=values.builtUpArea
            details.areaMetric=values.builtUpAreaUnit
            details.facing=values.propertyFace
            details.unit=values.roadAreaMetric
            details.access=values.roadAccess
            details.roadType=values.roadType
            details.buildYear=values.builtYear
            details.totalFloors=values.totalFloors
            details.furnishing=values.furnishing
            details.multipleUnit=values.numberOFUnits
            details.bedroom=values.noOfBedroom
            details.bathroom=values.noOfBathroom
            details.kitchen=values.noOfKitchen
            details.livingRoom=values.noOfLivingroom
            details.amenities=values.amenities

            sessionStorage.setItem("page","3")
            sessionStorage.setItem("details",JSON.stringify(details))

            router.push('/adDetails');
        }
    })


    return (
        <>
            {/* <DigitalPaymentPop /> */}
            <Layout onSubmit={handleSubmit} topic="Property Details" page="2" back=": Basic Details" previous={previous} info={info} next=" : Ad Details">
                <div className={style.propertydetails_container}>

                    <div className={style.locationComponent}>

                        <label>
                            Location
                            <a href='#' style={{display:"flex"}} onClick={() => { dispatch(changeInfo("Location")) }}>
                                <Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} />
                            </a>
                        </label>

                        <div className={style.all_input_fields}>
                            <div className={style.inputFeildRow}>
                                <div className={style.feildDiv}>
                                    <input className={style.input_only} type="text" placeholder="Ward Number"
                                        name='wardNumber'
                                        onChange={handleChange} />
                                    {errors.wardNumber && <span className={style.error}>{errors.wardNumber}</span>}
                                </div>

                                <div className={style.dropdown_only}>
                                    <select name="city" onChange={handleChange}>
                                        <option value="" selected hidden disabled>Property City</option>
                                        <option value="Lalitpur"> Lalitpur</option>
                                    </select>
                                    {errors.city && <span className={style.error}>{errors.city}</span>}
                                </div>
                            </div>
                            <div className={style.feildDiv}>
                                <input className={style.input_only} type="text" placeholder="Property Area"
                                    name='propertyArea'
                                    onChange={handleChange}
                                />
                                {errors.propertyArea && <span className={style.error}>{errors.propertyArea}</span>}
                            </div>
                        </div>
                    </div>

                    <div className={style.areaComponent}>
                        <label>
                            Area 
                            <a href='#' style={{display:"flex"}}><Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => { dispatch(changeInfo("Area Location")) }} /></a>
                        </label>
                        <div className={style.areaLocation}>

                            <div className={style.inputFeildRow}>
                                <div className={style.dropdown_only}>
                                    <select
                                        name="areaMetric" onChange={handleChange} placeholder="Select Area Metric">
                                        <option value="A" selected disabled>Select Area Metric</option>
                                        <option value="Aana">Aana</option>
                                    </select>
                                    {errors.areaMetric && <span className={style.error}>{errors.areaMetric}</span>}
                                </div>

                                <div className={style.input_dropdown}>
                                    <div>
                                        <input className={style.input_with_dropdown} name="totalArea"
                                            // value={values.totalArea} 
                                            type="text" placeholder=" Total Area(e.g. 0-1-2-4)"
                                            onChange={handleChange} />

                                        <hr className={style.gapBtw} />
                                        <div className={style.dropdown_with_input}>
                                            <select name="totalAreaUnit" onChange={handleChange}>
                                                <option value="" selected hidden disabled>Unit</option>
                                                <option value="Aana">Aana</option>
                                                <option value="Dhur">Dhur</option>
                                            </select>
                                        </div>
                                    </div>
                                    {(errors.totalArea || errors.totalAreaUnit) && <span className={style.doubleError}>
                                        <span className={style.error}>{errors.totalArea}</span>
                                        {errors.totalAreaUnit && <span className={style.error}>{errors.totalAreaUnit}</span>}
                                    </span>}
                                </div>
                            </div>

                            <div className={style.inputFeildRow}>
                                <div className={style.input_dropdown}>
                                    <div>
                                        <input className={style.input_with_dropdown} type="text"
                                            placeholder="Built Up Area(e.g. 0-1-2-4)"
                                            name='builtUpArea'
                                            onChange={handleChange} />
                                        <hr className={style.gapBtw} />
                                        <div className={style.dropdown_with_input}>
                                            <select name="builtUpAreaUnit" onChange={handleChange}>
                                                <option value="" selected hidden disabled>Unit</option>
                                                <option value="Aana">Aana</option>
                                                <option value="Dhur">Dhur</option>
                                            </select>
                                        </div>
                                    </div>
                                    {(errors.builtUpArea || errors.builtUpAreaUnit) && <span className={style.doubleError}>
                                        <span className={style.error}>{errors.builtUpArea}</span>
                                        {errors.builtUpAreaUnit && <span className={style.error}>{errors.builtUpAreaUnit}</span>}
                                    </span>}
                                </div>
                                <div className={style.feildDiv}>
                                    <input className={style.input_only} type="text" placeholder="Property Face"
                                        name='propertyFace'
                                        onChange={handleChange}
                                    />
                                    {errors.propertyFace && <span className={style.error}>{errors.propertyFace}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.roadComponent}>
                        <label>
                            Road
                            <a href='#' style={{display:"flex"}}><Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => { dispatch(changeInfo("Road Location")) }} /></a>
                        </label>
                        <div className={style.all_input_fields}>
                            <div className={style.inputFeildRow}>
                                <div className={style.dropdown_only}>
                                    <select name="roadAreaMetric" onChange={handleChange}>
                                        <option value="" selected hidden disabled>Select Area Metric</option>
                                        <option value="Feet">Feet</option>
                                        <option value="Meter">Meter</option>
                                    </select>
                                    {errors.roadAreaMetric && <span className={style.error}>{errors.roadAreaMetric}</span>}
                                </div>

                                <div className={style.feildDiv}>
                                    <input className={style.input_only} type="text" placeholder="Road Acess(e.g. 14)"
                                        name='roadAccess' onChange={handleChange} ></input>
                                    {errors.roadAccess && <span className={style.error}>{errors.roadAccess}</span>}
                                </div>
                            </div>
                            <div className={style.dropdown_only}>
                                <select name="roadType" onChange={handleChange}>
                                    <option value="" selected hidden disabled>Road Type</option>
                                    <option value="One Way">One Way</option>
                                    <option value="Two Way">Two Way</option>
                                </select>
                                {errors.roadType && <span className={style.error}>{errors.roadType}</span>}
                            </div>

                        </div>
                    </div>

                    <div className={style.buldingDetailsComponent}>
                        <label>
                            Building Details
                            <a href='#' style={{display:"flex"}}><Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => { dispatch(changeInfo("Bulding Details")) }} /></a>
                        </label>
                        <div className={style.all_input_fields}>
                            <div className={style.inputFeildRow}>
                                <div className={style.dropdown_only}>
                                    <select name="builtYear" onChange={handleChange}>
                                        <option value="" selected hidden disabled>Built Year</option>
                                        <option value="2079">2079</option>
                                        <option value="2078">2078</option>
                                    </select>
                                    {errors.builtYear && <span className={style.error}>{errors.builtYear}</span>}
                                </div>
                                <div className={style.dropdown_only}>
                                    <select name="totalFloors" onChange={handleChange}>
                                        <option value="" selected hidden disabled>Total Floors</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    {errors.totalFloors && <span className={style.error}>{errors.totalFloors}</span>}
                                </div>
                            </div>
                            <div className={style.dropdown_only}>
                                <select name="furnishing" onChange={handleChange} >
                                    <option value="" selected hidden disabled>Furnishing</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Partially">Partially</option>
                                </select>
                                {errors.furnishing && <span className={style.error}>{errors.furnishing}</span>}
                            </div>
                        </div>
                    </div>

                    <div className={style.multipleUnitsComponent}>
                        <label>
                            Muntiple Units
                            <a href='#' style={{display:"flex"}}><Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => { dispatch(changeInfo("Multiple Unit")) }} /></a>
                        </label>
                        <div className={style.multipleUnits}>
                            <div className={style.dropdown_only}>
                                <select name="numberOFUnits" onChange={handleChange}>
                                     <option value="" selected hidden disabled>Number Of Units</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                {errors.numberOFUnits && <span className={style.error}>{errors.numberOFUnits}</span>}
                            </div>
                        </div>
                    </div>


                    <div className={style.totalRoomsComponent}>

                        <label>
                            Total Rooms
                            <a href='#' style={{display:"flex"}}><Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => { dispatch(changeInfo("Total Rooms")) }} /></a>
                        </label>
                        <div className={style.all_input_fields}>
                            <div className={style.inputFeildRow}>
                                <div className={style.feildDiv}>
                                    <input className={style.input_only} type="text" placeholder="Total Bed Room"
                                        name='noOfBedroom'
                                        onChange={handleChange} />
                                    {errors.noOfBedroom && <span className={style.error}>{errors.noOfBedroom}</span>}
                                </div>
                                <div className={style.feildDiv}>
                                    <input className={style.input_only} type="text" placeholder="Total Bathroom"
                                        name='noOfBathroom'
                                        onChange={handleChange} />
                                    {errors.noOfBathroom && <span className={style.error}>{errors.noOfBathroom}</span>}
                                </div>
                            </div>

                            <div className={style.inputFeildRow}>
                                <div className={style.feildDiv}>
                                    <input className={style.input_only} type="text" placeholder="Total Kitchen"
                                        name='noOfKitchen'
                                        onChange={handleChange} />
                                    {errors.noOfKitchen && <span className={style.error}>{errors.noOfKitchen}</span>}
                                </div>
                                <div className={style.feildDiv}>
                                    <input className={style.input_only} type="text" placeholder="Total Living Room"
                                        name='noOfLivingroom'
                                        onChange={handleChange} />
                                    {errors.noOfLivingroom && <span className={style.error}>{errors.noOfLivingroom}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.amenitiesComponent}>
                        <label className={style.label} htmlFor="">
                            Ameneties
                            <a href='#' style={{display:"flex"}}><Icon icon="humbleicons:info-circle" width="20" height="20" className={style.infoIcon} onClick={() => {dispatch(changeInfo("Amenitites")) }} /></a>
                        </label>
                        <div className={style.aminitiesDiv}>
                            {/* <AminitiesCheckbox value="Aminities" /> */}
                            {amenities.map((value, key) => <AmenitiesCheckbox value={value} onChange={handleChange} key={key} />)}
                        </div>
                        {errors.amenities && <span className={style.error}>{errors.amenities}</span>}
                    </div>
                </div>

            </Layout>
        </>
    )
}
export default PropertyDetails