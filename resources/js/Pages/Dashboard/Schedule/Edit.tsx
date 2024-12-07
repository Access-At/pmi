import Back from "@/Components/Back";
import EditScheduleForm from "@/Components/section/dashboard/EditScheduleForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit() {
    return (
        <AuthenticatedLayout>
            <div className="flex flex-col gap-4 w-full p-6">
                <Back route={route("dashboard.pmi")} />
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold">Update Daftar PMI</h1>
                </div>
                <EditScheduleForm />
            </div>
        </AuthenticatedLayout>
    );
}
