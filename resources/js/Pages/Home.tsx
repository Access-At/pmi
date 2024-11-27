import GuestLayout from "@/Layouts/GuestLayout";
import BannerSection from "@/Components/section/home/Banner";
import FirstContentSection from "@/Components/section/home/FirstContent";
import SecoundContent from "@/Components/section/home/SecoundContent";
import ThirdContent from "@/Components/section/home/ThirdContent";

export default function Home() {
    return (
        <GuestLayout>
            <BannerSection />
            <FirstContentSection />
            <SecoundContent />
            <ThirdContent />
        </GuestLayout>
    );
}
