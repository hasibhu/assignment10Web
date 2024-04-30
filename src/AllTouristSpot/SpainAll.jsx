import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const SpainAll = () => {
    const [italyLocations, setItalyLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/myLocation/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // console.log('Data fetched successfully:', data);
                // Filter the data array to get only objects with countryName: Italy
                const italyData = data.filter(item => item.countryName === 'Spain');
                setItalyLocations(italyData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Locations in Italy {italyLocations.length}</h1>

            <div >
                {italyLocations.map(location => (
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
                }
            </div>

        </div>
    );
};
export default SpainAll;