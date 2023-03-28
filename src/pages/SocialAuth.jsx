import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";

const SocialAuth = ({ navigate, from }) => {
  const { setLoading, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleProviderAuth = (provider) => {
    providerLogin(provider)
      .then((result) => {
        console.log("user", result?.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="flex justify-around">
      <button
        className="btn btn-circle btn-outline bg-[#F5F5F8] hover:bg-[#d1a054]"
        onClick={() => handleProviderAuth(facebookProvider)}
      >
        <FaFacebookF color="black" />
      </button>
      <button
        className="btn btn-circle btn-outline bg-[#F5F5F8] hover:bg-[#d1a054]"
        onClick={() => handleProviderAuth(googleProvider)}
      >
        <FaGoogle color="black" />
      </button>
      <button
        className="btn btn-circle btn-outline bg-[#F5F5F8] hover:bg-[#d1a054]"
        onClick={() => handleProviderAuth(githubProvider)}
      >
        <FaGithub color="black" />
      </button>
    </div>
  );
};

export default SocialAuth;
