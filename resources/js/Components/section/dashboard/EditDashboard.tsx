import InputError from "@/Components/InputError";
import TimeInput from "@/Components/TimeInput";
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
import { EventData } from "@/types";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function EditDashboard({
    eventData,
    event = false,
    stok = false,
}: {
    eventData?: EventData;
    event?: any;
    stok?: any;
}) {
    const { data, setData, post, processing, errors } = useForm({
        title: eventData!.title,
        date: eventData!.date,
        start_time: eventData!.start_time,
        end_time: eventData!.end_time,
        location: eventData!.location,
        description: eventData!.description,
    });
    const eventSubmit: FormEventHandler = (e) => {
        e.preventDefault;
        console.log(data);
    };
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
                    <form
                        onSubmit={eventSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Event</Label>
                            <Input
                                id="event"
                                name="event"
                                value={data.title}
                                className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Date</Label>
                            <Input
                                id="date"
                                name="date"
                                value={data.date}
                                className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.date}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Start Time</Label>
                            <TimeInput
                                time={data.start_time}
                                id="start_time"
                                name="start_time"
                                value={data.start_time}
                                onChange={(e) =>
                                    setData("start_time", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.start_time}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">End Time</Label>
                            <TimeInput
                                time={data.end_time}
                                id="end_time"
                                name="end_time"
                                value={data.end_time}
                                onChange={(e) =>
                                    setData("end_time", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.end_time}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Location</Label>
                            <Input
                                id="location"
                                name="location"
                                value={data.location}
                                className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.location}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="event">Description</Label>
                            <Input
                                id="description"
                                name="description"
                                value={data.description}
                                className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>

                        <Button type="submit" disabled={processing}>
                            Submit
                        </Button>
                    </form>
                ) : null}
            </DialogContent>
        </Dialog>
    );
}
