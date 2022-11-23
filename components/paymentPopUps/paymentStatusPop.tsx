import { Icon } from "@iconify/react"
import style from "../../styles/paymentStatusPop.module.css"
import Image from "next/image"
import PaymentStatusBg from "../../Images/PaymentStatusBg.svg"
import whiteTickMark from "../../Images/whiteTickMark.svg"
import { useDispatch } from "react-redux"
import { change, changePopUpPage } from "../../slices/payPopSlice"


const PaymentStatusPop=()=> {

  const dispatch=useDispatch()

  return (
    <div className={style.mainWrapper}>
        <Icon icon="radix-icons:cross-2" width="20" height="20" className={style.crossButton} onClick={() => { dispatch(change());dispatch(changePopUpPage(1))}} />
        <div className={style.iconDiv}>
            <Image src={PaymentStatusBg} alt="no image" />
            <div className={style.tickMark}><Image src={whiteTickMark} alt="no image" /></div>
        </div>
        <div className={style.botDiv}>
            <div className={style.bigFont}>Payment Sucessfull</div>
            <div className={style.smallFont}>Your payment has been completed</div>
        </div>
    </div>
  )
}

export default PaymentStatusPop