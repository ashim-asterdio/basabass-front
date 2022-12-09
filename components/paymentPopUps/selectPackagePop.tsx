import style from "../../styles/selectPackagePop.module.css"
import Image from "next/image"
import tickMark from "../../Images/tickMark.svg"
import blueArrow from "../../Images/blueArrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { change, changePopUpPage, changePackageInfo } from "../../slices/payPopSlice"
import { Icon } from "@iconify/react"
import { useEffect, useRef, useState } from "react"
import axios from "axios"


const SelectPackagePop = (props: any) => {

    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.payPop.value)
    const list = ["30 Days Validation", "Number of Listing:1", "Mobile number of all response", "High position in"]
    const [allPackage, setAllPackage] = useState<any>([])

    const getPlans = async () => {
        const config = {
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg4NDc4YzY0ODI5YzhlMzg4ODYzOWUiLCJyb2xlIjoic3VwZXJhZG1pbiIsImlhdCI6MTY2OTk4MjAxOSwiZXhwIjoyMjc0NzgyMDE5fQ.K3ereptAn2D5QkNgDpyb5azImuXU9wxcwccjlfkwqiM` }
        };
        try {
            const allPackageBe: any = await axios.get("https://basobaasnew.asterdio.xyz/api/paid-plans/", config)
            setAllPackage(allPackageBe.data.paidplan)
            console.log("state: ",allPackage)

        } catch (e) {
            console.log("all packageg error", e)
        }
    }

    const ref = useRef(true)
    useEffect(() => {
        if (ref) {
            ref.current = false;
            getPlans();
        }
    },[status])

    const sendInfo = (name: string, price: any, price2: string,plan:string) => {
        dispatch(changePopUpPage(2))
        dispatch(changePackageInfo({ name: name, price: price, price2: price2,plan:plan }))
    }


    return (
        <div className={style.container} >
            <Icon icon="radix-icons:cross-2" width="20" height="20" className={style.crossButton} onClick={() => { dispatch(change()); dispatch(changePopUpPage(1)) }} />
            <label className={style.textDiv}>
                <span className={style.bigText}>Select paid plans to get more responses</span>
                <span className={style.smallText}>Here are different plans with exciting offers.</span>
            </label>

            <div className={style.recomended}>Recomended</div>

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
                        <button className={style.button} onClick={() => { sendInfo("Silver", allPackage[1].newPrice, "1,000",allPackage[1]._id) }}>Select & Continue</button>
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
                        <button className={style.button} onClick={() => { sendInfo("Gold", allPackage[2].newPrice, "3,500",allPackage[2]._id) }}>Select & Continue</button>
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
                                <span className={style.current}>Rs.10,500</span>
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
                        <button className={style.button} onClick={() => { sendInfo("Platinium", allPackage[3].newPrice, "10,500",allPackage[3]._id) }}>Select & Continue</button>
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
                                <span className={style.current}>Contact Sales</span>
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
                        <button className={style.button} onClick={() => { sendInfo("Titanium", allPackage[4].newPrice, "15,000",allPackage[4]._id) }}>Contact Sales</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SelectPackagePop