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

export default function Navbar() {
    const pathname = usePage().url;
    return (
        <nav className="sticky top-0 z-50 bg-background">
            <div className="flex flex-row justify-between items-center p-4 md:p-6 lg:container mx-auto w-full">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="assets/images/logo.png"
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
                    <div className="hidden md:block">
                        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <EachUtil
                                of={navList}
                                render={(item, index) => (
                                    <li
                                        key={index}
                                        className={cn(
                                            item.href === pathname
                                                ? "text-primary underline underline-offset-4"
                                                : "",
                                            item.auth === undefined
                                                ? ""
                                                : "hidden"
                                        )}
                                    >
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )}
                            />
                        </ul>
                    </div>

                    <Link
                        href="/login"
                        className={cn(
                            buttonVariants(),
                            "bg-red-700 rounded-full px-8"
                        )}
                    >
                        Login
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="md:hidden hover:bg-red-500 hover:text-primary-foreground"
                                onClick={() => {}}
                            >
                                <MenuIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-screen md:hidden">
                            <EachUtil
                                of={navList}
                                render={(item, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        className={cn(
                                            item.href === pathname
                                                ? "bg-primary text-primary-foreground"
                                                : "",
                                            item.auth === undefined
                                                ? ""
                                                : "hidden"
                                        )}
                                    >
                                        <Link href={item.href}>
                                            {item.name ? item.name : ""}
                                        </Link>
                                    </DropdownMenuItem>
                                )}
                            />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
