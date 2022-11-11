import type { NextPage } from 'next'
import style from '../styles/propertyDetails.module.css'
import { HiOutlineInformationCircle } from "react-icons/hi"
import AmenitiesCheckbox from '../components/ui components/customCheckbox'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import { propertyDetailsSchema } from '../components/validationSchema'
import {useRouter} from 'next/router'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '../store'
import { increment } from "../slices/progressBarSlice";
import { useState } from "react"


const PropertyDetails: NextPage = () => {
    const router=useRouter()
    const dispatch=useDispatch();
    const page=useSelector((state:RootState)=>state.progressBar.value)
    const [info, setInfo] = useState("");

    const previous=(e:Event)=>{
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
        buildYear: "",
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
            console.log(errors)
            console.log("call")
            console.log(values)
            if(page==2)
                dispatch(increment())
            router.push('/adDetails') ;
        }
    })


    return (
        <>
            <Layout onSubmit={handleSubmit} topic="Property Details" page="2" previous={previous} info={info}>
                <div className={style.propertydetails_container}>

                    <div className={style.locationComponent} onClick={()=>{setInfo("Location")}}>

                        <label> Location  <HiOutlineInformationCircle /></label>

                        <div className={style.all_input_fields}>
                            <div className={style.inputFeildRow}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <input className={style.input_only} type="text" placeholder="Ward Number"
                                        name='wardNumber'
                                        onChange={handleChange} />
                                    {errors.wardNumber && <span className={style.error}>{errors.wardNumber}</span>}
                                </div>

                                <div className={style.dropdown_only}>
                                    <select name="city" onChange={handleChange}>
                                        <option value=""selected hidden disabled>Property City</option>
                                        <option value="Lalitpur"> Lalitpur</option>
                                    </select>
                                    {errors.city && <span className={style.error}>{errors.city}</span>}
                                </div>
                            </div>
                            <div>
                                <input className={style.input_only} type="text" placeholder="Property Area"
                                    name='propertyArea'
                                    onChange={handleChange}
                                />
                                {errors.propertyArea && <span className={style.error}>{errors.propertyArea}</span>}
                            </div>
                        </div>
                    </div>

                    <div className={style.areaComponent} onClick={()=>{setInfo("Area Location")}}>
                        <label> Area  Location  <HiOutlineInformationCircle /></label>
                        <div className={style.areaLocation}>

                            <div className={style.inputFeildRow}>
                                <div className={style.dropdown_only}>
                                    <select
                                        name="areaMetric"onChange={handleChange} placeholder="Area Metric">
                                        <option value="A"selected disabled>Area Metric</option>
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
                                                <option value=""selected hidden disabled>Unit</option>
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
                                                <option value=""selected hidden disabled>Unit</option>
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
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <input className={style.input_only} type="text" placeholder="Property Face"
                                        name='propertyFace'
                                        onChange={handleChange}
                                    />
                                    {errors.propertyFace && <span className={style.error}>{errors.propertyFace}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.roadComponent} onClick={()=>{setInfo("Road Location")}}>
                        <label> Road Location <HiOutlineInformationCircle /></label>
                        <div className={style.all_input_fields}>
                            <div className={style.inputFeildRow}>
                                <div className={style.dropdown_only}>
                                    <select name="roadAreaMetric" onChange={handleChange}>
                                        <option value=""selected hidden disabled>Select Area Metric</option>
                                        <option value="Feet">Feet</option>
                                        <option value="Meter">Meter</option>
                                    </select>
                                    {errors.roadAreaMetric && <span className={style.error}>{errors.roadAreaMetric}</span>}
                                </div>

                                <div>
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

                    <div className={style.buldingDetailsComponent} onClick={()=>{setInfo("Bulding Details")}}>
                        <label> Building Details  <HiOutlineInformationCircle /></label>
                        <div className={style.all_input_fields}>
                            <div className={style.inputFeildRow}>
                                <div className={style.dropdown_only}>
                                    <select name="buildYear" onChange={handleChange}>
                                    <option value="" selected hidden disabled>Built Year</option>
                                    <option value="2079">2079</option>
                                    <option value="2078">2078</option>
                                    </select>
                                    {errors.buildYear && <span className={style.error}>{errors.buildYear}</span>}
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

                    <div className={style.multipleUnitsComponent} onClick={()=>{setInfo("Multiple Unit")}}>
                        <label> Muntiple Units  <HiOutlineInformationCircle /></label>
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


                    <div className={style.totalRoomsComponent} onClick={()=>{setInfo("Total Rooms")}}>

                        <label> Total Rooms  <HiOutlineInformationCircle /> </label>
                        <div className={style.all_input_fields}>
                            <div className={style.inputFeildRow}>
                                <div>
                                    <input className={style.input_only} type="text" placeholder="Total Bed Room"
                                        name='noOfBedroom'
                                        onChange={handleChange} />
                                    {errors.noOfBedroom && <span className={style.error}>{errors.noOfBedroom}</span>}
                                </div>
                                <div>
                                    <input className={style.input_only} type="text" placeholder="Total Bathroom"
                                        name='noOfBathroom'
                                        onChange={handleChange} />
                                    {errors.noOfBathroom && <span className={style.error}>{errors.noOfBathroom}</span>}
                                </div>
                            </div>

                            <div className={style.inputFeildRow}>
                                <div>
                                    <input className={style.input_only} type="text" placeholder="Total Kitchen"
                                        name='noOfKitchen'
                                        onChange={handleChange} />
                                    {errors.noOfKitchen && <span className={style.error}>{errors.noOfKitchen}</span>}
                                </div>
                                <div>
                                    <input className={style.input_only} type="text" placeholder="Total Living Room"
                                        name='noOfLivingroom'
                                        onChange={handleChange} />
                                    {errors.noOfLivingroom && <span className={style.error}>{errors.noOfLivingroom}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.amenitiesComponent} onClick={()=>{setInfo("Amenities")}}>
                        <label className={style.label} htmlFor=""> Ameneties  <HiOutlineInformationCircle /></label>
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