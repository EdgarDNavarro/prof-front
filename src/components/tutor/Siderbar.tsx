import { updateClassPrice, updateVisibility } from "@/api/tutorAPi";
import InputErrorMessage from "@/core/InputErrorMessage";
import { Tutor } from "@/types";
import { useMutation } from "@tanstack/react-query";
import {
    DollarSign,
    EyeOff,
    Eye,
    Clock4,
    BookOpen,
    CheckCircle2,
    Star
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type SidebarProps = {
    data: Tutor;
};

const Sidebar = ({ data }: SidebarProps) => {
    const [visibility, setVisibility] = useState(data.profile_hidden);
    const changeVisibility = async () => {
        setVisibility(!visibility);
        await updateVisibility(data.id);
    };

    const initialValues = { class_price: data.class_price };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues: initialValues });

    const { mutate } = useMutation({
        mutationFn: updateClassPrice,
        onSuccess(data) {
            toast.success(data);
        },
        onError(error) {
            toast.error(error.message);
        }
    });

    const handleForm = (formData: { class_price: Tutor["class_price"] }) => {
        mutate({ id: data.id, class_price: formData.class_price });
    };

    return (
        <div className="w-80 bg-white min-h-screen border-r border-gray-200 p-6 space-y-6">
            <div className="space-y-6">
                {/* Badges Section */}
                <div className="space-y-4">
                    {/* Verified Badge */}
                    <div
                        className={`flex items-center p-3 rounded-lg ${data.profile_verified ? "bg-green-50" : "bg-gray-50"}`}
                    >
                        <CheckCircle2
                            className={`w-5 h-5 mr-3 ${data.profile_verified ? "text-green-600" : "text-gray-400"}`}
                        />
                        <div>
                            <div className="font-medium text-gray-900">
                                Verified Profile
                            </div>
                            <div className="text-sm text-gray-500">
                                Identity verified by our team
                            </div>
                        </div>
                    </div>

                    {/* Super Tutor Badge */}
                    <div
                        className={`flex items-center p-3 rounded-lg ${data.super_tutor_badge ? "bg-yellow-50" : "bg-gray-50"}`}
                    >
                        <Star
                            className={`w-5 h-5 mr-3 ${data.super_tutor_badge ? "text-yellow-500" : "text-gray-400"}`}
                        />
                        <div>
                            <div className="font-medium text-gray-900">
                                Super Tutor
                            </div>
                            <div className="text-sm text-gray-500">
                                Top-rated experienced educator
                            </div>
                        </div>
                    </div>
                </div>
                {/* Price Section */}
                <form noValidate onSubmit={handleSubmit(handleForm)}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-2" />
                            Class Price (per hour)
                        </div>
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">
                            $
                        </span>
                        <input
                            type="number"
                            defaultValue={data.class_price}
                            className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("class_price", {
                                required: "El precio debe ser mayor que 0"
                            })}
                        />
                        <InputErrorMessage
                            message={errors.class_price?.message}
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-3 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition-colors mt-3 w-full"
                    >
                        Save class price
                    </button>
                </form>

                {/* Profile Visibility */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profile Visibility
                    </label>
                    <button
                        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border ${
                            visibility
                                ? "bg-gray-100 border-gray-300"
                                : "bg-blue-50 border-blue-300"
                        }`}
                        onClick={changeVisibility}
                    >
                        <span className="flex items-center">
                            {visibility ? (
                                <EyeOff className="w-4 h-4 mr-2" />
                            ) : (
                                <Eye className="w-4 h-4 mr-2" />
                            )}
                            {visibility ? "Hidden" : "Visible"}
                        </span>
                        <div
                            className={`w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                                visibility ? "bg-gray-300" : "bg-blue-600"
                            }`}
                        >
                            <div
                                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                                    visibility ? "" : "translate-x-4"
                                }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Statistics */}
                <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Statistics</h3>

                    {/* Total Hours */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            <Clock4 className="w-4 h-4 mr-2" />
                            Total Hours
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {data.total_hours}
                        </div>
                    </div>

                    {/* Total Lessons */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Total Lessons
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {data.total_lessons}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
