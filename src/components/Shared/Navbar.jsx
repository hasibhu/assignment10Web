

import  { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Navbar = () => {
    const { user, logOut } = UseAuth() || {};
    // console.log(user);
    const [userOpen, setUserOpen] = useState(false);

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div className="flex justify-around pt-8">
            <div>
                <Link to='/'>TravelGuru</Link>
            </div>
            <div className="space-x-4">
                <Link to='/'>Home</Link>
                <Link to='/allTouristSpot'>All Tourists Spot</Link>
            </div>
            {user ? (
                
                <div className="flex flex-row relative" >
                    <div className="mr-4 flex justify-center items-center"><Link to='/addLocation'><button className="btn btn-secondary" >Add Location</button></Link></div>
                    <div className="drawer drawer-end">
                        
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        
                        <div className="drawer-content ">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn mr-6 w-16 btn-primary">Profile</label>
                            <button onClick={handleLogOut} className='btn btn-accent'>Logout</button>
                        </div>
                        
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li><Link to='/myListPage'>My List</Link></li>
                                <li><Link to='/updateLocation'>Update Location</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
