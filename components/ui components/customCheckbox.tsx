import style from "../.../../../styles/customCheckbox.module.css"
import styles from "../.../../../styles/basicDetail.module.css"
import Head from "next/head"

const AmenitiesCheckbox=(props:any)=> {
  return (
    <>   
        <label className={style.aminities}>
        <input type="checkbox" name="amenities" value={props.value} className={style.aminitiesCheckbox} onChange={props.onChange} />
            <div>
                <p>{props.value}</p>
            </div>
        </label>
    </>
  )
}

export default AmenitiesCheckbox