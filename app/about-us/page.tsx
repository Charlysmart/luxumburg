import Image from "next/image";

export default function About () {
    return (
        <div>
            {/* Breadcrumb */}
            <section className="w-full flex justify-center">
                <section className="relative w-[98%] md:h-80 h-60 rounded-2xl overflow-hidden">
                    <Image src="/images/Hotel_lounge_and_bar_interior.jpeg" alt="Breadcrumb image" fill className="object-cover" />
                    <div className="w-full h-full bg-black absolute top-0 left-0 opacity-50" />
                    <div className="w-full h-full absolute top-0 left-0">
                        <h1 className="md:h-[90%] h-[85%] flex items-center justify-center text-white font-serif text-5xl">About Us</h1>
                        <div className="md:h-[10%] h-[15%] flex items-center justify-center gap-1 text-gray-400">Home <span className="font-mono text-primary">&gt;</span> <span className="text-white">About-us</span></div>
                    </div>
                </section>
            </section>
            <main className="py-20 md:px-10 px-5 flex lg:flex-row flex-col gap-4">
                <section className="relative lg:w-1/2 w-full mb-15">
                    <div className="relative md:w-[90%] w-full md:h-100 h-70 rounded-2xl overflow-hidden">
                        <Image src="/images/Hotel_exterior_with_cars_and_2K_202609061634.jpeg" alt="Hotel Building" fill className="object-cover" />
                    </div>
                    <div className="absolute md:block hidden w-70 h-50 rounded-2xl top-60 right-0 overflow-hidden shadow-2xl">
                        <Image src="/images/Hotel_lobby_interior_design.jpeg" alt="Hotel lobby" fill className="object-cover" />
                    </div>
                </section>
                <section className="lg:w-1/2 w-full flex flex-col items-end">
                <div className="lg:w-[95%] space-y-5">
                    <p className="text-primary tracking-wide">De Luxumberg Hotel Enugu</p>
                    <h2 className="md:text-5xl text-2xl font-serif md:leading-15">Discover the Art of Contemporary Hospitality</h2>
                    <div className="text-justify space-y-5 text-gray-700">
                        <p>
                            Welcome to Hotel De Luxumberg, where comfort, elegance, and genuine hospitality come together to create an unforgettable stay. Located in the heart of Enugu, our hotel offers a peaceful and luxurious environment for guests seeking relaxation, business convenience, or a memorable getaway. From our beautifully designed rooms and modern facilities to our attentive service, every detail is thoughtfully arranged to make you feel at home.
                        </p>
                        <p>
                            At Hotel De Luxumberg, we believe that hospitality is more than providing accommodation. It is about creating meaningful experiences, offering exceptional comfort, and making every guest feel valued. Whether you are visiting Enugu for business, leisure, celebrations, or a short escape, we are committed to giving you a stay filled with warmth, convenience, and lasting memories.
                        </p>
                    </div>
                </div>
                </section>
            </main>
        </div>
    )
}