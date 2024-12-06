import { AppSidebar } from "@/Components/AppSidebar";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { useForm } from "@inertiajs/react";
import { SearchIcon } from "lucide-react";
import { FormEventHandler, PropsWithChildren, useEffect } from "react";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    const { data, setData, get } = useForm({
        search: "",
    });

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        get(route("dashboard.event"));
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <SidebarProvider>
                <AppSidebar />

                <main className="flex flex-col w-full my-2 mr-4 ml-2 gap-4">
                    <nav className="bg-white w-full py-4 px-4 rounded-lg shadow-sm">
                        <form onSubmit={onSubmit}>
                            <div className="flex items-center gap-4">
                                <SidebarTrigger className="md:hidden" />
                                <div className="relative flex-1">
                                    <Input
                                        type="search"
                                        placeholder="Search"
                                        className="block w-full focus:ring-primary focus:border-none border-none rounded-full py-2 text-sm leading-4 font-medium text-gray-700 px-4 bg-background"
                                        value={data.search}
                                        onChange={(e) =>
                                            setData("search", e.target.value)
                                        }
                                    />
                                    <SearchIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                                </div>
                                <Button
                                    className="rounded-full px-8"
                                    type="submit"
                                >
                                    Search
                                </Button>
                            </div>
                        </form>
                    </nav>
                    <section className="bg-white rounded-lg shadow-lg flex-1">
                        {children}
                    </section>
                </main>
            </SidebarProvider>
        </div>
    );
}
