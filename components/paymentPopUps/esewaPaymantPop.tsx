import style from "../../styles/esewaPaymentPop.module.css"
import { Icon } from "@iconify/react"
import Image from "next/image"
import eSewa from "../../Images/eSewa.svg"
import { useDispatch,useSelector } from "react-redux"
import { change, changePaymentStatus, changepopUpBg, changePopUpPage } from "../../slices/payPopSlice"
import { RootState } from "../../store"

const EsewaPaymantPop = () => {

    const dispatch=useDispatch()
    const packageInfo=useSelector((state: RootState) => state.payPop.packageInfo)
    const confirm=()=>{
        dispatch(changePopUpPage(3))
        dispatch(changePaymentStatus(true))
    }

    return (
        <div className={style.popContainer}>
            <Icon icon="radix-icons:cross-2" width="24" height="24" className={style.crossButton} onClick={() => { dispatch(change());dispatch(changePopUpPage(1))}} />

            <div className={style.topDiv}>
                <Icon icon="ph:caret-left-bold" width="24" height="24" inline={true} className={style.backIcon} onClick={() => {dispatch(changePopUpPage(1))}} />
                <div className={style.topic}>Billing Summary</div>
            </div>
            <div className={style.midDiv}>
                <div className={style.selectPlanDiv}>
                    <label className={style.labels}>Selected Plan</label>
                    <div className={style.packageDetailsDiv}>
                        <p className={style.packageDetails}>{packageInfo.name} <b className={style.anotherPlan}>(Choose another plan)</b></p>
                        <p className={style.packagePrice}>Rs. {packageInfo.price}</p>
                    </div>
                </div>
                <div className={style.paymentDiv}>
                    <label className={style.labels}>Payment</label>
                    <div className={style.paymentOption}>
                        <div className={style.imageDiv}>
                            <Image src={eSewa} alt="image not found" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.totalPayDiv}>
                <p className={style.totalPay}>Total Pay</p>
                <p className={style.totalPayAmount}>Rs. {packageInfo.price}</p>
            </div>

            <button className={style.confirmButton} onClick={confirm} >Confirm</button>
            
        </div>
    )
}

export default EsewaPaymantPop