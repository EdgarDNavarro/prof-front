import { Globe2, BookOpen, Users, MessageCircle } from "lucide-react"

const OurFeatures = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Nuestras características</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
                <div className="grid gap-1">
                    <BookOpen className="w-10 h-10 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-center">Cursos personalizados</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        Adaptamos nuestras clases a tus necesidades y objetivos específicos.
                    </p>
                </div>
                <div className="grid gap-1">
                    <Users className="w-10 h-10 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-center">Profesores nativos</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        Aprende con hablantes nativos para una experiencia auténtica.
                    </p>
                </div>
                <div className="grid gap-1">
                    <MessageCircle className="w-10 h-10 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-center">Práctica conversacional</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        Enfoque en la comunicación real para mejorar rápidamente.
                    </p>
                </div>
                <div className="grid gap-1">
                    <Globe2 className="w-10 h-10 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-center">Clases en línea</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        Aprende desde cualquier lugar con nuestras clases virtuales.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default OurFeatures;