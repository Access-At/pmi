import z from "zod";

export const EventResponseSchema = z.object({
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

export const StokDarahDetailsSchema = z.object({
    type: z.string(),
    category: z.string(),
    amount: z.number(),
});

export type StokDarahDetailsType = z.infer<typeof StokDarahDetailsSchema>;

export const StokDarahTotalsSchema = z.object({
    by_blood_type_and_category: z.object({
        "A+": z.object({
            AHF: z.number(),
            FFP: z.number(),
            PCLR: z.number(),
            PC: z.number(),
            TC: z.number(),
        }),
        "A-": z.object({
            AHF: z.number(),
            FFP: z.number(),
            PCLR: z.number(),
            PC: z.number(),
            TC: z.number(),
        }),
        "B+": z.object({
            AHF: z.number(),
            FFP: z.number(),
            PCLR: z.number(),
            PC: z.number(),
            TC: z.number(),
        }),
        "B-": z.object({
            AHF: z.number(),
            FFP: z.number(),
            PCLR: z.number(),
            PC: z.number(),
            TC: z.number(),
        }),
        "AB+": z.object({
            AHF: z.number(),
            FFP: z.number(),
            PCLR: z.number(),
            PC: z.number(),
            TC: z.number(),
        }),
        "AB-": z.object({
            AHF: z.number(),
            FFP: z.number(),
            PCLR: z.number(),
            PC: z.number(),
            TC: z.number(),
        }),
        "O+": z.object({
            AHF: z.number(),
            FFP: z.number(),
            PCLR: z.number(),
            PC: z.number(),
            TC: z.number(),
        }),
        "O-": z.object({
            AHF: z.number(),
            FFP: z.number(),
            PCLR: z.number(),
            PC: z.number(),
            TC: z.number(),
        }),
    }),
    by_blood_category_and_type: z.object({
        AHF: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
        FFP: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
        PCLR: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
        PC: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
        TC: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
    }),
    total_by_blood_type: z.object({
        "A-plus": z.number(),
        "A-min": z.number(),
        "B-plus": z.number(),
        "B-min": z.number(),
        "AB-plus": z.number(),
        "AB-min": z.number(),
        "O-plus": z.number(),
        "O-min": z.number(),
    }),
});

export type StokDarahTotalsType = z.infer<typeof StokDarahTotalsSchema>;

export const StokDarahResponseSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    location: z.string(),
    image: z.string(),
    details: StokDarahDetailsSchema,
    details_table: z.object({
        AHF: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
        FFP: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
        PCLR: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
        PC: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
        TC: z.object({
            "A+": z.number(),
            "A-": z.number(),
            "B+": z.number(),
            "B-": z.number(),
            "AB+": z.number(),
            "AB-": z.number(),
            "O+": z.number(),
            "O-": z.number(),
        }),
    }),
    totals: StokDarahTotalsSchema,
});

export type StokDarahResponseType = z.infer<typeof StokDarahResponseSchema>;
