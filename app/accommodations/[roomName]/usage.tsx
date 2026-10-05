'use client';

import Button from "@/app/components/button";
import { useEffect, useState } from "react";

const Usage = ({ availableRooms, price } : {availableRooms : string, price : string}) => {
    const initialPrice = Number(price)
    const [number, setNumber] = useState<{
        adult : number, 
        children : number,
        rooms : number,
        extraBed : number,
        grandTotal : number
    }>({
        adult : 1, 
        children : 0,
        rooms : 1,
        extraBed : 0,
        grandTotal : initialPrice
    });
    const [dates, setDates] = useState<{
        checkIn : string, 
        checkOut : string
    }>({
        checkIn : "",
        checkOut : ""
    });

    const today = new Date().toISOString().split("T")[0];

    const getNights = () => {
        if (!dates.checkIn || !dates.checkOut) return 1;
        const start = new Date(dates.checkIn).getTime()
        const end =  new Date(dates.checkOut).getTime()
        const diff = end - start;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    const nights = getNights();

    useEffect (() => {
        setNumber(prev => ({...prev, grandTotal : initialPrice * prev.rooms * nights}))
    }, [number.rooms, dates]);
    return (
        <main className="space-y-10">
            <div className="flex justify-between *:w-1/2">
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-black">Check In</p>
                    <input type="date" name="checkIn" id="checkIn" value={dates.checkIn} min={today} className="border border-amber-600 p-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDates({
                        checkIn: e.target.value,
                        checkOut: "" //reset checkout
                    })} />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-black">Check Out</p>
                    <input type="date" name="checkOut" id="checkOut" className="border border-amber-600 p-2" value={dates.checkOut} min={dates.checkIn || today} disabled={!dates.checkIn} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDates((prev) => ({...prev, checkOut: e.target.value}))} />
                </div>
            </div>
            <section className="flex justify-between flex-wrap gap-y-4 text-black *:w-1/2">
                    <div className="flex flex-col items-center ">
                        <label htmlFor="adult">Adult</label>
                        <div className="flex gap-4 items-center">
                            <button className="bg-primary text-white w-10 h-10 font-semibold text-2xl flex justify-center" onClick={() => setNumber(prev => ({...prev, adult:Math.max(1, prev.adult - 1)}))}>-</button>
                            <p className="text-xl">{number.adult}</p>
                            <button className="bg-primary text-white w-10 h-10 font-semibold text-2xl flex justify-center" onClick={() => setNumber(prev => ({...prev, adult:Math.max(1, prev.adult + 1)}))}>+</button>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center ">
                        <label htmlFor="children">Children</label>
                        <div className="flex gap-4 items-center">
                            <button className="bg-primary text-white w-10 h-10 font-semibold text-2xl flex justify-center" onClick={() => setNumber(prev => ({...prev, children:Math.max(0, prev.children - 1)}))}>-</button>
                            <p className="text-xl">{number.children}</p>
                            <button className="bg-primary text-white w-10 h-10 font-semibold text-2xl flex justify-center" onClick={() => setNumber(prev => ({...prev, children:Math.max(0, prev.children + 1)}))}>+</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center ">
                        <label htmlFor="rooms">Rooms</label>
                        <div className="flex gap-4 items-center">
                            <button className="bg-primary text-white w-10 h-10 font-semibold text-2xl flex justify-center" onClick={() => setNumber(prev => ({...prev, rooms:Math.max(1, prev.rooms - 1)}))}>-</button>
                            <p className="text-xl">{number.rooms}</p>
                            <button className="bg-primary text-white w-10 h-10 font-semibold text-2xl flex justify-center" onClick={() => setNumber(prev => ({...prev, rooms:Math.max(1, prev.rooms + 1)}))}>+</button>
                        </div>
                        <p className="text-gray-700 text-sm">Available Rooms : {availableRooms}</p>
                    </div>

                    <div className="flex flex-col items-center ">
                        <label htmlFor="extraBed">Extra Bed</label>
                        <div className="flex gap-4 items-center">
                            <button className="bg-primary text-white w-10 h-10 font-semibold text-2xl flex justify-center" onClick={() => setNumber(prev => ({...prev, extraBed:Math.max(0, prev.extraBed - 1)}))}>-</button>
                            <p className="text-xl">{number.extraBed}</p>
                            <button className="bg-primary text-white w-10 h-10 font-semibold text-2xl flex justify-center" onClick={() => setNumber(prev => ({...prev, extraBed:Math.max(0, prev.extraBed + 1)}))}>+</button>
                        </div>
                    </div>            
            </section>
            <section className="flex justify-between font-serif text-2xl text-black">
                <p>Total Cost</p>
                <p>₦{number.grandTotal}</p>
            </section>
            <Button label="Book Your Stay" className="w-full" />
        </main>
    );
}

export default Usage;