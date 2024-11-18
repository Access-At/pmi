import { Head } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";

interface Props {
    children: React.ReactNode;
    title: string;
}

export default function AuthLayout({ children, title }: Props) {
    return (
        <div className="flex flex-col max-h-screen sm:flex-row">
            <Head title={title} />

            <div className="flex w-full h-screen bg-white flex-col md:flex-row">
                {children}
                <section className="hidden md:block">
                    <img
                        src="assets/images/background.png"
                        alt="images"
                        className="w-full h-screen object-cover"
                    />
                </section>
            </div>
        </div>
    );
}