import { Link, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import AuthLayout from "@/Layouts/AuthLayout";
import Back from "@/Components/Back";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <AuthLayout title="Login">
            <section className="flex-1 h-screen flex items-center flex-col justify-between py-5">
                {status && (
                    <div className="text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}
                <div className="flex w-full flex-col px-10 gap-7">
                    <div className="flex justify-end">
                        <Back route={route("home")} />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6">
                        <img
                            src="/assets/images/logo.png"
                            alt="logo"
                            width={150}
                            height={150}
                        />
                        <h1 className="uppercase text-primary text-6xl font-bold">
                            blood
                            <span className="text-rose-400">bags</span>
                        </h1>
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
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-full shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
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

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password" className="font-bold">
                                Password
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-full shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError message={errors.password} />
                        </div>

                        <div className="flex items-center justify-end">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="rounded-full text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <Button
                            className="w-full rounded-full"
                            disabled={processing}
                        >
                            Login
                        </Button>
                    </form>
                </div>
                <footer className="flex gap-2">
                    <p>Belum punya akun ?</p>
                    <Link
                        href="/register"
                        className="text-primary font-semibold"
                    >
                        Sign Up
                    </Link>
                </footer>
            </section>
        </AuthLayout>
    );
}
