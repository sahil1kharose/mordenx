import React from "react";
import Navbar from "../Component/Navbar";
import home from "../assets/about-us.png";
import team from "../assets/about1.png";
import leader from "../assets/about2.png";
import FadeInWhenVisible from "../Component/FadeInWhenVisible";

export default function About() {
    return (
        <div className="bg-[#0b1e48] min-h-screen pt-10 text-white">
            <Navbar />
            

            {/* Hero Section */}
            <FadeInWhenVisible>
                    <div className="flex flex-col md:flex-row pb-16 items-center justify-between px-6 md:px-20 pt-10">
                        <div className="w-full md:w-1/2 text-left">
                            <h5 className="text-white text-sm mb-2">Modenex Solutions LTD</h5>
                            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                                Driving Business Growth through Smart IT Solutions
                            </h1>
                            <p className="text-gray-200 mt-4">
                                From strategy to execution, we provide tailored IT services to help you scale and secure your digital presence.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
                            <img src={home} alt="Modenex" className="max-w-full h-auto" />
                        </div>
                    </div>
            </FadeInWhenVisible>

            
            <FadeInWhenVisible>
                <section className="py-16 px-4 md:px-6 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
                    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        
                        <div className="md:w-1/2 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-3">Company Overview</h2>
                                <p className="text-lg md:text-xl mb-4">
                                    <strong>Modenex Solution Ltd</strong> is a trusted IT service provider delivering comprehensive technology solutions to businesses of all sizes. We specialize in IT infrastructure management, bespoke software development, strategic IT consulting, and secure data processing services.
                                </p>
                                <p className="text-lg md:text-xl">
                                    We help organizations enhance efficiency, ensure business continuity, and accelerate digital transformation through expert-led solutions in infrastructure management, IT consulting, and cloud-based services.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-3">Mission Statement</h2>
                                <p className="text-lg md:text-xl">
                                    Our mission is to empower businesses by delivering cutting-edge IT infrastructure management, innovative technology services, and secure data solutions. We strive to provide reliable, scalable, and tailored IT services that enable our clients to operate efficiently, innovate continuously, and stay ahead in a rapidly evolving digital world.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="md:w-1/2">
                            <img src={leader} alt="Company & Mission" className="rounded-xl w-full" />
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 mt-16">
                        <div className="md:w-1/2">
                            <img src={team} alt="Vision & Values" className="rounded-xl w-full" />
                        </div>
                        <div className="md:w-1/2 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-3">Vision Statement</h2>
                                <p className="text-lg md:text-xl text-gray-100">
                                    Our vision is to be recognized as a trusted leader in IT solutions, driving digital transformation and innovation worldwide. We aim to build lasting partnerships by delivering exceptional technology services that foster growth, enhance security, and simplify complex IT challenges for businesses of all sizes.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Us</h2>
                                <p className="text-lg md:text-xl text-gray-100">
                                    With proven expertise, tailored solutions, a strong commitment to security and innovation, and 24/7 support, Modenex Solution Ltd is your ideal partner in navigating and thriving in the digital era.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



            </FadeInWhenVisible>
        </div>
    );
}
