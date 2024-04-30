import React from 'react';
import { Link } from 'react-router-dom';

const England = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-10 mt-8'>
            <div><img className='w-[490px]' src="https://i.ibb.co/3yG9gWp/england.jpg" alt="" /></div>
            <div className='flex flex-col'>
                <p className='w-[330px]'>Think of England, and you'll no doubt conjure up images of centuries-old castles and palaces, quaint little villages, as well as that pleasant-to-look-at rolling countryside.</p>
                
                <Link to='/englandAll'><button className='btn btn-accent'>Look on England</button></Link>
            </div>
        </div>
    );
};

export default England;