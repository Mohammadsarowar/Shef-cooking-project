
import { useContext, useState } from 'react';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Auth-Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import usedTitle from '../../Auth-Provider/usedTitle';

const Login = () => {
  const {newSingIn,LoginWithGoogle,LogInWithGithub} = useContext(AuthContext)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(""); 
  console.log(error);
  const location = useLocation()
  const navigate = useNavigate()
  usedTitle('Login')
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = location.state?.from?.pathname || "/"
    const form = event.target;
    const email = form.email.value;
    const password  = form.password.value

    newSingIn(email,password)
    .then((result)=>{
      const login = result.user;
      navigate(from,{replace:true})
      console.log(login);
      setError('')
      event.target.reset();
      setSuccess('user has been created successfully')
    
    })
    .catch(error=>{
      setError(error.message);
      setSuccess('')
    // Submit login credentials to server and handle response
  });
  }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" />
            <label className="label">
          
             
              <a href="#" className="label-text-alt link-hover link link-secondary">Forgot password?</a>
            </label>
          </div>
           <div><p className='text-rose-800 mt-5 text-center bold'>{error}</p> 
            
            </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary">Login</button>
          </div>
        </form> 
          <div>
    
          </div>
        <div className='mx-auto'> 
        <button onClick={LoginWithGoogle} className='btn btn-outline btn-secondary mb-5'><FaGoogle className='mr-1 text-lg' /> Login with Google</button><br/>
        <button onClick={LogInWithGithub} className='btn btn-outline mb-5'> <FaGithub className='mr-1 text-lg'/> Login with Github</button>

        </div>
       
      </div>
    </div>
  </div>
  );
}

export default Login;
