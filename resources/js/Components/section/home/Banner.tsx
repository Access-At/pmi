import { Button } from "@/Components/ui/button";

export default function Banner() {
    return (
        <section className="relative">
            <div className="">
                <img
                    src="assets/images/banner.png"
                    alt="Tangan dan Kantong Darah"
                    className="w-full object-cover"
                />
            </div>
            <div className="absolute top-10 left-0 lg:top-32 lg:left-44 z-10">
                <div className="flex flex-col px-6 gap-3 md:gap-0">
                    <p className="text-3xl md:text-5xl">Welcome !</p>
                    <h1 className="text-7xl md:text-[160px] font-bold tracking-tighter text-primary">
                        Blood <span className="text-black">Bags</span>
                    </h1>
                    <div className="flex gap-5 md:gap-10 items-center max-w-lg md:max-w-2xl">
                        <Button className="rounded-full py-3 px-4 text-base md:py-5 md:px-6 md:text-xl">
                            Gabung Sekarang
                        </Button>
                        <span className="text-base md:text-xl">
                            Gabung bersama kami dan temukan fitur menarik lainya
                            !
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
