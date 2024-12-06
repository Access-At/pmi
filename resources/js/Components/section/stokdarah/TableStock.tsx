import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import EachUtil from "@/lib/EachUtil";
import { ByBloodType } from "@/types";
import { usePage } from "@inertiajs/react";

export default function TableStock() {
    const { bloodStoks } = usePage().props;

    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const bloodCategory = ["AHF", "FFP", "PCLR", "PC", "TC"];

    const formatCategory = {
        AHF: "AHF",
        FFP: "FFP",
        PCLR: "PCLR",
        PC: "PC",
        TC: "TC",
    };
    const calculateTotal = (data: Record<string, number>): number => {
        return Object.values(data).reduce((sum, value) => sum + value, 0);
    };
    const calculateColumnTotal = (bloodType: string): number => {
        return bloodCategory.reduce(
            (sum, category) =>
                sum + (bloodStoks.data.details[category]?.[bloodType] || 0),
            0
        );
    };

    const calculateGrandTotal = (): number => {
        return bloodCategory.reduce(
            (sum, category) =>
                sum + calculateTotal(bloodStoks.data.details[category] || {}),
            0
        );
    };

    return (
        <section className="my-10 px-6">
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Detail Stok Darah
                </h2>
                <div className="w-full space-y-4 overflow-auto">
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-left border-r border-gray-200 font-bold text-black">
                                        Jenis Golongan Darah
                                    </TableHead>
                                    <EachUtil
                                        of={
                                            bloodStoks.data.totals.by_blood_type
                                        }
                                        render={(item: ByBloodType, index) => (
                                            <TableHead
                                                key={item.type}
                                                className={`text-center ${
                                                    index <
                                                    bloodTypes.length - 1
                                                        ? "border-r border-gray-200"
                                                        : ""
                                                }`}
                                            >
                                                <div className="flex flex-col items-center">
                                                    <img
                                                        src={`/assets/images/blood/${item.type}.png`}
                                                        alt=""
                                                        className="w-6"
                                                    />
                                                </div>
                                            </TableHead>
                                        )}
                                    />
                                    <TableHead className="text-center border-l border-gray-200 text-black font-bold">
                                        Total
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <EachUtil
                                    of={bloodCategory}
                                    render={(category, categoryIndex) => (
                                        <TableRow
                                            key={categoryIndex}
                                            className="odd:bg-red-50 even:bg-background font-bold"
                                        >
                                            <TableCell className="border-r border-gray-200">
                                                {category}
                                            </TableCell>
                                            <EachUtil
                                                of={bloodTypes}
                                                render={(type, index) => (
                                                    <TableCell
                                                        key={type}
                                                        className={`text-center ${
                                                            index <
                                                            bloodTypes.length -
                                                                1
                                                                ? "border-r border-gray-200"
                                                                : ""
                                                        }`}
                                                    >
                                                        {bloodStoks.data
                                                            .details[category][
                                                            type
                                                        ] || 0}
                                                    </TableCell>
                                                )}
                                            />
                                            <TableCell className="text-center border-l border-gray-200">
                                                {calculateTotal(
                                                    bloodStoks.data.details[
                                                        category
                                                    ] || {}
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                />
                                <TableRow className="font-bold">
                                    <TableCell className="border-r border-gray-200">
                                        Total
                                    </TableCell>
                                    <EachUtil
                                        of={bloodTypes}
                                        render={(type, index) => (
                                            <TableCell
                                                key={type}
                                                className={`text-center ${
                                                    index <
                                                    bloodTypes.length - 1
                                                        ? "border-r border-gray-200"
                                                        : ""
                                                }`}
                                            >
                                                {calculateColumnTotal(type)}
                                            </TableCell>
                                        )}
                                    />
                                    <TableCell className="text-center border-l border-gray-200">
                                        {calculateGrandTotal()}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <p className="text-end px-10">
                        Di update pada tanggal 20 Oktober 2023
                    </p>
                </div>
            </div>
        </section>
    );
}
