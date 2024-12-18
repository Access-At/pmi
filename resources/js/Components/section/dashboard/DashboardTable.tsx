import { ByCategory, ScheduleData } from "@/types";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";

import EachUtil from "@/lib/EachUtil";
import EventBodyTable from "./EventBodyTable";
import ScheduleBodyTable from "./ScheduleBodyTable";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { formatCategory } from "@/lib/utils";

export default function DashboardTable({
    data,
    head,
    event = false,
    schedule = false,
}: {
    data: any;
    head: any;
    event?: boolean;
    schedule?: boolean;
}) {
    const bloodCategory = ["AHF", "FFP", "PCLR", "PC", "TC"];
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
                        {schedule ? (
                            <EachUtil
                                of={bloodCategory}
                                render={(category) => (
                                    <TableHead title={formatCategory(category)}>
                                        {category}
                                    </TableHead>
                                )}
                            />
                        ) : null}
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {event ? <EventBodyTable data={data} /> : null}
                    {schedule ? <ScheduleBodyTable data={data} /> : null}
                </TableBody>
            </Table>
        </ScrollArea>
    );
}
