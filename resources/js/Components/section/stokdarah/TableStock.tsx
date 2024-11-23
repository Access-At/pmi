import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import EachUtil from "@/lib/EachUtil";
import { BloodStoksTotalByTypeResponseType } from "@/schemas/response-schema";
import { usePage } from "@inertiajs/react";

export default function TableStock() {
    const { bloodStoks } = usePage().props;

    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const bloodCategory = ["AHF", "FFP", "PCLR", "PC", "TC"];

    const processData = () => {
        const processedData: Record<string, Record<string, number>> = {};
        bloodCategory.forEach((category) => {
            processedData[category] = {};
            bloodTypes.forEach((type) => {
                processedData[category][type] = 0;
            });
        });

        bloodStoks.data.details.forEach((detail) => {
            const type = detail.type.replace("-plus", "+").replace("-min", "-");
            processedData[detail.category][type] = detail.amount;
        });

        return processedData;
    };

    const data = processData();

    return (
        <section className="lg:container mx-auto my-10 px-6">
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold text-primary">
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
                                        render={(
                                            item: BloodStoksTotalByTypeResponseType,
                                            index
                                        ) => (
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
                                            {bloodTypes.map((type, index) => (
                                                <TableCell
                                                    key={type}
                                                    className={`text-center ${
                                                        index <
                                                        bloodTypes.length - 1
                                                            ? "border-r border-gray-200"
                                                            : ""
                                                    }`}
                                                >
                                                    {data[category][type]}
                                                </TableCell>
                                            ))}
                                            <TableCell className="text-center border-l border-gray-200">
                                                {bloodTypes.reduce(
                                                    (sum, type) =>
                                                        sum +
                                                        data[category][type],
                                                    0
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
                                                {bloodCategory.reduce(
                                                    (sum, category) =>
                                                        sum +
                                                        data[category][type],
                                                    0
                                                )}
                                            </TableCell>
                                        )}
                                    />
                                    <TableCell className="text-center border-l border-gray-200">
                                        {bloodCategory.reduce(
                                            (sum, category) =>
                                                sum +
                                                bloodTypes.reduce(
                                                    (innerSum, type) =>
                                                        innerSum +
                                                        data[category][type],
                                                    0
                                                ),
                                            0
                                        )}
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
