import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className='font-bold  p-2 m-2'>Contact Us</h2>
      {/* <h3 className='font-bold  p-2 m-2'>Let's Build Together</h3> */}
      <form>
        <input className='border border-black p-2 m-2' placeholder='Name'/>
        <input className='border border-black p-2 m-2' placeholder='Message'/>
        <button className='border border-black p-2 m-2 bg-gray-200 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default Contact