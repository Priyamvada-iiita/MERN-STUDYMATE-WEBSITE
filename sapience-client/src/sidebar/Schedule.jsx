import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'
const Schedule = ({handleChange, handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Schedule</h4>
        <div className='mb-4'>
            <Button onClickHandler={handleClick} value="weekends" title="Weekends"/>
            <Button onClickHandler={handleClick} value="weekdays" title="Weekdays"/>
        </div>
        <div>
        <InputField handleChange={handleChange} value="morning" title="Morning" name="test"/>
        <InputField handleChange={handleChange} value="afternoon" title="AfterNoon" name="test"/>
        <InputField handleChange={handleChange} value="evening" title="Evening" name="test"/>
        <InputField handleChange={handleChange} value="full-day" title="Full-Day" name="test"/>
       
        </div>
    </div>
  )
}

export default Schedule