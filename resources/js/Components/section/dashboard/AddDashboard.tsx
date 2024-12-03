import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function AddDashboard({
    event = false,
    stok = false,
}: {
    event?: any;
    stok?: any;
}) {
    const eventSubmit = () => {};
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
                {event ? (
                    <form
                        onSubmit={eventSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Event</Label>
                            <Input
                                id="event"
                                name="event"
                                value=""
                                className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                                onChange={() => {}}
                            />
                            <InputError message="" className="mt-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Date&Time</Label>
                            <Input
                                id="date&time"
                                name="date&time"
                                value=""
                                className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                                onChange={() => {}}
                            />
                            <InputError message="" className="mt-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Location</Label>
                            <Input
                                id="location"
                                name="location"
                                value=""
                                className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                                onChange={() => {}}
                            />
                            <InputError message="" className="mt-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Description</Label>
                            <Input
                                id="description"
                                name="description"
                                value=""
                                className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                                onChange={() => {}}
                            />
                            <InputError message="" className="mt-2" />
                        </div>
                    </form>
                ) : null}
            </DialogContent>
        </Dialog>
    );
}
