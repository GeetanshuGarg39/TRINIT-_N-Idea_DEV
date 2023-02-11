import Sidebar from "components/Sidebar";
// import { useRouter } from 'next/router';
// import { useEffect , useState} from 'react';
// import pb from '..//..//components/lib/pocketbase';

export default function Home() {
    //   const router= useRouter();
    //   const [isLogged,setLogged]=useState(false);
    //   useEffect(()=>{
    //     if(pb.authStore.isValid){
    //       setLogged(true);
    //     }else{
    //       router.push("/login");
    //     }
    //   })
    //   async function logout(){
    //     pb.authStore.clear();
    //     setLogged(false);
    //     router.push("/login");
    //   }
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64 max-w-4xl  h-full">

                <div class="w-full p-6 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
                    
                    <div class="flex items-center pb-4 space-x-4">
                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                    <a href="#">
                        <img class="rounded-t-lg w-full h-auto p-5"  src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" alt="" />
                    </a>
                    <a href="#">
                        <h5 class="mb-2 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo delectus, itaque maiores temporibus repellat. Voluptas natus recusandae laboriosam illo temporibus delectus voluptates! Neque earum itaque quibusdam, fugiat dolores dolorem.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800 hover:text-green-400">
                    <p className="mx-3"><ion-icon  name="chatbox-ellipses-outline"></ion-icon></p>
                        Comments
                        
                    </a>
                </div>
                <div class="w-full p-6 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
                    
                    <div class="flex items-center pb-4 space-x-4">
                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </div>
                    <a href="#">
                        <img class="rounded-t-lg w-full h-auto p-5"  src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" alt="" />
                    </a>
                    <a href="#">
                        <h5 class="mb-2 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo delectus, itaque maiores temporibus repellat. Voluptas natus recusandae laboriosam illo temporibus delectus voluptates! Neque earum itaque quibusdam, fugiat dolores dolorem.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800 hover:text-green-400">
                    <p className="mx-3"><ion-icon  name="chatbox-ellipses-outline"></ion-icon></p>
                        Comments
                        
                    </a>
                </div>

            </div>

        </>
    )
}
