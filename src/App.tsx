import { useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'
import Step4 from './steps/step4'
import { Crop } from 'react-image-crop'

const MIN_STEP = 1
const MAX_STEP = 4

export default function App() {
  const [step, setStep] = useState(2);

  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<Crop>()
  const [cropedImage, setCropedImage] = useState();

  const changeStep = (_step: number) => {
    if (_step < MIN_STEP || _step > MAX_STEP) return
    setStep(_step)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 
        setImgSrc={setImgSrc}
        setCrop={setCrop}
        imgSrc={imgSrc}
        />
      case 3:
        return <Step3
        crop={crop}
        imgSrc={imgSrc}
        setCrop={setCrop}
        setCropedImage={setCropedImage}
        />
      case 4:
        return <Step4 cropedImage={cropedImage} />
    }
  }

  const renderButtons = () => (
    <>
      <div>
        <button
          onClick={() => {
            changeStep(step + 1)
          }}
        >
          next
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            changeStep(step - 1)
          }}
        >
          Previous
        </button>
      </div>
    </>
  )

  return (
    <div className="App">
      {renderStep()}
      {renderButtons()}
    </div>
  )
}
