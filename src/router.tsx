import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

const Router = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route element={<HomeLayout/>}>
                    <Route path="/" element={<HomeView/>} index />
                </Route>
                <Route path="/login" element={<LoginView/>} />
                <Route path="/register" element={<RegisterView/>} />
            </Routes> 
        </BrowserRouter>
    );
}
 
export default Router;