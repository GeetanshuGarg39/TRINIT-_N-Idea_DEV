import { useState } from 'react';
import { useForm } from 'react-hook-form';
import pb from '..//..//components/lib/pocketbase';
import { useRouter } from "next/router";
const signup = () => {
  const router = useRouter()
  const {register,handleSubmit}= useForm();
  const [isLoading,setLoading]=useState(false);

  async function sign_up(data){
      setLoading(true)
      try{
          const record = await pb.collection('users').create(data);
          router.push('/')
      }catch(error){
          alert(error)
      }
      setLoading(false)

  } 
  return (
    <>
    <div className = " flex flex-col justify-center items-center h-screen bg-slate-50">
        
    <form className = "flex flex-col w-1/4 p-8 items-center rounded-2xl justify-center drop-shadow-xl bg-white" onSubmit={handleSubmit(sign_up)}>
      <h1 className="text-5xl bold mb-6 font-medium "> Sign Up </h1>
      <input className = "p-2 m-3 w-full h-1/3 bg-slate-100 rounded-xl " required type="text" placeholder="Username" name = "username"  {...register('username')}></input>
      <input className = "p-2 m-3 w-full h-1/3 bg-slate-100 rounded-xl " required type="email" placeholder="Email" name = "email" {...register('email')} ></input>
      <input className = "p-2 m-3 w-full h-1/3 bg-slate-100 rounded-xl " required type = "password" placeholder="Password" name = "password" {...register('password')}></input>
      <input className = "p-2 m-3 w-full h-1/3 bg-slate-100 rounded-xl " required type = "password" placeholder="Confirm Password" name = "passwordConfirm" {...register('passwordConfirm')}></input>
      <div className='flex flex-col w-full '>
      <label>Want to log in as:</label>
      <label className='flex items-center p-2 font-xl'><input className = " bg-slate-100 rounded-xl items-left m-2 " required type="radio"  name = "group" {...register('group')}/>Farmer</label>
      
      <label className='flex items-center p-2 font-xl'><input className = " bg-slate-100 rounded-xl m-2 " required type="radio"  name = "group" {...register('group')}/>Enthusiast</label>
      </div>
      <button className=" bg-emerald-600 text-center text-white p-2 mt-4 rounded-full h-1/3  w-full active:bg-green-400" type = "Submit" disabled={isLoading}>{isLoading? "Loading":"Sign up"}</button>
      
    </form>
    <div className="flex flex-col w-1/4 p-6 mt-4 items-center rounded-2xl justify-center drop-shadow-2xl bg-white">
        <h2>Already a user? <a href="/login" className="text-blue">Log In</a></h2>
    </div>
    </div>
    </>
  )
}

export default signup
