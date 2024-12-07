import AddDashboard from "@/Components/section/dashboard/AddDashboard";
import DashboardTable from "@/Components/section/dashboard/DashboardTable";
import { Button, buttonVariants } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { cn } from "@/lib/utils";
import { Head, Link, router, usePage } from "@inertiajs/react";

export default function PMI() {
    const { schedules } = usePage().props;
    const headEvent = [{ name: "name" }, { name: "Location" }];
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex flex-col items-center gap-4 w-full p-6">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold">Daftar PMI</h1>
                    <Link
                        href={route("dashboard.pmi.create")}
                        className={cn(
                            buttonVariants(),
                            "bg-lime-500/50 text-lime-600 font-bold w-[6rem] rounded-full hover:bg-lime-500 hover:text-white"
                        )}
                    >
                        Add
                    </Link>
                    {/* <AddDashboard schedule /> */}
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
