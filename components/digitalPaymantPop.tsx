import style from "../styles/digitalPaymentPop.module.css"
import { Icon } from "@iconify/react"

const DigitalPaymantPop = () => {
  return (
    <div className={style.popContainer}>
        <Icon icon="radix-icons:cross-2" width="20" height="20" className={style.crossButton}  />
        
        <div className={style.topDiv}>
           <div className={style.topic}>Billing Summary</div>
        </div>
    </div>
  )
}

export default DigitalPaymantPop