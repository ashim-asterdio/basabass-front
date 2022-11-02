import type { NextPage } from 'next'
import style from '../styles/propertyDetails.module.css'
import { HiOutlineInformationCircle } from "react-icons/hi"
import AmenitiesCheckbox from '../components/ui components/customCheckbox'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import { propertyDetailsSchema } from '../components/validationSchema'

const propertyDetails: NextPage = () => {
    const amenities = ['Lawn', 'Drainage', 'Jacuzzi', 'Garage', 'Parking', 'Air Condition', 'Balcony', 'Deck', 'Fencing',
        'Garden', 'CCTV', 'Gym', 'Microwave', 'Modular Kitchen', 'Swimming Pool', 'TV Cable', 'Electricity Backup',
        'Intercom', 'Internet', 'Kids Playground', 'Lift', 'Maintainance', 'Security Staff', 'Store Room', 'Amenities'];



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
            window.location.href = '/adDetails';
        }
    })


    return (
        <>
            <Layout onSubmit={handleSubmit} topic="Property Details">
                <div className={style.propertydetails_container}>

                    <div className={style.propertydetails_components}>

                        <label> Location  <HiOutlineInformationCircle /></label>
                        <div className={style.all_input_fields}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <input className={style.input_only} type="text" placeholder="Ward Number"
                                    name='wardNumber'
                                    onChange={handleChange} />
                                {errors.wardNumber && <span className={style.error}>{errors.wardNumber}</span>}
                            </div>
                            <div className={style.dropdown_only}>
                                <select
                                    name="city"
                                    // value={values.city}
                                    id=""
                                    onChange={handleChange}
                                >
                                    <option value="Property City"
                                        selected
                                        hidden
                                        disabled>Property City</option>
                                </select>
                                {errors.city && <span className={style.error}>{errors.city}</span>}
                            </div>
                            <div >
                                <input className={style.input_only} type="text" placeholder="Property Area"
                                    name='propertyArea'
                                    onChange={handleChange}
                                // value={values.propertyArea}
                                />
                                {errors.propertyArea && <span className={style.error}>{errors.propertyArea}</span>}
                            </div>
                        </div>
                    </div>


                    <div className={style.propertydetails_components}>
                        <label> Area  Location  <HiOutlineInformationCircle /></label>
                        <div className={style.areaLocation}>
                            <div className={style.dropdown_only}>
                                <select
                                    name="areaMetric"
                                    id=""
                                    onChange={handleChange}
                                // value={values.areaMetric}
                                // onChange={handleChange("designation")}

                                >
                                    <option value=""
                                        selected
                                        hidden
                                        disabled>Select Area Metric</option>
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
                                        <select
                                            name="totalAreaUnit"
                                            // value={values.totalAreaUnits}
                                            id="aana"
                                            onChange={handleChange}
                                        // onChange={handleChange("designation")}

                                        >
                                            <option value="Aana"
                                                selected
                                                hidden
                                                disabled>Aana</option>
                                        </select>
                                    </div>
                                </div>
                                {(errors.totalArea || errors.totalAreaUnit) && <span className={style.doubleError}>
                                    <span className={style.error}>{errors.totalArea}</span>
                                    {errors.totalAreaUnit && <span className={style.error}>{errors.totalAreaUnit}</span>}
                                </span>}
                            </div>
                            <div className={style.input_dropdown}>
                                <div>
                                    <input className={style.input_with_dropdown} type="text"
                                        placeholder="Built Up Area(e.g. 0-1-2-4)"
                                        name='builtUpArea'
                                        onChange={handleChange} />
                                    <hr className={style.gapBtw} />
                                    <div className={style.dropdown_with_input}>
                                        <select
                                            name="builtUpAreaUnit"
                                            // value={values.builtUpAreaUnit}
                                            id="aana"
                                            onChange={handleChange}
                                        // onChange={handleChange("designation")}

                                        >
                                            <option value="Aana"
                                                selected
                                                hidden
                                                disabled>Aana</option>
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
                                //  value={values.propertyFace} 
                                />
                                {errors.propertyFace && <span className={style.error}>{errors.propertyFace}</span>}
                            </div>

                        </div>
                    </div>

                    <div className={style.propertydetails_components}>
                        <label> Road Location <HiOutlineInformationCircle /></label>
                        <div className={style.all_input_fields}>
                            <div className={style.dropdown_only}>
                                <select
                                    name="roadAreaMetric"
                                    // value={values.roadAreaMetric}
                                    id=""
                                    onChange={handleChange}
                                // onChange={handleChange("designation")}

                                >
                                    <option value=""
                                        selected
                                        hidden
                                        disabled>Select Area Metric</option>
                                </select>
                                {errors.roadAreaMetric && <span className={style.error}>{errors.roadAreaMetric}</span>}
                            </div>

                            <div>
                                <input className={style.input_only} type="text" placeholder="Road Acess(e.g. 14)"
                                    name='roadAccess' onChange={handleChange} ></input>
                                {errors.roadAccess && <span className={style.error}>{errors.roadAccess}</span>}
                            </div>
                            <div className={style.dropdown_only}>
                                <select
                                    name="roadType"
                                    // value={values.roadType}
                                    id=""
                                    onChange={handleChange}
                                // onChange={handleChange("designation")}

                                >
                                    <option value=""
                                        selected
                                        hidden
                                        disabled>Road Type</option>
                                </select>
                                {errors.roadType && <span className={style.error}>{errors.roadType}</span>}
                            </div>

                        </div>
                    </div>

                    <div className={style.propertydetails_components}>
                        <label> Building Details  <HiOutlineInformationCircle /></label>
                        <div className={style.all_input_fields}>
                            <div className={style.dropdown_only}>
                                <select
                                    name="buildYear"
                                    // value={values.buildYear}
                                    id=""
                                    onChange={handleChange}
                                // onChange={handleChange("designation")}

                                >
                                    <option value=""
                                        selected
                                        hidden
                                        disabled>Build Year</option>
                                </select>
                                {errors.buildYear && <span className={style.error}>{errors.buildYear}</span>}
                            </div>
                            <div className={style.dropdown_only}>
                                <select
                                    name="totalFloors"
                                    // value={values.totalFloors}
                                    id=""
                                    onChange={handleChange}
                                // onChange={handleChange("designation")}

                                >
                                    <option value=""
                                        selected
                                        hidden
                                        disabled>Total floors</option>
                                </select>
                                {errors.totalFloors && <span className={style.error}>{errors.totalFloors}</span>}
                            </div>
                            <div className={style.dropdown_only}>
                                <select
                                    name="furnishing"
                                    // value={values.furnishing}
                                    id=""
                                    onChange={handleChange}
                                // onChange={handleChange("designation")}

                                >
                                    <option value=""
                                        selected
                                        hidden
                                        disabled>Furnishing</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Partially">Partially</option>
                                </select>
                                {errors.furnishing && <span className={style.error}>{errors.furnishing}</span>}
                            </div>
                        </div>
                    </div>

                    <div className={style.propertydetails_components}>
                        <label> Muntiple Units  <HiOutlineInformationCircle /></label>
                        <div className={style.all_input_fields}>
                            <div className={style.dropdown_only}>
                                <select
                                    name="numberOFUnits"
                                    // value={values.numberOFUnits}
                                    id=""
                                    onChange={handleChange}
                                // onChange={handleChange("designation")}

                                >
                                    <option value=""
                                        selected
                                        hidden
                                        disabled>Number of Units</option>
                                </select>
                                {errors.numberOFUnits && <span className={style.error}>{errors.numberOFUnits}</span>}
                            </div>
                        </div>
                    </div>
                    <div className={style.propertydetails_components}>

                        <label> Total Rooms  <HiOutlineInformationCircle /> </label>
                        <div className={style.all_input_fields}>
                            <div>
                                <input className={style.input_only} type="text" placeholder="Total Bed Room"
                                    name='noOfBedroom'
                                    onChange={handleChange} />
                                {errors.noOfBedroom && <span className={style.error}>{errors.pnoOfBedroom}</span>}
                            </div>
                            <div>
                                <input className={style.input_only} type="text" placeholder="Total Bathroom"
                                    name='noOfBathroom'
                                    onChange={handleChange} />
                                {errors.noOfBathroom && <span className={style.error}>{errors.noOfBathroom}</span>}
                            </div>
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
                    <div className={style.property_details_components_aminities} >
                        <label className={style.label} htmlFor=""> Ameneties  <HiOutlineInformationCircle /></label>
                        <div className={style.aminities_button}>
                            {/* <AminitiesCheckbox value="Aminities" /> */}
                            {amenities.map((value, key) => <AmenitiesCheckbox value={value} onChange={handleChange} />)}
                        </div>
                        {errors.amenities && <span className={style.error}>{errors.amenities}</span>}
                    </div>
                </div>

            </Layout>
        </>
    )
}
export default propertyDetails