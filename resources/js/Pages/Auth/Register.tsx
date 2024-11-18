import Back from "@/Components/Back";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import AuthLayout from "@/Layouts/AuthLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        username: "",
        notelepon: "",
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
                            src="assets/images/logo.png"
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
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
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

                        <div>
                            <InputLabel htmlFor="username" value="Username" />

                            <TextInput
                                id="username"
                                name="username"
                                value={data.username}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
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

                        <div>
                            <InputLabel
                                htmlFor="notelepon"
                                value="No Telepon"
                            />

                            <TextInput
                                id="notelepon"
                                name="notelepon"
                                value={data.notelepon}
                                className="mt-1 block w-full"
                                autoComplete="notelepon"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("notelepon", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.notelepon}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
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

                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
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
                            <InputLabel htmlFor="terms">
                                Agree to join
                            </InputLabel>
                        </div>

                        <Button className="w-full">Register</Button>
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
