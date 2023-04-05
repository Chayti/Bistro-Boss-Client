import React, { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from "react-router-dom";
import illustration from "../assets/others/authentication2.png";
import SocialAuth from "../components/SocialAuth";
import { AuthContext } from "../contexts/AuthProvider";

const Registration = () => {
  const [error, setError] = useState("");
  const { user, createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  
  const navigate = useNavigate();
  if (user) {
    navigate('/')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL?.value || "";
    const email = form.email.value;
    const password = form.password.value;


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUser(name, email);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL, email) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {
        
       })
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => { })
      .catch((error) => console.error(error));
  };

  const saveUser = (name, email) =>{
    const user ={name, email};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
        setCreatedUserEmail(email);
    })
}
  return (
    <div className="bg-authentication min-h-screen flex items-center">
      <section className="mx-auto p-12 h-full">
        <div className="grid md:grid-cols-2">
          <div className="">
            <Helmet>
              <title>BB Restaurant |  Registration</title>
            </Helmet>
            <h1 className="font-bold text-center text-3xl">Sign Up</h1>
            <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
              {/* Input field with level from daisyui */}
              <div className="form-control w-full max-w-xs mb-6">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="input input-bordered max-w-xs"
                />
              </div>
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
              <div className="form-control w-full max-w-xs mb-6">
                <input
                  type="submit"
                  value={"Sign Up"}
                  className="input input-bordered text-white w-full max-w-xs bg-[#d1a054] cursor-pointer"
                />
              </div>
            </form>
            <div className="md:w-1/2 mx-auto">
              <p className="font-semibold text-center my-6 text-[#d1a054]">
                Already registered? <Link className="font-bold" to='/login'>Go to log in</Link>
              </p>
            </div>
            <div className="md:w-1/2 mx-auto">
              <p className="font-semibold text-center my-6">Or sign up with</p>
              {/* Separate component for Social login  */}
              <SocialAuth saveUser= {saveUser} />
            </div>
          </div>

          <div className="">
            <img
              src={illustration}
              className="h-4/5 block mx-auto"
              alt="Password_image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
