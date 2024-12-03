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
        // Add more sample data as needed
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
