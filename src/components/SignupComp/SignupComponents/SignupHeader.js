import React from 'react'


function SignupHeader({step}) {

  return (
    <div className="steps-hero">
      <div className={`step1 ${step===1&&'active'}`}>
        Step 1
      </div>
      <div className={`step2 ${step===2&&'active'}`}>
        Step 2
      </div>
      <div className={`step3 ${step===3&&'active'}`}>
        Step 3
      </div>
    </div>
  )
}

export default SignupHeader