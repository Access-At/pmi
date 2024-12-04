import { Button } from "@/Components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import EachUtil from "@/lib/EachUtil";
import { EventData } from "@/types";
import EditDashboard from "./EditDashboard";

export default function DashboardTable({
    data,
    head,
}: {
    data: any;
    head: any;
}) {
    return (
        <ScrollArea className="h-[52rem] w-full">
            <Table>
                <TableHeader className="border-y">
                    <TableRow>
                        <EachUtil
                            of={head}
                            render={(head) => (
                                <TableHead>{head.name}</TableHead>
                            )}
                        />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <EachUtil
                        of={data}
                        render={(event: EventData, index) => (
                            <TableRow key={index}>
                                <TableCell>{event.title}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.time}</TableCell>
                                <TableCell>{event.location}</TableCell>
                                <TableCell className="w-[40rem]">
                                    {event.description}
                                </TableCell>
                                <TableCell className="text-right space-x-2 space-y-2">
                                    <EditDashboard event eventData={event} />
                                    <Button
                                        size="sm"
                                        className="bg-primary/30 hover:bg-primary text-red-600 hover:text-white"
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )}
                    />
                </TableBody>
            </Table>
        </ScrollArea>
    );
}
