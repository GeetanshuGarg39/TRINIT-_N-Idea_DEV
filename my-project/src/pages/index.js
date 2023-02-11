import Sidebar from 'components/Sidebar'
import { useRouter } from 'next/router';
import { useEffect , useState} from 'react';
import pb from '..//..//components/lib/pocketbase';

export default function Home() {
  const router= useRouter();
  const [isLogged,setLogged]=useState(false);
  useEffect(()=>{
    if(pb.authStore.isValid){
      setLogged(true);
    }else{
      router.push("/login");
    }
  })
  async function logout(){
    pb.authStore.clear();
    setLogged(false);
    router.push("/login");
  }
  return (
    <>     
      <Sidebar/>   
      <button  className=" bg-emerald-600 text-center text-white p-2 mt-4 rounded-full h-1/3  w-full active:bg-green-400"  onClick={logout}> Logout </button>
    </>
  )
}
