import { AppSidebar } from "@/Components/AppSidebar";
import Search from "@/Components/Search";
import { SidebarProvider } from "@/Components/ui/sidebar";
import { PropsWithChildren } from "react";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    const routeEvent = route().current("dashboard.event");
    return (
        <div className="min-h-screen bg-gray-100">
            <SidebarProvider>
                <AppSidebar />

                <main className="flex flex-col w-full my-2 mr-4 ml-2 gap-4">
                    <nav className="bg-white w-full py-4 px-4 rounded-lg shadow-sm">
                        <Search
                            route={
                                routeEvent
                                    ? route("dashboard.event")
                                    : route("dashboard.pmi")
                            }
                        />
                    </nav>
                    <section className="bg-white rounded-lg shadow-lg flex-1">
                        {children}
                    </section>
                </main>
            </SidebarProvider>
        </div>
    );
}
