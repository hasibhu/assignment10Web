
import { Link } from 'react-router-dom';

const Switzerland = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-10 mt-8'>
            <div><img className='w-[490px]' src="https://i.ibb.co/m8jVWq1/switzerland.jpg" alt="" /></div>
            <div className='flex flex-col'>
                <p>Tourist Spot Name: Eifel Tower.</p>
                <p>Location: Paris</p>
                <p> Name: France</p>
                <p>Average Cost: 200Euro. </p>
                
                <Link to='/switzerlandAll'><button className='btn btn-accent'>Look on Switzerland</button></Link>
            </div>
        </div>
    );
};

export default Switzerland;