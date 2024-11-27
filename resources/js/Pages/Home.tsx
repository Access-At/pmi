import GuestLayout from "@/Layouts/GuestLayout";
import BannerSection from "@/Components/section/home/Banner";
import FirstContentSection from "@/Components/section/home/FirstContent";

export default function Home() {
    return (
        <GuestLayout>
            <BannerSection />
            <FirstContentSection />
        </GuestLayout>
    );
}
