import { Button } from "../../core";
import BlurFade from "../ui/blur-fade";

const HomePageHero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <BlurFade delay={0.30} inView>
                        <img
                            alt="Estudiantes aprendiendo idiomas"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            src="/img/teacher.jpg"
                        />
                    </BlurFade>

                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <BlurFade delay={0.30} inView>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Aprende un nuevo idioma hoy
                                </h1>
                            </BlurFade>
                            <BlurFade delay={0.50 * 2} inView>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Descubre un mundo de oportunidades con nuestras clases de idiomas personalizadas. Profesores nativos,
                                    horarios flexibles y métodos probados.
                                </p>
                            </BlurFade>

                        </div>
                        <BlurFade delay={0.50 * 4} inView className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button
                                color="primary"
                                className="px-8"
                                variant="contained"
                            >
                                Empezar ahora
                            </Button>
                            <Button
                                color="secondary"
                                className="px-8"
                                variant="contained"
                            >
                                Saber más
                            </Button>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePageHero;