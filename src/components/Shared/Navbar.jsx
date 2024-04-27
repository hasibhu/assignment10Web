import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-around">
            
            <div>
                <Link to='/'><h1>TravelGuru</h1></Link>
            </div>
            <div className="space-x-4">
                <Link to='/'><button>Home</button></Link>
                <Link to='/allTouristSpot'><button>All Tourists Spot</button></Link>
            </div>
            <div className="space-x-4">
                <button>My List</button>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
            </div>
            
           

        </div>
    );
};

export default Navbar;