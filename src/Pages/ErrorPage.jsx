
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-red-600 text-center text-9xl mt-52'>404</h1>
            <h1 className='text-center p-10'>Eorror Happened!!!! </h1>
            <Link className='text-center text-blue-600' to='/'><p>Please clicke here for the Homepage</p></Link>
        </div>
    );
};

export default ErrorPage;