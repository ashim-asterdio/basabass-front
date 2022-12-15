import style from "../.../../../styles/customCheckbox.module.css"

const AmenitiesCheckbox=(props:any)=> {
  return (
    <>   
        <label className={style.amenitiesLabel}>
        <input type="checkbox" name="amenities" value={props.value} className={style.aminitiesCheckbox} onChange={props.onChange} />
            <div>
                <p>{props.holder}</p>
            </div>
        </label>
    </>
  )
}

export default AmenitiesCheckbox