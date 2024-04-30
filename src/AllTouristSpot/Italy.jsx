import React from 'react';
import { Link } from 'react-router-dom';

const Italy = () => {
    return (
        <div className='flex xl:flex-row justify-center items-center gap-10 mt-8'>
            <div><img className='w-[490px]' src="https://i.ibb.co/SvNSh1m/italy.jpg" alt="" /></div>
            <div className='flex flex-col'>
                
                <p className='w-[440px] mb-6'>As the birthplace of the <strong>Roman Empire and the Renaissance</strong>, it's not surprising that Italy should be so rich in masterpieces of art and architecture, or that it should have more <strong>UNESCO World Heritage</strong> cultural sites than any other country in the world.</p>
                
                <Link to='/italyAll'><button className='btn btn-accent'>Look on Italy</button></Link>
            </div>
        </div>
    );
};

export default Italy;