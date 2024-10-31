import { Button } from "../../core";

const Registration = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter mb-8 sm:text-5xl">Comienza tu viaje lingüístico hoy</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Regístrate ahora y obtén tu primera clase gratis. Descubre cuán rápido puedes aprender un nuevo idioma.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex space-x-2">
                            <Button
                                color="primary"
                                className="w-full"
                                type="button"
                                variant="contained"
                            >
                                Registrarse
                            </Button>
                        </form>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Al registrarte, aceptas nuestros términos y condiciones.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration;