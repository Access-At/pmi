import { DatePicker } from "@/Components/DatePicker";
import ImageInput from "@/Components/ImageInput";
import InputError from "@/Components/InputError";
import TimeInput from "@/Components/TimeInput";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { useForm, usePage } from "@inertiajs/react";
import { setDate } from "date-fns";
import { format } from "path";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function AddScheduleForm() {
    const { flash } = usePage().props;
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        title: "",
        location: "",
        blood_type: "",
        category: "",
        image: undefined as File | undefined,
    });

    if (recentlySuccessful) {
        toast.success(flash.success, {
            className: "text-green-500",
        });
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setData("image", file);
        } else {
            setData("image", undefined);
        }
    };

    const eventSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("dashboard.event.store"), {
            onFinish: () => {
                reset();
            },
        });
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
