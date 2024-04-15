import React from 'react'
import InputField from '../components/InputField'
const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>
        </div>
        <InputField handleChange={handleChange} value="new york city" title="New York City" name="test"/>
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test"/>
        <InputField handleChange={handleChange} value="chicago" title="Chicago" name="test"/>
        <InputField handleChange={handleChange} value="san francisco" title="San Francisco" name="test"/>
        <InputField handleChange={handleChange} value="boston" title="Boston" name="test"/>
    </div>
  )
}

export default Location