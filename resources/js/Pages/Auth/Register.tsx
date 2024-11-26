import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";

import AuthLayout from "@/Layouts/AuthLayout";
import Back from "@/Components/Back";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { FormEventHandler } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { Label } from "@/Components/ui/label";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
    .object({
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        phone_number: z.string().min(10, {
            message: "Phone number must be at least 10 characters.",
        }),
        password: z.string().min(8, {
            message: "Password must be at least 8 characters.",
        }),
        password_confirmation: z.string().min(8, {
            message: "Password must be at least 8 characters.",
        }),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Passwords don't match",
        path: ["password_confirmation"], // path of error
    });

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phone_number: "",
            password: "",
        },
    });

    const submit = (value: z.infer<typeof formSchema>) => {
        // post(route("register"), value, {
        //     onSuccess: () => form.reset("password", "password_confirmation"),
        // });

        Inertia.post(route("register"), value, {
            onSuccess: () => form.reset(),
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
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(submit)}
                            className="flex flex-col gap-4"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Username"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>No Telepon</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Phone Number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password_confirmation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full rounded-full"
                            >
                                Register
                            </Button>
                        </form>
                    </Form>

                    {/* <form onSubmit={submit} className="flex flex-col gap-4">
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
                    </form> */}
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
