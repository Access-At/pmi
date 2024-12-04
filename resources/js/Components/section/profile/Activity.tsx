import { buttonVariants } from "@/Components/ui/button";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import EachUtil from "@/lib/EachUtil";
import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";
import { CalendarDaysIcon } from "lucide-react";

export default function Activity() {
    const { activities } = usePage().props;
    return (
        <div className="flex flex-col items-center gap-4 md:gap-8 relative lg:top-[-8rem]">
            <h1 className="text-xl font-bold text-primary md:text-2xl">
                Aktifitas
            </h1>

            <div className="border border-dashed rounded-xl border-gray-500 p-4 md:p-6 md:w-[45rem] lg:w-[48.5rem] md:self-center">
                {activities.data.length <= 0 ? (
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
                ) : (
                    <div className="flex flex-col gap-3 items-center justify-center w-full">
                        <EachUtil
                            of={activities.data}
                            render={(item, index) => (
                                <Link
                                    href={route("event.detail", item.slug)}
                                    key={index}
                                    className="w-full"
                                >
                                    <Card className="flex gap-3 items-center align-middle p-5 rounded-lg w-full">
                                        <CardHeader className="bg-primary/30 rounded-full p-3 flex items-center justify-center">
                                            <CalendarDaysIcon className="w-6 h-6 text-primary" />
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <h6 className="font-bold">
                                                {item.title}
                                            </h6>
                                            <p className="text-muted-foreground text-sm">
                                                {item.date}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
