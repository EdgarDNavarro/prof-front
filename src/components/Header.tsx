import { useState } from "react";
import { Globe2, DollarSign } from "lucide-react";
import { Avatar, Button } from "@/core/index";
import { Link, useNavigate } from "react-router-dom";
import { NavMenu } from "./NavMenu";
import LanguageSelector from "@/core/LanguageSelector";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
    const { data } = useAuth();
    const navigate = useNavigate();
    // Simulamos un estado de usuario logueado y su saldo
    const userName = "Juan Pérez";
    const userBalance = 1250.75;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const logOut = () => {
        localStorage.removeItem("PROF_AUTH_TOKEN");
        if (window.location.pathname === "/") {
            window.location.reload();
            return;
        }
        navigate("/");
    };

    return (
        <header className="px-4 lg:px-6 pt-7 flex items-center flex-col sm:flex-row justify-between">
            <a className="flex items-center justify-center" href="#">
                <Globe2 className="h-6 w-6" />
                <span className="ml-2 text-2xl font-bold">LinguaLearn</span>
            </a>

            <NavMenu
                userName={userName}
                userBalance={userBalance}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />

            <nav className="w-full sm:w-auto gap-4 sm:gap-6 items-center flex-col sm:flex-row mt-8 sm:mt-0 hidden sm:flex">
                <a
                    className="font-medium hover:underline underline-offset-4 w-full sm:w-auto text-center"
                    href="#"
                >
                    Cursos
                </a>
                <a
                    className="font-medium hover:underline underline-offset-4 w-full sm:w-auto text-center"
                    href="#"
                >
                    Profesores
                </a>
                <a
                    className="font-medium hover:underline underline-offset-4 w-full sm:w-auto text-center"
                    href="#"
                >
                    Precios
                </a>
                <a
                    className="font-medium hover:underline underline-offset-4 w-full sm:w-auto text-center"
                    href="#"
                >
                    Contacto
                </a>

                <LanguageSelector />

                {data && (
                    <div className="flex items-center bg-green-100 rounded-full px-3 py-1">
                        <DollarSign className="h-4 w-4 text-green-600 mr-1" />
                        <span className="font-medium text-green-800">
                            {userBalance.toFixed(2)}
                        </span>
                    </div>
                )}

                {data ? (
                    <div className="relative">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-haspopup="true"
                        >
                            <span className="sr-only">
                                Abrir menú de usuario
                            </span>
                            <Avatar
                                name={userName}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu"
                                >
                                    <div className="px-4 pt-2 pb-4 border-b">
                                        <p className=" font-medium leading-none">
                                            {userName}
                                        </p>
                                        <p className="text-xs leading-none text-gray-500">
                                            juan.perez@example.com
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Perfil
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Mis cursos
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Configuración
                                    </a>
                                    <button
                                        onClick={logOut}
                                        className="block w-full text-left px-4 pb-2 pt-3 border-t text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <Button
                        color="primary"
                        variant="tonal"
                        Component={Link}
                        to="/login"
                    >
                        Iniciar sesión
                    </Button>
                )}
            </nav>
        </header>
    );
};

export default Header;
