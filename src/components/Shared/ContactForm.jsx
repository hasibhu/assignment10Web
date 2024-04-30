import React from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Display SweetAlert confirmation
        Swal.fire({
            title: 'Submission Received!',
            text: 'Thank you for contacting us. We will get back to you soon.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Clear form fields if needed
        event.target.reset();
    };

    return (
        <div className='border-t-4 mt-10 border-red-600 rounded-xl'>
            <form onSubmit={handleSubmit}>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Contact Us</h1>
                            <p className="py-6">To Know Our Special Offer and You Tour, Please Contact Us</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="tel" placeholder="Your Phone Number" className="input input-bordered" />

                                </div>
                                <textarea placeholder="Your Message Here" className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;
