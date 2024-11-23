import { Button } from "@/Components/ui/button";

export default function BannerSection() {
    return (
        <section className="my-10 lg:container mx-auto">
            <div className="relative z-10">
                <div className="flex flex-col px-6 gap-3 md:gap-6 lg:gap-9">
                    <p className="text-3xl md:text-4xl lg:text-5xl">
                        Welcome !
                    </p>
                    <h1 className="text-7xl md:text-[115px] lg:text-[160px] font-bold tracking-tighter text-primary">
                        Blood <span className="text-black">Bags</span>
                    </h1>
                    <div className="flex gap-5 md:gap-8 lg:gap-10 items-center max-w-lg lg:max-w-2xl">
                        <Button className="rounded-full py-3 px-4 text-base md:py-5 md:px-6 md:text-lg lg:text-xl">
                            Gabung Sekarang
                        </Button>
                        <span className="text-base md:text-lg lg:text-xl">
                            Gabung bersama kami dan temukan fitur menarik lainya
                            !
                        </span>
                    </div>
                </div>
            </div>
            <img
                src="/assets/images/banner.png"
                alt="Tangan dan Kantong Darah"
                className="w-full relative top-[-12rem] md:top-[-18rem] lg:top-[-24rem]"
            />
        </section>
    );
}
