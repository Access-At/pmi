import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { cn } from "@/lib/utils";
import { router, usePage } from "@inertiajs/react";
import { CalendarDaysIcon, Clock9Icon, MapPinIcon } from "lucide-react";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

export default function Detail() {
    const { event, activities } = usePage().props;
    const isEventNotified = activities?.data.some(
        (activity) => activity.slug === event.data.slug
    );

    const handlerReminder = (eventSlug: string) => {
        router.post(route("notif.store"), {
            event: eventSlug,
        });
    };
    return (
        <section className="flex flex-col md:flex-row px-6 w-full gap-5 my-4">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <p className="text-primary font-bold md:text-lg">
                        Event Donor Darah
                    </p>
                    <h1 className="text-2xl font-bold md:text-3xl">
                        {event.data.title}
                    </h1>
                </div>
                <Card className="overflow-hidden flex flex-col gap-4">
                    <CardHeader className="w-full p-0">
                        <img
                            src={"https://picsum.photos/200/300"}
                            alt="image-place"
                            className="h-[400px] w-full object-cover"
                        />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold">Detail Lengkap</h2>
                        <span className="flex items-center gap-2">
                            <CalendarDaysIcon className="w-6 h-6 text-red-600" />
                            <p className="text-muted-foreground">
                                {event.data.date_format}
                            </p>
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock9Icon className="w-6 h-6 text-red-600" />
                            <p className="text-muted-foreground">
                                {event.data.start_time} - {event.data.end_time}
                            </p>
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPinIcon className="w-6 h-6 text-red-600" />
                            <p className="text-muted-foreground">
                                {event.data.location}
                            </p>
                        </span>
                        <h2 className="text-xl font-bold">Description</h2>
                        <p>{event.data.description}</p>

                        {!isEventNotified ? (
                            <Button
                                className={cn(
                                    "w-full sm:w-auto bg-gray-400 rounded-full",
                                    isEventNotified && "disabled"
                                )}
                                onClick={() => handlerReminder(event.data.slug)}
                            >
                                Ingatkan Saya
                            </Button>
                        ) : (
                            <>
                                <span className="text-sm text-muted-foreground text-center">
                                    Telah Diingatkan!
                                </span>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
            {/* Map */}
            <div className="h-[820px] rounded-lg overflow-hidden shadow-sm w-full">
                <MapContainer
                    center={[event.data.lat, event.data.long]}
                    zoom={16}
                    zoomControl={false}
                    scrollWheelZoom={false}
                    className="h-full w-full z-0"
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <ZoomControl position="topright" />
                    <Marker position={[event.data.lat, event.data.long]} />
                </MapContainer>
            </div>
        </section>
    );
}
