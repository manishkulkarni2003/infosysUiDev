import React from 'react'
import Imagepreview from './Imagepreview'

const Image = () => {
    const sampleImages=[
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/200/300?grayscale'
    ]
  return (
    <div>
      <Imagepreview images={sampleImages}/>
    </div>
  )
}

export default Image
