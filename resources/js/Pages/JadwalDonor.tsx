import EventSection from "@/Components/section/JadwalDonor/Event";
import JadwalDonorSection from "@/Components/section/JadwalDonor/JadwalDonor";
import GuestLayout from "@/Layouts/GuestLayout";

export default function JadwalDonor() {
    return (
        <GuestLayout>
            <JadwalDonorSection />
            <EventSection />
        </GuestLayout>
    );
}
