import React from 'react';
import { Link } from 'react-router-dom';

const TopLocations = () => {
    return (
        <div className=" mt-[120px] border-t-4 border-yellow-400 rounded-xl ">
            <h1 className='text-4xl text-center font-bold text-red-500 mt-[100px]'>Our Top Locations</h1>
            <div className='flex flex-row justify-between  max-w-screen-xl mt-10 m-auto'>
                <div>
                    <img className='w-[390px] h-[260px]' src={"https://i.ibb.co/zFQ9qmd/england-Home.jpg" }alt="" />
                    <h1 className='text-center text-4xl'>England</h1>
                    <h4 className='text-center'>Our Last Year Visitors: 1890</h4>
                    <Link to='/englandAll' className='flex justify-center items-center mt-4'><button className='btn btn-accent'>Look on England</button></Link>
                </div>
                <div>
                    <img className='w-[390px]' src={'https://i.ibb.co/RS9Qsh5/swizerland-Home.jpg'} alt="" />
                    <h1 className='text-center text-4xl text-yellow-400'>Switzerland</h1>
                    <h4 className='text-center'>Our Last Year Visitors: 1592</h4>
                    <Link to='/switzerlandAll' className='flex justify-center items-center mt-4'><button className='btn btn-accent'>Look on Switzerland</button></Link>
                </div>
                <div>
                    <img className='w-[390px] h-[260px]' src={"https://i.ibb.co/rtfWtzq/nethHome.jpg"} alt="" />
                    <h1 className='text-center text-4xl' >Netherlands</h1>
                    <h4 className='text-center'>Our Last Year Visitors: 1200</h4>
                    <Link to='/switzerlandAll' className='flex justify-center items-center mt-4'><button className='btn btn-accent'>Look on Netherlands</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default TopLocations;

// 
// https://i.ibb.co/zFQ9qmd/england-Home.jpg
// 
// 
// 