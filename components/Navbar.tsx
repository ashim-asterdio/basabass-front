import style from "../styles/Navbar.module.css"
import Image from "next/image"
import BasobasLogo from "../Images/BasobasLogo.svg"
import buldingLogo from "../Images/buldingLogo.svg"
import search from "../Images/search.svg"
import navPerson from "../Images/navPerson.svg"
import type { NextPage } from "next";
import Head from 'next/head'
import Link from "next/link";

const Navbar: NextPage = () => {
  const links: any = ["Buy", "Rent", "Home Loans", "Blogs", "Agencies", "Unit Converter"];

  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css" ></link> */}
        <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link> */}
      </Head>
      <div className={style.nav}>

        <div className={style.leftDiv}>
          <div className={style.logo}>
            <Image src={BasobasLogo} alt="no image" />
          </div>
          <div className={style.linkDiv}>
            {
              links.map((data: any) =>
                <span key={data} className={style.links}>
                  <Link href="#">
                    <span className={style.linksData}>{data}</span>
                  </Link>
                </span>
              )
            }
          </div>
        </div>

        <div className={style.rightDiv}>
          <div className={style.searchIcon}><Image src={search} alt="no image" /></div>
          <div className={style.buttonDiv}>
            <button className={style.blueButton}>
              <Image src={buldingLogo} alt="no image" />
              <p>List Your Property</p>
            </button>
            <div className={style.userDiv}>
              <div className={style.imageDiv}><Image src={navPerson} alt="no image" /></div>
              <span className={style.name}> Ram Bahadur</span>
            </div>
          </div>
        </div>
        {/* <div className={style.logo}>
            <span className={style.icon}><Image src={BasobasLogo} alt="no image"/></span>
            <h1 className={style.logoName}></h1>
        </div>

        <div className={style.searchDiv}>
            <input className={style.searchArea} />
            <span>Icon</span>
        </div>
        <div className={style.rightSection}>
          <div className={style.linkDiv}>
            {
              links.map((data:any)=>
              <a href="" className={style.links}>{data}</a>
              )
            }
            <a href="" className={style.greenLinks}>For NRNs</a>
          </div>

          <div className={style.buttonDiv}>
            <button className={style.blueButton}>
              <p>Post Property Free</p>
            </button>
            <div className={style.userDiv}>
              <div className={style.imageDiv}></div>
              <p className={style.name}> Kismat Thapa</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Navbar