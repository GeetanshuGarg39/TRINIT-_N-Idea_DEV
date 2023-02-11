import Sidebar from "components/Sidebar"
import { useState } from "react";
import { useForm } from "react-hook-form";
import pb from '..//..//components/lib/pocketbase'
import Section from "components/Section";

const post = () => {
  const formData = new FormData();
  const {register,handleSubmit}= useForm();
  const [isLoading,setLoading]=useState(false);
  async function createPost(data){
      setLoading(true)
      try{
        if(pb.authStore.isValid){
          formData.append("title",data.title)
          formData.append("description",data.description)
          formData.append("author",pb.authStore.model.id.toString())
          formData.append("image",data.image[0])
          const authData=await pb.collection("expert_post").create(formData);}
        else{
            alert("Please Log in  to create a post")
        }
      }catch(error){
          alert(error)
      }
      setLoading(false)
  }

  return (
    <>
    <Sidebar/>
    <Section/>
    <form className="flex flex-col max-w-4xl p-4 sm:ml-64 h-screen" onSubmit={handleSubmit(createPost)}>
    <h1 className=" text-center text-3xl py-5">Create Post</h1>
        
        <div className="flex flex-col items-center justify-center max-w-1/2 ">
        <input className="w-full bg-slate-100 pl-3 h-1/5 border-none block resize-none m-4 rounded-xl" placeholder="Title" name="title" {...register('title')}></input>
            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6 h-1/2">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" name="image"  {...register('image')} class="hidden" />
            </label>
            
            <textarea className="w-full bg-slate-100 h-1/3 border-none block resize-none m-4 rounded-xl" placeholder=" Description" name="description"  {...register('description')}></textarea>
            <button className="rounded-full w-1/5 text-xl text-white p-3 bg-blue-600 hover:bg-sky-600 " disabled={isLoading}>{isLoading? 'Loading':'Create'}</button>
            
        </div> 


    </form>
    
    </>
  )
}

export default post
