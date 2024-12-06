import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { EventData, ScheduleData } from "@/types";
import EditEventForm from "./EditEventForm";
import EditScheduleForm from "./EditScheduleForm";

export default function EditDashboard({
    eventData,
    event = false,
    schedule = false,
    scheduleData,
}: {
    eventData?: EventData;
    event?: boolean;
    scheduleData?: ScheduleData;
    schedule?: boolean;
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    className="bg-cyan-300/50 hover:bg-cyan-300 text-cyan-600 hover:text-white"
                >
                    Update
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Update {event ? "Event" : null}
                        {schedule ? "Daftar PMI" : null}
                    </DialogTitle>
                </DialogHeader>
                {event ? (
                    <EditEventForm event={eventData as EventData} />
                ) : null}
                {schedule ? (
                    <EditScheduleForm schedule={scheduleData as ScheduleData} />
                ) : null}
            </DialogContent>
        </Dialog>
    );
}
