import z from "zod";

export const EventResponseSchema = z.array(
    z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        date: z.string(),
        time: z.string(),
        location: z.string(),
        lat: z.string(),
        long: z.string(),
        image: z.string(),
    })
);

export type EventResponseType = z.infer<typeof EventResponseSchema>;
