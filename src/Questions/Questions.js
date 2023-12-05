import React, { useState } from 'react'

const Questions = () => {
    const [option,setOption] = useState(undefined)
    const onSelect = ()=>{
        setOption(true)
    }
  return (
    <div>
        <h1>Simple Questions 1</h1>
        <ul>
            <li>
                <input type='radio'
                value ={option}
                name="options"
                id="q1"
                onChange={onSelect}
                />
                <label htmlFor='q1' className='text-gray-900'>Options</label>
            </li>
        </ul>
    </div>
  )
}

export default Questions