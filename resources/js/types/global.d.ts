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

interface Stoks {
    data: StokDarahData;
}

interface StokDarahData {
    title: string;
    slug: string;
    description: string;
    location: string;
    image: string;
    details: Details[];
    details_table: DetailsTable[];
    totals: Totals[];
}

interface Details {
    type: BloodType;
    category: Category;
    amount: number;
}

interface DetailsTable {
    AHF: BloodTypeValues;
    FFP: BloodTypeValues;
    PCLR: BloodTypeValues;
    PC: BloodTypeValues;
    TC: BloodTypeValues;
}

type BloodTypeValues = Record<BloodType, number>;

type BloodType =
    | "A-plus"
    | "A-min"
    | "B-plus"
    | "B-min"
    | "AB-plus"
    | "AB-min"
    | "O-plus"
    | "O-min";

interface Totals {
    by_blood_type_and_category: Record<BloodType, CategoryValues>;
    by_blood_category_and_type: Record<Category, BloodTypeValues>;
    total_by_blood_type: BloodTypeValues;
}

interface CategoryValues {
    AHF: number;
    FFP: number;
    PCLR: number;
    PC: number;
    TC: number;
}

type Category = "AHF" | "FFP" | "PCLR" | "PC" | "TC";

declare module "@inertiajs/core" {
    interface PageProps extends InertiaPageProps, AppPageProps {
        events: Events;
        schedules: Schedules;
        stoks: Stoks;
    }
}
