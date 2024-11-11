import React, { useEffect } from 'react'
import Herocat from '../components/Herocat'
import Categories from '../components/Categories'

function Category() {
  useEffect(()=>{
    document.title = "Category - Alflexx"
    window.scrollTo(0,0)
  },[])
  return (
    <div className='mt-[40px] md:mt-[120px]'>
      <Herocat/>
      <Categories/>
    </div>
  )
}

export default Category
