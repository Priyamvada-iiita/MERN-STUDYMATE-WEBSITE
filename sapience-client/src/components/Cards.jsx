import React from 'react'
import { Link } from 'react-router-dom';
import {FiCalendar, FiMapPin,FiBookOpen} from 'react-icons/fi'
import { IoManSharp, IoWomanSharp, IoPersonCircleSharp } from 'react-icons/io5';
import { FaUniversity, FaBook, FaUserFriends, FaRegClock } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { MdWorkOutline } from 'react-icons/md';
const Cards = ({data}) => {
  const {id, name, title, gender, location, interests, course, personality, postingDate, college, venuePreference, destination, scheduleAvailability, description
  } = data;
    
  const genderIcon = () => {
    switch (gender.toLowerCase()) {
      case 'male':
        return <IoManSharp className="text-blue-500" />;
      case 'female':
        return <IoWomanSharp className="text-pink-500" />;
      case 'non-binary':
        return <IoPersonCircleSharp className="text-green-500" />;
      default:
        return <IoPersonCircleSharp className="text-gray-500" />; // Default icon for unspecified or other genders
    }
  };
  return (
    <div className='card'> 
    <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
      <img></img>
      <div>
        <h4 className='text-primary font-bold text-xl mb-1'>{name}</h4>
        <h5 className='text-lg text-gray-800 font-semibold mb-2'>{title}</h5>
        <div className='text-gray-600 text-base flex flex-wrap gap-4 mb-4'>
          <span className='flex items-center gap-2'> <FiMapPin className="text-blue-500"/>{location}</span>
          <span className='flex items-center gap-2'>{genderIcon(gender)}{gender}</span>
          <span className='flex items-center gap-2'> <FaUniversity className="text-green-500" />{college}</span>
          <span className='flex items-center gap-2'> <FiCalendar className="text-red-500"/>{postingDate.slice(0,10)}</span>
          <span className='flex items-center gap-2'> <FiBookOpen className="text-yellow-500"/>{course}</span>
        </div>
        <p className='text-gray-700 mb-3'>{description}</p>
        <div className='text-gray-500 text-sm flex flex-wrap gap-4'>
          <span className='flex items-center gap-2'>
              <GiTeacher className="text-orange-400" />
              <span>Interests: {interests.join(', ')}</span>
          </span>
          <span className='flex items-center gap-2'>
              <FaUserFriends className="text-purple-500" />
              <span>Personality: {personality.join(', ')}</span>
          </span>
          <span className='flex items-center gap-2'>
              <MdWorkOutline className="text-teal-500" />
              <span>Venue Preference: {venuePreference.join(', ')}</span>
          </span>
          <span className='flex items-center gap-2'>
            <FaRegClock className="text-red-500" />
            <span>Schedule: {scheduleAvailability.map(s => `${s.day}: ${s.time}`).join(', ')}</span>
        </span>
        </div>
      </div>
    </Link>
      
    </div>
  )
}

export default Cards;
