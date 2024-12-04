import { InputHTMLAttributes, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface TimeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    time: string;
}

export default function TimeInput({
    time,
    className,
    ...props
}: TimeInputProps) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        "w-full justify-between",
                        !time && "text-muted-foreground",
                        className
                    )}
                >
                    {time ? time : "Select time..."}
                    <Clock className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
                <div className="flex flex-col space-y-2 p-4">
                    <Input
                        type="time"
                        className="border-2 border-gray-300 py-5 focus:ring-primary focus:border-primary"
                        {...props}
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
}
