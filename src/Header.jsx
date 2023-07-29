import React from 'react'

export default function Header() {
  return (
    <nav className='fixed top-0 left-0 flex justify-between w-full  pt-4 px-8'>
        <h3 className='text-2xl h-24 font-semibold lg:text-4xl lg:font-bold text-bg flex items-center'><div>Graphify</div></h3>
        <button className='mr-2   flex items-center'><div className=' btn-bg py-3 px-8 lg:text-lg rounded-lg  '>login</div></button>
    </nav>
  )
}
