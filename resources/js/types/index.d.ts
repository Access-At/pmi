export interface User {
    // id: number;
    // name: string;
    // email: string;
    // email_verified_at?: string;
    id: number;
    username: string;
    email: string;
    email_verified_at: string;
    phone_number: string;
    terms: boolean;
}

export interface Events {
    data: EventData[];
}

export interface EventDetail {
    data: EventData;
}

export interface EventData {
    title: string;
    slug: string;
    description: string;
    date: string;
    image: string;
    time: string;
    location: string;
    lat: number;
    long: number;
}

export interface Schedules {
    data: ScheduleData[];
}

export interface ScheduleData {
    title: string;
    slug: string;
    description: string;
    location: string;
    image: string;
}

export interface BloodStoks {
    data: {
        title: string;
        slug: string;
        description: string;
        location: string;
        image: string;
        details: Detail;
        totals: Totals;
    };
}

export interface Totals {
    by_blood_type: ByBloodType[];
}

export interface ByBloodType {
    type: string;
    total: number;
}

export interface Details {
    [category: string]: {
        [bloodType: string]: number;
    };
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    user: User;
    events: Events;
    event: EventDetail;
    schedules: Schedules;
    bloodStoks: BloodStoks;
};
