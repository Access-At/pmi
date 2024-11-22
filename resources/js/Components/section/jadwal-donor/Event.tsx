import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { CalendarDaysIcon } from "lucide-react";

export default function EventSection() {
    return (
        <section className="lg:container mx-auto px-4 md:px-6 lg:px-8 space-y-4 my-10">
            <h1 className="text-2xl md:text-3xl font-bold">Event</h1>
            <Card className="flex px-4 md:px-6 py-3 items-center gap-x-20 justify-between">
                <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                    <div className="bg-primary/30 rounded-full p-2 md:p-3 w-fit">
                        <CalendarDaysIcon className="text-primary" />
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full gap-2 md:gap-0">
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg md:text-xl">
                                Itc Cempaka Mas Donor Darah
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Kamis, 20 November 2023
                            </p>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground">
                            Kamis, 09:00 - 14:00
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground">
                            Jakarta Pusat
                        </p>
                    </div>
                </div>
                <Button className="text-xs md:text-sm bg-gray-400 rounded-full px-6 md:px-8">
                    Ingatkan Saya
                </Button>
            </Card>
        </section>
    );
}
