import { Testimonial } from "../../types";
import Marquee from "../ui/marquee";
import CommentDetails from "./CommentDetails";

const FeaturedComments = () => {
    const testimonials: Testimonial[] = [
        {
          id: 1,
          studentName: "María G.",
          studentAvatar: "/img/student1.jpg",
          tutorName: "Prof. John Smith",
          tutorAvatar: "/tutor1.svg",
          comment: "Las clases son divertidas y efectivas.  ",
          rating: 5,
          language: "Inglés",
        },
        {
          id: 2,
          studentName: "Carlos R.",
          studentAvatar: "/student2.svg",
          tutorName: "Prof. Emma Johnson",
          tutorAvatar: "/tutor2.svg",
          comment: "Los profesores son excelentes y las lecciones están muy bien estructuradas.",
          rating: 5,
          language: "Francés",
        },
        {
          id: 3,
          studentName: "Ana L.",
          studentAvatar: "/student3.svg",
          tutorName: "Prof. Pierre Dubois",
          tutorAvatar: "/img/tutor3.jpg",
          comment: "Gracias a LinguaLearn, ahora puedo comunicarme con confianza en francés.",
          rating: 4,
          language: "Francés",
        }
    ]


    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Lo que dicen nuestros estudiantes</h2>
                
                <div className="relative overflow-hidden rounded-lg mt-10">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="grid gap-6 grid-cols-1 items-start">
                                    <CommentDetails
                                        
                                        testimonial={testimonial}
                                    />
                                </div>
                            ))}
                        
                    </Marquee>
                    
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    
                </div>
            </div>


        </section>
    );
}
 
export default FeaturedComments;