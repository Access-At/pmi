import Back from "@/Components/Back";
import AddScheduleForm from "@/Components/section/dashboard/AddScheduleForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create() {
    return (
        <AuthenticatedLayout>
            <div className="flex flex-col gap-4 w-full p-6">
                <Back route={route("dashboard.pmi")} />
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold">Create Daftar PMI</h1>
                </div>
                <AddScheduleForm />
            </div>
        </AuthenticatedLayout>
    );
}
