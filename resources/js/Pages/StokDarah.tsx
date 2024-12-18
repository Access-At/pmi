import StokDarahSection from "@/Components/section/stokdarah/DetailStokDarah";
import TableStock from "@/Components/section/stokdarah/TableStock";
import GuestLayout from "@/Layouts/GuestLayout";

export default function StokDarah() {
    return (
        <GuestLayout>
            <StokDarahSection />
            <TableStock />
        </GuestLayout>
    );
}
