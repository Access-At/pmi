import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Link, usePage } from "@inertiajs/react";

import EachUtil from "@/lib/EachUtil";
import { ScheduleData } from "@/types";

export default function JadwalDonorSection() {
    const { schedules } = usePage().props;
    return (
        <section className="px-6 flex flex-col gap-4 h-fit">
            <h1 className="text-4xl font-bold mb-8">Jadwal Donor Darah</h1>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="xl:w-[93%] mx-auto"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    <EachUtil
                        of={schedules.data as unknown as ScheduleData[]}
                        render={(item: ScheduleData, index) => (
                            <CarouselItem
                                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                                key={index}
                            >
                                <Link href={route("stok", item.slug)}>
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
                            </CarouselItem>
                        )}
                    />
                </CarouselContent>
                <CarouselPrevious className="hidden xl:block" />
                <CarouselNext className="hidden xl:block" />
            </Carousel>
        </section>
    );
}
