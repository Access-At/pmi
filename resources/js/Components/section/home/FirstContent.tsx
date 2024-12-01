export default function FirstContentSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex flex-col px-6 gap-3 py-52">
                <h2 className="text-[1.25rem] md:text-[2.5rem] xl:text-[5rem] font-bold md:max-w-sm xl:max-w-3xl">
                    Infromasi Donor Darah yang Lengkap
                </h2>
                <p className="text-xl md:text-2xl xl:text-4xl text-muted-foreground max-w-sm md:max-w-xl xl:max-w-4xl">
                    Infromasi tempat dan event donor darah yang detail disertai
                    dengan lokasi dan jadwal.
                </p>
            </div>
            <div className="relative z-0 right-0">
                <img
                    src="/assets/images/people.png"
                    alt="people"
                    className="w-[25rem] xl:w-[50rem]"
                />
            </div>
        </section>
    );
}
