import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatCategory = (category: string): string => {
    const categories: Record<string, string> = {
        AHF: "Anti Hemophilic Factor (AHF)",
        FFP: "Fresh Frozen Plasma (FFP)",
        PCLR: "Packed Red Cell Leuko Reduce (PCLR)",
        PC: "Packed Red Cell (PC)",
        TC: "Thrombocyte Concentrate (TC)",
    };
    return categories[category] ?? category;
};
