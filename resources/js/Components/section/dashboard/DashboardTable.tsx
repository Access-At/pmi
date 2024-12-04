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

export default function DashboardTable({
    data,
    head,
}: {
    data: any;
    head: any;
}) {
    return (
        <ScrollArea className="h-[30rem] w-full">
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
                        render={(event) => (
                            <TableRow key={event.id}>
                                <TableCell>{event.name}</TableCell>
                                <TableCell>{event.datetime}</TableCell>
                                <TableCell>{event.location}</TableCell>
                                <TableCell>{event.description}</TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button
                                        size="sm"
                                        className="bg-cyan-300/50 hover:bg-cyan-300 text-cyan-600 hover:text-white"
                                    >
                                        Update
                                    </Button>
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
