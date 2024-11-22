import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { CalendarDaysIcon } from "lucide-react";

export default function EventSection() {
    return (
        <section className="lg:container mx-auto my-10 px-6 space-y-4">
            <h1 className="text-3xl font-bold">Event</h1>
            <Card className="flex px-6 py-3 items-center gap-4">
                <div className="bg-primary/30 rounded-full p-3">
                    <CalendarDaysIcon className="text-primary" />
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                        <h3 className="font-bold">
                            Itc Cempaka Mas Donor Darah
                        </h3>
                        <p className="text-muted-foreground">
                            Kamis, 20 November 2023
                        </p>
                    </div>
                    <p className="text-muted-foreground">
                        Kamis, 09:00 - 14:00
                    </p>
                    <p className="text-muted-foreground">Jakarta Pusat</p>
                    <Button className="text-sm bg-gray-400 rounded-full px-8">
                        Ingatkan Saya
                    </Button>
                </div>
            </Card>
        </section>
    );
}
