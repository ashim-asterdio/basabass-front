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
      <div className={style.nav}>

        <div className={style.leftDiv}>
          <div className={style.logo}>
            <Image src={BasobasLogo} alt="no image" />
          </div>
          <div className={style.linkDiv}>
            {
              links.map((data: any) =>
                <Link key={data} href="#">
                  <a href="#" className={style.links}>
                    <span className={style.linksData}>{data}</span>
                  </a>
                </Link>
              )
            }
          </div>
        </div>

        <div className={style.rightDiv}>
          <div className={style.searchIcon}><Image src={search} alt="no image" /></div>
          <div className={style.buttonDiv}>
            <button className={style.blueButton}>
              <span><Image src={buldingLogo} alt="no image" /></span>
              <p>List Your Property</p>
            </button>
            <div className={style.userDiv}>
              <div className={style.imageDiv}><Image src={navPerson} alt="no image" /></div>
              <p className={style.name}> Ram Bahadur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar