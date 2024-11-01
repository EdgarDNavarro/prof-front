import { Avatar, Button } from '@/core'
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition
} from '@headlessui/react'
import { DollarSign, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

export const NavMenu = () => {
    const isLoggedIn = true
    const userName = "Juan Pérez"
    const userBalance = 1250.75
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <Popover className='relative visible sm:hidden'>
            <PopoverButton className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 mt-6'>
                <Menu size={32} />
            </PopoverButton>

            <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
            >
                <PopoverPanel className='bg-white absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48 shadow-lg rounded-lg'>
                    <nav className="flex w-full sm:w-auto items-center flex-col sm:flex-row ">

                        <a className="font-medium hover:bg-gray-100 py-2 underline-offset-4 w-full sm:w-auto text-center" href="#">
                            Cursos
                        </a>
                        <a className="font-medium hover:bg-gray-100 py-2 underline-offset-4 w-full sm:w-auto text-center" href="#">
                            Profesores
                        </a>
                        <a className="font-medium hover:bg-gray-100 py-2 underline-offset-4 w-full sm:w-auto text-center" href="#">
                            Precios
                        </a>
                        <a className="font-medium hover:bg-gray-100 py-2 underline-offset-4 w-full sm:w-auto text-center" href="#">
                            Contacto
                        </a>
                        

                        {isLoggedIn && (
                                <div className="px-4 pt-2 pb-4 border-b w-full">
                                    <p className="text-center font-medium leading-none">{userName}</p>
                                    <p className="text-xs leading-none text-center text-gray-500">
                                        juan.perez@example.com
                                    </p>
                                </div>
                        )}

                        {isLoggedIn && (
                            <div className="flex items-center bg-green-100 rounded-full px-3 py-1 mt-4">
                                <DollarSign className="h-4 w-4 text-green-600 mr-1" />
                                <span className="font-medium text-green-800">{userBalance.toFixed(2)}</span>
                            </div>
                        )}

                        <div className='w-full'>
                            {isLoggedIn ? (
                                <div className="py-1" >
                                    <a href="#" className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Perfil</a>
                                    <a href="#" className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Mis cursos</a>
                                    <a href="#" className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Configuración</a>
                                    <a href="#" className="block text-center px-4 pb-2 pt-3 border-t text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar sesión</a>
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
                        </div>
                    </nav>
                </PopoverPanel>
            </Transition>
        </Popover>
    )
}