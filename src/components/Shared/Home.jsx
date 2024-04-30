

import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
import TopLocations from './TopLocations';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <TopLocations></TopLocations>
           <NewsLetter></NewsLetter>
          
        </div>
    );
};

export default Home;