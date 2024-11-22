import { jadwalDonor } from "@/Constant/jadwal-donor";
import EachUtil from "@/lib/EachUtil";

export default function JadwalDonorSection() {
    return (
        <section className="lg:container mx-auto my-10 px-6 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Jadwal Donor Darah</h1>
            <div className="flex items-center justify-center gap-10">
                <EachUtil
                    of={jadwalDonor}
                    render={(item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute z-10 top-5 left-8">
                                <img
                                    src={item.urlImage}
                                    alt={item.name}
                                    width={340}
                                    className="rounded-lg"
                                />
                                <div className="absolute bottom-10 left-8 -space-y-2">
                                    <h6 className="font-semibold">
                                        {item.name}
                                    </h6>
                                    <p>{item.place}</p>
                                </div>
                            </div>
                            <img
                                src="assets/images/Background-PMI.png"
                                alt="background"
                                width={400}
                            />
                        </div>
                    )}
                />
            </div>
        </section>
    );
}
