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

export default function EditDashboard({
    eventData,
}: {
    eventData?: EventData;
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
                    <DialogTitle>Update Event</DialogTitle>
                </DialogHeader>
                <EditEventForm event={eventData as EventData} />
            </DialogContent>
        </Dialog>
    );
}
