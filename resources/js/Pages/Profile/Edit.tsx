import { Head, useForm, usePage } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Label } from "@/Components/ui/label";
import { FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import { PencilIcon } from "lucide-react";
import { toast } from "sonner";
import EditLayout from "@/Layouts/EditLayout";

export default function Edit() {
    const { auth, flash } = usePage().props;
    const user = auth.user;
    const { data, setData, put, processing, errors, recentlySuccessful } =
        useForm({
            username: user.username,
            registration_number: user.registration_number,
            phone_number: user.phone_number,
            gender: user.gender,
            domisili: user.domisili,
            type: user.type,
            rhesus: user.rhesus,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("profile.update"));
    };

    if (recentlySuccessful)
        toast.success(flash.success, {
            className: "text-green-500",
        });

    return (
        <GuestLayout>
            <Head title="Profile" />
            <EditLayout>
                <div className="flex flex-col items-center gap-4 justify-center w-full md:w-fit md:justify-start">
                    <div className="relative">
                        <Avatar className="bg-primary/50 flex items-center justify-center h-20 w-20">
                            {/* <AvatarImage
                                    src={user.image}
                                    alt={user.name}
                                /> */}
                            <AvatarFallback className="flex items-center justify-center font-bold uppercase">
                                {user.username.replace(/^(.).*$/, "$1")}
                            </AvatarFallback>
                        </Avatar>
                        <label
                            htmlFor="photo-upload"
                            className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-50"
                        >
                            <PencilIcon className="w-4 h-4" />
                            <input
                                id="photo-upload"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                // onChange={handlePhotoChange}
                            />
                        </label>
                    </div>
                </div>
                <form onSubmit={submit} className="w-full space-y-4">
                    <div className="flex flex-col gap-2">
                        <Label className="font-bold" htmlFor="username">
                            Username
                        </Label>

                        <Input
                            className="block w-full focus:ring-primary focus:border-none border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                            id="username"
                            name="username"
                            value={data.username}
                            autoComplete="username"
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.username}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="font-bold" htmlFor="registration">
                            Nomor Registrasi
                        </Label>
                        <Input
                            className="block w-full focus:ring-primary focus:border-none border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                            id="registration"
                            name="registration_number"
                            value={data.registration_number}
                            onChange={(e) =>
                                setData("registration_number", e.target.value)
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="font-bold" htmlFor="notelepon">
                            No Telepon
                        </Label>

                        <Input
                            className="block w-full focus:ring-primary focus:border-none border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                            id="notelepon"
                            name="notelepon"
                            value={data.phone_number}
                            onChange={(e) =>
                                setData("phone_number", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.phone_number}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="gender" className="font-bold">
                            Jenis Kelamin
                        </Label>
                        <Select
                            name="gander"
                            value={data.gender}
                            onValueChange={(value) => setData("gender", value)}
                        >
                            <SelectTrigger className="border border-gray-300">
                                <SelectValue placeholder="Pilih jenis kelamin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Laki-laki</SelectItem>
                                <SelectItem value="female">
                                    Perempuan
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <InputError message={errors.gender} className="mt-2" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="domisili" className="font-bold">
                            Kota Domisili
                        </Label>
                        <Input
                            className="block w-full focus:ring-primary focus:border-none border border-gray-300 rounded-lg shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700"
                            id="domisili"
                            name="domisili"
                            value={data.domisili}
                            onChange={(e) =>
                                setData("domisili", e.target.value)
                            }
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="blood_type" className="font-bold">
                                Golongan Darah
                            </Label>
                            <Select
                                name="type"
                                value={data.type}
                                onValueChange={(value) =>
                                    setData("type", value)
                                }
                            >
                                <SelectTrigger className="border border-gray-300">
                                    <SelectValue placeholder="Pilih" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="A">A</SelectItem>
                                    <SelectItem value="B">B</SelectItem>
                                    <SelectItem value="AB">AB</SelectItem>
                                    <SelectItem value="O">O</SelectItem>
                                </SelectContent>
                            </Select>

                            <InputError
                                message={errors.type}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="rhesus" className="font-bold">
                                Rhesus
                            </Label>
                            <Select
                                name="rhesus"
                                value={data.rhesus}
                                onValueChange={(value) =>
                                    setData("rhesus", value)
                                }
                            >
                                <SelectTrigger className="border border-gray-300">
                                    <SelectValue placeholder="Pilih" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="positive">+</SelectItem>
                                    <SelectItem value="negative">-</SelectItem>
                                </SelectContent>
                            </Select>

                            <InputError
                                message={errors.rhesus}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <Button
                        className="w-full rounded-full text-lg"
                        disabled={processing}
                    >
                        save
                    </Button>
                </form>
            </EditLayout>
        </GuestLayout>
    );
}
