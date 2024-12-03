import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function AuthLayout({
    title,
    children,
}: PropsWithChildren<{
    title: string;
}>) {
    return (
        <div className="flex flex-col max-h-screen sm:flex-row">
            <Head title={title} />

            <div className="flex w-full h-screen bg-white flex-col md:flex-row">
                {children}
                <section className="hidden lg:block flex-1">
                    <img
                        src="/assets/images/background.png"
                        alt="images"
                        className="w-full h-screen object-cover"
                    />
                </section>
            </div>
        </div>
    );
}
