import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatCategory = (category: string): string => {
    const categories: Record<string, string> = {
        AHF: "AHF",
        FFP: "FFP",
        PCLR: "PCLR",
        PC: "PC",
        TC: "TC",
    };
    return categories[category] ?? category;
};
