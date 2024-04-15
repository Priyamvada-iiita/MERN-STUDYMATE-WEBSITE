import React from 'react'
import Location from './Location'
import Schedule from './Schedule'
import Gender from './Gender'
import Courses from './Courses'
import PostingDate from './PostingDate'
const Sidebar = ({handleChange, handleClick}) => {

  return (
    <div className='space-y-5'> 
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange}/>
        <Schedule handleChange={handleChange} handleClick={handleClick} />
        <Gender handleChange={handleChange}/>
        <Courses handleChange={handleChange}/>
        <PostingDate handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar