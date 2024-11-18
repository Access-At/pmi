// import Footer from "@/Components/Footer";
// import Navbar from "@/Components/Navbar";
// import { PropsWithChildren } from "react";

// export default function Guest({ children }: PropsWithChildren) {
//     return (
//         <div className="flex flex-col max-h-screen bg-background">
//             <Navbar />
//             <main className="h-screen w-full">{children}</main>
//             <div className="relative">
//                 <img
//                     src="assets/images/waves-footer.png"
//                     alt="waves-footer"
//                     className="absolute inset-0 w-full z-0 object-cover"
//                 />
//                 <Footer />
//             </div>
//         </div>
//     );
// }

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <main className="flex-grow relative">
                {children}
                <img
                    src="assets/images/waves-footer.png"
                    alt="waves-footer"
                    className="absolute bottom-0 w-full z-0 object-cover"
                />
            </main>
            <Footer />
        </div>
    );
}
