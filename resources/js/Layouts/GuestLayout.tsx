import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex max-h-screen items-center">
            <main className="h-screen w-full">{children}</main>
        </div>
    );
}
