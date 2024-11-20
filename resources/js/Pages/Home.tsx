import Banner from "@/Components/section/home/Banner";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Home() {
    return (
        <GuestLayout>
            <div className="">
                <Banner />
                <div className="flex-1"></div>
            </div>
        </GuestLayout>
    );
}
