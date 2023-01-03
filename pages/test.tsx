import type { NextPage } from 'next'
import LoadingScreen from '../components/PopUps/loadingScreen';
import CustomUploadZone from '../components/customUploadZone';
import MultipleUnit from "../components/multipleUnit"



const test: NextPage = () => {
  return (
    <>
      {/* <Icon icon="icon-park-outline:building-two" width="16" height="18" inline={true} /> */}
      {/* <SelectPackagePop /> */}
      {/* <PropertyRegisteredPopUp/> */}
      {/* <CustomUploadZone /> */}
      <MultipleUnit/>
      <LoadingScreen/>
      {/* <PaymentStatusPop /> */}

    </>

  )
}

export default test