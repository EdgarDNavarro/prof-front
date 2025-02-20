import { z } from "zod";
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const uuidSchema = z.string().refine((val) => uuidRegex.test(val), {
    message: "Invalid UUID",
});

export type Testimonial = {
    id: number;
    studentName: string;
    studentAvatar: string;
    tutorName: string;
    tutorAvatar: string;
    comment: string;
    rating: number;
    language: string;
}
export const languageSchema = z.enum(["es", "it", "pt", "en", "fr", "de", "ja", "zh"])
export type Language = z.infer<typeof languageSchema>
export const LanguageEnum = Object.fromEntries(
    languageSchema.options.map((lang) => [lang, lang])
) as Record<Language, Language>;

export const currencySchema = z.enum(["USD", "EUR", "CHF", "JPY", "CNY", "BRL", "GBP"])
export type Currency = z.infer<typeof currencySchema>
export const CurrencyEnum = Object.fromEntries(
    currencySchema.options.map((currency) => [currency, currency])
) as Record<Currency, Currency>;

export const studentSchema = z.object({
    id: uuidSchema,
    first_name: z.string(),
    last_name: z.string(),
    timezone: z.string(),
    phone_number: z.string().nullable().optional(),
    user_id: uuidSchema,
})

export type Student = z.infer<typeof studentSchema>
export type StudentForm = Pick<Student, 'first_name' | 'last_name' | 'phone_number' | 'timezone'>

export const tutorSchema = z.object({
    id: uuidSchema,
    first_name: z.string(),
    last_name: z.string(),
    phone_number: z.string().nullable().optional(),
    timezone: z.string(),
    photo: z.string().nullable().optional(),
    bio: z.string().nullable().optional(),
    rating: z.number(),
    country_of_birth: z.string(),
    video_link: z.string().nullable().optional(),
    video_thumbnail: z.string().nullable().optional(),
    years_of_experience: z.number(),
    class_price: z.string(),
    balance: z.string(),
    profile_verified: z.boolean(),
    profile_hidden: z.boolean(),
    total_hours: z.number(),
    total_lessons: z.number(),
    super_tutor_badge: z.boolean(),
    user_id: uuidSchema,
})

export type Tutor = z.infer<typeof tutorSchema>
export type TutorForm = Pick<Tutor, 'first_name' | 'last_name' | 'timezone' | 'phone_number' | 'bio' | 'country_of_birth' | 'years_of_experience' | 'class_price'>

export const userSchema = z.object({
    id: uuidSchema,
    email: z.string().email(),
    language: languageSchema,
    currency: currencySchema,
    confirmed: z.boolean(),
    Student: studentSchema.optional().nullable(),
    Tutor: tutorSchema.optional().nullable()
})

export type User = z.infer<typeof userSchema>

export const authUserSchema = userSchema.pick({
    email: true,
    language: true,
    currency: true
}).extend({
    password: z.string(),
    password_confirmation: z.string(),
})

export type AuthUser = z.infer<typeof authUserSchema>
export type UserLoginForm = Pick<AuthUser, 'email' | 'password'>

export const okResponseSchema = z.object({
    data: z.string(),
    success: z.boolean()
})

export const errorResponseSchema = z.object({
    data: z.array(
        z.object({
            msg: z.string()
        })
    ),
    error: z.boolean()
})

export const loginResponseSchema = z.object({
    data: z.object({
        token: z.string(),
        userData: userSchema
    }),
    success: z.boolean()
})