import Banner from "@/Components/section/home/Banner";
import FirstContent from "@/Components/section/home/FirstContent";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Home() {
    return (
        <GuestLayout>
            <Banner />
            <FirstContent />
        </GuestLayout>
    );
}
