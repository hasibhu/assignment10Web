
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // const { user, loading } = useContext(AuthContext);
    const { user, loading } = UseAuth() || {};

    const location = useLocation();
    // console.log(location);




    if (loading) {
        return <span className="loading loading-spinner loading-lg text-4xl text-center">Loading.....</span>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return <div>{children}</div>
};

export default PrivateRoute;