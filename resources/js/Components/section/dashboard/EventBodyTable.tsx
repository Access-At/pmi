import { TableRow, TableCell } from "@/Components/ui/table";
import EachUtil from "@/lib/EachUtil";
import { EventData } from "@/types";
import { router } from "@inertiajs/react";
import EditDashboard from "./EditDashboard";
import { Button } from "@/Components/ui/button";

export default function EventBodyTable({ data }: { data: EventData[] }) {
    return (
        <EachUtil
            of={data}
            render={(event: EventData, index) => (
                <TableRow key={index}>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>{event.date_format}</TableCell>
                    <TableCell>
                        {event.start_time} - {event.end_time}
                    </TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell className="w-[40rem]">
                        {event.description}
                    </TableCell>
                    <TableCell className="text-right space-x-2 space-y-2">
                        <EditDashboard eventData={event} />
                        <Button
                            size="sm"
                            className="bg-primary/30 hover:bg-primary text-red-600 hover:text-white"
                            onClick={() => {
                                router.delete(
                                    route("dashboard.event.delete", event.slug)
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
