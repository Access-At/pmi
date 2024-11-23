import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import EachUtil from "@/lib/EachUtil";
import { ScheduleResponseType } from "@/schemas/response-schema";
import { Link, usePage } from "@inertiajs/react";

export default function JadwalDonorSection() {
    const { schedules } = usePage().props;
    return (
        <div className="lg:container mx-auto px-6 flex flex-col gap-4 h-fit">
            <h1 className="text-4xl font-bold mb-8">Jadwal Donor Darah</h1>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    <EachUtil
                        of={schedules.data}
                        render={(item: ScheduleResponseType, index) => (
                            <CarouselItem
                                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                                key={index}
                            >
                                <Link href={`/stok-darah/${item.slug}`}>
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
                <CarouselPrevious className="hidden lg:block" />
                <CarouselNext className="hidden lg:block" />
            </Carousel>
        </div>
    );
}
