import style from "../styles/digitalPaymentPop.module.css"
import { Icon } from "@iconify/react"
import Image from "next/image"
import eSewa from "../Images/eSewa.svg"

const DigitalPaymantPop = () => {
    return (
        <div className={style.popContainer}>
            <Icon icon="radix-icons:cross-2" width="20" height="20" className={style.crossButton} />

            <div className={style.topDiv}>
                <Icon icon="ic:round-chevron-left" width="24" height="24" />
                <div className={style.topic}>Billing Summary</div>
            </div>
            <div className={style.midDiv}>
                <div className={style.selectPlanDiv}>
                    <label className={style.labels}>Select Plan</label>
                    <div className={style.packageDetailsDiv}>
                        <p className={style.packageDetails}>Silver<b className={style.anotherPlan}>(Choose another plan)</b></p>
                        <p className={style.packagePrice}>Rs. 1,000</p>
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
                <p className={style.totalPayAmount}>Rs. 1,000</p>
            </div>

            <button className={style.confirmButton}>Confirm</button>
            
        </div>
    )
}

export default DigitalPaymantPop