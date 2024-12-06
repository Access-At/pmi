import ImageInput from "@/Components/ImageInput";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ScheduleData } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function EditScheduleForm({
    schedule,
}: {
    schedule: ScheduleData;
}) {
    const { flash } = usePage().props;
    const { data, setData, processing, errors, recentlySuccessful, post } =
        useForm({
            title: schedule.title,
            location: schedule.location,
            image: schedule.image as unknown as File,
        });

    if (recentlySuccessful) {
        toast.success(flash.success, {
            className: "text-green-500",
        });
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setData("image", file as File);
    };

    const eventSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("dashboard.event.update", schedule.slug));
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
