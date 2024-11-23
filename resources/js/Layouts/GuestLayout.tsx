import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <main className="flex-grow">{children}</main>

            <img
                src="/assets/images/waves-footer.png"
                alt="waves-footer"
                className="bottom-0 w-full z-0 object-cover"
            />
            <Footer />
        </div>
    );
}
