import { useEffect, useState } from 'react';
import pb from '..//..//components/lib/pocketbase';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";


const login = () => {

  const router =useRouter();
  const {register,handleSubmit}=useForm();
  const [isLoading,setLoading]=useState(false);
  const [isLogged,setLogged]=useState(false);

  useEffect(()=>{
    if(isLogged === true){
      router.push("/");
    }
  })

  async function log_in(data){
      setLoading(true)
      try{
          const authData=await pb.collection("users").authWithPassword(data.username,data.password);
      setLogged(pb.authStore.isValid);
      router.push('/');
      }catch(error){
          alert(error)
      }
      setLoading(false)
  }

  return (
    <>
    <div className = "flex flex-col justify-center items-center h-screen bg-slate-50">
        
    <form className = "flex flex-col w-1/4 p-8 items-center rounded-2xl justify-center drop-shadow-2xl bg-white" onSubmit= {handleSubmit(log_in)}>
      <h1 className="text-4xl bold mb-6 "> Login </h1>
      <input className = "p-2 m-3 w-full h-1/3 bg-slate-100 rounded-xl " required type="text" placeholder="Username" name = "username" {...register('username')}></input>
      <input className = "p-2 m-3 w-full h-1/3 bg-slate-100 rounded-xl " required type = "password" placeholder="Password" name = "password" {...register('password')}></input>
      <button className=" bg-emerald-600 text-center text-white p-2 mt-4 rounded-full h-1/3  w-full active:bg-green-400" type = "Submit" disabled={isLoading}>{isLoading? "Loading":"Login"}</button>
    </form>
    <div className="flex flex-col w-1/4 p-6 mt-3 items-center rounded-2xl justify-center drop-shadow-2xl bg-white">
        <h2>Not a user? <a href="/signup" className="text-blue">Sign Up</a></h2>
    </div>
    </div>
    </>

  )
}

export default login
