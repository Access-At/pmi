import { TableRow, TableCell } from "@/Components/ui/table";
import EachUtil from "@/lib/EachUtil";
import { ByCategory, ScheduleData } from "@/types";
import { Link, router } from "@inertiajs/react";
import { Button, buttonVariants } from "@/Components/ui/button";
import EditDashboard from "./EditDashboard";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/Components/ui/hover-card";
import { Separator } from "@/Components/ui/separator";
import { cn, formatCategory } from "@/lib/utils";

export default function ScheduleBodyTable({ data }: { data: ScheduleData[] }) {
    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    return (
        <EachUtil
            of={data}
            render={(schedule: ScheduleData, index) => (
                <TableRow key={index}>
                    <TableCell>{schedule.title}</TableCell>
                    <TableCell>{schedule.location}</TableCell>

                    <EachUtil
                        of={schedule.totals.by_category}
                        render={(item: ByCategory) => {
                            const category = item.category;
                            return (
                                <TableCell>
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            {item.total}
                                        </HoverCardTrigger>
                                        <HoverCardContent className="space-y-2">
                                            <h5 className="font-bold">
                                                {formatCategory(category)}
                                            </h5>
                                            <Separator className="bg-black" />
                                            <EachUtil
                                                of={bloodTypes}
                                                render={(type) => (
                                                    <div className="flex gap-2 justify-between">
                                                        <span className="font-semibold">
                                                            {type}:
                                                        </span>
                                                        <span>
                                                            {JSON.stringify(
                                                                schedule
                                                                    .details[
                                                                    category as any
                                                                ][type]
                                                            )}
                                                        </span>
                                                    </div>
                                                )}
                                            />
                                        </HoverCardContent>
                                    </HoverCard>
                                </TableCell>
                            );
                        }}
                    />
                    <TableCell className="text-right space-x-2 space-y-2">
                        <Link
                            href={route("dashboard.pmi.edit", schedule.slug)}
                            className={cn(
                                buttonVariants({ size: "sm" }),
                                "bg-cyan-300/50 hover:bg-cyan-300 text-cyan-600 hover:text-white"
                            )}
                        >
                            Update
                        </Link>
                        <Button
                            size="sm"
                            className="bg-primary/30 hover:bg-primary text-red-600 hover:text-white"
                            onClick={() => {
                                router.delete(
                                    route("dashboard.pmi.delete", schedule.slug)
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
