import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import MyListTable from "./MyListTable";


const MyListPage = () => {
    // import user from provider 
    const { user } = UseAuth() || {};
    //store imported data from DB
    const [locations, setLocations] = useState([]); 
   
    useEffect(() => {
        fetch(`http://localhost:3000/myLocation/${user?.email}`)
            .then(res => res.json()) 
            .then(data => {
                // console.log(data.length);
                setLocations(data)
            }) 
    }, [locations])
    
    return (
        <div className=" bg-orange-200 p-10 mt-10">
            <h1 className="text-2xl font-bold text-center mt-6">My Listed Locations</h1>
            <div className="flex justify-center items-center mt-10  ">
                

                <table className="w-[890px] ">
                    <thead>
                        <tr className="border border-red-500 h-16">
                            <th className="border border-red-500 ">Location Name</th>
                            <th className="border border-red-500">Country Name</th>
                            <th className="border border-red-500">Tourist Spot Name</th>

                            <th className="border border-red-500">Season</th>


                            <th className="border border-red-500 w-[227px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="border border-red-500">
                        {
                            locations.map(location => <MyListTable
                                key={location._id}
                                data={location}
                                setLocations={setLocations}
                            >
                                
                                </MyListTable>)
                        }
                    </tbody>
                </table>

            </div>
       </div>
    );
};

export default MyListPage;