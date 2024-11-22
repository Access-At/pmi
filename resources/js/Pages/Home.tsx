import BannerSection from "@/Components/section/home/Banner";
import FirstContentSection from "@/Components/section/home/FirstContent";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Home() {
    return (
        <GuestLayout>
            <BannerSection />
            <FirstContentSection />
        </GuestLayout>
    );
}
