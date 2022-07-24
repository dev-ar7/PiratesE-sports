import React, { useState } from 'react'

function StepFour() {
  const [checked, setChecked] = useState('')

  return (
    <div>
      <div className='row'>
        <div className='ten columns terms'>
          <span>By clicking "Accept" I agree that:</span>
          <ul className='docs-terms'>
            <li>
              I have read and accepted the <a href='#'>User Agreement</a>
            </li>
            <li>
              I have read and accepted the <a href='#'>Privacy Policy</a>
            </li>
            <li>I am at least 18 years old</li>
          </ul>
          <label className='label'>
            <input
              type='checkbox'
              //   defaultChecked={this.state.checked}
              checked={checked}
              onChange={e => setChecked(e.target.value)}
              autoFocus
            />
            <span> Accept </span>{' '}
          </label>
        </div>
      </div>
    </div>
  )
}


export default StepFour;