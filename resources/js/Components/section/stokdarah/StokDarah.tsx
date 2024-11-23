import EachUtil from "@/lib/EachUtil";
import {
    BloodStoksTotalByTypeResponseType,
    BloodStoksTotalResponseType,
} from "@/schemas/response-schema";
import { usePage } from "@inertiajs/react";

export default function StokDarahSection() {
    const { bloodStoks } = usePage().props;
    return (
        <section className="lg:container mx-auto my-10 px-6 space-y-5">
            <h1 className="text-2xl font-bold md:text-3xl">
                {bloodStoks.data.title}
            </h1>
            <div className="flex flex-wrap flex-grow md:flex-row items-center xl:justify-center justify-start gap-10 xl:gap-20 xl:h-[18rem]">
                <EachUtil
                    of={bloodStoks.data.totals.by_blood_type}
                    render={(
                        item: BloodStoksTotalByTypeResponseType,
                        index
                    ) => (
                        <div
                            key={index}
                            className="xl:relative xl:z-10 flex flex-col gap-5"
                        >
                            <img
                                src={`/assets/images/blood/${item.type}.png`}
                                alt=""
                                className="w-[2.5rem] md:w-[5rem]"
                            />
                            <p className="text-center text-primary font-bold text-3xl md:text-5xl">
                                {item.total}
                            </p>
                        </div>
                    )}
                />
                <img
                    src="/assets/images/blood/vector.png"
                    alt=""
                    className="hidden xl:block xl:relative top-[-12rem]"
                />
            </div>
        </section>
    );
}
