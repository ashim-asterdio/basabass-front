import type { NextPage } from 'next'
import Head from 'next/head'
import ProgressBar from '../components/ui components/progressBar'


const test:NextPage = ()=> {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
        <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
      </Head>
      <div style={{display:"flex",border:"solid 1px"}}>
        <ProgressBar/>
      </div>
      
    </>
    
  )
}

export default test