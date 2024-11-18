import { Head } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";

interface Props {
    children: React.ReactNode;
    title: string;
}

export default function AuthLayout({ children, title }: Props) {
    return (
        <GuestLayout>
            <Head title={title} />

            <div className="flex w-full bg-white">
                {children}
                <section className="">
                    <img
                        src="assets/images/background.png"
                        alt="images"
                        className="w-full h-screen"
                    />
                </section>
            </div>
        </GuestLayout>
    );
}
