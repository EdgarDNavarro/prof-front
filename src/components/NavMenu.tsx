import { Button } from "@/core";
import LanguageSelector from "@/core/LanguageSelector";
import { User } from "@/types";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition
} from "@headlessui/react";
import { DollarSign, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

type NavMenuProps = {
    data: User | undefined;
    logOut: () => void;
    userBalance: string | undefined;
};

export const NavMenu = ({ data, logOut, userBalance }: NavMenuProps) => {
    return (
        <Popover className="relative visible sm:hidden">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 mt-6">
                <Menu size={32} />
            </PopoverButton>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <PopoverPanel className="bg-white absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48 shadow-lg rounded-lg">
                    <nav className="flex w-full sm:w-auto items-center flex-col sm:flex-row ">
                        <a
                            className="font-medium hover:bg-gray-100 py-2 underline-offset-4 w-full sm:w-auto text-center"
                            href="#"
                        >
                            Cursos
                        </a>
                        <a
                            className="font-medium hover:bg-gray-100 py-2 underline-offset-4 w-full sm:w-auto text-center"
                            href="#"
                        >
                            Profesores
                        </a>
                        <a
                            className="font-medium hover:bg-gray-100 py-2 underline-offset-4 w-full sm:w-auto text-center"
                            href="#"
                        >
                            Precios
                        </a>
                        <a
                            className="font-medium hover:bg-gray-100 py-2 underline-offset-4 w-full sm:w-auto text-center"
                            href="#"
                        >
                            Contacto
                        </a>

                        <LanguageSelector />

                        {data && (
                            <div className="px-4 pt-2 pb-4 border-b w-full">
                                <p className="text-center font-medium leading-none mb-2">
                                    {data.Student
                                        ? `${data.Student.first_name} ${data.Student.last_name} `
                                        : data.Tutor
                                          ? `${data.Tutor.first_name} ${data.Tutor.last_name} `
                                          : ""}
                                </p>
                                <p className="text-xs leading-none text-center text-gray-500">
                                    {data.email}
                                </p>
                            </div>
                        )}

                        {data?.Tutor && (
                            <div className="flex items-center bg-green-100 rounded-full px-3 py-1 mt-4">
                                <DollarSign className="h-4 w-4 text-green-600 mr-1" />
                                <span className="font-medium text-green-800">
                                    {userBalance}
                                </span>
                            </div>
                        )}

                        <div className="w-full">
                            {data ? (
                                <div className="py-1">
                                    <a
                                        href="#"
                                        className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Perfil
                                    </a>
                                    <a
                                        href="#"
                                        className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Mis cursos
                                    </a>
                                    <Link
                                        to="/calendar"
                                        className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Calendario
                                    </Link>
                                    <a
                                        href="#"
                                        className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Configuración
                                    </a>
                                    <button
                                        onClick={logOut}
                                        className="block w-full px-4 pb-2 pt-3 border-t text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            ) : (
                                <div className="px-4 py-4 flex justify-center w-full">
                                    <Button
                                        color="primary"
                                        variant="tonal"
                                        Component={Link}
                                        to="/login"
                                    >
                                        Iniciar sesión
                                    </Button>
                                </div>
                            )}
                        </div>
                    </nav>
                </PopoverPanel>
            </Transition>
        </Popover>
    );
};
