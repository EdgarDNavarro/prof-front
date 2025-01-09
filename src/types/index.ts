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

export const userSchema = z.object({
    id: uuidSchema,
    email: z.string().email(),
    language: languageSchema,
    currency: currencySchema,
    confirmed: z.boolean()
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