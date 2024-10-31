import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";


const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
                <main className="flex-1 ">
                    <Outlet/>
                </main>
            <Footer/>
        </div>
    );
}
 
export default HomeLayout;