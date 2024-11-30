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
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import NotificationComponents from "./Notification";

export default function Navbar() {
    const { auth } = usePage().props;
    const user = auth.user;

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
                                >
                                    {item.name}
                                </NavLink>
                            )}
                        />
                        {user ? (
                            <Dialog>
                                <DialogTrigger className="hover:text-primary hover:underline hover:underline-offset-4">
                                    Notifikasi
                                </DialogTrigger>

                                <DialogContent>
                                    <h1 className="text-xl font-bold">
                                        Notifikasi
                                    </h1>
                                    <NotificationComponents />
                                </DialogContent>
                            </Dialog>
                        ) : null}
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
                                    <Link
                                        href={route(
                                            "profile.show",
                                            user.username
                                        )}
                                    >
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="w-full text-left"
                                    >
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
                                    >
                                        {item.name ? item.name : ""}
                                    </NavLink>
                                )}
                            />

                            {user ? (
                                <Dialog>
                                    <DialogTrigger className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-gray-100 w-full">
                                        Notifikasi
                                    </DialogTrigger>
                                    <DialogContent>
                                        <h1 className="text-xl font-bold">
                                            Notifikasi
                                        </h1>
                                        <div className="flex flex-col items-center justify-center gap-4">
                                            <img
                                                src="/assets/images/Notifikasi.png"
                                                alt="notifikasi"
                                            />
                                            <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                                                <h2 className="text-xl font-bold text-black">
                                                    Belum ada Notifikasi
                                                </h2>
                                                <p>
                                                    Tidak ada notifikasi saat
                                                    ini.
                                                </p>
                                                <p>
                                                    Notifikasi baru akan muncul
                                                    di halaman ini
                                                </p>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ) : null}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
