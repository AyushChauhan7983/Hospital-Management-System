import React from 'react';
import imagedot from '../assets/dots.png';
import imageName from '../assets/trafalgar-header illustration 1.png';
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useLogin } from '../hooks/useLogin'

function Button({ text }) {
  return (
    <button className='bg-[#6657C6] w-[100px] h-[50px] text-[24px] rounded-md sm:w-[200px] sm:h-[60px] md:w-[200px] md:h-[70px] lg:w-[150px] lg:h-[50px] shadow-xl'>{text}</button>
  );
}

function ImageComponent({ namee, w, h }) {
  return (
    <img style={{ width: w, height: h }} src={namee} alt="trafalgar_image"/>
  );
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()


  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="App">
      <div className="min-h-screen bg-[#5643CD]">
        <ImageComponent namee={imagedot} w="131.58px" h="100.53px" />
        <div className='w-full flex flex-row justify-around'>
          <div className='relative w-full sm:w-[400px] h-[550px] flex justify-around flex-wrap flex-col items-center font-bold text-[24px]'>
            <div className='flex items-start font-sans pr-56'>
              <h1 className="text-[40px]">Healed</h1>
            </div>
            <form className='relative bg-[#6657C6] w-full sm:w-[554px] h-[275px] flex flex-col justify-evenly items-start rounded-md shadow-xl' onSubmit={handleSubmit}>
              <div className='px-10'>
                <label htmlFor="email">Email </label><br />
                <input 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  className='rounded bg-gray-300 px-3 font-sm text-gray-900' id="email" name='email'
                />
                <br />
                </div>
              <div className='px-10'>
                <label htmlFor="pass">Password </label><br />
                <input
                  type="password" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}
                  className='rounded bg-gray-300 px-3 font-sm text-gray-900' id="pass" name='pass'
                />
                <br />
              </div>
              <button disabled={isLoading} className=''>Log In</button>
              {error && <div className="error">{error}</div>}
            </form>
            {/*<Button className='' text={'Log In'} />*/}
            <div className='w-full flex flex-row justify-evenly items-center'>
              <label htmlFor='but' className='text-[#E5E9F6]'>Don't have an account?</label>
              <Link to='/signup'><Button className='' text={'Sign Up'} /></Link>
            </div>
          </div>
          <ImageComponent className='absolute right-0' namee={imageName} w="600px" h="500px" />
        </div>
      </div>
    </div>
  );
}

export default Login;