import { Globe, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
    return (
        <footer className="px-2">
            <section className="bg-black text-white p-15 rounded-2xl">
                <main className="flex justify-between *:w-1/3 mb-10">
                    <section>
                        <p>Welcome to De Luxumberg Hotels, a distinguished boutique hotel nestled within the prestigious Independence Layout, Enugu.</p>
                    </section>
                    <section className="space-y-5">
                        <p className="font-serif text-xl">Quick Links</p>
                        <ul className="space-y-5">
                            <li>About Us</li>
                            <li>Our Facilities</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                        </ul>
                    </section>
                    <section className="space-y-5">
                        <p className="font-serif text-xl">CONTACT US</p>
                        <ul className="space-y-5">
                            <li className="flex items-center gap-3"><Phone className="text-primary" /> +234 803 000 0000</li>
                            <li className="flex items-center gap-3"><Mail className="text-primary" /> reservations@hoteldeluxumberg.com</li>
                            <li className="flex items-center gap-3"><Globe className="text-primary" /> https://www.hoteldeluxumberg.com</li>
                            <li className="flex items-start gap-3"><MapPin className="text-primary" /> 12 Independence Layout Avenue,<br /> Independence Layout, Enugu,<br /> Enugu State, Nigeria.</li>
                        </ul>
                    </section>
                </main>
                <div className="pt-10 border-t border-t-gray-600">
                    <p className="text-center">Copyright {new Date().getFullYear()} - De Luxumberg Hotels. All Rights Reserved. </p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;