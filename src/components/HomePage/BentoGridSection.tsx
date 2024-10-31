import {
    Globe,
    Users,
    BookOpen,
    MessageCircle,
    Video,
    Award,
    Headphones,
    BarChart
} from 'lucide-react'

export default function BentoGridSection() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Descubre LinguaLearn</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Clases en vivo */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <Video className="w-12 h-12 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Clases en vivo</h3>
                        <p className="text-gray-600">Interactúa en tiempo real con profesores nativos.</p>
                    </div>

                    {/* Comunidad global */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center md:col-span-2">
                        <Globe className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Comunidad global</h3>
                        <p className="text-gray-600">Conecta con estudiantes de todo el mundo y practica juntos.</p>
                    </div>

                    {/* Ejercicios interactivos */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center md:row-span-2">
                        <BookOpen className="w-12 h-12 text-yellow-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Ejercicios interactivos</h3>
                        <p className="text-gray-600">Mejora tus habilidades con ejercicios divertidos y desafiantes.</p>
                    </div>

                    {/* Chat de idiomas */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <MessageCircle className="w-12 h-12 text-purple-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Chat de idiomas</h3>
                        <p className="text-gray-600">Practica la escritura con hablantes nativos en nuestro chat seguro.</p>
                    </div>

                    {/* Pronunciación AI */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <Headphones className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Mejora tu Pronunciación</h3>
                        <p className="text-gray-600">Perfecciona tu acento con nuestras clases y profesores nativos.</p>
                    </div>

                    {/* Profesores certificados */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center md:col-span-2">
                        <Users className="w-12 h-12 text-indigo-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Profesores certificados</h3>
                        <p className="text-gray-600">Aprende con los mejores profesores, todos certificados y con experiencia.</p>
                    </div>

                    {/* Seguimiento de progreso */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <BarChart className="w-12 h-12 text-cyan-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Seguimiento de progreso</h3>
                        <p className="text-gray-600">Visualiza tu avance y mantén la motivación con estadísticas detalladas.</p>
                    </div>

                    {/* Certificaciones */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center md:col-span-2">
                        <Award className="w-12 h-12 text-orange-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Certificaciones</h3>
                        <p className="text-gray-600">Obtén certificados reconocidos internacionalmente al completar los cursos.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}