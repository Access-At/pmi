import { TableRow, TableCell } from "@/Components/ui/table";
import EachUtil from "@/lib/EachUtil";
import { ScheduleData } from "@/types";
import { router } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import EditDashboard from "./EditDashboard";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";

export default function ScheduleBodyTable({ data }: { data: ScheduleData[] }) {
    return (
        <EachUtil
            of={data}
            render={(schedule: ScheduleData, index) => (
                <TableRow key={index}>
                    <TableCell>{schedule.title}</TableCell>
                    <TableCell>{schedule.location}</TableCell>
                    <TableCell>{schedule.location}</TableCell>
                    <TableCell>{schedule.location}</TableCell>
                    <TableCell>{schedule.location}</TableCell>
                    <TableCell>{schedule.location}</TableCell>
                    <TableCell>{schedule.location}</TableCell>
                    <TableCell className="text-right space-x-2 space-y-2">
                        <EditDashboard schedule scheduleData={schedule} />
                        <Button
                            size="sm"
                            className="bg-primary/30 hover:bg-primary text-red-600 hover:text-white"
                            onClick={() => {
                                router.delete(
                                    route(
                                        "dashboard.event.delete",
                                        schedule.slug
                                    )
                                );
                            }}
                        >
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>
            )}
        />
    );
}
