import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";


const MyListPage = () => {
    // import user from provider 
    const { user } = UseAuth() || {};
    //store imported data from DB
    const [location, setLocation] = useState([]); 
    // console.log(location);
    // useEffect(()=>{}, [])
    useEffect(() => {
        fetch(`http://localhost:3000/myLocation/${user?.email}`)
            .then(res => res.json()) 
            .then(data => {
                // console.log(data);
                setLocation(data)
            }) 
    }, [user])
    return (
        <div>
            <h1>My list will be updated soon...</h1>
        </div>
    );
};

export default MyListPage;