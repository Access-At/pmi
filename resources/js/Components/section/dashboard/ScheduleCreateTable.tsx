import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import EachUtil from "@/lib/EachUtil";
import { formatCategory } from "@/lib/utils";
import { ByBloodType } from "@/types";

export default function ScheduleCreateTable({
    data,
    bloodType,
    onChange,
}: {
    data: any;
    bloodType: string[];
    onChange: any;
}) {
    return (
        <div className="w-full space-y-4 overflow-auto">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left border-r border-gray-200 font-bold text-black">
                                Jenis Golongan Darah
                            </TableHead>
                            <EachUtil
                                of={bloodType}
                                render={(item, index) => (
                                    <TableHead
                                        key={index}
                                        className={`text-center`}
                                    >
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs text-black">
                                                {item}
                                            </span>
                                        </div>
                                    </TableHead>
                                )}
                            />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <EachUtil
                            of={data.blood_stock}
                            render={(stock, categoryIndex) => (
                                <TableRow
                                    key={categoryIndex}
                                    className="odd:bg-red-50 even:bg-white font-bold"
                                >
                                    <TableCell className="border-r border-gray-200">
                                        {formatCategory(stock.category)}
                                    </TableCell>
                                    <EachUtil
                                        of={bloodType}
                                        render={(type, index) => (
                                            <TableCell
                                                key={type}
                                                className={`text-center`}
                                            >
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    value={stock.amounts[type]}
                                                    onChange={(e) =>
                                                        onChange(
                                                            categoryIndex,
                                                            type,
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mx-auto"
                                                />
                                            </TableCell>
                                        )}
                                    />
                                </TableRow>
                            )}
                        />
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
