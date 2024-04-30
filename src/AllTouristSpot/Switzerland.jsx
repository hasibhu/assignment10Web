
import { Link } from 'react-router-dom';

const Switzerland = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-10 mt-8'>
            <div><img className='w-[490px]' src="https://i.ibb.co/m8jVWq1/switzerland.jpg" alt="" /></div>
            <div className='flex flex-col'>
                <p className='w-[450px]'>Switzerland's natural beauty is as addictive as its <strong>mouthwatering chocolates</strong> – one taste and you'll be left craving more. Whether you are on the hiking trails outside Zermatt, laying eyes on the iconic Matterhorn for the first time, or marveling at the <strong> Eiger, Mönch, and Jungfrau</strong> mountains schussing down a ski trail beginning atop the <strong>Jungfraujoch</strong>, Switzerland seduces quickly.</p>
                
                <Link to='/switzerlandAll'><button className='btn btn-accent'>Look on Switzerland</button></Link>
            </div>
        </div>
    );
};

export default Switzerland;