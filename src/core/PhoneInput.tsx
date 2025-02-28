import { countryCodes } from "@/constDate";
import { Phone } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { FieldValues, UseFormRegister } from "react-hook-form";

type PhoneInputProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
    selectedCountry: {
        code: string;
        country: string;
    };
    setSelectedCountry: React.Dispatch<
        React.SetStateAction<{
            code: string;
            country: string;
        }>
    >;
    variant?: "profile";
};

export const PhoneInput = <T extends FieldValues>({
    register,
    selectedCountry,
    setSelectedCountry,
    variant
}: PhoneInputProps<T>) => {
    const inputStyles =
        variant === "profile"
            ? "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            : "appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

    return (
        <>
            {variant === "profile" ? (
                <label className="flex items-center text-gray-600 text-sm font-medium">
                    <Phone className="w-5 h-5 mr-2" />
                    Phone Number
                </label>
            ) : (
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                >
                    Número de teléfono (Opcional)
                </label>
            )}

            <div className="flex mt-1">
                <div className="relative w-1/4 ">
                    <button
                        type="button"
                        className={`${inputStyles} flex items-center justify-between rounded-l-lg`}
                        onClick={() =>
                            document
                                .getElementById("dropdown")
                                ?.classList.toggle("hidden")
                        }
                    >
                        <ReactCountryFlag
                            className="mr-2"
                            countryCode={selectedCountry.country}
                            svg
                        />
                        {selectedCountry.code}
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        id="dropdown"
                        className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg hidden overflow-y-scroll h-72 scrollbar-hide"
                    >
                        {countryCodes.map((country) => (
                            <div
                                key={country.code}
                                className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => {
                                    setSelectedCountry(country);
                                    document
                                        .getElementById("dropdown")
                                        ?.classList.add("hidden");
                                }}
                            >
                                <ReactCountryFlag
                                    className="mr-2"
                                    countryCode={country.country}
                                    svg
                                />
                                {country.code}
                            </div>
                        ))}
                    </div>
                </div>
                <input
                    type="number"
                    className={`${inputStyles} w-3/4 rounded-r-lg`}
                    placeholder="Phone number"
                    {...register("phone_number" as any, {
                        validate: (value) => {
                            // Valida que solo sean números enteros
                            return (
                                /^[0-9]*$/.test(value ? value : "") ||
                                "Solo se permiten números enteros"
                            );
                        }
                    })}
                />
            </div>
        </>
    );
};
