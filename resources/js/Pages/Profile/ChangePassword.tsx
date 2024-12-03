import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import EditLayout from "@/Layouts/EditLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function ChangePassword() {
    const { flash } = usePage().props;
    const { data, setData, put, processing, errors, recentlySuccessful } =
        useForm({
            current_password: "",
            password: "",
            password_confirmation: "",
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("profile.password.update"));
    };

    if (recentlySuccessful)
        toast.success(flash.success, {
            className: "text-green-500",
        });
    return (
        <GuestLayout>
            <Head title="Edit Password" />
            <EditLayout>
                <form onSubmit={submit} className="w-full space-y-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password" className="font-bold">
                            Password Lama
                        </Label>

                        <Input
                            id="current_password"
                            type="password"
                            name="current_password"
                            value={data.current_password}
                            className="block w-full focus:ring-primary focus:border-none border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                        />

                        <InputError message={errors.current_password} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password" className="font-bold">
                            Password Baru
                        </Label>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full focus:ring-primary focus:border-none border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError message={errors.password} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password" className="font-bold">
                            Konfirmasi Password
                        </Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="block w-full focus:ring-primary focus:border-none border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />

                        <InputError message={errors.password_confirmation} />
                    </div>

                    <Button
                        className="w-full rounded-full text-lg"
                        disabled={processing}
                    >
                        save
                    </Button>
                </form>
            </EditLayout>
        </GuestLayout>
    );
}
