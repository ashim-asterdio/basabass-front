import { Icon } from "@iconify/react"
import style from "../../styles/paymentStatusPop.module.css"
import Image from "next/image"
import PaymentSuccessBg from "../../Images/paymentSuccessBg.svg"
import PaymentFaildBg from "../../Images/paymentFaildBg.svg"
import whiteTickMark from "../../Images/whiteTickMark.svg"
import { useDispatch, useSelector } from "react-redux"
import { change, changepopUpBg, changePopUpPage, changeRegistrationStatus } from "../../slices/payPopSlice"
import { RootState } from "../../store"


const PaymentStatusPop=()=> {

  const dispatch=useDispatch()
  const status=useSelector((state:RootState)=>state.payPop.value)
  const payment=useSelector((state:RootState)=>state.payPop.paymentStatus)

  const done=()=>{
    dispatch(change());
    dispatch(changePopUpPage(1))
    dispatch(changepopUpBg())
    dispatch(changeRegistrationStatus(true))
  }
  return (
    <>
    {
      (payment)?
      <div className={style.mainWrapper} style={{display:status?"flex":"none"}} >
        <Icon icon="radix-icons:cross-2" width="20" height="20" className={style.crossButton} onClick={() => { done()}} />
        <div className={style.iconDiv}>
            <Image src={PaymentSuccessBg} alt="no image" />
            <div className={style.tickMark}><Image src={whiteTickMark} alt="no image" /></div>
        </div>
        <div className={style.botDiv}>
            <div className={style.bigFont}>Payment Sucessfull</div>
            <div className={style.smallFont}>Your payment has been completed</div>
        </div>
    </div>
    :
    <div className={style.mainWrapper} style={{display:status?"flex":"none"}} >
        <Icon icon="radix-icons:cross-2" width="20" height="20" className={style.crossButton} onClick={() => { done()}} />      
        <div className={style.iconDiv}>
        <Image src={PaymentFaildBg} alt="no image" />
        <Icon icon="ic:round-close" color="white" width="50" height="50" className={style.crossMark} />
        </div>

        <div className={style.botDiv}>
            <div className={style.bigFont}>Payment Failed</div>
            <div className={style.smallFont}>Your payment was unsucessful</div>
        </div>
    </div>
    }
    </>
    
  )
}

export default PaymentStatusPop