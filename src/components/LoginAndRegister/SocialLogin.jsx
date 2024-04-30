
import { useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = UseAuth();

    //Navigation system
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';

    // onclik function 
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(form)
                }
            })
    }
    return (
        <div>
            <div className="form-control mt-10 ">
                <button onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-integration  bg-slate-300 h-12 w-[380px]">
                    <img className='w-8 h-8' src="https://static.typingclub.com/m/website/authen/google.svg" alt="" />
                    <p className='text-xl ml-6'>Login With Google</p>
                </button>
            </div>

            <div onClick={() => handleSocialLogin(githubLogin)}
                className="form-control mt-10 ">
                <button className="btn btn-integration  bg-slate-300 h-12 w-[380px]">
                    <FaGithub className='text-4xl' />
                    <p className='text-xl ml-6'>Login With Github</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;