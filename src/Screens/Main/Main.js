import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
        <h1 className='text-bold text-lg '  >Quiz Application</h1>
        <ol className='bg-slate-500 rounded p-4 m-4'>
            <li >You Will be asked 10 questions  </li>
            <li>You Will be asked 10 questions  </li>
            <li>You Will be asked 10 questions  </li>
            <li>You Will be asked 10 questions  </li>
            <li>You Will be asked 10 questions  </li>
            <li>You Will be asked 10 questions  </li>
        </ol>
        <div className='p-3'>
            <input placeholder='Enter Your UserName' className='border border-red-500 m-3 rounded outline-none p-3'/>
        </div>
        <div>
            <Link className='font-semibold p-3 bg-red-400 rounded-sm' to={"/quiz"}>Take Me to Quiz</Link>
        </div>

    </div>
  )
}

export default Main