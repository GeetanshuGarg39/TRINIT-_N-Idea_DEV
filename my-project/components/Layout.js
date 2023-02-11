import Navbar from "./Navbar";
import pb from "..//components/lib/pocketbase";
import { useRouter } from "next/router";


export default function Layout({children}) {
    const router=useRouter()
    function logout(){;
        pb.authStore.clear();
        router.push("/login");
    }
    return(
        <>
            <header>
                <nav>
                    <Navbar logout={logout}/>
                </nav>
            </header>
            
            <main>                    
                {children}
            </main>
        </>
    )
}