"use client";
import { useEffect, useState } from "react";
import Button from "./button";
import Image from "next/image";

const Gallery = () => {
    const [images, setImages ] = useState<GalleryProp[]>([]);
    const [category, setCategory] = useState<string>("all");
    const [gallery, setGallery] = useState<{
        image: string,
        category: string
    }[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetch("http://localhost:3000/data/hotelDetails.json");
            const hotelData = await data.json();
            const { images }:{ images: GalleryProp[]} = hotelData.hotel;
            setImages(images);
            setGallery(images);
        }
        loadData();
    }, []);
    
    const categories = [...new Set(images.map((i) => i.category))];

    useEffect(() => {
        if (category === "all") {
            setGallery(images);
        } else {
            setGallery(images.filter((a) => a.category.toLowerCase().split(" ").join("_") === category))
        }
    }, [category, images]);
    return (
        <div>
            <section className="flex justify-center gap-3 mb-10">
                <button className={`font-sans font-medium px-7 py-2 h-fit flex items-center rounded-3xl ${category === "all" ? "bg-primary text-white" : "border-primary bg-white hover:bg-yellow-100 text-black"}`} onClick={() => setCategory("all")}>All</button>
                {categories.map((cat, index) => (
                <button key={index} className={`font-sans font-medium px-7 py-2 h-fit flex items-center rounded-3xl ${category === cat.toLowerCase().split(" ").join("_") ? "bg-primary text-white" : "border-primary bg-white hover:bg-yellow-100 text-black"}`} onClick={() => setCategory(cat.toLowerCase().split(" ").join("_"))}>{cat}</button>
                ))}
            </section>

            <section className="w-full flex justify-baseline flex-wrap gap-4 px-5">
                {gallery.map ((pic, index) => (
                    <div key={index} className="relative h-50 w-[24%] shrink-0 overflow-hidden">
                        <Image src={`/images/${pic.image}`} alt={pic.category} fill className="transform duration-300 hover:scale-105" />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Gallery;