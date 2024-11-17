import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SocialMedia() {
    return (
        <section className=" py-16 text-center">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-2xl font-bold text-primaryDark mb-6">Bizi Takip Edin</h2>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-primaryBlue hover:text-accentOrange text-2xl">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-primaryBlue hover:text-accentOrange text-2xl">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-primaryBlue hover:text-accentOrange text-2xl">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-primaryBlue hover:text-accentOrange text-2xl">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </section>
    );
}
