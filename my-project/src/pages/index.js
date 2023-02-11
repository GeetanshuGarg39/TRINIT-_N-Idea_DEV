import Sidebar from "components/Sidebar";
import pb from "components/lib/pocketbase"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Section from "components/Section";


export default function Home() {
    const [content, setContent] = useState();
    const [postData, setPostData] = useState([]);
    const getAllPosts = async () => {
        const resultList = await pb.collection('expert_post').getList(1, 50, {
            sort: "-created", '$autoCancel': false, expand: 'author,comment,comment.author'
        });
        setPostData(resultList.items)
    }

    useEffect(() => {
        getAllPosts();
        console.log(postData)
    }, [content])

    async function create_comment(id, index) {
        if (pb.authStore.isValid) {
            const data = {
                "author": pb.authStore.model.id,
                "content": content
            };
            if (content) {
                const record = await pb.collection('comment').create(data);

                console.log(record)
                console.log(id)
                console.log(index)
                const comment = {
                    "comment": [
                        ...postData[index].comment, record.id,
                    ]
                };
                const record2 = await pb.collection('expert_post').update(id, comment);
            }
            else {
                alert("Comment can not be empty");
            }
        } else {
            alert("Please login to post your comment")
        }

    }
    console.log(postData)

    return (
        <>
            <Sidebar />
            <Section/>
            <div className="p-4 sm:ml-64 max-w-4xl mr-5  h-full">

                {postData.map((post, index) => {
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
                                    <img class="rounded-t-lg w-full h-auto p-5" src={`http://127.0.0.1:8090/api/files/expert_post/${post.id}/${post.image}`} alt="" />
                                </a>
                                <a href="#">
                                    <h5 class="mb-2 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                </a>

                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                                <hr />



                                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                {/* <div class="relative">

                                    <input type="text" id="comment" name='content' class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post your comments here..." value={content} onChange={(e) => { setContent(e.target.value) }} />

                                    <button onClick={() => { create_comment(post.id, index) }} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                                </div> */}


                                <form className="mt-5">
                                    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                            <label for="comment" class="sr-only">Your comment</label>
                                            <textarea value={content} onChange={(e) => { setContent(e.target.value) }} id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                                        </div>
                                        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                            <button onClick={() => { create_comment(post.id, index) }} type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                                Post comment
                                            </button>
                                            <div class="flex pl-0 space-x-1 sm:pl-2">
                                                <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                                                    <span class="sr-only">Attach file</span>
                                                </button>
                                                <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                                    <span class="sr-only">Set location</span>
                                                </button>
                                                <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                                    <span class="sr-only">Upload image</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>


                                {post.expand.comment ? post.expand.comment.map((comment) => {
                                    return <>
                                    <div className="flex mt-3 bg-gray-50 items-center p-3">
                                        <div>
                                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        </div>
                                        <div className="mx-4">
                                        <h1 className="text-left ">{comment.expand.author.username}</h1>
                                        <p class="mb-3 font-light text-left text-gray-500 dark:text-gray-400">
                                            {comment.content}
                                        </p>
                                        </div>
                                        </div>


                                        <h2></h2>

                                    </>
                                }) : ""}
                                {console.log(post.expand.comment)}
                            </div>
                        </>
                    )
                })}

            </div>
            

        </>
    )
}
