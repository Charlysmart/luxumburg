import { BedDouble, User } from "lucide-react";
import Image from "next/image";

export default async function OurRooms () {
    const data = await fetch("http://localhost:3000/data/hotelDetails.json");
    const hotel = await data.json();
    const { rooms }: { rooms: RoomProp[] } = await hotel.hotel;
    return (
        <div>
            {/* Breadcrumb */}
            <section className="w-full flex justify-center">
                <section className="relative w-[98%] md:h-80 h-60 rounded-2xl overflow-hidden">
                    <Image src="/images/Hotel_lounge_and_bar_interior.jpeg" alt="Breadcrumb image" fill className="object-cover" />
                    <div className="w-full h-full bg-black absolute top-0 left-0 opacity-50" />
                    <div className="w-full h-full absolute top-0 left-0">
                        <h1 className="md:h-[90%] h-[85%] flex items-center justify-center text-white font-serif text-5xl">Our Rooms</h1>
                        <div className="md:h-[10%] h-[15%] flex items-center justify-center gap-1 text-gray-400">Home <span className="font-mono text-primary">&gt;</span> <span className="text-white">Our Rooms</span></div>
                    </div>
                </section>
            </section>
            <main className="flex flex-wrap gap-y-3 gap-x-[4%] mb-10 p-15 text-gray-600">
                {
                rooms.map(room => (
                    <article key={room.id} className="md:w-[48%] w-full">
                    <div className="lg:h-100 h-80 shrink-0 relative rounded-2xl overflow-hidden">
                            <Image src={`/images/rooms/${room.images[0]}`} alt={room.name} fill className="transform scale-100 hover:scale-105 duration-300 ease-in-out object-cover" />
                    </div>
                    <section className="py-5">
                        <div className="flex justify-between items-center mb-2">
                        <div className="flex gap-5 lg:text-[16px] text-[12px]">
                            <p className="flex gap-1 "><User /> {room.maxGuests} Guests</p>
                            <p className="flex gap- text-gray-7001 text-gray-700"><BedDouble /> {room.bedType} Bed</p>
                        </div>
                        <p className="font-semibold"><span className="font-semibold text-gray-800 font-serif text-xl">₦{room.pricePerNight}</span>/night</p>
                        </div>
                        <p className="font-serif tracking-wider md:text-2xl text-gray-800">{room.name.toUpperCase()}</p>
                    </section>
                    </article>
                ))
                }
            </main>
        </div>
    )
}