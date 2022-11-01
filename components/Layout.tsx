import Head from "next/head"
import Navbar from "./Navbar"
import style from '../styles/layout.module.css'

const Layout=({children,topic, onSubmit})=> {
 
  return (
    <>
    <Head>
      {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
      <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
      <style>
        @import url('http://fonts.cdnfonts.com/css/product-sans');
      </style>
    </Head>
    <div className={style.containerDiv}>
      <div className={style.nav}>
        <Navbar />
      </div>
      
      <div className={style.contentDiv}>

        <div className={style.sideProgress}>
            <div className={style.topDiv}>Back to Dashboard</div>

            <div className={style.midDiv}>
              <p className={style.midDetails}>{topic}</p>
              Mathi ko step haru
            </div>
          </div>

          <div className={style.mainDiv}>
            <div className={style.postProperty}>
              <p>Post Property For Free</p>
            </div>

            <div className={style.mainBotDiv}>

              <div className={style.botLeftDiv}>
                <div className={style.topicDiv}>
                  <h1>{topic}</h1>
                </div>
                <form className={style.mainContentDiv} 
                // onSubmit={props.onSubmit}
                >

                  <div className={style.mainContentBody}>
                    {children}
                  </div>

                  <div className={style.footer}>
                    <button className={style.next} onClick={onSubmit} >Next</button>
                  </div>
                </form>
  
              </div>
              <div className={style.botRightDiv}>information</div>
            </div>
            
          </div>
        </div> 
    </div>
    </>
  )
}

export default Layout