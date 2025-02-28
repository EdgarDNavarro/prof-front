import { updateTutor } from "@/api/tutorAPi";
import { countryCodes, timezones } from "@/constDate";
import InputErrorMessage from "@/core/InputErrorMessage";
import { PhoneInput } from "@/core/PhoneInput";
import { Tutor } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { Award, Camera, CheckCircle2, Clock, Globe, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type UpdateProfileDataProps = {
    data: Tutor;
};
const HeaderSection = ({ data }: UpdateProfileDataProps) => {
    const [selectedCountry, setSelectedCountry] = useState({
        code: "+1",
        country: "US"
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({ defaultValues: data });

    useEffect(() => {
        if (data.phone_number) {
            const codeAndNumber = data.phone_number.split(" ");
            const foundCountry = countryCodes.find(
                (country) => country.code === codeAndNumber[0]
            );
            if (foundCountry) {
                setSelectedCountry(foundCountry);
            }
            setValue("phone_number", codeAndNumber[1]);
        }
    }, [data]);

    const { mutate } = useMutation({
        mutationFn: updateTutor,
        onSuccess(data) {
            toast.success(data);
        },
        onError(error) {
            toast.error(error.message);
        }
    });

    const handleForm = (formData: Tutor) => {
        if (formData.phone_number) {
            const data = {
                ...formData,
                phone_number: `${selectedCountry.code} ${formData.phone_number.trim()}`
            };
            mutate(data);
            return;
        }
        mutate(formData);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg ">
            <div className="relative rounded-t-xl h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="absolute -bottom-16 left-8">
                    <div className="relative group">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop"
                            alt={data.first_name}
                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                        />
                        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>

                <div className="absolute -bottom-8 right-0 flex">
                    {data.profile_verified && (
                        <CheckCircle2 className="w-6 h-6 mr-3 text-green-600" />
                    )}
                    {data.super_tutor_badge && (
                        <Star className="w-6 h-6 mr-3 text-yellow-500" />
                    )}
                </div>
            </div>

            <form
                noValidate
                onSubmit={handleSubmit(handleForm)}
                className="pt-20 pb-6 px-8"
            >
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <p className="w-full text-3xl font-bold bg-transparent border-b-2 border-transparent ">
                            {data.first_name} {data.last_name}{" "}
                        </p>
                        <input
                            type="text"
                            {...register("bio", {
                                required: "El descripcion es obligatoria"
                            })}
                            className="w-full mt-2 text-lg text-gray-600 bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-gray-300 focus:outline-none"
                        />
                        <InputErrorMessage message={errors.bio?.message} />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Save Changes
                    </button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <PhoneInput
                            register={register}
                            selectedCountry={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                            variant="profile"
                        />
                        <InputErrorMessage
                            message={errors.phone_number?.message}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center text-gray-600 text-sm font-medium">
                            <Clock className="w-5 h-5 mr-2" />
                            Time Zone
                        </label>

                        <select
                            id="timezone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register("timezone", {
                                required: "El idioma es obligatorio"
                            })}
                        >
                            {timezones.map((tz) => (
                                <option key={tz.value} value={tz.value}>
                                    {tz.label}
                                </option>
                            ))}
                        </select>
                        <InputErrorMessage message={errors.timezone?.message} />
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center text-gray-600 text-sm font-medium">
                            <Globe className="w-5 h-5 mr-2" />
                            Country of Birth
                        </label>
                        <input
                            type="text"
                            {...register("country_of_birth", {
                                required: "El Pais es obligatorio"
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <InputErrorMessage
                            message={errors.country_of_birth?.message}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center text-gray-600 text-sm font-medium">
                            <Award className="w-5 h-5 mr-2" />
                            Years of Experience
                        </label>
                        <input
                            type="number"
                            {...register("years_of_experience", {
                                required: "La Descripcion es obligatorio"
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <InputErrorMessage
                            message={errors.years_of_experience?.message}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HeaderSection;
