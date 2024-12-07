import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function Back({ route }: { route: any }) {
    return (
        <Link
            href={route}
            className="flex items-center text-red-600 text-xl font-bold"
        >
            <ArrowLeft className="w-6 h-6 font-bold" /> Go Back
        </Link>
    );
}
