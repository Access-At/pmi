import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function Back() {
    return (
        <div className="flex justify-end">
            <Link
                href="/"
                className="flex items-center text-red-700 text-xl font-bold"
            >
                <ArrowLeft className="w-6 h-6 font-bold" /> Go Back
            </Link>
        </div>
    );
}
