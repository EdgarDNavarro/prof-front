import { updateDescriptions } from "@/api/tutorAPi";
import InputErrorMessage from "@/core/InputErrorMessage";
import { Tutor, TutorDescriptionsForm } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type DescriptionSectionProps = {
    data: Tutor;
};
const initialValues = {
    introduce_yourself: "",
    teaching_experience: "",
    motivate_student: ""
};
const DescriptionSection = ({ data }: DescriptionSectionProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({ defaultValues: initialValues });

    const { mutate } = useMutation({
        mutationFn: updateDescriptions,
        onSuccess(data) {
            toast.success(data);
        },
        onError(error) {
            toast.success(error.message);
        }
    });

    useEffect(() => {
        if (data.TutorDescriptions) {
            data.TutorDescriptions.map((description) => {
                if (description.type === "introduce_yourself")
                    setValue("introduce_yourself", description.content);
                if (description.type === "teaching_experience")
                    setValue("teaching_experience", description.content);
                if (description.type === "motivate_student")
                    setValue("motivate_student", description.content);
            });
        }
    }, []);

    const handleForm = (formData: {
        introduce_yourself: string;
        teaching_experience: string;
        motivate_student: string;
    }) => {
        if (formData.introduce_yourself.trim()) {
            const introduce_yourself_data: TutorDescriptionsForm = {
                type: "introduce_yourself",
                content: formData.introduce_yourself,
                tutor_id: data.id
            };
            mutate(introduce_yourself_data);
        }

        if (formData.teaching_experience.trim()) {
            const teaching_experience_data: TutorDescriptionsForm = {
                type: "teaching_experience",
                content: formData.teaching_experience,
                tutor_id: data.id
            };
            mutate(teaching_experience_data);
        }

        if (formData.motivate_student.trim()) {
            const motivate_student_data: TutorDescriptionsForm = {
                type: "motivate_student",
                content: formData.motivate_student,
                tutor_id: data.id
            };
            mutate(motivate_student_data);
        }
    };

    return (
        <form
            noValidate
            onSubmit={handleSubmit(handleForm)}
            className="mt-8 bg-white rounded-lg shadow-md p-6"
        >
            <div className="space-y-6">
                <div>
                    <label className="block text-lg font-semibold text-gray-900">
                        About Me
                    </label>
                    <textarea
                        {...register("introduce_yourself", {
                            minLength: {
                                value: 30,
                                message: "Minimo 30 caracteres"
                            },
                            maxLength: {
                                value: 700,
                                message: "Maximo 700 caracteres"
                            }
                        })}
                        className={`mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.introduce_yourself ? "ring-red-500 outline-none ring-2" : "focus:ring-blue-500 focus:outline-none focus:ring-2"}`}
                        rows={4}
                    />
                    <InputErrorMessage
                        message={errors.introduce_yourself?.message}
                    />
                </div>
                <hr className="border-gray-200" />
                <div>
                    <label className="block text-lg font-semibold text-gray-900">
                        Teaching Experience
                    </label>
                    <textarea
                        {...register("teaching_experience", {
                            minLength: {
                                value: 30,
                                message: "Minimo 30 caracteres"
                            },
                            maxLength: {
                                value: 700,
                                message: "Maximo 700 caracteres"
                            }
                        })}
                        className={`mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.teaching_experience ? "ring-red-500 outline-none ring-2" : "focus:ring-blue-500 focus:outline-none focus:ring-2"}`}
                        rows={4}
                    />
                    <InputErrorMessage
                        message={errors.teaching_experience?.message}
                    />
                </div>
                <hr className="border-gray-200" />
                <div>
                    <label className="block text-lg font-semibold text-gray-900">
                        How I Motivate Students
                    </label>
                    <textarea
                        {...register("motivate_student", {
                            minLength: {
                                value: 30,
                                message: "Minimo 30 caracteres"
                            },
                            maxLength: {
                                value: 700,
                                message: "Maximo 700 caracteres"
                            }
                        })}
                        className={`mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg ${errors.motivate_student ? "ring-red-500 outline-none ring-2" : "focus:ring-blue-500 focus:outline-none focus:ring-2"}`}
                        rows={4}
                    />
                    <InputErrorMessage
                        message={errors.motivate_student?.message}
                    />
                </div>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-5"
            >
                Save Changes
            </button>
        </form>
    );
};

export default DescriptionSection;
