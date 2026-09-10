import Image from "next/image"

const Slider = () => {
    return (
        <section className="w-full h-full relative">
            <div className="w-full h-full relative">
                <Image src="/images/Hotel_exterior_with_cars_and_2K_202609061634.jpeg" alt="Exterior view of the hotel" fill loading="eager" />
            </div>
            <div className="bg-black opacity-20 w-full h-full border absolute top-0 left-0" />
        </section>
    );
}

export default Slider;