export default function ThirdContent() {
    return (
        <section className="flex flex-col md:flex-row gap-10 lg:gap-52 items-center px-6 relative py-10">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-2">
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="w-[25px] md:w-[40px] xl:w-[60px]"
                    />
                    <h1 className="uppercase text-red-700 text-xl md:text-3xl xl:text-5xl font-bold">
                        blood
                        <span className="text-rose-400">bags</span>
                    </h1>
                </div>
                <h1 className="font-bold text-[1.25rem] md:text-[2.5rem] xl:text-[5rem] w-[15rem] md:w-[25rem] lg:w-[50rem]">
                    Download Aplikasi BLOODBAGS Sekarang
                </h1>
                <p className="text-xl md:text-2xl xl:text-4xl text-muted-foreground">
                    Aplikasi yang memberikan edukasi tentang donor darah dan
                    membantu serta memudahkan pendonor darah untuk mendonorkan
                    darah
                </p>
                <div>
                    <img
                        src="/assets/images/GooglePlay.png"
                        alt="playstore"
                        className="w-[10rem]"
                    />
                </div>
            </div>
            <img
                src="/assets/images/Background-Phone.png"
                alt="waves"
                className="w-[40rem] md:w-[22rem] lg:w-[30rem] relative z-0"
            />
            <img
                src="/assets/images/phone.png"
                alt="phone"
                className="w-[12rem] lg:w-[17rem] relative z-10 top-[-20rem] md:left-[-20rem] lg:left-[-35rem] md:top-0"
            />
        </section>
    );
}