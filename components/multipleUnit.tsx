import { Icon } from '@iconify/react'
import React, { useState, useEffect } from 'react'
import style from "../styles/component/multipleUnit.module.css"

const MultipleUnit = (props: any) => {

  const [arr2, setArr2] = useState<{ carpetArea: string, price: string }[]>([{ carpetArea: "", price: "" }])
  const [unit,setUnit]=useState<string>()

  useEffect(() => {
    // console.log("reRende")
    // console.log("onCHange", arr2)
    var value={ unit: unit, varients: arr2 }
    props.onChange(value, props.place)
  }, [arr2,unit])

  var arr: { carpetArea: string, price: string }[] = [{ carpetArea: "", price: "" }]

  const addButton = () => {
    if (arr2.length > 0) {
      arr = [...arr2]
    }
    console.log("temp", arr)
    arr.push({ carpetArea: "", price: "" })
    console.log("temp2", arr)
    setArr2(arr)
    console.log(arr2)
  }



  return (
    <div className={style.containerDiv}>
      {/* <div className={style.topDiv}> */}
      <label className={style.title}>
        Unit
        <Icon icon="humbleicons:info-circle" width="16" height="16" className={style.infoIcon} />
      </label>
      {/* </div> */}

      <input type="text" placeholder='Enter Unit Name' className={style.untiNameInput} onChange={(e)=>{setUnit(e.target.value)}} />
      {
        arr2?.map((value: { carpetArea: string, price: string }, index: number) => {
          return <div className={style.bottomDiv} key={index}>
            <input type="text" placeholder="Enter Carpet Area(e.g.1-1-1-1)" value={value.carpetArea} className={style.untiNameInput} onChange={(e) => { var temp = [...arr2]; temp[index].carpetArea = e.target.value; setArr2(temp); }} />
            <input type="text" placeholder="Enter Price" value={value.price} className={style.untiNameInput} onChange={(e) => { var temp = [...arr2]; temp[index].price = e.target.value; setArr2(temp); }} />
            <div className={style.buttonDiv}>
              {(arr2.length > 1) &&
                <button className={style.deleteButton} onClick={(e) => { e.preventDefault(); if (arr2.length > 0) { arr = [...arr2] }; arr.splice(index, 1); setArr2(arr); }}>
                  <Icon icon="icon-park-outline:delete" className={style.icon} />
                  <span className={style.deleteMess}>Delete</span></button>
              }
              {(index == arr2.length - 1) &&
                <>
                  <button className={style.addButton} onClick={addButton}>
                    <Icon icon="ic:round-plus" className={style.icon} />
                    <span className={style.addMess}>Add</span></button>
                </>
              }
            </div>
          </div>
        })
      }

    </div>
  )
}

export default MultipleUnit