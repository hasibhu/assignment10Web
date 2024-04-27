
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {

    const {
        user,
        signInWithEmailPassword,
        // googleSignIn,
        // githubSignIn,
        // setLoading,
        // loading,
    } = UseAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form?.email.value;
        const password = form?.password.value;

        // Sign In
        signInWithEmailPassword(email, password)
            .then((result) => {
                console.log(result);
                // setLoading(false);
                // navigate(location?.state ? location.state : "/");
                // toast.success("Login successful");
            })
            .catch((err) => {
                console.log(err)
                // setLoading(false);
                // toast.error(err.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please log in here</p>
                </div>
                {/* <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className="text-center mt-20">Not registered yet?</p>
                            <p className="text-center"> <span className="text-blue-400"> <Link to='/register'>Register</Link></span> here </p>
                        </div>
                    </form>
                </div> */}
                <form onSubmit={handleLogin} className="space-y-3 w-full ">
                    <div>
                        <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                            <legend className=" font-medium text-black/60">
                                Email
                            </legend>
                            <input
                                type="email"
                                name="email"
                                id="loginEmail"
                                placeholder="Email"
                                className="px-4 py-1 w-full focus:outline-0"
                            />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                            <legend className=" font-medium text-black/60">
                                Password
                            </legend>
                            <input
                                type="password"
                                name="password"
                                id="loginPassword"
                                placeholder="password"
                                className="px-4 py-1 w-full focus:outline-0"
                            />
                        </fieldset>
                    </div>

                    <button className="px-3 py-2 bg-[#FF497C] hover:bg-[#ab3154] rounded text-white font-semibold">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;