import ImageInput from "@/Components/ImageInput";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";
import ScheduleCreateTable from "./ScheduleCreateTable";

const BLOOD_CATEGORIES = [
    { category: "AHF", name: "Anti Hemophilic Factor (AHF)" },
    { category: "FFP", name: "Fresh Frozen Plasma (FFP)" },
    { category: "PCLR", name: "Packed Red Cell Leuko Reduce (PCLR)" },
    { category: "PC", name: "Packed Red Cell (PC)" },
    { category: "TC", name: "Thrombocyte Concentrate (TC)" },
];

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

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
        image: null as File | null,
        blood_stock: BLOOD_CATEGORIES.map((item) => ({
            category: item.category,
            amounts: BLOOD_TYPES.reduce(
                (acc, type) => ({
                    ...acc,
                    [type]: "",
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

    function handleBloodStockChange(categoryIndex, bloodType, value) {
        const updatedBloodStock = [...data.blood_stock];
        updatedBloodStock[categoryIndex].amounts[bloodType] = value;
        setData("blood_stock", updatedBloodStock);
    }

    const eventSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(data));
        // post(route("dashboard.event.store"), {
        //     onFinish: () => reset(),
        // });
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
                bloodType={BLOOD_TYPES}
                data={data}
                onChange={handleBloodStockChange}
            />
            <Button type="submit" disabled={processing}>
                Submit
            </Button>
        </form>
    );
}
