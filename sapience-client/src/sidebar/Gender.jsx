import React from 'react'
import InputField from '../components/InputField'
const Gender = ({handleChange}) => {
  return (
    <div><h4 className='text-lg font-medium mb-2'>Gender</h4>
    <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className='checkmark'></span>All
        </label>
    </div>
    <InputField handleChange={handleChange} value="female" title="Female" name="test"/>
    <InputField handleChange={handleChange} value="male" title="Male" name="test"/>
    <InputField handleChange={handleChange} value="non-binary" title="Non-binary" name="test"/>
    
    </div>
  )
}

export default Gender