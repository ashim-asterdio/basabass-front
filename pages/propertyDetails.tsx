import type { NextPage } from 'next'
import style from '../styles/propertyDetails.module.css'
import { HiOutlineInformationCircle } from "react-icons/hi"
import AmenitiesCheckbox from '../components/ui components/customCheckbox'
import Layout from '../components/layout'
import { useFormik } from 'formik'
import { propertyDetailsSchema } from '../components/validationSchema'

const propertyDetails: NextPage = () => {
    const amenities=['Lawn','Drainage','Jacuzzi','Garage','Parking','Air Condition','Balcony','Deck','Fencing',
            'Garden','CCTV','Gym','Microwave','Modular Kitchen','Swimming Pool','TV Cable','Electricity Backup',
            'Intercom','Internet','Kids Playground','Lift','Maintainance','Security Staff','Store Room','Amenities']
    

    
    const initialValues:Object={    
        wardNumber:"",
        city:"",
        propertyArea:"",
        areaMetric:"",
        totalArea:"",
        measurementUnit:"",
        builtUpArea:"",
        propertyFace:"",
        roadAreaMetric:"",
        roadAccess:"",
        roadType:"",
        buildYear:"",
        furnishing:"",
        numberOFUnits:"",
        noOfBedroom:"",
        noOfBathroom:"",
        noOfKitchen:"",
        noOfLivingroom:""
    }        

    const buttonCilck=(e:Event)=>{
        e.preventDefault();
        var arr=document.getElementsByName("amenities");
        var arrChecked:any=[]
        var i:number;
        for (i=0;i<arr.length;i++)
        {
            if (arr[i].checked)
            {
                arrChecked.push(arr[i].value)
                document.getElementById("amenitiesError").style.visibility="hidden";
                document.getElementById("amenitiesError").innerHTML="Must select atleast one amenities";
            }
        }
        if (arrChecked.length<1)
        {
            document.getElementById("amenitiesError").innerHTML="Must select atleast one amenities";
            document.getElementById("amenitiesError").style.visibility="visible";
        }
            
        console.log(arrChecked)
    }

    const {values,errors,touched,handelSubmit,handelChange}=useFormik({
        initialValues:initialValues,
        validationSchema:propertyDetailsSchema,
        onSubmit:(values)=>{
            buttonCilck();
        }
    })
    return (
        <>
        <Layout >
            <div className={style.propertydetails_container}>
                {/* <div className={style.propertydetails_section_top}>
                    <h4>Property Details</h4>
                </div>
                <div className={style.propertydetails_line}></div>
                 */}

                <div className={style.propertydetails_components}>

                    <label> Location  </label>
                    <div className={style.all_input_fields}>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Ward Number" 
                            name='wardNumber' value={values.wardNumber} onChange={handelChange} />
                        </div>
                        <div className={style.dropdown_only}>
                            <select
                                name="city"
                                value={values.city}
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value="Property City"
                                    selected
                                    hidden
                                    disabled>Property City</option>
                            </select>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Property Area" name='propertyArea' value={values.propertyArea}></input>
                        </div>
                    </div>
                </div>


                <div className={style.propertydetails_components}>
                    <label> Area  Location  </label>
                    <div className={style.all_input_fields}>
                        <div className={style.dropdown_only}>
                            <select
                                name="areaMetric"
                                id=""
                                value={values.areaMetric}
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Select Area Metric</option>
                            </select>
                        </div>
                        
                        <div className={style.input_dropdown}>
                            <input className={style.input_with_dropdown} name="totalArea" value={values.totalArea} type="text" placeholder=" Total Area(e.g. 0-1-2-4)" ></input>
                           
                           <hr className={style.gapBtw}/>
                            <div className={style.dropdown_with_input}>
                                <select
                                    name="totalAreaUnit"
                                    value={values.totalAreaUnits}
                                    id="aana"
                                    // onChange={handleChange("designation")}
                                    required
                                >
                                    <option value="Aana"
                                        selected
                                        hidden
                                        disabled>Aana</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.input_dropdown}>
                            <input className={style.input_with_dropdown} type="text" placeholder="Built Up Area(e.g. 0-1-2-4)" name='builtUpArea' value={values.builtUpArea} ></input>
                            <hr className={style.gapBtw}/>
                            <div className={style.dropdown_with_input}>
                                <select
                                    name="builtUpAreaUnit"
                                    value={values.builtUpAreaUnit}
                                    id="aana"
                                    // onChange={handleChange("designation")}
                                    required
                                >
                                    <option value="Aana"
                                        selected
                                        hidden
                                        disabled>Aana</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Property Face" name='propertyFace' value={values.propertyFace} ></input>
                        </div>

                    </div>
                </div>

                <div className={style.propertydetails_components}>
                    <label> Road Location </label>
                    <div className={style.all_input_fields}>
                        <div className={style.dropdown_only}>
                            <select
                                name="roadAreaMetric"
                                value={values.roadAreaMetric}
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Select Area Metric</option>
                            </select>
                        </div>

                        <div>
                            <input className={style.input_only} type="text" placeholder="Road Acess(e.g. 14)" name='roadAccess' value={values.roadAccess} ></input>
                        </div>
                        <div className={style.dropdown_only}>
                            <select
                                name="roadType"
                                value={values.roadType}
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Road Type</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className={style.propertydetails_components}>
                    <label> Building Details  <HiOutlineInformationCircle /></label>
                    <div className={style.all_input_fields}>
                        <div className={style.dropdown_only}>
                            <select
                                name="buildYear"
                                value={values.buildYear}
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Build Year</option>
                            </select>
                        </div>
                        <div className={style.dropdown_only}>
                            <select
                                name="totalFloors"
                                value={values.totalFloors}
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Total floors</option>
                            </select>
                        </div>
                        <div className={style.dropdown_only}>
                            <select
                                name="furnishing"
                                value={values.furnishing}
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Furnishing</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Partially">Partially</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={style.propertydetails_components}>
                    <label> Muntiple Units  <HiOutlineInformationCircle /></label>
                    <div className={style.all_input_fields}>
                        <div className={style.dropdown_only}>
                            <select
                                name="numberOFUnits"
                                value={values.numberOFUnits}
                                id=""
                                // onChange={handleChange("designation")}
                                required
                            >
                                <option value=""
                                    selected
                                    hidden
                                    disabled>Number of Units</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.propertydetails_components}>

                    <label> Total Rooms  <HiOutlineInformationCircle /> </label>
                    <div className={style.all_input_fields}>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Total Bed Room" name='noOfBedroom' value={values.noOfBedroom} ></input>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Total Bathroom" name='noOfBathroom' value={values.noOfBathroom} ></input>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Total Kitchen" name='noOfKitchen' value={values.noOfKitchen} ></input>
                        </div>
                        <div>
                            <input className={style.input_only} type="text" placeholder="Total Living Room" name='noOfLivingroom' value={values.noOfLivingroom} ></input>
                        </div>
                        </div>
                        </div>
                <div  className={style.property_details_components_aminities} >
                     <label className={style.label} htmlFor=""> Ameneties  <HiOutlineInformationCircle /></label>
                    <div className={style.aminities_button}>
                        {/* <AminitiesCheckbox value="Aminities" /> */}
                        {amenities.map((value,key)=><AmenitiesCheckbox value={value} />)}
                    </div>
                    <span id="amenitiesError"></span>
                </div>
        </div>     
    </Layout>  
    </>
    )
}
export default propertyDetails