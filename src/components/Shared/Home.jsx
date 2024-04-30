

import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
import TopLocations from './TopLocations';
import ContactForm from './ContactForm';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopLocations></TopLocations>
            <NewsLetter></NewsLetter>
           <ContactForm></ContactForm>
          
        </div>
    );
};

export default Home;