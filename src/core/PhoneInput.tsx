import { StudentForm } from "@/types";
import ReactCountryFlag from "react-country-flag";
import { FieldValues, UseFormRegister } from "react-hook-form";

const countryCodes = [
    { code: "+1", country: "US" }, // USA
    { code: "+44", country: "GB" }, // United Kingdom
    { code: "+34", country: "ES" }, // Spain
    { code: "+33", country: "FR" }, // France
    { code: "+49", country: "DE" }, // Germany
    { code: "+39", country: "IT" }, // Italy
    { code: "+61", country: "AU" }, // Australia
    { code: "+55", country: "BR" }, // Brazil
    { code: "+86", country: "CN" }, // China
    { code: "+91", country: "IN" }, // India
    { code: "+81", country: "JP" }, // Japan
    { code: "+52", country: "MX" }, // Mexico
    { code: "+31", country: "NL" }, // Netherlands
    { code: "+47", country: "NO" }, // Norway
    { code: "+7", country: "RU" }, // Russia
    { code: "+27", country: "ZA" }, // South Africa
    { code: "+82", country: "KR" }, // South Korea
    { code: "+46", country: "SE" }, // Sweden
    { code: "+41", country: "CH" }, // Switzerland
    { code: "+90", country: "TR" }, // Turkey
    { code: "+971", country: "AE" }, // United Arab Emirates
    { code: "+598", country: "UY" }, // Uruguay
    { code: "+58", country: "VE" }, // Venezuela
    { code: "+62", country: "ID" }, // Indonesia
    { code: "+63", country: "PH" }, // Philippines
    { code: "+94", country: "LK" }, // Sri Lanka
    { code: "+92", country: "PK" }, // Pakistan
    { code: "+64", country: "NZ" }, // New Zealand
    { code: "+48", country: "PL" }, // Poland
    { code: "+420", country: "CZ" }, // Czech Republic
    { code: "+351", country: "PT" }, // Portugal
    { code: "+65", country: "SG" }, // Singapore
    { code: "+60", country: "MY" }, // Malaysia
    { code: "+856", country: "LA" }, // Laos
    { code: "+855", country: "KH" }, // Cambodia
    { code: "+375", country: "BY" }, // Belarus
    { code: "+32", country: "BE" }, // Belgium
    { code: "+45", country: "DK" }, // Denmark
    { code: "+30", country: "GR" }, // Greece
    { code: "+353", country: "IE" }, // Ireland
    { code: "+972", country: "IL" }, // Israel
    { code: "+20", country: "EG" }, // Egypt
    { code: "+356", country: "MT" }, // Malta
    { code: "+380", country: "UA" }, // Ukraine
    { code: "+213", country: "DZ" }, // Algeria
    { code: "+216", country: "TN" }, // Tunisia
    { code: "+256", country: "UG" }, // Uganda
    { code: "+54", country: "AR" }, // Argentina
    { code: "+57", country: "CO" }, // Colombia
    { code: "+56", country: "CL" }, // Chile
    { code: "+51", country: "PE" }, // Peru
    { code: "+591", country: "BO" }, // Bolivia
    { code: "+593", country: "EC" }, // Ecuador
    { code: "+505", country: "NI" }, // Nicaragua
    { code: "+506", country: "CR" }, // Costa Rica
    { code: "+592", country: "GY" } // Guyana
];

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
};

export const PhoneInput = <T extends FieldValues>({
    register,
    selectedCountry,
    setSelectedCountry
}: PhoneInputProps<T>) => {
    const inputStyles =
        "appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

    return (
        <>
            <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
            >
                Número de teléfono (Opcional)
            </label>

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
