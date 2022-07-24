import React, { useState } from 'react'

function StepTwo() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label className='label'>Your email</label>
          <input
            className='u-full-width input required'
            placeholder='test@mailbox.com'
            type='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label className='label'>Username</label>
          <input
            className='u-full-width input'
            placeholder='Username'
            type='text'
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </div>
      </div>
    </div>
  )
}


export default StepTwo;