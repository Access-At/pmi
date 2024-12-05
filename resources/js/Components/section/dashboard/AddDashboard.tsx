import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import AddEventForm from "./AddEventForm";

export default function AddDashboard({
    event = false,
    stok = false,
}: {
    event?: any;
    stok?: any;
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
                        {stok ? "Stok Darah" : null}
                    </DialogTitle>
                </DialogHeader>
                {event ? <AddEventForm /> : null}
            </DialogContent>
        </Dialog>
    );
}
