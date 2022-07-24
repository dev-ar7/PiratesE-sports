import React, { useState } from 'react'

function StepOne() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label className='label'>First Name</label>
          <input
            className='u-full-width input'
            placeholder='First Name'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label className='label'>Last Name</label>
          <input
            className='u-full-width input'
            placeholder='Last Name'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
    </div>
  )
}


export default StepOne;