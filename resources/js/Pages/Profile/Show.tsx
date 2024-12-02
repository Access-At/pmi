import Activity from "@/Components/section/profile/Activity";
import { Button, buttonVariants } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";

export default function Profile() {
    const user = usePage().props.auth.user;
    return (
        <GuestLayout>
            <section className="flex flex-col items-center justify-center my-10 px-6 w-full">
                <div className="rounded-xl relative">
                    <img
                        src="https://placeholder.co/790x288"
                        alt=""
                        className="bg-cover rounded-xl"
                    />
                    <div className="hidden relative text-white top-[-12.5rem] left-[2.5rem] lg:flex flex-col gap-4 w-fit tracking-wider">
                        <div className="lg:flex lg:flex-col lg:gap-1 lg:w-fit sm:text-xl sm:font-bold md:text-base md:font-medium">
                            <h1 className="lg:text-4xl font-bold text-xl lg:font-bold md:text-2xl md:font-medium sm:text-xl sm:font-bold">
                                {user.username}
                            </h1>
                            <p className="text-muted-foreground">
                                {user.email}
                            </p>
                            <p className="text-sm md:text-base">
                                {user.domisili}
                            </p>
                        </div>
                        <Link
                            href={route("profile.edit")}
                            className={cn(
                                buttonVariants(),
                                "rounded-full bg-gray-600"
                            )}
                        >
                            Edit Profile
                        </Link>
                    </div>
                    <div className="flex lg:hidden items-center justify-between mt-5 lg:mt-0">
                        <div className="flex flex-col md:gap-2">
                            <h1 className="text-xl font-bold md:text-2xl">
                                {user.username}
                            </h1>
                            <p className="text-muted-foreground font-normal">
                                {user.email}
                            </p>
                            <p className="md:text-lg">{user.domisili}</p>
                        </div>
                        <Button className="rounded-full bg-gray-600">
                            Edit Profile
                        </Button>
                    </div>
                    <div className="relative top-[-8rem] md:top-[-9.5rem] lg:top-[-11.5rem] right-[-17rem] md:right-[-40rem] lg:right-[-45rem]">
                        <img
                            src="/assets/images/blood/type.png"
                            alt=""
                            className="w-10"
                        />
                    </div>
                </div>
                <Activity />
            </section>
        </GuestLayout>
    );
}
