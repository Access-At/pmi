import { jadwalDonor } from "@/Constant/jadwal-donor";
import EachUtil from "@/lib/EachUtil";

export default function JadwalDonorSection() {
    return (
        <section className="lg:container mx-auto px-6 flex flex-col gap-4 h-fit">
            <h1 className="text-3xl font-bold">Jadwal Donor Darah</h1>
            <div className="flex flex-col items-center md:flex-row flex-wrap gap-4">
                <EachUtil
                    of={jadwalDonor}
                    render={(item, index) => (
                        <span key={index}>
                            <div className="relative z-10 lg:left-6 top-[3rem] left-8 xl:left-8">
                                <img
                                    src={item.urlImage}
                                    alt={item.name}
                                    className="rounded-lg w-[21.25rem] lg:w-[17rem] xl:w-[21.25rem]"
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
                                className="w-[25rem] relative top-[-20rem] md:top-[-25rem] lg:top-[-30rem]"
                            />
                        </span>
                    )}
                />
            </div>
        </section>
    );
}
