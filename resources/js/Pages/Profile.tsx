import { Button, buttonVariants } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { cn } from "@/lib/utils";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";

export default function Profile() {
    return (
        <GuestLayout>
            <section className="flex flex-col items-center justify-center my-10 px-6 w-full">
                <div className="rounded-xl relative">
                    <img
                        src="https://placeholder.co/790x288"
                        alt=""
                        className="bg-cover rounded-xl"
                    />
                    <div className="hidden relative text-white top-[-10rem] left-[2.5rem] lg:flex flex-col gap-4 w-fit tracking-wider">
                        <div className="lg:flex lg:flex-col lg:gap-1 lg:w-fit sm:text-xl sm:font-bold md:text-base md:font-medium">
                            <h1 className="lg:text-4xl font-bold text-xl lg:font-bold md:text-2xl md:font-medium sm:text-xl sm:font-bold">
                                Alarm
                            </h1>
                            <p className="text-sm md:text-base">lokasi</p>
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
                        <div className="flex flex-col md:gap-2 items-center md:items-start">
                            <h1 className="text-xl font-bold md:text-2xl">
                                Alarm
                            </h1>
                            <p className="md:text-lg">lokasi</p>
                        </div>
                        <Button className="rounded-full bg-gray-600">
                            Edit Profile
                        </Button>
                    </div>
                    <div className="relative top-[-6.5rem] md:top-[-7.5rem] lg:top-[-10rem] right-[-17rem] md:right-[-40rem] lg:right-[-45rem]">
                        <img
                            src="/assets/images/blood/type.png"
                            alt=""
                            className="w-10"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 md:gap-8 relative lg:top-[-8rem]">
                    <h1 className="text-xl font-bold text-primary md:text-2xl">
                        Aktifitas
                    </h1>

                    <div className="border border-dashed rounded-xl border-gray-500 p-4 md:p-6 md:w-[30rem] md:self-center">
                        <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-8">
                            <img
                                src="/assets/images/Info-Aktivitas.png"
                                alt="Info"
                                className="w-20 md:w-[10rem]"
                            />
                            <h1 className="text-xl font-bold md:text-2xl">
                                Tidak Ada Aktifitas
                            </h1>
                            <p className="text-muted-foreground md:text-lg">
                                Cari aktifitas melalui feature jadwal donor
                                darah.
                            </p>
                            <Link
                                href={route("jadwal")}
                                className={cn(
                                    buttonVariants(),
                                    "rounded-full px-6 md:px-10"
                                )}
                            >
                                Jadwal Donor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
