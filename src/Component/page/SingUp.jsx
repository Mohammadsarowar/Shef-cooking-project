import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { AuthContext } from "../../Auth-Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import usedTitle from "../../Auth-Provider/usedTitle";

const SignUp = () => {
  const { createUser,LoginWithGoogle,LogInWithGithub  } = useContext(AuthContext);
  usedTitle("SignUp")
  const [error, setError] = useState("");
  const [accept , setAccept] = useState();
  const [success, setSuccess] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('')
    setError('')
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if(!/(?=.*[A-Z])/.test(password)){
       setError("please add at least one uppercase");
       return;
    }
    else if(!/(?=.*[0-9])/.test(password)){
       setError('Please add at least tow numbers')
       return;
    }
    else if(password.length<6){
      setError('please add at least 6 characters in your password')
      return;
    }
    createUser(email, password)
      .then((result) => {
        const login = result.user; 
        setError('')
        e.target.reset();
        console.log(login);
        setSuccess('user has been created successfully')
      })
      .catch((error) => {
        setError(error.message);
        setSuccess('')
      });
    console.log(email);
    // handle form submission logic here
  };
  const handleAccepted = (event) =>{
    setAccept(event.target.checked);
}

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up for an account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Or{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            log in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="
              block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  onClick={handleAccepted}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label 
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                <button type="checkbox" name='accept' >Remember me</button>
            
                </label>
              </div>

              <div className="text-sm">
              <small>already have an account  <Link className='link link-secondary ml-1' to='/login'>Login</Link></small>
              </div>
            </div>

            <div>
            <div className="mb-5">
           <p className="text-rose-800 mt-5 text-center bold">{error}</p>
           <p className="text-rose-800 mt-5 text-center bold">{success}</p>
          </div>
              <button disabled={!accept}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white btn"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 11c0-2.757 2.243-5 5-5h1V5c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h1c2.757 0 5 2.243 5 5v2c0 2.757-2.243 5-5 5h-1v1c0 1.654-1.346 3-3 3h-2c-1.654 0-3-1.346-3-3v-1h-1c-2.757 0-5-2.243-5-5v-2zm5 0c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
         
          <div className="flex justify-around mt-5 gap-2"> 
        <button onClick={LoginWithGoogle} className='btn btn-outline btn-secondary'><FaGoogle className='mr-1 text-lg' /> SignIn with Google</button><br/>
        <button onClick={LogInWithGithub} className='btn btn-outline'> <FaGithub className='mr-1 text-lg'/>SignIn with Github</button>

        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
