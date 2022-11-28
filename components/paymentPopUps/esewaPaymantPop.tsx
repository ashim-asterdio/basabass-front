import style from "../../styles/esewaPaymentPop.module.css"
import { Icon } from "@iconify/react"
import Image from "next/image"
import eSewa from "../../Images/eSewa.svg"
import { useDispatch, useSelector } from "react-redux"
import { change, changePaymentStatus, changepopUpBg, changePopUpPage } from "../../slices/payPopSlice"
import { RootState } from "../../store"
import axios from "axios"
import { Interface } from "readline/promises"

const EsewaPaymantPop = () => {

    const dispatch = useDispatch()
    const packageInfo = useSelector((state: RootState) => state.payPop.packageInfo)
    const confirm = () => {

        try {
            var path = "https://uat.esewa.com.np/epay/main";
            var params: any = {
                amt: packageInfo.price,
                psc: 0,
                pdc: 0,
                txAmt: 0,
                tAmt: packageInfo.price,
                pid: "637f1d5ccee0227628670d7",
                scd: "EPAYTEST",    
                su: "http://localhost:3000/paymentLandingPage?q=su",
                fu: "http://localhost:3000/paymentLandingPage?q=fu"
            }

            var form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute("action", path);

            for (var key in params) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
                form.appendChild(hiddenField);
            }

            document.body.appendChild(form);
            form.submit();
            console.log("trigerred")
          }catch(error){
                console.log(error,"error aayo sir")
            }
            finally{
                console.log("posted")
            }
            // dispatch(changePopUpPage(3))
            // dispatch(changePaymentStatus(true))
        }

    return (
            <div className={style.popContainer}>
                <Icon icon="radix-icons:cross-2" width="24" height="24" className={style.crossButton} onClick={() => { dispatch(change()); dispatch(changePopUpPage(1)) }} />

                <div className={style.topDiv}>
                    <Icon icon="ph:caret-left-bold" width="24" height="24" inline={true} className={style.backIcon} onClick={() => { dispatch(changePopUpPage(1)) }} />
                    <div className={style.topic}>Billing Summary</div>
                </div>
                <div className={style.midDiv}>
                    <div className={style.selectPlanDiv}>
                        <label className={style.labels}>Selected Plan</label>
                        <div className={style.packageDetailsDiv}>
                            <p className={style.packageDetails}>{packageInfo.name} <b className={style.anotherPlan}>(Choose another plan)</b></p>
                            <p className={style.packagePrice}>Rs. {packageInfo.price2}</p>
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
                    <p className={style.totalPayAmount}>Rs. {packageInfo.price2}</p>
                </div>

                <button className={style.confirmButton} onClick={confirm} >Confirm</button>

            </div>
        )
    }

    export default EsewaPaymantPop