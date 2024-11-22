import { jadwalDonor } from "@/Constant/jadwal-donor";
import EachUtil from "@/lib/EachUtil";

export default function JadwalDonorSection() {
    return (
        <section className="lg:container mx-auto px-6 flex flex-col gap-4 h-fit">
            <h1 className="text-3xl font-bold">Jadwal Donor Darah</h1>
            <div className="flex flex-col items-center lg:justify-center md:flex-row flex-wrap gap-4">
                <EachUtil
                    of={jadwalDonor}
                    render={(item, index) => (
                        <span key={index} className="h-[26rem]">
                            <div className="relative z-10 top-[3rem] left-[1.5rem] md:top-[2.5rem] xl:top-[3rem] md:left-[1rem]">
                                <img
                                    src={item.urlImage}
                                    alt={item.name}
                                    width={250}
                                    className="rounded-lg"
                                />
                                <div className="relative bottom-[5rem] left-8 -space-y-2">
                                    <h6 className="font-semibold">
                                        {item.name}
                                    </h6>
                                    <p>{item.place}</p>
                                </div>
                            </div>
                            <img
                                src="assets/images/Background-PMI.png"
                                alt="background"
                                width={290}
                                className="relative top-[-22rem]"
                            />
                        </span>
                    )}
                />
            </div>
        </section>
    );
}
