import { useState, useRef} from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";


const Login = () => {
     const [isSignInForm, setIsSignInForm] = useState(true);
     const [errorMessage, setErrorMessage] = useState(null);
     const dispatch = useDispatch();

     const name = useRef(null);
     const email = useRef(null);
     const password =useRef(null);

     const handleButtonClick = () => {
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
      if(message) return;
        
      //  Sign In Sign up Logic
      if(!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value, 
          password.current.value
        )
        
        
        .then((userCredential) => {
        const user = userCredential.user;
            updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
           .then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid:uid, 
                email:email, 
                displayName: displayName, 
                photoURL:photoURL
              })
            );
                  
           })
           .catch((error) => {
            setErrorMessage(error.message)
         });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage);
        });

      } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value, 
        password.current.value
      )
       .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    
      
      })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" + errorMessage)
      });
      }
    };

     const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
     };

  return (
    <div>
      <Header />
       <div className="absolute">
        <img className=""
        src={BG_URL} alt="logo" />
    </div>
    <form onSubmit={(e) =>e.preventDefault()} className="rounded-2xl w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">

        <h1 className=" font-bold text-3xl py-s">{isSignInForm ? "Sign In" : "Sign up"}</h1>

        {!isSignInForm && (<input ref={name} type="text" placeholder="Name" className=" rounded-lg p-4 my-4 w-full bg-gray-500"/> )}

        <input ref={email} type="text" placeholder="E-mail Address" className=" rounded-md p-4 my-4 w-full bg-gray-500"/>
        <input ref={password} type="password" placeholder="password" className=" rounded-md p-4 my-4 w-full bg-gray-500" /> 
        
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>

        <button className=" rounded-md p-4 my-4 bg-red-700 w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To Netfliix? Sign Up Now" : "Already Registered? Sign In Now."} </p>
    </form>
    </div>
  );
};
export default Login;