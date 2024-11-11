import React, { useEffect } from 'react'
import Hero from './Hero'
import Whoweare from './Whoweare'
import Whatwedo from './Whatwedo'
import Corestrength from './Corestrength'


function Home() {
  useEffect(()=>{
    document.title = "Alflexx"
    window.scrollTo(0,0)
  },[])
  return (
    <div className='mt-[64px] md:mt-[120px]'>
        
        <Hero/>
        <Whoweare/>
        <Whatwedo/>
        <Corestrength/>
       
        
      </div>
  )
}

export default Home
