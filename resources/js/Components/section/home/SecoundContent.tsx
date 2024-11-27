import { Button } from "@/Components/ui/button";

export default function SecoundContent() {
    return (
        <section>
            <div className="relative z-0 top-[-7rem] md:top-[-12rem] left-[-15rem] md:left-[-30rem] lg:left-[-30rem]">
                <img
                    src="/assets/images/Background-Phone.png"
                    alt="waves"
                    className="w-[40rem] md:w-[50rem]"
                />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 relative z-10 top-[-15rem] md:top-[-30rem] lg:top-[-35rem]">
                <img
                    src="/assets/images/stock-ilustration.png"
                    alt="stok"
                    className="w-[20rem] md:w-[25rem] lg:w-[30rem]"
                />
                <div className="flex flex-col gap-5 max-w-full p-4 md:p-8">
                    <h1 className="font-bold text-[1.25rem] md:text-[2.5rem] xl:text-[5rem]">
                        Fitur Stok Darah
                    </h1>
                    <p className="max-w-xs md:max-w-md text-xl md:text-2xl xl:text-4xl text-muted-foreground">
                        Menampilkan stok darah dengan detail mulai dari tipe
                        darah dan jumlah dari berbagai PMI
                    </p>
                    <Button className="rounded-full py-3 px-4 text-base md:py-5 md:px-6 md:text-lg lg:text-xl w-fit">
                        Stok Darah
                    </Button>
                </div>
            </div>
        </section>
    );
}
