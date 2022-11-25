import style from "../../styles/propertyRegisteredPopUp.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Icon } from "@iconify/react"
import { change, changepopUpBg, changeRegistrationStatus } from "../../slices/payPopSlice"
import Image from "next/image"
import webImage from "../../Images/propertyAddedImage.svg"
import { RootState } from "../../store"

const PropertyRegisteredPopUp = () => {
  const dispatch = useDispatch()
  const reg = useSelector((state: RootState) => state.payPop.registrationStatus)
  const done=()=>{
    dispatch(changepopUpBg())
    dispatch(changeRegistrationStatus(false))
  }

  return (
    <div className={style.mainContainer} style={{display:reg?"block":"none"}}>
      <Icon icon="radix-icons:cross-2" width="24" height="24" className={style.crossButton}
      onClick={done}
      />
      
      <div className={style.imageDiv}>
        <Image src={webImage} alt="no image" />
      </div>
      <div className={style.imageDivMobile}>
        <div className={style.cover}></div>
        <Image src={webImage} alt="no image" height={278}  />
      </div>
      <Icon icon="iconoir:check-circled-outline" width="36" height="36" className={style.checkIcon} />
      <div className={style.message}>
        Your property has been added sucessfully
      </div>

      <div className={style.buttonDiv}>
        <button className={style.viewAd}>View Your Ad</button>
        <button className={style.postAd}>Post Another Ad</button>
      </div>

    </div>
  )
}

export default PropertyRegisteredPopUp