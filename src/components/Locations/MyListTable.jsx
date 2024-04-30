import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import UseAuth from "../../Hooks/UseAuth";
import { useEffect } from "react";

const MyListTable = ({ data, setLocations }) => {
    const { user } = UseAuth() || {};
    
   
    
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/myLocation/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingLocation = data.filter(location => location._id !== _id);
                            setLocations(remainingLocation);
                        }
                    })
            }
        });
    }

    return (
        <tr className="border border-red-500">
            <td className="border border-red-500 text-center">{data.locationName}</td>
            <td className="border border-red-500 text-center">{data.countryName}</td>
            <td className="border border-red-500 text-center">{data.touristSpotName}</td>
            <td className="border border-red-500 text-center w-28">{data.season}</td>
            
            <td>
                <td className="border-r border-red-500 p-1">
                    <button onClick={() => handleDelete(data._id)} className="btn btn-accent w-28">Delete</button>
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