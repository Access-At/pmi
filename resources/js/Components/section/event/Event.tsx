import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import EachUtil from "@/lib/EachUtil";
import { EventResponseType } from "@/schemas/response-schema";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { CalendarDaysIcon } from "lucide-react";

export default function EventSection() {
    const { events } = usePage().props;
    return (
        <section className="px-4 md:px-6 lg:px-8 space-y-4 my-10">
            <h1 className="text-2xl md:text-3xl font-bold">Event</h1>
            <EachUtil
                of={events.data}
                render={(item: EventResponseType, index) => (
                    <Card className="w-full" key={index}>
                        <CardContent className="p-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                {/* Icon Section */}
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <CalendarDaysIcon className="w-6 h-6 text-red-600" />
                                </div>

                                <Link
                                    href={route("event.detail", item.slug)}
                                    className="flex flex-col gap-2 flex-1"
                                >
                                    {/* Content Section */}
                                    <div className="flex-grow space-y-1">
                                        <h3 className="text-lg font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {item.date}
                                        </p>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                                            <span>{item.time}</span>
                                            <span className="hidden sm:inline">
                                                •
                                            </span>
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className="w-full sm:w-auto mt-4 sm:mt-0">
                                    <Button
                                        className="w-full sm:w-auto bg-gray-400 rounded-full"
                                        onClick={() => {
                                            router.post(route("notif.store"), {
                                                event: item.slug,
                                            });
                                        }}
                                    >
                                        Ingkatkan Saya
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            />
        </section>
    );
}
