import { z } from "zod"

export const colorIdEnum = z.enum([
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24"
]);

export type ColorId = z.infer<typeof colorIdEnum>
export const schemaEventItem = z.object({
    kind: z.string(),
    title: z.string(),
    colorId: colorIdEnum.optional(),
    etag: z.string(),
    id: z.string(),
    status: z.string(),
    htmlLink: z.string(),
    created: z.string(),
    updated: z.string(),
    summary: z.string(),
    description: z.string(),
    location: z.string(),
    creator: z.object({ email: z.string(), self: z.boolean() }),
    organizer: z.object({ email: z.string(), self: z.boolean() }),
    start: z.date(),
    end: z.date(),
    transparency: z.string(),
    iCalUID: z.string(),
    sequence: z.number(),
    reminders: z.object({
        useDefault: z.boolean(),
        overrides: z.array(z.object({ method: z.string(), minutes: z.number() }))
    }),
    eventType: z.string()
})

export type EventItem = z.infer<typeof schemaEventItem>