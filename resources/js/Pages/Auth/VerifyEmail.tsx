import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import AuthLayout from "@/Layouts/AuthLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
    const { data, setData, errors, processing } = useForm({
        verify_code: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <AuthLayout title="Verify Email Address">
            <section className="flex-1 h-screen flex items-center flex-col justify-between py-20">
                {status === "verification-link-sent" && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}

                <div className="flex w-full flex-col px-10 gap-7 align-middle">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-6xl font-bold">Verifikasi Email</h1>
                        <p className="text-2xl text-muted-foreground">
                            Silahkan masukkan kode verivikasi email anda
                        </p>
                    </div>

                    <form onSubmit={submit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email" className="font-bold">
                                Kode Verifikasi
                            </Label>

                            <Input
                                id="verify_code"
                                type="verify_code"
                                name="verify_code"
                                value={data.verify_code}
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("verify_code", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.verify_code}
                                className="mt-2"
                            />
                        </div>

                        <Button
                            className="font-bold text-3xl py-6 rounded-full"
                            disabled={processing}
                        >
                            Submit
                        </Button>

                        <div className="flex gap-2 font-medium items-center justify-center capitalize">
                            <p>Tidak menerimak kode verivikasi?</p>
                            <Link
                                href={route("verification.send")}
                                method="post"
                                className="text-primary"
                            >
                                Kirim Ulang
                            </Link>
                        </div>

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
