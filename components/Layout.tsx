import Head from "next/head"
import Navbar from "./Navbar"
import style from '../styles/layout.module.css'
import { ReactElement } from "react"
import ProgressBar from "./ui components/progressBar"
import Link from "next/link"
import { IoInformationCircleOutline } from "react-icons/io5";


const Layout = ({ children, topic, onSubmit, page, previous, info }:
  { children: any; topic: string; onSubmit: any; page: any; previous: any; info: any }) => {

  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
        <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
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
              <div className={style.progressBarDiv}>
                <ProgressBar page={page} />
              </div>
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
                <form className={style.mainContentDiv}>

                  <div className={style.mainContentBody}>
                    {children}
                  </div>

                  <div className={style.footer}>
                    <div className={style.buttonDiv}>
                      <button className={style.previous} onClick={previous}>Previous</button>
                      <div className={style.submitDiv}>
                        <span className={style.savetoDraft}>Save to draft</span>
                        <button className={style.next} onClick={onSubmit} >Next</button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
              <div className={style.botRightDiv}>
                <div className={style.infoInnerDiv}>
                  <div className={style.infoTopic}>
                    <p><IoInformationCircleOutline fontSize={"large"} />INFORMATION</p>
                  </div>
                  <div className={style.infoContentDiv}>
                    <h3>
                      {info}
                    </h3>
                    <div className={style.infoContent}>
                      Information about stuff
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Layout