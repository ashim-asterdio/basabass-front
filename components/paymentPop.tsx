import style from "../styles/paymentPop.module.css"
import Image from "next/image"
import tickMark from "../Images/tickMark.svg"
import blueArrow from "../Images/blueArrow.svg"
import xMark from "../Images/xMark.svg"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { change } from "../slices/payPopSlice"




const PaymentPop = (props:any) => {

  const dispatch=useDispatch();
  const status=useSelector((state:RootState)=>state.payPop.value)
  const list = ["30 Days Validation", "Number of Listing:1", "Mobile number of all response", "High position in"]

  return (
    <div className={style.container} style={{display:status?"flex":"none"}}>
      <span className={style.crossButton} onClick={()=>{dispatch(change())}}><Image alt="no image" src={xMark} /></span>
      <label className={style.textDiv}>
        <span className={style.bigText}>Select paid palns to get more response</span>
        <span className={style.smallText}>Here are different plans with exciting offers.</span>
      </label>

      <div className={style.paymentOptionDiv}>
        <div className={`${style.option1} ${style.paymentOption}`}>
          <div className={style.seeFullDiv}>
            <span className={style.seeFull}>See full package details</span>
            <span className={style.arrow}><Image alt="no image" src={blueArrow} /></span>
          </div>
          <div className={style.blurDiv}></div>
          <hr className={style.seperationBot} />
          <div className={style.detailDiv}>
            <div className={style.topicDiv}>
              <span className={style.packageName}>Silver</span>
              <span className={style.packagePrice}>
                <span className={style.before}>Rs.1,500</span>
                <span className={style.current}>Rs.1,000</span>
              </span>
            </div>
            <hr className={style.seperation} />
            <div className={style.contentDiv}>
              {list.map((data) =>
                <div key={data} className={style.listDiv}>
                  <span className={style.tickMark}><Image alt="no image" src={tickMark} /></span>
                  <span className={style.description}>{data}</span>
                </div>
              )}
            </div>
          </div>
          <div className={style.buttonDiv}>
            <button className={style.button}>Select & Continue</button>
          </div>
        </div>


        <div className={`${style.option2} ${style.paymentOption}`}>
        <div className={style.seeFullDiv}>
            <span className={style.seeFull}>See full package details</span>
            <span className={style.arrow}><Image alt="no Image" src={blueArrow} /></span>
          </div>
          <div className={style.blurDiv}></div>
          <hr className={style.seperationBot} />
          <div className={style.detailDiv}>
            <div className={style.topicDiv}>
              <span className={style.packageName}>Gold</span>
              <span className={style.packagePrice}>
                <span className={style.before}>Rs.5,00</span>
                <span className={style.current}>Rs.3,500</span>
              </span>
            </div>
            <hr className={style.seperation} />
            <div className={style.contentDiv}>
              {list.map((data) =>
                <div key={data} className={style.listDiv}>
                  <span className={style.tickMark}><Image alt="no Image" src={tickMark} /></span>
                  <span className={style.description}>{data}</span>
                </div>
              )}
            </div>
          </div>
          <div className={style.buttonDiv}>
            <button className={style.button}>Select & Continue</button>
          </div>
        </div>


        <div className={`${style.option3} ${style.paymentOption}`}>
        <div className={style.seeFullDiv}>
            <span className={style.seeFull}>See full package details</span>
            <span className={style.arrow}><Image alt="no Image" src={blueArrow} /></span>
          </div>
          <div className={style.blurDiv}></div>
          <hr className={style.seperationBot} />
          <div className={style.detailDiv}>
            <div className={style.topicDiv}>
              <span className={style.packageName}>Platinium</span>
              <span className={style.packagePrice}>
                <span className={style.before}>Rs.15,000</span>
                <span className={style.current}>Rs.15,000</span>
              </span>
            </div>
            <hr className={style.seperation} />
            <div className={style.contentDiv}>
              {list.map((data) =>
                <div key={data} className={style.listDiv}>
                  <span className={style.tickMark}><Image alt="no Image" src={tickMark} /></span>
                  <span className={style.description}>{data}</span>
                </div>
              )}
            </div>
          </div>
          <div className={style.buttonDiv}>
            <button className={style.button}>Select & Continue</button>
          </div>
        </div>


        <div className={`${style.option4} ${style.paymentOption}`}>
        <div className={style.seeFullDiv}>
            <span className={style.seeFull}>See full package details</span>
            <span className={style.arrow}><Image alt="no Image" src={blueArrow} /></span>
          </div>
          <div className={style.blurDiv}></div>
          <hr className={style.seperationBot} />
          <div className={style.detailDiv}>
            <div className={style.topicDiv}>
              <span className={style.packageName}>Titanium</span>
              <span className={style.packagePrice}>
                <span className={style.before}></span>
                <span className={style.current}>Contact Sale</span>
              </span>
            </div>
            <hr className={style.seperation} />
            <div className={style.contentDiv}>
              {list.map((data) =>
                <div key={data} className={style.listDiv}>
                  <span className={style.tickMark}><Image alt="no Image" src={tickMark} /></span>
                  <span className={style.description}>{data}</span>
                </div>
              )}
            </div>
          </div>
          <div className={style.buttonDiv}>
            <button className={style.button}>Select & Continue</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PaymentPop