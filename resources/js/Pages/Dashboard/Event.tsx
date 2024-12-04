import AddDashboard from "@/Components/section/dashboard/AddDashboard";
import DashboardTable from "@/Components/section/dashboard/DashboardTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    const events = [
        {
            id: "1",
            name: "Donor Darah PMI",
            datetime: "2024-01-20 09:00",
            location: "PMI Jakarta",
            description: "Event donor darah rutin",
        },
        {
            id: "2",
            name: "Donor Darah Universitas",
            datetime: "2024-01-25 10:00",
            location: "Universitas Indonesia",
            description: "Donor darah mahasiswa",
        },
        {
            id: "3",
            name: "Donor Darah Perusahaan",
            datetime: "2024-02-01 11:00",
            location: "PT ABC",
            description: "Donor darah karyawan",
        },
        {
            id: "4",
            name: "Donor Darah Komunitas",
            datetime: "2024-02-05 09:30",
            location: "Taman Kota",
            description: "Donor darah untuk masyarakat umum",
        },
        {
            id: "5",
            name: "Donor Darah Sekolah",
            datetime: "2024-02-10 08:00",
            location: "SMA Negeri 1",
            description: "Donor darah untuk siswa dan guru",
        },
        // Tambahkan lebih banyak data sampel sesuai kebutuhan
    ];
    const headEvent = [
        { name: "Event" },
        { name: "Date&Time" },
        { name: "Location" },
        { name: "Description" },
    ];
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex flex-col items-center gap-4 w-full p-6">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold">Event Donor Darah</h1>
                    <AddDashboard event={true} />
                </div>
                <DashboardTable data={events} head={headEvent} />
            </div>
        </AuthenticatedLayout>
    );
}
