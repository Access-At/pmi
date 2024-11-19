import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col max-h-screen">
            <Navbar />
            <main className="h-screen w-full">{children}</main>
            <Footer />
        </div>
    );
}
