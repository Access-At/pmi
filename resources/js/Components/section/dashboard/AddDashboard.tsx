import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import AddEventForm from "./AddEventForm";
import AddScheduleForm from "./AddScheduleForm";

export default function AddDashboard({
    event = false,
    schedule = false,
}: {
    event?: any;
    schedule?: any;
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-lime-500/50 text-lime-600 font-bold w-[6rem] rounded-full hover:bg-lime-500 hover:text-white">
                    Add
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add {event ? "Event" : null}
                        {schedule ? "Daftar PMI" : null}
                    </DialogTitle>
                </DialogHeader>
                {event ? <AddEventForm /> : null}
                {schedule ? <AddScheduleForm /> : null}
            </DialogContent>
        </Dialog>
    );
}
