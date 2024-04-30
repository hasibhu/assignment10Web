
import './Navbar.css';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Navbar = () => {
    const { user, logOut } = UseAuth() || {};
    // console.log(user);
    // const [userOpen, setUserOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const handleClick = (itemName) => {
        setActiveItem(itemName);
    };

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div className="flex justify-around items-center pt-8 bg-slate-500 ">
            <div>
                {/* <Link to='/'>TravelGuru</Link> */}
            </div>
            {/* <div className="space-x-4">
                <Link to='/'>Home</Link>
                <Link to='/allTouristSpot'>All Tourists Spot</Link>
            </div> */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Item 1</a></li>
                        
                        <li><a>Item 3</a></li> */}
                        <li className="">
                            <Link to='/'>
                                <button
                                    className={activeItem === 'Home' ? 'active' : ''}
                                    onClick={() => handleClick('Home')}>
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/allTouristSpot" >
                                <button
                                    className={activeItem === 'Property' ? 'active' : ''}
                                    onClick={() => handleClick('Property')}>
                                    All Tourist Spot
                                </button>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                <Link to='/'>
                    <div>
                        <h1 className="btn btn-ghost bg-[#9ACD32] text-red-700 font-bold text-3xl  w-50 h-16 rounded-3xl -mt-8 ml-16"> 
                            Tra√elGuru
                        </h1>
                    </div>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl gap-4">

                    <nav >
                        <ul className="lg:flex lg:flex-row text-center mr-28" >
                            <li className="">
                                <Link to='/'>
                                    <button
                                        className={activeItem === 'Home' ? 'active' : ''}
                                        onClick={() => handleClick('Home')}>
                                        <p className='text-white'>Home</p>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/allTouristSpot" >
                                    <button
                                        className={activeItem === 'Property' ? 'active' : ''}
                                        onClick={() => handleClick('Property')}>
                                        <p className='text-white'>All Tourist Spot</p>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </ul>
            </div>



            {user ? (
                
                <div className="flex flex-row relative mr-20" >
                    <div className="mr-4 flex justify-center items-center"><Link to='/addLocation'><button className="btn btn-secondary" >Add Location</button></Link></div>
                    <div className="drawer drawer-end">
                        
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        
                        <div className="drawer-content ">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn mr-6 w-16 btn-primary">Profile</label>
                            
                        </div>
                        
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu  p-4 w-80  min-h-1/2 bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li><Link to='/myListPage'><button className='btn btn-accent'>My List</button></Link></li>
                                <button onClick={handleLogOut} className='btn btn-accent'>Logout</button>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='mr-10 flex flex-row gap-3'>
                        <Link to='/login'><button className='btn btn-accent'>Login</button></Link>
                        <Link to='/register'><button className='btn btn-secondary'>Register</button></Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
