import Swal from 'sweetalert2'
import { useLoaderData, useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { useEffect, useState } from 'react';

const UpdateLocation = () => {
    const { user } = UseAuth() || {};
    // // const email = user.email;
    // const location = useLoaderData();
    // console.log(location);

    // // const { touristSpotName, countryName, locationName, numberOfVisitors, cost, description, image, season, travelDuaration, userName, email } = location;
    const { id } = useParams();
    console.log(id);
    const [italyData, setItalyData] = useState(null);

    useEffect(() => {
        fetch('https://assignment10-server-eta.vercel.app/myLocation/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Filter the data array to find the item with matching _id
                const foundData = data.find(item => item._id === id);
                setItalyData(foundData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    // Check if italyData is null before rendering
    if (!italyData) {
        return <div>Loading...</div>;
    }
    const { touristSpotName, countryName, locationName, numberOfVisitors, cost, image, season, travelDuaration, description, } = italyData;

    const handleUpdateLocation = e => {
        e.preventDefault();
        const form = e.target;

        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const locationName = form.locationName.value;
        const numberOfVisitors = form.numberOfVisitors.value;
        const cost = form.cost.value;
        const image = form.image.value;
        const season = form.season.value;
        const travelDuaration = form.travelDuaration.value;
        const description = form.description.value;
        const userName = form.userName.value;
        const email = user.email;

        const updatedLocation = { touristSpotName, countryName, locationName, numberOfVisitors, cost, description, image, season, travelDuaration, userName, email };
        // console.log(info);


        fetch(`https://assignment10-server-eta.vercel.app/myLocation/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedLocation)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee has been updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };

    return (
        <div className="gadgetContainer pt-10">
            <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                {/* Heading */}
                <div className="mt-5 mb-8">
                    <p className="text-center text-3xl font-semibold">
                        <span className="mr-3 text-[#FF497C]">
                            <i className="bx bxs-alarm-add"></i>
                        </span>
                        <span className="dark:text-white">
                            <span className="text-[#FF497C]">
                                {/* {update ? "Update " : "Add "} */}
                            </span>
                            Location Update
                        </span>
                    </p>
                </div>


                {/* form */}
                <form onSubmit={handleUpdateLocation}>
                    <div className="flex gap-8 ">
                        <div className="flex-1">
                            {/* Tourist Spot Name */}
                            <label className="block mb-2 dark:text-white" htmlFor="name">
                                Tourist Spot Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Name"
                                defaultValue={touristSpotName}
                                id="name"
                                name="touristSpotName"
                            />

                            {/* country names */}
                            <label className="block mt-4 mb-2 dark:text-white" htmlFor="brand">Country Name</label>
                            <select
                                name="countryName"
                                id="country"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={countryName}
                                placeholder="Select Country"
                            >
                                <option value="France" selected>
                                    France
                                </option>
                                <option value="Italy" selected>
                                    Italy
                                </option>
                                <option value="Spain" selected>
                                    Spain
                                </option>
                                <option value="England" selected>
                                    England
                                </option>
                                <option value="Netherlands" selected>
                                    Netherlands
                                </option>
                                <option value="Switzerland" selected>
                                    Switzerland
                                </option>

                            </select>

                            {/* <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                Country Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Name of The City "
                                id="countryName"
                                name="countryName"
                            /> */}



                            {/* Location */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                Location
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Name of The City "
                                id="locationName"
                                name="locationName"
                                defaultValue={locationName}
                            />

                            {/* Number of Visitors Per Year  */}

                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                Number of Visitors Per Year
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="number"
                                placeholder="Number of Visitors Per Year"
                                id="numberOfVisitors"
                                name="numberOfVisitors"
                                defaultValue={numberOfVisitors}
                            />
                            
                            {/* user email */}

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                User Email
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C] "
                                type="text"
                                placeholder=" "
                                id="email"
                                name="email"
                                defaultValue={user ? user.email : ''}

                            />
                        </div>

                        {/* Right side */}

                        <div className="flex-1">
                            {/* image link */}
                            <label className="block mb-2 dark:text-white" htmlFor="image">
                                Image Link
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter Image URL"
                                id="image"
                                defaultValue={image}
                                name="image" />
                            
                            {/* Average cost  */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                Average Cost
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="number"
                                placeholder="Average Cost in Euro"
                                id="cost"
                                name="cost"
                                defaultValue={cost}
                            />

                            {/* season  */}
                            {/* <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                Season
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Best season for the tour, like summer or winter"
                                id="season"
                                name="season"
                            /> */}

                            <label className="block mt-4 mb-2 dark:text-white" htmlFor="brand">Country Name</label>
                            <select
                                name="season"
                                id="season"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select Season"
                                defaultValue={season}
                            >
                                <option value="Summer" selected>
                                    Summer
                                </option>
                                <option value="Winter" selected>
                                    Winter
                                </option>
                                <option value="Autumn" selected>
                                    Autumn
                                </option>

                            
                            </select>
                            {/* travelDuaration */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="rating"
                            >
                                Travel Duration
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                maxLength={5}
                                max={15}
                                min={5}
                                type="number"
                                placeholder="Minimum tour duration 5 days"
                                id="travelDuaration"
                                name="travelDuaration"
                                defaultValue={travelDuaration}
                            />


                            {/* userName */}
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                User Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="User Name"
                                id="userName"
                                name="userName"
                                defaultValue={user?.userName}

                            />
                        </div>
                    </div>

                    {/* description  */}
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-center text-xl font-bold' >Location Description</h1>
                        <textarea className="textarea textarea-error w-[650px] h-[140px]"
                            name='description'
                            type="text"
                            placeholder="Description"
                            defaultValue={description}
                        >

                        </textarea>

                    </div>
                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="Add Updated Data"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateLocation;