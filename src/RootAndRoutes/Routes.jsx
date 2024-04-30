import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Shared/Home";

import Login from "../components/LoginAndRegister/Login"
import Register from "../components/LoginAndRegister/Register"
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import AllTouristSpot from "../AllTouristSpot/AllTouristSpot";
import FranceAll from "../AllTouristSpot/FranceAll";
import AddLocation from "../components/Locations/AddLocation";
import MyListPage from "../components/Locations/MyListPage";
import UpdateLocation from "../components/Locations/UpdateLocation";
import ItalyAll from "../AllTouristSpot/ItalyAll";
import ItalyDetails from "../AllTouristSpot/ItalyDetails";
import EnglandAll from "../AllTouristSpot/EnglandAll";
import NetherlandsAll from "../AllTouristSpot/NetherlandsAll";
import SpainAll from "../AllTouristSpot/SpainAll";
import SwitzerlandAll from "../AllTouristSpot/SwitzerlandAll";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                loader: () => fetch('/data.json'),
                element: <Home></Home>
                
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>
            },
            {
                path: '/englandAll',
                element: <EnglandAll></EnglandAll>
            },
            {
                path: '/franceAll',
                element: <FranceAll></FranceAll>
            },
            {
                path: '/italyAll',
                element: <ItalyAll></ItalyAll>
            },
            {
                path: '/italyDetails/:id',
                element: <ItalyDetails></ItalyDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/myLocation/${params.id}`).then(res => res.json())
            },
            {
                path: '/netherlandsAll',
                element: <NetherlandsAll></NetherlandsAll>
            },
            {
                path: '/spainAll',
                element: <SpainAll></SpainAll>
            },
            {
                path: '/switzerlandAll',
                element: <SwitzerlandAll></SwitzerlandAll>
            },
            {
                path: '/addLocation',
                element: <AddLocation></AddLocation>
            },
            {
                path: '/myListPage',
                element: <MyListPage></MyListPage>
            },
            {
                path: '/updateLocation/:id',
                element: <UpdateLocation></UpdateLocation>,
                
            },
           
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;