import { stockDarah } from "@/Constant/stock-darah";
import EachUtil from "@/lib/EachUtil";

export default function StockDarahSection() {
    return (
        <section className="lg:container mx-auto my-10 px-6 space-y-5">
            <h1 className="text-3xl font-bold">Stok Darah PMI A</h1>
            <div className="flex flex-wrap flex-grow md:flex-row items-center xl:justify-center justify-start gap-10 lg:gap-20">
                <EachUtil
                    of={stockDarah}
                    render={(item, index) => (
                        <div key={index} className="flex flex-col gap-5">
                            <img
                                src={`${item.urlImage}.png`}
                                alt={item.name}
                                className="w-20"
                            />
                            <p className="text-center text-primary font-bold text-5xl">
                                {item.amount}
                            </p>
                        </div>
                    )}
                />
            </div>
        </section>
    );
}
