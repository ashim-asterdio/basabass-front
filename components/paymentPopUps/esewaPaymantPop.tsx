import style from "../../styles/esewaPaymentPop.module.css"
import { Icon } from "@iconify/react"
import Image from "next/image"
import eSewa from "../../Images/eSewa.svg"
import { useDispatch,useSelector } from "react-redux"
import { change, changePopUpPage } from "../../slices/payPopSlice"
import { RootState } from "../../store"

const EsewaPaymantPop = () => {

    const dispatch=useDispatch()
    const packageInfo=useSelector((state: RootState) => state.payPop.packageInfo)

    return (
        <div className={style.popContainer}>
            <Icon icon="radix-icons:cross-2" width="20" height="20" className={style.crossButton} onClick={() => { dispatch(change());dispatch(changePopUpPage(1))}} />

            <div className={style.topDiv}>
                <Icon icon="ic:round-chevron-left" width="24" height="24" onClick={() => {dispatch(changePopUpPage(1))}} />
                <div className={style.topic}>Billing Summary</div>
            </div>
            <div className={style.midDiv}>
                <div className={style.selectPlanDiv}>
                    <label className={style.labels}>Select Plan</label>
                    <div className={style.packageDetailsDiv}>
                        <p className={style.packageDetails}>{packageInfo.name}<b className={style.anotherPlan}>(Choose another plan)</b></p>
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

            <button className={style.confirmButton} onClick={()=>{dispatch(changePopUpPage(3))}} >Confirm</button>
            
        </div>
    )
}

export default EsewaPaymantPop