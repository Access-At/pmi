import z from "zod";

export const EventResponseSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    date: z.string(),
    time: z.string(),
    location: z.string(),
    lat: z.string(),
    long: z.string(),
    image: z.string(),
});

export type EventResponseType = z.infer<typeof EventResponseSchema>;

export const ScheduleResponseSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    location: z.string(),
    image: z.string(),
});

export type ScheduleResponseType = z.infer<typeof ScheduleResponseSchema>;

export const BloodStoksTotalByTypeResponseSchema = z.object({
    type: z.string(),
    total: z.number(),
});

export type BloodStoksTotalByTypeResponseType = z.infer<
    typeof BloodStoksTotalByTypeResponseSchema
>;

export const BloodStokTotalResponseSchema = z.object({
    by_blood_type: z.object({}),
});

export type BloodStoksTotalResponseType = z.infer<
    typeof BloodStokTotalResponseSchema
>;

export const BloodStokDetailResponseSchema = z.object({
    type: z.string(),
    category: z.string(),
    amount: z.number(),
});

export type BloodStoksDetailResponseType = z.infer<
    typeof BloodStokDetailResponseSchema
>;

export const BloodStockResponseSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    location: z.string(),
    image: z.string(),
    details: z.object({}),
    totals: z.object({}),
});
