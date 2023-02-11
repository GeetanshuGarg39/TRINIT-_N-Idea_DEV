import Sidebar from "components/Sidebar";
import pb from "components/lib/pocketbase"
import { useEffect, useState } from "react";


export default function Home() {
    const [content,setContent]=useState();
    const [postData, setPostData] = useState([]);
    const getAllPosts = async () => {
        const resultList = await pb.collection('expert_post').getList(1, 50, {sort:"-created", '$autoCancel': false,expand: 'author,comment'
        });
        setPostData(resultList.items)
    }

    useEffect(()=>{
        getAllPosts();
        console.log(postData)
    },[content])

    async function create_comment(id,index){
        const data = {
            "author": pb.authStore.model.id,
            "content": content
        };
        const record = await pb.collection('comment').create(data);
        console.log(record)
        console.log(id)
        console.log(index)
        const comment = {
            "comment": [
                ...postData[index].comment,record.id,
            ]
        };
        const record2 = await pb.collection('expert_post').update(id, comment);
    }

    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64 max-w-4xl  h-full">

                {postData.map((post,index)=>{
                    return (
                        <>
                        <div class="w-full p-6 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
                    
                    <div class="flex items-center pb-4 space-x-4">
                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="font-medium dark:text-white">
                            <div>{post.expand.author.username} <span className=" text-green-500">#{post.expand.author.group} </span></div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                    <a href="#">
                        <img class="rounded-t-lg w-full h-auto p-5"  src={`http://127.0.0.1:8090/api/files/expert_post/${post.id}/${post.image}`} alt="" />
                    </a>
                    <a href="#">
                        <h5 class="mb-2 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800 hover:text-green-400">
                    <p className="mx-3"><ion-icon  name="chatbox-ellipses-outline"></ion-icon></p>
                        Comments
                    </a>
                    <input type='text' name='content' placeholder="Add comment" value={content} onChange={(e)=>{setContent(e.target.value)}} ></input>
                    <button onClick={()=>{create_comment(post.id,index)}}>Click Me</button>
                </div>
                        </>
                    )
                })}               

            </div>

        </>
    )
}
