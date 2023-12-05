import React from 'react'
import Questions from '../../Questions/Questions'

const Quiz = () => {
  const handlePrev =()=>{

  }
  const handleNext =()=>{}
  return (
    <>
    <div className='flex flex-col h-screen m-auto w-1/2  mt-5'>
      <h1 className='text-lg font-bold text-center border border-emerald-500 p-2 '>Quiz Application</h1>
      <div>
        <Questions/>
      </div>
      <div className='flex items-center justify-between mt-8'>
        <button className='bg-red-400 rounded p-2 w-32' onClick={handlePrev}>Prev</button>
        <button className='bg-red-400 rounded p-2 w-32' onClick={handleNext}>Next</button>

      </div>
    </div>
    </>
  )
}

export default Quiz