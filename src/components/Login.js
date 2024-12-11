import { useState } from "react";
import Header from "./Header"

const Login = () => {
     const [isSignInForm, setIsSignInForm] = useState(true);

     const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
     };

  return (
    <div>
        <Header />
       <div className="absolute">
        <img className=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg" 
        alt="logo"
        />
    </div>
    <form className="rounded-2xl w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">

        <h1 className=" font-bold text-3xl py-s">{isSignInForm ? "Sign In" : "Sign up"}</h1>

        {!isSignInForm && (<input type="text" placeholder="Full Name" className=" rounded-lg p-4 my-4 w-full bg-gray-500"/> )}
        {!isSignInForm && (<input type="number" placeholder="Phone number" className=" rounded-lg p-4 my-4 w-full bg-gray-500"/> )}

        <input type="text" placeholder="E-mail Address" className=" rounded-md p-4 my-4 w-full bg-gray-500"/>
        <input type="password" placeholder="password" className=" rounded-md p-4 my-4 w-full bg-gray-500" /> 
        <button className=" rounded-md p-4 my-4 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To Netfliix? Sign Up Now" : "Already Registered? Sign In Now."} </p>
    </form>
    </div>
  );
};
export default Login;