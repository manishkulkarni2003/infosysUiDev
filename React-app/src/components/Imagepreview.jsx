import React, { useState } from 'react'

const Imagepreview = ({images}) => {
    const [selectedImage,setSelectedImage]=useState(null)

    const handleImage=(image)=>{
        setSelectedImage(image)
    }

  return (
    <div className='p-4'>
        <h2>Image Gallery</h2>
        <div>
            {images.map((img,index)=>(
                <img
                src={img}
                key={index}
                onClick={()=>handleImage(img)}
                >

                </img>
            ))}
        </div>

        {selectedImage&&(
            <div style={{'paddingTop':'15px'}}>
                <img src={selectedImage} alt='selectedImage'/>
            </div>
        )}

      
    </div>
  )
}

export default Imagepreview
