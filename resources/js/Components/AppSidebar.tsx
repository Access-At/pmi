import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/Components/ui/sidebar";
import { Link } from "@inertiajs/react";
import { Separator } from "@/Components/ui/separator";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import NavLink from "./NavLink";

export function AppSidebar() {
    return (
        <Sidebar variant="floating">
            <SidebarHeader className="flex items-center justify-center py-5 px-6">
                <Link
                    href={route("dashboard.event")}
                    className="flex items-center gap-2"
                >
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={25}
                        height={25}
                    />
                    <h1 className="uppercase text-red-700 text-2xl font-bold">
                        blood
                        <span className="text-rose-400">bags</span>
                    </h1>
                </Link>
                <Separator />
            </SidebarHeader>
            <SidebarContent className="flex flex-col items-center">
                <NavLink
                    dashboard
                    href={route("dashboard.event")}
                    active={route().current("dashboard.event")}
                    className={cn("px-10 rounded-full")}
                >
                    Event
                </NavLink>
                <NavLink
                    dashboard
                    href={route("dashboard.stok")}
                    active={route().current("dashboard.stok")}
                    className={cn("px-10 rounded-full")}
                >
                    Stock Darah
                </NavLink>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}
