import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const NetherlandsAll = () => {
    const { user } = UseAuth();
    const [italyLocations, setItalyLocations] = useState([]);
    const [sortedLocations, setSortedLocations] = useState([]);

    useEffect(() => {
        fetch('https://assignment10-server-eta.vercel.app/myLocation/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Filter the data array to get only objects with countryName: Italy
                const italyData = data.filter(item => item.countryName === 'Netherlands');
                setItalyLocations(italyData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Function to sort locations by cost in descending order
    const sortByCostDescending = () => {
        const sorted = [...italyLocations].sort((a, b) => b.cost - a.cost);
        setSortedLocations(sorted);
    };

    return (
        <div>
            <h1 className='text-center pt-6 text-3xl font-bold'> Out Current Locations in Netherlands is:  {italyLocations.length}</h1>
            {italyLocations.length < 1 && <h1 className='text-center text-xl'>Please Add Location</h1>}

            {italyLocations.length > 1 && <p className='text-center mt-16'><button className='btn btn-secondary' onClick={sortByCostDescending}>Sort by Cost (Descending)</button></p>}


            <div>
                {sortedLocations.length > 0 ? (
                    sortedLocations.map(location => (
                        <div key={location._id}>
                            <div className='border border-red-500 mt-4 '>
                                <div className='flex flex-row justify-center items-center gap-8 m-8'>
                                    <div>
                                        <img className='w-[450px]' src={location.image} alt="" />
                                    </div>
                                    <div>
                                        <p><strong>Tourist Spot Name:</strong> {location.touristSpotName}</p>
                                        <p><strong>Country Name:</strong> {location.countryName}</p>
                                        <p><strong>Location Name:</strong> {location.locationName}</p>
                                        <p><strong>Cost:</strong> {location.cost}</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <Link
                                        to={`/italyDetails/${location._id}`} // Pass the location id as a URL parameter
                                        className='btn btn-secondary m-8'
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    italyLocations.map(location => (
                        <div key={location._id}>
                            <div className='border border-red-500 mt-4 '>
                                <div className='flex flex-row justify-center items-center gap-8 m-8'>
                                    <div>
                                        <img className='w-[450px]' src={location.image} alt="" />
                                    </div>
                                    <div>
                                        <p><strong>Tourist Spot Name:</strong> {location.touristSpotName}</p>
                                        <p><strong>Country Name:</strong> {location.countryName}</p>
                                        <p><strong>Location Name:</strong> {location.locationName}</p>
                                        <p><strong>Cost:</strong> {location.cost}</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <Link
                                        to={`/italyDetails/${location._id}`} // Pass the location id as a URL parameter
                                        className='btn btn-secondary m-8'
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NetherlandsAll;
