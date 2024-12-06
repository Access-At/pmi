import { ScrollArea } from "@/Components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import EachUtil from "@/lib/EachUtil";
import EventBodyTable from "./EventBodyTable";

export default function DashboardTable({
    data,
    head,
    event = false,
    stok = false,
}: {
    data: any;
    head: any;
    event?: boolean;
    stok?: boolean;
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
                    {event ? <EventBodyTable data={data} /> : null}
                </TableBody>
            </Table>
        </ScrollArea>
    );
}
