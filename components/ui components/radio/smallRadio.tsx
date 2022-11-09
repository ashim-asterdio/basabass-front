import style from '../../../styles/basicDetail.module.css'

const SmallRadio = (props:any) => {
  return (
    <>
        <span className={style.radioDivSpan} >
            <label className={style.customRadio} onTouchStart={props.onTouchStart}>
                <input type="radio" name={props.name} 
                value={props.value} 
                className={style.radio}
                onChange={props.onChange} />
                <span className={style.checkmark}></span> 
            </label>
            <p>{props.value}</p>
        </span>
    </>
  )
}

export default SmallRadio