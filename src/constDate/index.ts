import { ColorId } from "@/types/calendar";

type colorValue = {
    background: string,
    foreground: string
}
export const calendarColors: Record<ColorId, colorValue> = {
    "1": {
        background: "#ac725e",
        foreground: "#1d1d1d"
    },
    "2": {
        background: "#d06b64",
        foreground: "#1d1d1d"
    },
    "3": {
        background: "#f83a22",
        foreground: "#1d1d1d"
    },
    "4": {
        background: "#fa573c",
        foreground: "#1d1d1d"
    },
    "5": {
        background: "#ff7537",
        foreground: "#1d1d1d"
    },
    "6": {
        background: "#ffad46",
        foreground: "#1d1d1d"
    },
    "7": {
        background: "#42d692",
        foreground: "#1d1d1d"
    },
    "8": {
        background: "#16a765",
        foreground: "#1d1d1d"
    },
    "9": {
        background: "#7bd148",
        foreground: "#1d1d1d"
    },
    "10": {
        background: "#b3dc6c",
        foreground: "#1d1d1d"
    },
    "11": {
        background: "#fbe983",
        foreground: "#1d1d1d"
    },
    "12": {
        background: "#fad165",
        foreground: "#1d1d1d"
    },
    "13": {
        background: "#92e1c0",
        foreground: "#1d1d1d"
    },
    "14": {
        background: "#9fe1e7",
        foreground: "#1d1d1d"
    },
    "15": {
        background: "#9fc6e7",
        foreground: "#1d1d1d"
    },
    "16": {
        background: "#4986e7",
        foreground: "#1d1d1d"
    },
    "17": {
        background: "#9a9cff",
        foreground: "#1d1d1d"
    },
    "18": {
        background: "#b99aff",
        foreground: "#1d1d1d"
    },
    "19": {
        background: "#c2c2c2",
        foreground: "#1d1d1d"
    },
    "20": {
        background: "#cabdbf",
        foreground: "#1d1d1d"
    },
    "21": {
        background: "#cca6ac",
        foreground: "#1d1d1d"
    },
    "22": {
        background: "#f691b2",
        foreground: "#1d1d1d"
    },
    "23": {
        background: "#cd74e6",
        foreground: "#1d1d1d"
    },
    "24": {
        background: "#a47ae2",
        foreground: "#1d1d1d"
    }
};

export const timezones = [
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

export const countryCodes = [
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

export const TutorDescriptionsLabels = {
    introduce_yourself: "Preséntate",
    teaching_experience: "Experiencia docente",
    motivate_student: "Motiva a tus alumnos",
    catchy_title: "Título pegadizo",
}