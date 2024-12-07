import AddDashboard from "@/Components/section/dashboard/AddDashboard";
import DashboardTable from "@/Components/section/dashboard/DashboardTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { events } = usePage().props;
    const headEvent = [
        { name: "Event" },
        { name: "Date" },
        { name: "Time" },
        { name: "Location" },
        { name: "Description" },
    ];
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex flex-col items-center gap-4 w-full p-6">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold">Event Donor Darah</h1>
                    <AddDashboard />
                </div>
                <DashboardTable event data={events.data} head={headEvent} />
            </div>
        </AuthenticatedLayout>
    );
}
