import type { NextPage } from 'next'
import Head from 'next/head'
import DigitalPaymentPop from '../components/digitalPaymantPop'
import ProgressBar from '../components/ui components/progressBar'
import { Icon } from '@iconify/react';


const test:NextPage = ()=> {
  return (
    <>
        <Icon icon="icon-park-outline:building-two" width="16" height="18" inline={true} />
        <DigitalPaymentPop />
      
    </>
    
  )
}

export default test