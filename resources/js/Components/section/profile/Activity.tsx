import { buttonVariants } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";

export default function Activity() {
    const { activities } = usePage().props;
    console.log(activities);
    return (
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
                        Cari aktifitas melalui feature jadwal donor darah.
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
    );
}
