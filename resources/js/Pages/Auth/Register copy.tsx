import { Link, useForm } from "@inertiajs/react";

import AuthLayout from "@/Layouts/AuthLayout";
import Back from "@/Components/Back";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { FormEventHandler } from "react";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { Label } from "@/Components/ui/label";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        username: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <AuthLayout title="Register">
            <section className="flex-1 h-screen flex items-center flex-col justify-between py-5">
                <div className="flex w-full flex-col px-10 gap-7">
                    <Back />
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
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-full shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold" htmlFor="username">
                                Username
                            </Label>

                            <Input
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-full shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                                id="username"
                                name="username"
                                value={data.username}
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.username}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold" htmlFor="notelepon">
                                No Telepon
                            </Label>

                            <Input
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-full shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                                id="notelepon"
                                name="notelepon"
                                value={data.phone_number}
                                autoComplete="phone_number"
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.phone_number}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold" htmlFor="password">
                                Password
                            </Label>

                            <Input
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-full shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label
                                className="font-bold"
                                htmlFor="password_confirmation"
                            >
                                Confirm Password
                            </Label>

                            <Input
                                className="block w-full focus:ring-primary focus:border-none bg-white border border-gray-300 rounded-full shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox name="terms" id="terms" />
                            <Label htmlFor="terms">Agree to join</Label>
                        </div>

                        <Button className="w-full rounded-full">
                            Register
                        </Button>
                    </form>
                </div>
                <footer className="flex gap-2">
                    <p>Sudah punya akun ?</p>
                    <Link href="/login" className="text-primary font-semibold">
                        Sign In
                    </Link>
                </footer>
            </section>
        </AuthLayout>
    );
}
