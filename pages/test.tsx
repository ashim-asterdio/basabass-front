import type { NextPage } from 'next'
import CustomUploadZone from '../components/customUploadZone';
import { Icon } from '@iconify/react';
import PropertyRegisteredPopUp from '../components/PopUps/propertyRegisteredPopUp'


const test:NextPage = ()=> {
  return (
    <>
        {/* <Icon icon="icon-park-outline:building-two" width="16" height="18" inline={true} /> */}
        {/* <SelectPackagePop /> */}
        {/* <PropertyRegisteredPopUp/> */}
        <CustomUploadZone />
        {/* <PaymentStatusPop /> */}
      
    </>
    
  )
}

export default test