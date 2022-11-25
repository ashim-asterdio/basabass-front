import type { NextPage } from 'next'
import Head from 'next/head'
import EsewaPaymentPop from "../components/paymentPopUps/esewaPaymantPop"
import SelectPackagePop from "../components/paymentPopUps/selectPackagePop"
import PaymentStatusPop from "../components/paymentPopUps/paymentStatusPop"
import ProgressBar from '../components/ui components/progressBar'
import { Icon } from '@iconify/react';
import PropertyRegisteredPopUp from '../components/PopUps/propertyRegisteredPopUp'


const test:NextPage = ()=> {
  return (
    <>
        {/* <Icon icon="icon-park-outline:building-two" width="16" height="18" inline={true} /> */}
        {/* <SelectPackagePop /> */}
        <PropertyRegisteredPopUp/>
        {/* <PaymentStatusPop /> */}
      
    </>
    
  )
}

export default test