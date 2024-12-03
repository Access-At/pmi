import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function EditLayout({ children }: PropsWithChildren) {
    const user = usePage().props.auth.user;
    return (
        <section className="flex flex-col md:flex-row items-start justify-center px-6 gap-4 my-10">
            <div className="flex flex-col gap-2 w-[12rem]">
                <h1 className="text-xl font-bold text-primary">Edit Akun</h1>
                <div className="flex flex-col sm:flex-row md:flex-col gap-2">
                    <Link
                        href={route("profile.edit", user.id)}
                        className={cn(
                            route().current("profile.edit")
                                ? "font-bold"
                                : "text-muted-foreground"
                        )}
                    >
                        Profile
                    </Link>
                    <Link
                        href={route("profile.password.edit")}
                        className={cn(
                            route().current("profile.password.edit")
                                ? "font-bold"
                                : "text-muted-foreground"
                        )}
                    >
                        Password
                    </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row flex-1 gap-4 w-full">
                {children}
            </div>
        </section>
    );
}
