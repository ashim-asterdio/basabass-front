import style from '../../../styles/basicDetail.module.css'

const SmallRadio = (props:any) => {
  return (
    <>
        <label className={style.radioDivSpan} >
            <label className={style.customRadio} onTouchStart={props.onTouchStart}>
                <input type="radio" name={props.name} 
                value={props.value} 
                className={style.radio}
                onChange={props.onChange} />
                <span className={style.checkmark}></span> 
            </label>
            <p>{props.value}</p>
        </label>
    </>
  )
}

export default SmallRadio