import  { useState } from 'react';
import Swal from 'sweetalert2';
const NewsLetter = () => {
    // State to store the email address
    const [email, setEmail] = useState('');

    // Function to handle email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can implement the logic to send the email address to your backend or handle it as needed
        console.log("Email submitted:", email);
        Swal.fire({
            icon: 'success',
            title: 'Subscription Successful!',
            text: 'Thank you for subscribing to our newsletter.',
        });
        // Clear the input field after submission
        setEmail('');
    };

    return (
        <div className="newsletter mt-[140px] bg-orange-200 flex flex-col justify-center items-center pb-28">
            <h2 className='text-3xl p-10 text-emerald-500'>Subscribe to Our Newsletter</h2>
            <p className='p-7'>Stay updated with our latest news and updates by subscribing to our newsletter.</p>
            <form onSubmit={handleSubmit}>
                <label className='mr-2' htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button className='btn btn-success ml-2' type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;
