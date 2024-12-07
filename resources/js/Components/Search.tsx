import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Search({ route }: { route: any }) {
    const { data, setData, get } = useForm({
        search: "",
    });

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        get(route);
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                <div className="relative flex-1">
                    <Input
                        type="search"
                        placeholder="Search"
                        className="block w-full focus:ring-primary focus:border-none border-none rounded-full py-2 text-sm leading-4 font-medium text-gray-700 px-4 bg-background"
                        value={data.search}
                        onChange={(e) => setData("search", e.target.value)}
                    />
                    <SearchIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                </div>
                <Button className="rounded-full px-8" type="submit">
                    Search
                </Button>
            </div>
        </form>
    );
}
