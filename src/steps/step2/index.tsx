import React, { useState, useRef } from 'react'

const Step2 = ({ setImgSrc, setCrop, imgSrc }) => {
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <>
      <h5>Choose Image</h5>
      <input type="file" accept="image/*" onChange={onSelectFile} />
      {!!imgSrc && <img
        alt="Crop me"
        src={imgSrc}
        // style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
      />}
    </>
  )
}

export default Step2
