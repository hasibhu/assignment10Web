import React, { useState, useEffect } from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


const Banner = () => {
    const [items, setItems] = useState([
        { name: 'France', image: 'https://i.ibb.co/qCkd9jS/img1.jpg', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', link:'/franceAll' },
        { name: 'Italy', image: 'https://i.ibb.co/jrRb11q/img2.jpg', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', link:'/italyAll' },
        { name: 'Spain', image: 'https://i.ibb.co/NSwVv8D/img3.jpg', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', link:'/spainAll' },
        {name: 'Netherlands', image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', link: '/netherlandsAll' },
        { name: 'Switzerland', image: 'https://i.ibb.co/jTQfmTq/img5.jpg', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!', link:'/switzerlandAll' },
        
    ]);

    const handleNext = () => {
        setItems(prevItems => [...prevItems.slice(1), prevItems[0]]);
    };

    const handlePrev = () => {
        setItems(prevItems => [prevItems[prevItems.length - 1], ...prevItems.slice(0, prevItems.length - 1)]);
    };

    return (
        <div className='w-[1200px] h-[600px] '>
            <div className="container ">
                <div className="slide">
                    {items.map((item, index) => (
                        <div className="item" key={index} style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="content">
                                <div className="name text-[#c5f641]">{item.name}</div>
                                {/* <div className="des">{item.description}</div> */}
                                <Link to={item.link}><button className='btn btn-secondary'>See More</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button">
                    <button className="prev text-red-600 " onClick={handlePrev}><FaArrowCircleLeft className='ml-1 text-3xl' /></button>
                    <button className="next text-red-600 " onClick={handleNext}><FaArrowCircleRight className='ml-1 text-3xl' /></button>
                </div>
            </div>
        </div>
    );
};




export default Banner;













// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import './Banner.css';
// import countriesData from '../../../public/countries.json';

// const Banner = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [countries, setCountries] = useState([]);

//     useEffect(() => {
//         setCountries(countriesData.countries);
//     }, []);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === countries.length - 1 ? 0 : prevIndex + 1));
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? countries.length - 1 : prevIndex - 1));
//     };

//     const moveNext = () => {
//         const items = document.querySelectorAll('.item');
//         document.querySelector('.slide').appendChild(items[0]);
//     };

//     const movePrev = () => {
//         const items = document.querySelectorAll('.item');
//         document.querySelector('.slide').prepend(items[items.length - 1]);
//     };

//     return (
//         <div className="container">
//             <div className="slide">
//                 {countries.map((country, index) => (
//                     <div
//                         key={index}
//                         className={`item ${index === currentIndex ? 'active' : ''}`}
//                         style={{ backgroundImage: `url(https://i.ibb.co/${['qCkd9jS', 'jrRb11q', 'NSwVv8D', 'Bq4Q0M8', 'jTQfmTq', 'RNkk6L0'][index]}/img${index + 1}.jpg)` }}
//                     >
//                         <div className="content">
//                             <div className="name">{country.name}</div>
//                             <div className="des">{country.description}</div>
//                             <a href={country.path_link}><button>See More</button></a>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="button">
//                 <button className="prev" onClick={() => { prevSlide(); movePrev(); }}>
//                     <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="next" onClick={() => { nextSlide(); moveNext(); }}>
//                     <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Banner;
































// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import './Banner.css';

// const Banner = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
//     };

//     const moveNext = () => {
//         const items = document.querySelectorAll('.item');
//         document.querySelector('.slide').appendChild(items[0]);
//     };

//     const movePrev = () => {
//         const items = document.querySelectorAll('.item');
//         document.querySelector('.slide').prepend(items[items.length - 1]);
//     };

//     return (
//         <div className="container">
//             <div className="slide">
//                 {[1, 2, 3, 4, 5, 6].map((index) => (
//                     <div
//                         key={index}
//                         className={`item ${index === currentIndex + 1 ? 'active' : ''}`}
//                         style={{ backgroundImage: `url(https://i.ibb.co/${['qCkd9jS', 'jrRb11q', 'NSwVv8D', 'Bq4Q0M8', 'jTQfmTq', 'RNkk6L0'][index - 1]}/img${index}.jpg)` }}
//                     >
//                         <div className="content">
//                             <div className="name">Country {index}</div>
//                             <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
//                             <button>See More</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="button">
//                 <button className="prev" onClick={() => { prevSlide(); movePrev(); }}>
//                     <FontAwesomeIcon icon={faArrowLeft} />
//                 </button>
//                 <button className="next" onClick={() => { nextSlide(); moveNext(); }}>
//                     <FontAwesomeIcon icon={faArrowRight} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Banner;







