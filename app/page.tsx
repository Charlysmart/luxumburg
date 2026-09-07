import Image from "next/image";
import Button from "./components/button";
import Slider from "./components/slider";
import { BedDouble, Star, User } from "lucide-react";

export default async function Home() {
  const data = await fetch("http://localhost:3000/data/hotelDetails.json");
  const hotelData = await data.json()
  const { rooms } : { rooms: RoomProp[]} = hotelData.hotel;
  return (
    <main className="font-san text-gray-700 space-y-20 mb-20">
      <section className="h-[calc(100vh-80px)] relative">
        <Slider />
      </section>
      <section className="w-full h-fit px-5 flex justify-between">
        <section className="w-[48%] relative">
          <Image src="/images/Luxurious_modern_hotel_lobby_int…_2K_202609061634.jpeg" alt="Exterior view of the hotel" fill />
        </section>
        <section className="w-[48%] space-y-5">
          <p className="text-primary tracking-wide">De Luxumberg Hotel</p>
          <h1 className="font-serif text-4xl tracking-wide">LUXURY HOTEL IN ENUGU</h1>
          <p className="text-justify">
            Welcome to Luxemburg Hotel, a premier luxury destination designed to offer an exceptional blend of comfort, elegance, and modern hospitality. Strategically positioned to provide guests with a relaxing and memorable stay, our hotel is an ideal choice for both business and leisure travelers.
            At Luxemburg Hotel, we are committed to delivering world-class hospitality through our professional and dedicated team. From beautifully designed accommodations and modern business facilities to exceptional leisure amenities, every detail is thoughtfully designed with your comfort in mind.
            Guests can enjoy a selection of carefully prepared local and international cuisines, comfortable and stylish rooms, modern recreational facilities, and personalized services tailored to create a truly exceptional experience.
            <b className="block font-semibold">At Luxemburg Hotel, your comfort is our priority, and every stay is an experience worth remembering.</b>
          </p>
          <Button label="Explore Our Rooms" />
        </section>
      </section>
      <section className="w-full px-5">
        <div className="text-center flex flex-col items-center space-y-5 mb-20">
          <p className="text-primary tracking-wide">Enjoy a World-Class Stay Experience</p>
          <h2 className="font-serif text-5xl tracking-wider">Designed for Comfort, Crafted for Relaxation</h2>
          <p className="w-[60%]">
            At Luxemburg Hotel, every room and suite is thoughtfully designed to provide the perfect balance of luxury, comfort, and relaxation. Enjoy elegant interiors, premium bedding, modern furnishings, high-speed Wi-Fi, smart entertainment systems, and carefully selected amenities tailored to make your stay exceptional.
            Whether you're visiting for business or leisure, our beautifully appointed accommodations provide a peaceful retreat where you can unwind, recharge, and enjoy the finest in modern hospitality.
          </p>
        </div>
        <section className="flex flex-wrap gap-y-3 gap-x-[4%] mb-10">
          {
            rooms.slice(0, 4).map(room => (
              <article key={room.id} className="w-[48%]">
                <div className=" h-100 shrink-0 relative rounded-2xl overflow-hidden">
                      <Image src={`/images/rooms/${room.images[0]}`} alt={room.name} fill className="transform scale-100 hover:scale-105 duration-300 ease-in-out" />
                </div>
                <section className="py-5">
                  <div className="flex justify-between mb-2">
                    <div className="flex gap-5">
                      <p className="flex gap-1"><User /> {room.maxGuests} Guests</p>
                      <p className="flex gap-1"><BedDouble /> {room.bedType} Bed</p>
                    </div>
                    <p className="font-semibold"><span className="font-semibold text-gray-800 font-serif text-xl">₦{room.pricePerNight}</span>/night</p>
                  </div>
                  <p className="font-serif tracking-wider text-2xl text-gray-800">{room.name.toUpperCase()}</p>
                </section>
              </article>
            ))
          }
        </section>
        <section className="flex justify-center">
          <Button label="View More Rooms" />
        </section>
      </section>
      <section className="h-100 px-2">
        <div className="w-full h-full rounded-2xl relative overflow-hidden">
          <Image src="/images/reception.jpeg" alt="Exterior view of the hotel" fill className="object-cover" />
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 border" />
          <div className="text-white w-full h-full absolute top-0 left-0 flex items-center">
            <div className="space-y-5 w-[50%] flex flex-col items-center">
              <p className="font-serif text-7xl">4.3</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star key={index} className={`${star <= 4 ? "fill-[#b89c02] text-primary" : "fill-white text-white"}`} />
                ))}
              </div>
              <p>(1,000+ Reviews)</p>
            </div>
            <div className="w-[50%] space-y-4">
              <p className="text-lg font-medium">
                The room was beautiful, clean, and very comfortable. The staff were extremely professional. One of the best hotel experiences I have had in Enugu. The food and service were excellent.
              </p>
              <p className="font-semibold text-lg">Amaka Nwosu</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
