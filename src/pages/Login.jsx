import React, { useContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from "react-router-dom";
import illustration from "../assets/others/authentication2.png";
import SocialAuth from "../components/SocialAuth";
import { AuthContext } from "../contexts/AuthProvider";
import useToken from "../Hooks/useToken";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  const [error, setError] = useState("");
  const { user, signIn, setLoading } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState('');

  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useToken(loginUserEmail);
  const from = location.state?.from?.pathname || "/";


  if (token) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user.accessToken);
        setLoginUserEmail(user.email);

        form.reset();
        setError("");

      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadCaptchaEnginge(6)
  }, [])
  const handleCaptcha = (e) => {
    const captcha = e.target.value
    console.log(captcha)
    if (validateCaptcha(captcha) == true) {

      setDisabled(false)
    }

    else {

      setDisabled(true)
    }
  }
  return (
    <div className="bg-authentication min-h-screen flex items-center">
      {
        user && navigate(from, { replace: true })
      }
      <section className="container mx-auto p-12 my-10 login-div">
        <div className="grid md:grid-cols-2">
          <div className="">
            <Helmet>
              <title>BB Restaurant |  Login</title>
            </Helmet>
            <img
              src={illustration}
              className="h-4/5 block mx-auto"
              alt="Password_image"
            />
          </div>
          <div className="">
            <h1 className="font-bold text-center text-3xl">Login</h1>
            <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
              {/* Input field with level from daisyui */}
              <div className="form-control w-full max-w-xs mb-6">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mb-6">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
<<<<<<< HEAD
             
              < LoadCanvasTemplate reloadColor="red" />
=======

              <LoadCanvasTemplate />
>>>>>>> 786bdebe5d2c93abc9df558445c9f6cf1740102e
              <input
                type="text"
                name="text"
                placeholder="Type here"
                onBlur={handleCaptcha}
                className="input input-bordered w-full max-w-xs"
              />
              <div className="form-control w-full max-w-xs mb-6">
                <input

                  type="submit"
                  disabled={disabled}
                  className={`bg-[#d1a054] mt-5 text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}

                  value={"Sign In"}

                />
              </div>
            </form>

            <div className="md:w-1/2 mx-auto">
              <p className="font-semibold text-center my-6 text-[#d1a054]">
                New here? <Link to='/register' className="font-bold">Create a New Account</Link>
              </p>
            </div>

            <div className="md:w-1/2 mx-auto">
              <p className="font-semibold text-center my-6">Or sign in with</p>
              {/* Separate component for Social login  */}
              <SocialAuth />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
