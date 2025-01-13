import { Globe2, GraduationCap, PresentationIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex items-center justify-center">
                    <Globe2 className="h-10 w-10 text-blue-600" />
                    <span className="ml-2 text-3xl font-bold text-gray-900">
                        LinguaLearn
                    </span>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    ¿Que quieres ser?
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    ¿Tienes dudas?{" "}
                    <Link
                        to="/more-information"
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Mas informacion
                    </Link>
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
                            <GraduationCap className="h-6 w-6" />
                            Estudiante
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Aprende nuevos idiomas con profesores nativos
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-6">
                            <li>Accede a clases personalizadas</li>
                            <li>Practica con ejercicios interactivos</li>
                            <li>Conecta con hablantes nativos</li>
                            <li>
                                Sigue tu progreso con herramientas avanzadas
                            </li>
                        </ul>
                    </div>
                    <div className="px-6 pb-6">
                        <Link to="/account/student">
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300">
                                Registrarse como Estudiante
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
                            <PresentationIcon className="h-6 w-6" />
                            Profesor
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Comparte tu conocimiento y enseña tu idioma nativo
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-6">
                            <li>Crea lecciones personalizadas</li>
                            <li>Conecta con estudiantes de todo el mundo</li>
                            <li>Establece tu propio horario</li>
                            <li>Gana ingresos enseñando tu idioma</li>
                        </ul>
                    </div>
                    <div className="px-6 pb-6">
                        <Link to="/account/teacher">
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                                Registrarse como Profesor
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
