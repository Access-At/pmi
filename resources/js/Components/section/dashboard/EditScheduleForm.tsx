import { useForm, usePage } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { FormEventHandler } from "react";
import ImageInput from "@/Components/ImageInput";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { Label } from "@/Components/ui/label";
import ScheduleCreateTable from "./ScheduleCreateTable";
import { toast } from "sonner";

export default function EditScheduleForm() {
    const { flash, schedules } = usePage().props;
    const { title, location, image } = schedules.data;
    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const bloodCategory = ["AHF", "FFP", "PCLR", "PC", "TC"];
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        title,
        location,
        image: image as unknown as File,
        blood_stock: bloodCategory.map((categoty) => ({
            category: categoty,
            amounts: bloodTypes.reduce(
                (acc, type) => ({
                    ...acc,
                    [type]: schedules.data.details[categoty as any][type] || 0,
                }),
                {}
            ),
        })),
    });

    if (recentlySuccessful) {
        toast.success(flash.success, {
            className: "text-green-500",
        });
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const key = event.target.id as keyof typeof data;
        const value =
            event.target.type === "file"
                ? event.target.files?.[0]
                : event.target.value;
        setData((state) => ({ ...state, [key]: value }));
    }

    function handleBloodStockChange(
        categoryIndex: number,
        bloodType: string,
        value: number
    ) {
        const updatedBloodStock = [...data.blood_stock];
        updatedBloodStock[categoryIndex].amounts = {
            ...updatedBloodStock[categoryIndex].amounts,
            [bloodType]: value,
        };
        setData("blood_stock", updatedBloodStock);
    }

    const eventSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);
        // post(route("dashboard.pmi.store"));
    };

    return (
        <form onSubmit={eventSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Label htmlFor="event">Title</Label>
                <Input
                    id="title"
                    name="title"
                    value={data.title}
                    className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
                <InputError message={errors.location} className="mt-2" />
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="image">Upload Image</Label>
                <ImageInput
                    image={data.image as File}
                    id="image"
                    name="image"
                    onChange={handleChange}
                />
                <InputError message={errors.image} className="mt-2" />
            </div>

            <ScheduleCreateTable
                bloodType={bloodTypes}
                data={data}
                onChange={handleBloodStockChange}
            />
            <Button type="submit" disabled={processing}>
                Submit
            </Button>
        </form>
    );
}
