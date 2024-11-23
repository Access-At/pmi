import { PageProps as InertiaPageProps } from "@inertiajs/react";
import { AxiosInstance } from "axios";
import { route as ziggyRoute } from "ziggy-js";
import { PageProps as AppPageProps } from "./";

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    /* eslint-disable no-var */
    var route: typeof ziggyRoute;
}

interface Events {
    data: EventData[];
}

interface EventData {
    title: string;
    slug: string;
    description: string;
    date: string;
    time: string;
    location: string;
    lat: string;
    long: string;
}

interface Schedules {
    data: ScheduleData[];
}

interface ScheduleData {
    title: string;
    slug: string;
    description: string;
    location: string;
    image: string;
}

interface BloodStoks {
    data: {
        title: string;
        slug: string;
        description: string;
        location: string;
        image: string;
        details: Detail[];
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

interface Detail {
    type: string;
    category: string;
    amount: number;
}

declare module "@inertiajs/core" {
    interface PageProps extends InertiaPageProps, AppPageProps {
        events: Events;
        schedules: Schedules;
        bloodStoks: BloodStoks;
    }
}
