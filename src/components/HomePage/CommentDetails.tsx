import { Star } from "lucide-react";
import { Testimonial } from "../../types";
import { Avatar } from "../../core";

type CommentDetailsProps = {
    testimonial: Testimonial
}
const CommentDetails = ({ testimonial }: CommentDetailsProps) => {
    return (
        <div key={testimonial.id} className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg w-lg h-auto">
            <div className="flex items-center gap-4">
                <Avatar src={testimonial.studentAvatar} name={testimonial.studentName} />
                <div>
                    <h3 className="font-semibold">{testimonial.studentName}</h3>
                    <p className="text-sm text-gray-500">Estudiante de {testimonial.language}</p>
                </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                ))}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                <Avatar src={testimonial.tutorAvatar} name={testimonial.tutorName} />
                <div>
                    <p className="font-medium">{testimonial.tutorName}</p>
                    <p className="text-sm text-gray-500">Profesor de {testimonial.language}</p>
                </div>
            </div>
        </div>
    );
}

export default CommentDetails;