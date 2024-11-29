import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "./Components/ui/sonner";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Suspense>
                <Toaster
                    position="top-center"
                    closeButton
                    toastOptions={{
                        classNames: {
                            success: "bg-white border-none",
                            error: "",
                        },
                    }}
                />
                <App {...props} />
            </Suspense>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
