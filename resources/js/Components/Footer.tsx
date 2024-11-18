import EachUtil from "@/lib/EachUtil";
import { Separator } from "./ui/separator";
import { footerList } from "@/Constant/list";
import { Link } from "@inertiajs/react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { socialMedia } from "./../Constant/social-media";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-primary to-secondary flex px-6 py-10 text-white gap-10 lg:flex-row flex-col md:items-start items-center">
            <div className="flex flex-1 flex-col gap-1 text-center md:text-left mb-6 md:mb-0">
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <img
                        src="assets/images/logo.png"
                        alt="Bloodbags Logo"
                        width={50}
                        height={50}
                        className="md:order-1"
                    />
                    <h2 className="text-2xl font-bold uppercase md:order-2">
                        BloodBags
                    </h2>
                </div>
                <p className="text-sm">Copyright&copy; 2023</p>
            </div>
            <div className="flex-1 flex flex-col gap-5 text-xl w-full">
                <ul className="grid grid-cols-3 gap-2">
                    {[...footerList.slice(0, 4), ...footerList.slice(4)].map(
                        (item, index) => (
                            <li key={index} className="col-span-1">
                                <Link href={item.href}>| {item.name}</Link>
                            </li>
                        )
                    )}
                </ul>
                <Separator className="w-full" />
                <div className="flex items-center justify-end gap-4 md:order-1 order-2">
                    <EachUtil
                        of={socialMedia}
                        render={(item, index) => (
                            <Link key={index} href={item.link}>
                                <item.icon className="w-6 h-6" />
                            </Link>
                        )}
                    />
                </div>
            </div>
        </footer>
    );
}
