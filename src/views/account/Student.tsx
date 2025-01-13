import { PhoneInput } from "@/core/PhoneInput";
import { Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const timezones = [
    { value: "Pacific/Midway", label: "(UTC-11:00) Midway Island" },
    { value: "Pacific/Pago_Pago", label: "(UTC-11:00) Pago Pago" },
    { value: "Pacific/Honolulu", label: "(UTC-10:00) Hawaii" },
    { value: "America/Anchorage", label: "(UTC-09:00) Alaska" },
    {
        value: "America/Los_Angeles",
        label: "(UTC-08:00) Pacific Time (US & Canada)"
    },
    {
        value: "America/Denver",
        label: "(UTC-07:00) Mountain Time (US & Canada)"
    },
    {
        value: "America/Chicago",
        label: "(UTC-06:00) Central Time (US & Canada)"
    },
    {
        value: "America/New_York",
        label: "(UTC-05:00) Eastern Time (US & Canada)"
    },
    { value: "America/Caracas", label: "(UTC-04:00) Caracas" },
    { value: "America/Santiago", label: "(UTC-03:00) Santiago" },
    { value: "Atlantic/South_Georgia", label: "(UTC-02:00) South Georgia" },
    { value: "Atlantic/Azores", label: "(UTC-01:00) Azores" },
    { value: "Europe/London", label: "(UTC+00:00) London" },
    { value: "Europe/Paris", label: "(UTC+01:00) Paris" },
    { value: "Europe/Berlin", label: "(UTC+01:00) Berlin" },
    { value: "Europe/Istanbul", label: "(UTC+03:00) Istanbul" },
    { value: "Asia/Dubai", label: "(UTC+04:00) Dubai" },
    { value: "Asia/Kolkata", label: "(UTC+05:30) India Standard Time" },
    { value: "Asia/Shanghai", label: "(UTC+08:00) China Standard Time" },
    { value: "Asia/Tokyo", label: "(UTC+09:00) Japan Standard Time" },
    { value: "Australia/Sydney", label: "(UTC+10:00) Sydney" },
    { value: "Pacific/Auckland", label: "(UTC+12:00) Auckland" }
];

const Student = () => {
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
                    Llena tu informacion como estudiante
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

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" noValidate>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nombre
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {/* <InputErrorMessage
                                    message={errors.email?.message}
                                /> */}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="last_name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Apellido
                            </label>
                            <div className="mt-1">
                                <input
                                    id="last_name"
                                    type="text"
                                    autoComplete="last_name"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {/* <InputErrorMessage
                                    message={errors.email?.message}
                                /> */}
                            </div>
                        </div>

                        <div>
                            <PhoneInput />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="timezone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Zona horaria
                            </label>
                            <div className="mt-1">
                                <select
                                    id="timezone"
                                    autoComplete="timezone"
                                    // {...register("timezone", {
                                    //     required: "El idioma es obligatorio"
                                    // })}
                                    className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    {timezones.map((tz) => (
                                        <option key={tz.value} value={tz.value}>
                                            {tz.label}
                                        </option>
                                    ))}
                                </select>
                                {/* <InputErrorMessage
                                        message={errors.timezone?.message}
                                    /> */}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className=" disabled:bg-blue-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                // disabled={isPending}
                            >
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Student;
