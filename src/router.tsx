import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import { ToastContainer } from "react-toastify";
import ConfirmAccount from "./views/ConfirmAccount";
import CreateAccount from "./views/CreateAccount";
import Student from "./views/account/Student";
import Tutor from "./views/account/Tutor";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<HomeView />} index />
                </Route>
                <Route path="/login" element={<LoginView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route path="/account/student" element={<Student />} />
                <Route path="/account/teacher" element={<Tutor />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route
                    path="/confirm-account/:email"
                    element={<ConfirmAccount />}
                />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
};

export default Router;
