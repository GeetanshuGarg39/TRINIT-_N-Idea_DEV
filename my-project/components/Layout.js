import Navbar from "./Navbar";

export default function Layout({children}) {
    return(
        <>
            <header>
                <nav>
                    <Navbar/>
                </nav>
            </header>
            
            <main>                
                {children}
            </main>
        </>
    )
}