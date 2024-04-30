import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import SocialLogin from "./SocialLogin";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoLink = form.photoLink.value;
        console.log(name, email, password, photoLink);
        
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    Swal.fire({
                        title: "Registered Successfully!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
               }
            })
            .catch(error => {
            console.error(error);
        })
        
        
        
        // const userInfo = { name, email, password, photoLink };
        // send data
        // fetch('http://localhost:3000/user', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(userInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
    }
    


    return (
        <div className="hero -mt-[240px] ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Please register here</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name = "name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name = "password" placeholder="password" className="input input-bordered" required />
                         
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name = "photoLink" placeholder="Photo Link" className="input input-bordered" required />
                         
                        </div>

                        {/* register button */}
                        <input type="submit" value="Register" className="btn btn-primary mt-6" />


                        <div className="form-control ">
                            <p className="text-center mt-10">Already registered?</p>
                            <p className="text-center"> <span className="text-blue-400"> <Link to='/login'>Login</Link></span> here </p>
                        </div>
                    </form>


                </div>
            </div>

            <div className='mt-[920px] mb-28  '>
                <h1 className='text-center mt-20 border-t-2 border-b-2 border-red-400'>OR</h1>
                <SocialLogin></SocialLogin>
            </div>             
        </div>
    );
};

export default Register;