import StockDarahSection from "@/Components/section/stockdarah/StockDarah";
import TableStock from "@/Components/section/stockdarah/TableStock";
import GuestLayout from "@/Layouts/GuestLayout";

export default function StockDarah() {
    return (
        <GuestLayout>
            <StockDarahSection />
            <TableStock />
        </GuestLayout>
    );
}
