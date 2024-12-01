import { Notifications } from "@/types";
import { usePage } from "@inertiajs/react";
import { CalendarDaysIcon } from "lucide-react";
import EachUtil from "@/lib/EachUtil";
import { divIcon } from "leaflet";
import { ScrollArea } from "./ui/scroll-area";

export default function NotificationComponents() {
    const { notifications } = usePage().props;
    return notifications.data.length <= 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
            <img src="/assets/images/Notifikasi.png" alt="notifikasi" />
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                <h2 className="text-xl font-bold text-black">
                    Belum ada Notifikasi
                </h2>
                <p>Tidak ada notifikasi saat ini.</p>
                <p>Notifikasi baru akan muncul di halaman ini</p>
            </div>
        </div>
    ) : (
        <ScrollArea className="h-[30rem]">
            <div className="flex flex-col gap-4 items-center">
                <EachUtil
                    of={notifications.data}
                    render={(item: Notifications, index) => (
                        <div key={index} className="flex gap-4 items-center">
                            <span className="bg-primary/30 rounded-full p-4 flex items-center justify-center">
                                <CalendarDaysIcon className="w-6 h-6 text-primary" />
                            </span>
                            <div className="flex flex-col gap-2">
                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                                <p className="text-primary">{item.date}</p>
                            </div>
                        </div>
                    )}
                />
            </div>
        </ScrollArea>
    );
}
