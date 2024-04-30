import { Link } from "react-router-dom";


const MyListTable = ({ data }) => {

    return (
        <tr className="border border-red-500">
            <td className="border border-red-500 text-center">{data.locationName}</td>
            <td className="border border-red-500 text-center">{data.countryName}</td>
            <td className="border border-red-500 text-center">{data.touristSpotName}</td>
            <td className="border border-red-500 text-center w-28">{data.season}</td>
            
            <td>
                <td className="border-r border-red-500 p-1">
                    <button className="btn btn-accent w-28">Delete</button>
                </td> 

                <td className="m-auto p-1" >
                    <Link to={`/updateLocation/${data._id}`}>
                        <button className="btn btn-info w-28">Update</button>
                    </Link>
                </td>

            </td>
        </tr>
    );
};


export default MyListTable;