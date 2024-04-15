import React , {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6';
import { useAuth0  } from '@auth0/auth0-react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle =()=>{
        setIsMenuOpen(!isMenuOpen)
    };
    const {loginWithRedirect, logout, isAuthenticated} =useAuth0();
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
            {isAuthenticated ? (
            <li>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log Out</button>
            </li>) 
            : (<li>
                <button onClick={() => loginWithRedirect()} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log In</button>
            </li>)}
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
                    <Link to="/login" className='text-white py-1'>Log in</Link>
                    {/* <Link to="/signup" className='text-white py-1'>Sign up</Link> */}
                </li>
                
            </ul>
        </div>

    </header>
  )
}

export default Navbar
