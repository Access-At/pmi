import EventSection from "@/Components/section/jadwal-donor/Event";
import JadwalDonorSection from "@/Components/section/jadwal-donor/JadwalDonor";
import GuestLayout from "@/Layouts/GuestLayout";

export default function JadwalDonor() {
    return (
        <GuestLayout>
            <JadwalDonorSection />
            <EventSection />
        </GuestLayout>
    );
}
