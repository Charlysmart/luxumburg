import Button from "./button";
import Image from "next/image";

export default function Header () {
    return (
        <header className="flex justify-between h-20 px-5 border-b border-gray-100">
            <section className="w-[20%] relative">
                <Image src="/images/logo.jpeg" alt="Hotel Logo" fill className="" />
            </section>
            <nav className="flex items-center justify-between list-none w-[50%] font-medium text-gray-700">
                <li className="active">Home</li>
                <li className="active">About Us</li>
                <li className="active">Our Rooms</li>
                <li className="active">Facilities</li>
                <li className="active">Gallery</li>
                <li className="active">Contact Us</li>
            </nav>
            <div className="flex items-center">
                <Button label="Book Now" />
            </div>
        </header>
    )
}