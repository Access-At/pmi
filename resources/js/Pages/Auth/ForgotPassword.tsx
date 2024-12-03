import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import AuthLayout from "@/Layouts/AuthLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <AuthLayout title="Forgot Password">
            <section className="flex-1 h-screen flex items-center flex-col justify-between py-20">
                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <div className="flex w-full flex-col px-10 gap-7 align-middle">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-6xl font-bold">Lupa Password</h1>
                        <p className="text-2xl text-muted-foreground">
                            Silahkan masukkan alamat email anda untuk menerima
                            pesan verifikasi
                        </p>
                    </div>

                    <form onSubmit={submit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email" className="font-bold">
                                Email
                            </Label>

                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <Button
                            className="font-bold text-3xl py-6 rounded-full"
                            disabled={processing}
                        >
                            Submit
                        </Button>

                        <div className="flex gap-2 font-bold items-center justify-center capitalize">
                            <p>kembali ke</p>
                            <Link
                                href={route("login")}
                                className="text-primary"
                            >
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </AuthLayout>
    );
}
