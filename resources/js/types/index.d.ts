export interface User {
    id: number;
    username: string;
    email: string;
    phone_number: string;
    type: string;
    domisili: string;
    gender: string;
    registration_number: string;
    rhesus: string;
    image_path: string;
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
    date_format: string;
    date: string;
    image: string;
    start_time: string;
    end_time: string;
    location: string;
    lat: number;
    long: number;
}

export interface Schedules {
    data: ScheduleData;
}

export interface ScheduleData {
    title: string;
    slug: string;
    description: string;
    location: string;
    image: string;
    details: ScheduleDetails[];
    totals: ScheduleTotals;
}

export interface ScheduleDetails {
    [category: string]: {
        [bloodType: string]: number;
    };
}

export interface ScheduleTotals {
    by_category: ByCategory[];
}

export interface ByCategory {
    category: string;
    total: number;
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
        updated: string;
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

export interface Notifications {
    slug: string;
    date: string;
    description: string;
}

export interface Activities {
    title: string;
    slug: string;
    date: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    flash: {
        success: string;
    };
    notifications: {
        data: Notifications[];
    };
    activities: {
        data: Activities[];
    };
    user: User;
    events: Events;
    event: EventDetail;
    schedules: Schedules;
    bloodStoks: BloodStoks;
};
