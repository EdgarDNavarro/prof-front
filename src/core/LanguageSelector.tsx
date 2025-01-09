import { useEffect, useState } from "react";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions
} from "@headlessui/react";
import { CheckIcon } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Language } from "@/types";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { updateLang } from "@/api/userAPI";

type languageDetailsT = {
    language: Language;
    icon: string;
    label: string;
};
const languageDetails: languageDetailsT[] = [
    { language: "es", icon: "ES", label: "Spanish" },
    { language: "it", icon: "IT", label: "Italian" },
    { language: "pt", icon: "PT", label: "Portuguese" },
    { language: "en", icon: "US", label: "English" },
    { language: "fr", icon: "FR", label: "French" },
    { language: "de", icon: "DE", label: "German" },
    { language: "ja", icon: "JP", label: "Japanese" },
    { language: "zh", icon: "CN", label: "Chinese" }
];
const initialLang = (() => {
    const localLang = localStorage.getItem("profLang");
    if (localLang) {
        return languageDetails.find((lang) => lang.language === localLang);
    }
    return undefined;
})();

const LanguageSelector = () => {
    const { data } = useAuth();
    const [selected, setSelected] = useState(
        initialLang ? initialLang : languageDetails[3]
    );

    const { mutate } = useMutation({
        mutationFn: updateLang
    });

    const handleChange = (lang: languageDetailsT) => {
        setSelected(lang);
        localStorage.setItem("profLang", lang.language);
        if (data) {
            mutate({ language: lang.language });
        }
    };

    useEffect(() => {
        if (data) {
            const foundLang = languageDetails.find(
                (lang) => lang.language === data.language
            );
            if (foundLang) {
                localStorage.setItem("profLang", data.language);
                setSelected(foundLang);
            }
        }
    }, [data]);

    return (
        <Listbox value={selected} onChange={handleChange}>
            <div className="relative">
                <ListboxButton className=" w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        <ReactCountryFlag
                            className="text-xl shrink-0 rounded-full"
                            svg
                            countryCode={selected.icon}
                        />
                        <span className="block truncate">{selected.label}</span>
                    </span>
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {languageDetails.map((lang) => (
                        <ListboxOption
                            key={lang.language}
                            value={lang}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white data-[focus]:outline-none"
                        >
                            <div className="flex items-center">
                                <ReactCountryFlag
                                    className="text-xl shrink-0 rounded-full"
                                    svg
                                    countryCode={lang.icon}
                                />
                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                    {lang.language.toUpperCase()}
                                </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                <CheckIcon
                                    aria-hidden="true"
                                    className="size-5"
                                />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
};

export default LanguageSelector;
