import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { EventData } from "@/types";
import EditEventForm from "./EditEventForm";

export default function EditDashboard({
    eventData,
    event = false,
    stok = false,
}: {
    eventData?: EventData;
    event?: any;
    stok?: any;
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
                        {stok ? "Stok Darah" : null}
                    </DialogTitle>
                </DialogHeader>
                {event ? (
                    <EditEventForm event={eventData as EventData} />
                ) : null}
            </DialogContent>
        </Dialog>
    );
}
