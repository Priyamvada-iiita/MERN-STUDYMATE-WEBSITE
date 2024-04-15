import React , {useState} from 'react'
import InputField from '../components/InputField'
const Courses = ({handleChange}) => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Courses</h4>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" value="" onChange={handleChange}/>
            <span className='checkmark'></span>All
        </label>
      </div>
      <InputField handleChange={handleChange} value="information technology" title="Information Technology" name="test"/>
      <InputField handleChange={handleChange} value="computer science" title="Computer Science" name="test"/>
      <InputField handleChange={handleChange} value="environmental studies" title="Environmental Studies" name="test"/>
      {showAllCourses && (
        <>
          <InputField handleChange={handleChange} value="business administration" title="Business Administration" name="test"/>
          <InputField handleChange={handleChange} value="mechanical engineering" title="Mechanical Engineering" name="test"/>
          <InputField handleChange={handleChange} value="biological sciences" title="Biological Sciences" name="test"/>
          <InputField handleChange={handleChange} value="nursing" title="Nursing" name="test"/>
          <InputField handleChange={handleChange} value="psychology" title="Psychology" name="test"/>
          <InputField handleChange={handleChange} value="civil engineering" title="Civil Engineering" name="test"/>
          <InputField handleChange={handleChange} value="law" title="Law" name="test"/>
          <InputField handleChange={handleChange} value="economics" title="Economics" name="test"/>
        </>
      )}
      <button onClick={toggleCourses} className='text-primary'>
        {showAllCourses ? '- Less' : '+ More'}
      </button>
    </div>
  );
}

export default Courses