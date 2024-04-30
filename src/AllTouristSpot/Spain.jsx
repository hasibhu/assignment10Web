import React from 'react';
import { Link } from 'react-router-dom';


const Spain = () => {
    return (
        <div 
             className='flex flex-row justify-center items-center gap-10 mt-8'>
            <div><img className='w-[490px]' src="https://i.ibb.co/Tk96QYB/spain.jpg" alt="" /></div>
            <div className='flex flex-col'>
                <p className='w-[390px]'>Spain is a dream destination for travelers. The grandeur of a <strong>caliph's palace</strong>, the sun-drenched days spent on <strong>Mediterranean beaches</strong>, and the stamp of a flamenco dancer's heels. You can find the soul of Spain in tourist experiences like these, which represent the country's rich history, fascinating culture, and enchanting <strong>natural beauty</strong>.</p>
                
                <Link to='/spainAll'><button className='btn btn-accent'>Look on Spain</button></Link>
            </div>
        </div>
    );
};

export default Spain;