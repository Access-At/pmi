import { DatePicker } from "@/Components/DatePicker";
import ImageInput from "@/Components/ImageInput";
import InputError from "@/Components/InputError";
import TimeInput from "@/Components/TimeInput";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { id } from "date-fns/locale/id";
import { EventData } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { format, parse } from "date-fns";
import { FormEventHandler, useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditEventForm({ event }: { event: EventData }) {
    const { flash } = usePage().props;
    const { data, setData, patch, processing, errors, recentlySuccessful } =
        useForm({
            title: event.title,
            date: event.date,
            start_time: event.start_time,
            end_time: event.end_time,
            location: event.location,
            description: event.description,
            image: event.image as unknown as File,
            lat: event.lat.toString(),
            long: event.long.toString(),
        });

    if (recentlySuccessful) {
        toast.success(flash.success, {
            className: "text-green-500",
        });
    }

    const [date, setDate] = useState<Date>(
        data.date ? new Date(data.date) : new Date()
    );

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setData("image", file as File);
    };

    const eventSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);
        // patch(route("dashboard.event.update", event.slug));
    };

    return (
        <form onSubmit={eventSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Label htmlFor="event">Event</Label>
                <Input
                    id="event"
                    name="event"
                    value={data.title}
                    className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                    onChange={(e) => setData("title", e.target.value)}
                />
                <InputError message={errors.title} className="mt-2" />
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="event">Date</Label>
                <DatePicker
                    date={date}
                    setDate={(date: Date) => {
                        setDate(date);
                        setData("date", format(date, "yyyy-MM-dd"));
                    }}
                />
                <InputError message={errors.date} className="mt-2" />
            </div>

            <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-2">
                    <Label htmlFor="event">Start Time</Label>
                    <TimeInput
                        time={data.start_time}
                        id="start_time"
                        name="start_time"
                        value={data.start_time}
                        onChange={(e) => setData("start_time", e.target.value)}
                    />
                    <InputError message={errors.start_time} className="mt-2" />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                    <Label htmlFor="event">End Time</Label>
                    <TimeInput
                        time={data.end_time}
                        id="end_time"
                        name="end_time"
                        value={data.end_time}
                        onChange={(e) => setData("end_time", e.target.value)}
                    />
                    <InputError message={errors.end_time} className="mt-2" />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="event">Location</Label>
                <Input
                    id="location"
                    name="location"
                    value={data.location}
                    className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                    onChange={(e) => setData("location", e.target.value)}
                />
                <InputError message={errors.location} className="mt-2" />
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="event">Description</Label>
                <Input
                    id="description"
                    name="description"
                    value={data.description}
                    className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                    onChange={(e) => setData("description", e.target.value)}
                />
                <InputError message={errors.description} className="mt-2" />
            </div>

            <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-2">
                    <Label htmlFor="event">Lat</Label>
                    <Input
                        id="lat"
                        name="lat"
                        value={data.lat}
                        className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                        onChange={(e) => setData("lat", e.target.value)}
                    />
                    <InputError message={errors.lat} className="mt-2" />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                    <Label htmlFor="event">Long</Label>
                    <Input
                        id="long"
                        name="long"
                        value={data.long}
                        className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                        onChange={(e) => setData("long", e.target.value)}
                    />
                    <InputError message={errors.long} className="mt-2" />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="image">Upload Image</Label>
                <ImageInput
                    image={data.image}
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                />
                <InputError message={errors.image} className="mt-2" />
            </div>

            <Button type="submit" disabled={processing}>
                Submit
            </Button>
        </form>
    );
}
