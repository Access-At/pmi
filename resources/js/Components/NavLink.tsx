import { cn } from "@/lib/utils";
import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    mobile = false,
    children,
    ...props
}: InertiaLinkProps & { active: boolean; mobile?: boolean }) {
    return (
        <Link
            {...props}
            className={cn(
                "flex rounded-md",
                mobile && "hover:bg-background",
                !mobile &&
                    "hover:text-primary hover:underline hover:underline-offset-4",
                active &&
                    !mobile &&
                    "text-primary underline-offset-4 underline hover:text-primary",
                active &&
                    mobile &&
                    "bg-primary text-primary-foreground py-2 px-4 hover:bg-primary",
                className
            )}
        >
            {children}
        </Link>
    );
}
