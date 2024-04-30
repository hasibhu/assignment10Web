import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItalyDetails = () => {
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
const { touristSpotName, countryName, locationName, numberOfVisitors, cost, image, season, travelDuaration,  description,  } = italyData;
   
    
    return (
        <div>
            <h1 className="text-center mt-8 mb-8  text-4xl text-[#9ACD32] ">Details of Location : {touristSpotName}</h1>
            {italyData && (
                <div className="flex flex-col gap-8 justify-center items-center">
                    <div>
                        <img className="w-[750px] text-center" src={image} alt="Image is Not available. Please insert a valid image it" />
                    </div>
                    <div>
                        <p className="text-center"><strong className="text-2xl">Tourist Spot Name:</strong> <br /> {touristSpotName}</p>

                        <p className="text-center"><strong>Location Name:</strong> <br /> {locationName}</p>
                        <p className="text-center"><strong>Country Name:</strong> <br /> {countryName}</p>
                        <p className="text-center"><strong>Cost:</strong> <br /> {cost} Euro</p>
                        <p className="text-center"><strong>Season:</strong> <br /> {season}</p>
                        <p className="text-center"><strong>Number Of Visitors:</strong> <br /> {numberOfVisitors}</p>
                        <p className="text-center"><strong>Travel Duaration:</strong> <br />{travelDuaration} Days</p>
                        <p className="text-center" ><strong>Description:</strong> <br /> {description}</p>
                    </div>

                   
                </div>
            )}
        </div>
    );
};

export default ItalyDetails;







































// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ItalyDetails = () => {
//     const { id } = useParams();
//     console.log(id);
//     const [italyData, setItalyData] = useState(null);

//     useEffect(() => {
//         fetch('https://assignment10-server-eta.vercel.app/')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Filter the data array to find the item with matching _id
//                 const foundData = data.find(item => item._id === id);
//                 setItalyData(foundData);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, [id]);
//     const { touristSpotName, countryName, locationName, numberOfVisitors, cost, image, season, travelDuaration,  description,  } = italyData;
//     return (
//         <div>
//             <h1 className="text-center mt-8 mb-8  text-4xl text-[#9ACD32] ">Details of Location : {touristSpotName}</h1>
//             {italyData && (
//                 <div className="flex flex-col gap-8 justify-center items-center">
//                     <div>
//                         <img className="w-[750px]" src={image} alt="" />
//                     </div>
//                     <div>
//                         <p><strong>Tourist Spot Name:</strong> {touristSpotName}</p>
//                         <p><strong>Location Name:</strong> {locationName}</p>
//                         <p><strong>Country Name:</strong> {countryName}</p>
//                         <p><strong>Cost:</strong> {cost}</p>
//                         <p><strong>Season:</strong> {season}</p>
//                         <p><strong>Number Of Visitors:</strong> {numberOfVisitors}</p>
//                         <p><strong>Travel Duaration:</strong> {travelDuaration}</p>
//                         <p><strong>Description:</strong> {description}</p>
//                     </div>

                   
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ItalyDetails;
