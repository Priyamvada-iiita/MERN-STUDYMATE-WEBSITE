import React , {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6';
import Login from '../Pages/Login';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle =()=>{
        setIsMenuOpen(!isMenuOpen)
    };
    const navItems=[
        {path:"/SearchStudyMate", title: "Search Studymates"},
        {path:"/forum", title: "Forum"},
        {path:"/browse", title: "Browse StudyMates"},
        {path:"/venue", title: "Search venues"},
        {path:"/chat", title: "Chatroom"},
    
    ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
            <a href="/" className="flex items-center gap-2 text-2xl text-black"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 19.5a2.5 2.5 0 0 1 2.5-2.5H20m-13.5 0A2.5 2.5 0 0 0 4 22V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.5Z"></path></svg><span>Studymate Portal</span>
            </a>
            <ul className="hidden md:flex gap-12">
                {
                    navItems.map(({path, title})=>(
                        <li key={path} className="text-base text-primary">
                            <NavLink
                            to={path}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            >
                            {title}
                            </NavLink>

                        </li>
                    ))
                }
            </ul>
            <div className="text-base text-primary font-medium space-x-5 hidden lg:block"> 
            {/* <button type="submit" className='bg-blue py-2 px-8 text-white md:rounded-none rounded'><Login/></button> */}
            
            <a href="/login" className=" bg-blue py-2 px-8 text-white md:rounded-none rounded">Login</a>
        
            </div>
            {/* for mobile */}
            <div className="md:hidden block ">
                <button onClick={handleMenuToggle}>
                    {
                        isMenuOpen? <FaXmark className="w-5 h-5"/>: <FaBarsStaggered className="w-5 h-5 text-primary"/>
                    }
                </button>
            </div>
        </nav>   
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen? "":"hidden"}`}>
            <ul >
                {
                    navItems.map(({path, title})=>(
                        <li key={path} className="text-base text-white first:text-white py-1">
                            <NavLink
                            to="/messages"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            >
                            {title}
                            </NavLink>

                        </li>
                    ))
                }
                <li>
                <button type="link" className='bg-blue py-2 px-8 text-white md:rounded-none rounded'>Search</button>
                </li>
                
            </ul>
        </div>

    </header>
  )
}

export default Navbar
