import React from 'react';

const Switzerland = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-10 mt-8'>
            <div><img className='w-72' src="https://i.ibb.co/9NgTfb3/france.jpg" alt="" /></div>
            <div className='flex flex-col'>
                <p>Tourist Spot Name: Eifel Tower.</p>
                <p>Location: Paris</p>
                <p> Name: France</p>
                <p>Average Cost: 200Euro. </p>
                <button className='btn btn-accent'>Look on Switzerland</button>
            </div>
        </div>
    );
};

export default Switzerland;