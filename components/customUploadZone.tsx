import React, { createRef, useRef, useState } from 'react'
import style from "../styles/component/customUploadZone.module.css"
import Image from 'next/image'
import AddImage from "../Images/AddImage.svg"
import { Icon } from '@iconify/react'

const CustomUploadZone = ({setImages,files}:{setImages:any,files:any}) => {
  const [picture, setPicture] = useState<any>([])
  const image: any = useRef()
  console.log(picture)
  
  // console.log(
  //   'chiyra', Array.isArray(picture), picture[0]
  // )
  // console.log(image.current)
// console.log(picture)
// console.log(picture.length)
  function sliceIntoChunks(arr:[], chunkSize:number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
  
  function handelChange(file: any) {
    if (picture.length==0)
    {
      setPicture([...file])
      setImages([...file])
    }
    else{
      setPicture([...picture,...file])
      setImages([...files,...file])
    }
  }

  if (picture.length==0){
    return(
      <label className={style.wrapper}>
        <label className={style.emptyIcon}>
          <div className={style.imageDiv}>
            <Image src={AddImage} alt="No Image" />
          </div>
          <label className={style.blueButton}>
            <input multiple={true} type="file" ref={image} onChange={e =>handelChange(e.target.files)} />
            {/* <pre className={style.dropZone}></pre> */}
            Upload Image

          </label>
          <div className={style.textDiv}>
            <div className={style.texts}>or drag photos here</div>
            <div className={style.texts}>(up to 10 Photos)</div>
          </div>

        </label>
      </label>
    )
  }
  else 
  return(
    <div className={style.fullWrapper}>
        <div className={style.imageRow}>
          {
            sliceIntoChunks(picture,5)[0]?.map((files: any, index: number) => {
              return <div className={style.addedImageDiv} key={index}>
                {/* <img  width={130} height={110} src={URL.createObjectURL(files)} alt="no image" /> */}
                <Image width={130} height={110} src={URL.createObjectURL(files)} alt="no image" />
              </div>
            })
          }
          <label className={style.addImage} style={{display:(picture.length>4)?"none":"flex"}}>
            <div className={style.contentDiv}>
              <Icon icon="ph:plus-duotone" color="#595959" width="30" height="30" />
              <div className={style.addPicDiv}>Add Image</div>
            </div>
            <input multiple={true} type="file" ref={image} onChange={e =>  handelChange(e.target.files)} />
          </label>
        </div>

        {
        (picture.length>4)&&
          <div className={style.imageRow} >
          {
            sliceIntoChunks(picture,5)[1]?.map((files: any, index: number) => {
              return <div className={style.addedImageDiv} key={index}>
                <Image width={130} height={110} src={URL.createObjectURL(files)} alt="no image" />
              </div>
            })
          }
          <label className={style.addImage} style={{display:(picture.length>4&&picture.length<10)?"flex":"none"}}>
            <div className={style.contentDiv}>
              <Icon icon="ph:plus-duotone" color="#595959" width="30" height="30" />
              <div className={style.addPicDiv}>Add Image</div>
            </div>
            <input multiple={true} type="file" ref={image} onChange={e =>  handelChange(e.target.files)} />
          </label>
        </div>
        }
      </div>
  )

  // return (
  //   <>
  //     <label className={style.wrapper}>
  //       <label className={style.emptyIcon}>
  //         <div className={style.imageDiv}>
  //           <Image src={AddImage} />
  //         </div>
  //         <label className={style.blueButton}>
  //           <input multiple={true} type="file" ref={image} onChange={e => console.log(
  //             'e', setPicture(Array.from(e.target.files??[])))} />
  //           {/* <pre className={style.dropZone}></pre> */}
  //           Upload Image

  //         </label>
  //         <div className={style.textDiv}>
  //           <div className={style.texts}>or drag photos here</div>
  //           <div className={style.texts}>(up to 10 Photos)</div>
  //         </div>

  //       </label>
  //     </label>


  //     <div className={style.fullWrapper}>
  //       <div className={style.imageRow}>
  //         {
  //           sliceIntoChunks(picture,5)[0]?.map((files: any, index: number) => {
  //             return <div className={style.addedImageDiv} key={index}>
  //               {/* <img  width={130} height={110} src={URL.createObjectURL(files)} alt="no image" /> */}
  //               <Image width={130} height={110} src={URL.createObjectURL(files)} alt="no image" />
  //             </div>
  //           })
  //         }
  //         <label className={style.addImage} style={{display:(picture.lngth>4)?"none":"flex"}}>
  //           <div className={style.contentDiv}>
  //             <Icon icon="ph:plus-duotone" color="#595959" width="30" height="30" />
  //             <div className={style.addPicDiv}>Add Image</div>
  //           </div>
  //           <input multiple={true} type="file" ref={image} onChange={e =>  setPicture([...picture,...Array.from(e.target.files??[])])} />
  //         </label>
  //       </div>

  //       {
  //       // (picture.lngth>4)&&
  //         <div className={style.imageRow} >
  //         {
  //           sliceIntoChunks(picture,5)[1]?.map((files: any, index: number) => {
  //             return <div className={style.addedImageDiv} key={index}>
  //               <Image width={130} height={110} src={URL.createObjectURL(files)} alt="no image" />
  //             </div>
  //           })
  //         }
  //         <label className={style.addImage} style={{display:(picture.lngth>4)?"flex":"none"}}>
  //           <div className={style.contentDiv}>
  //             <Icon icon="ph:plus-duotone" color="#595959" width="30" height="30" />
  //             <div className={style.addPicDiv}>Add Image</div>
  //           </div>
  //           <input multiple={true} type="file" ref={image} onChange={e =>  setPicture([...picture,...Array.from(e.target.files??[])])} />
  //         </label>
  //       </div>
  //       }
  //     </div>
  //   </>
  // )
}

export default CustomUploadZone