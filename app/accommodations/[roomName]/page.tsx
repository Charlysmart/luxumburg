import { BedDouble, Check, User, Weight } from "lucide-react";
import Image from "next/image";
import Usage from "./usage";

export default async function Accomodation({params} : {params : Promise<{roomName : string}>}) {
    const roomName = (await params).roomName;
    const res = await fetch("http://localhost:3000/data/hotelDetails.json");
    const data = await res.json()
    const {rooms }:{rooms: RoomProp[]} = data.hotel;
    const room = rooms.find(i => i.name.toLowerCase().split(" ").join("-") === roomName);
    if (!room) return <p>Room not found!</p>
    return (
        <div>
            {/* Breadcrumb */}
            <section className="w-full flex justify-center">
                <section className="relative w-[98%] md:h-80 h-60 rounded-2xl overflow-hidden">
                    <Image src="/images/rooms/deluxe-king-1.jpeg" alt="Breadcrumb image" fill className="object-cover" />
                    <div className="w-full h-full bg-black absolute top-0 left-0 opacity-50" />
                    <div className="w-full h-full absolute top-0 left-0">
                        <h1 className="md:h-[90%] h-[85%] flex items-center justify-center text-white font-serif text-5xl">Our Rooms</h1>
                        <div className="md:h-[10%] h-[15%] flex items-center justify-center gap-1 text-gray-400">Home <span className="font-mono text-primary">&gt;</span> <span className="text-white">Our Rooms</span></div>
                    </div>
                </section>
            </section>
            <main className="flex flex-wrap gap-y-3 gap-x-[4%] mb-10 py-15 lg:px-15 px-4 text-gray-600">
                <div className="bg-amber-50 py-10 lg:px-10 rounded-2xl w-full flex flex-wrap gap-y-5 justify-between items-center *:flex *:gap-2 *:font-semibold">
                    <p><User /> {room.maxGuests} Guests</p>
                    <p><BedDouble /> {room.bedType}</p>
                    <p><Weight /> {room.size}</p>
                    <p><span className="font-serif text-3xl text-black">₦{room.pricePerNight}.00</span> /night</p>
                </div>

                <div className="w-full">
                    <section className="w-full flex md:flex-row flex-col gap-y-10 justify-between">
                        <section className="lg:w-[60%] md:w-[50%] w-full space-y-10">
                            <div className="relative w-full lg:h-120 md:h-100 h-80">
                                <Image src={`/images/rooms/${room.images[0]}`} alt={room.name} fill className="object-cover" />
                            </div>
                            <div>
                                <p>{room.description}</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold font-serif text-black mb-5">Room Amenities</h2>
                                <div className="flex flex-wrap gap-y-2">
                                    {room.features.map((feature, index) => (
                                        <p key={index} className="flex gap-3 w-1/2"><Check className="text-primary font-medium capitalize" />{feature}</p>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <section className="lg:w-[35%] md:w-[45%] w-full">
                            <div className="flex justify-between mb-5">
                                <p className="font-serif text-2xl text-black">Reserve</p>
                                <p className="text-black">From <span className="font-serif text-2xl">₦{room.pricePerNight}</span> / night</p>
                            </div>
                            
                            <div>
                                <Usage availableRooms={room.roomCount} price={room.pricePerNight} />
                            </div>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}