import React, { useState, useRef } from 'react'

const Step4 = ({ cropedImage }) => {
    return <>
    <h5>Final Result</h5>
    {!!cropedImage && cropedImage}
    </>
}

export default Step4