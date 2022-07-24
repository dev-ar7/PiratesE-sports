import React, { useState } from 'react'

function StepThree() {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label className='label'>Password</label>
          <input
            className='u-full-width input required'
            placeholder='Password'
            type='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label className='label'>Confirm password</label>
          <input
            className='u-full-width input'
            placeholder='Confirm Password'
            type='password'
            onChange={e => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
          />
        </div>
      </div>
    </div>
  )
}


export default StepThree;