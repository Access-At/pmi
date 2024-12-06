import AddDashboard from "@/Components/section/dashboard/AddDashboard";
import DashboardTable from "@/Components/section/dashboard/DashboardTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function PMI() {
    const { schedules } = usePage().props;
    const headEvent = [{ name: "name" }, { name: "Location" }];
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex flex-col items-center gap-4 w-full p-6">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold">Daftar PMI</h1>
                    <AddDashboard schedule />
                </div>
                <DashboardTable
                    data={schedules.data}
                    head={headEvent}
                    schedule
                />
            </div>
        </AuthenticatedLayout>
    );
}
