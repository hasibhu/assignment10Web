import { Link } from "react-router-dom";

const France = () => {
    return (
        <div className='flex lg:flex-row justify-center items-center gap-10 mt-8'>
            <div><img className='w-[490px]' src="https://i.ibb.co/9NgTfb3/france.jpg" alt="" /></div>
            <div className='flex flex-col'>
                <p className="w-[460px]">France delights photographers with an endless source of inspiration, from the <strong>Eiffel Tower</strong> in Paris to majestic castles in the <strong>Loire Valley</strong> and dreamy seaside scenes of the <strong>French Riviera</strong>. </p>
                <Link to='/franceAll'><button className='btn btn-accent'>Look on France</button></Link>
            </div>
        </div>
    );
};

export default France;