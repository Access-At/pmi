import { Card, CardContent } from "@/Components/ui/card";
import EachUtil from "@/lib/EachUtil";
import { ScheduleData } from "@/types";
import { Link, usePage } from "@inertiajs/react";

export default function PMI() {
    const { schedules } = usePage().props;
    return (
        <section className="px-6 flex flex-col gap-4 h-fit">
            <h1 className="text-4xl text-center font-bold mb-8">Daftar PMI</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <EachUtil
                    of={schedules.data as unknown as ScheduleData[]}
                    render={(item: ScheduleData, index) => (
                        <Link href={route("stok", item.slug)} key={index}>
                            <div className="relative transform transition-transform hover:scale-105">
                                <Card className="relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-red-600 transform rotate-3 scale-105 -z-10" />
                                    <CardContent className="p-0">
                                        <div className="relative h-[400px] w-full">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                                <h2 className="text-2xl font-bold mb-1">
                                                    {item.title}
                                                </h2>
                                                <p className="text-lg opacity-90">
                                                    {item.location}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Link>
                    )}
                />
            </div>
        </section>
    );
}
