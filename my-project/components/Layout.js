import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
    return(
        <>
            <header>
                <nav>
                    <Navbar/>
                </nav>
            </header>
            <main>
                <Sidebar/>
                {children}
            </main>
        </>
    )
}