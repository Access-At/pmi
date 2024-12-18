import { cn } from "@/lib/utils";
import { InertiaLinkProps, Link } from "@inertiajs/react";
import { buttonVariants } from "./ui/button";

export default function NavLink({
    active = false,
    dashboard = false,
    className = "",
    mobile = false,
    children,
    ...props
}: InertiaLinkProps & {
    active: boolean;
    mobile?: boolean;
    dashboard?: boolean;
}) {
    return (
        <Link
            {...props}
            className={cn(
                "flex rounded-md",
                mobile &&
                    !dashboard &&
                    "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-gray-100",
                !mobile &&
                    !dashboard &&
                    "hover:text-primary hover:underline hover:underline-offset-4",
                active &&
                    !mobile &&
                    !dashboard &&
                    "text-primary underline-offset-4 underline hover:text-primary",
                active &&
                    mobile &&
                    !dashboard &&
                    "bg-primary text-primary-foreground py-1.5 px-2 hover:bg-primary",
                active && dashboard && `${buttonVariants()} w-[10rem]`,
                !active && dashboard && "font-bold",
                className
            )}
        >
            {children}
        </Link>
    );
}
