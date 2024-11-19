import { Button } from "@/Components/ui/button";

export default function Banner() {
    return (
        <section className="relative">
            <div className=" absolute z-0 inset-0">
                <img
                    src="assets/images/banner.png"
                    alt="Tangan dan Kantong Darah"
                    className="w-full object-cover"
                />
            </div>
            <div className="relative z-10 container mx-auto px-6 font-medium">
                <div className="flex flex-col gap-3 max-w-xl">
                    <p className="text-2xl">Welcome !</p>
                    <h1 className="text-6xl font-bold tracking-tighter text-primary">
                        Blood <span className="text-black">Bags</span>
                    </h1>
                    <div className="flex gap-2 items-center">
                        <Button className="rounded-full">
                            Gabung Sekarang
                        </Button>
                        <span className="text-xl">
                            Gabung bersama kami dan temukan fitur menarik lainya
                            !
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
