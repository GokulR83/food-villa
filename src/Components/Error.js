import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div className='flex bg-black justify-center items-center content-center w-full h-[100vh] flex-col'>
        <h1 className='text-white font-bold text-2xl'>OOPS....!</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLksjQW8c3F0MVvRo4AZVC_ut0ZpgLFodrw&s" />
        <h1 className='text-white font-bold text-2x'>Something Went Wrong</h1>

    </div>
  )
}

export default Error