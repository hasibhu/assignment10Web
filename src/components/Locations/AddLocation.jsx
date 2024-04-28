
import UseAuth from '../../Hooks/UseAuth';

const AddLocation = () => {
    const { user } = UseAuth() || {};
    // const email = user.email;
    const handleAddLocation = (e) => {
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
        const userName = form.userName.value; 
        const email = user.email;

        // console.log(name, price, image, type)

        const info = { touristSpotName, countryName, locationName, numberOfVisitors, cost, image, season, travelDuaration, userName, email };
        // console.log(info);
        

        // fetch("http://localhost:5000/addProduct", {
        //     method: "POST",
        //     headers: { "Content-type": "application/json" },
        //     body: JSON.stringify(info)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data?.insertedId) {
        //             alert("bhai data insert hoice")
        //         }
        //     })

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
                            Your Location
                        </span>
                    </p>
                </div>
                {/* form */}
                <form onSubmit={handleAddLocation}>
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
                                id="name"
                                name="touristSpotName"
                            />

                        {/* country names */}
                            {/* <label className="block mt-4 mb-2 dark:text-white" htmlFor="brand">Country Name</label>
                            <select
                                name="countryName"
                                id="country"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select Country"
                            >
                                <option value="Test" selected>
                                    France
                                </option>
                                <option value="Test2" selected>
                                    Italy
                                </option>
                                <option value="Test3" selected>
                                    Spain
                                </option>
                                <option value="Test3" selected>
                                    England
                                </option>
                                <option value="Test" selected>
                                    Netherlands
                                </option>
                                <option value="Test2" selected>
                                    Switzerland
                                </option>
                                
                            </select> */}
                            <label
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
                            />

                            
                       
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
                            />

                            {/* Number of Visitors Per Year  */}
                            
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                Number of Visitors Per Year
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Number of Visitors Per Year"
                                id="numberOfVisitors"
                                name="numberOfVisitors"
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
                                defaultValue={user? user.email:''}
                                
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
                                name="image"/>
                        
                            {/* Average cost  */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                Average Cost
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Average Cost in Euro"
                                id="cost"
                                name="cost"
                            />
                       
                            {/* season  */}
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                Season
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Best season for the tour, like summer or winter"
                                id="season"
                                name="season"
                            />

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
                                
                            />
                        </div>
                    </div>

                    {/* description  */}
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-center text-xl font-bold' >Location Description</h1>
                        <textarea className="textarea textarea-error w-[650px] h-[140px]" name='description' type="text" placeholder="Description"></textarea>

                    </div>
                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="Add Location"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddLocation;