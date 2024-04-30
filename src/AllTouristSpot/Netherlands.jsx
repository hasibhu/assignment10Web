import React from 'react';
import { Link } from 'react-router-dom';

const Netherlands = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-10 mt-8'>
            <div><img className='w-[490px]' src="https://i.ibb.co/bBXNLKF/netherlands.jpg" alt="" /></div>
            <div className='flex flex-col'>
               
                <p className='w-[520px]'>The Netherlands is known everywhere as a land of windmills,  canals, and tulips, and  visitors certainly will  find these among its many tourist attractions.`</p>
                
                <Link to='/netherLandsAll'><button className='btn btn-accent'>Look on Netherlands</button></Link>
            </div>
        </div>
    );
};

export default Netherlands;
