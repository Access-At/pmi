import { Link, usePage } from "@inertiajs/react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { navList } from "@/Constant/list";
import EachUtil from "@/lib/EachUtil";
import { MenuIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import NavLink from "./NavLink";

export default function Navbar() {
    const user = usePage().props.auth.user;

    return (
        <nav className="sticky top-0 z-50 bg-background">
            <div className="flex flex-row justify-between items-center p-4 md:p-6 w-full">
                <Link href={route("home")} className="flex items-center gap-2">
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={25}
                        height={25}
                    />
                    <h1 className="uppercase text-red-700 text-xl font-bold">
                        blood
                        <span className="text-rose-400">bags</span>
                    </h1>
                </Link>

                <div className="flex flex-row items-center gap-4 md:gap-8">
                    <div className="hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <EachUtil
                            of={navList}
                            render={(item, index) => (
                                <NavLink
                                    key={index}
                                    active={route().current(item.route)}
                                    href={route(item.route)}
                                    className={cn(
                                        item.name === "Notifikasi" && !user
                                            ? "hidden"
                                            : ""
                                    )}
                                >
                                    {item.name}
                                </NavLink>
                            )}
                        />
                    </div>

                    {!user ? (
                        <Link
                            href={route("login")}
                            className={cn(
                                buttonVariants(),
                                "bg-red-700 rounded-full px-8"
                            )}
                        >
                            Login
                        </Link>
                    ) : null}

                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="bg-primary/50 flex items-center justify-center">
                                    {/* <AvatarImage
                                            src={user.avatar}
                                            alt={user.name}
                                        /> */}
                                    <AvatarFallback className="flex items-center justify-center font-bold uppercase">
                                        {user.username.replace(/^(.).*$/, "$1")}
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-screen md:w-52"
                                align="end"
                            >
                                <DropdownMenuItem asChild>
                                    <Link href={route("profile.edit")}>
                                        Profile Edit
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={route("logout")} method="post">
                                        Logout
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : null}

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="md:hidden hover:bg-red-500 hover:text-primary-foreground"
                            >
                                <MenuIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-screen md:hidden">
                            <EachUtil
                                of={navList}
                                render={(item, index) => (
                                    <NavLink
                                        active={route().current(item.route)}
                                        key={index}
                                        href={route(item.route)}
                                        mobile={true}
                                        className={cn(
                                            item.name === "Notifikasi" && !user
                                                ? "hidden"
                                                : ""
                                        )}
                                    >
                                        {item.name ? item.name : ""}
                                    </NavLink>
                                )}
                            />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
