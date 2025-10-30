import React from 'react';
import Navbar from "../Component/Navbar";
import Network from "../assets/wifi.png";

export default function NetworkOffline() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={Network}
            alt="Offline Networking"
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Make Real Connections.”</h2>
          <p className="text-md">
            In a digital world, face-to-face networking still builds the strongest relationships. Show up, speak up, and stand out.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Network Offline</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📍 Where to Go</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Local Chamber of Commerce events</li>
                <li>Industry-specific conferences and expos</li>
                <li>Startup meetups and demo days</li>
                <li>Workshops, hackathons, and bootcamps</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🤝 How to Make an Impact</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Have a clear elevator pitch (what you do and for whom)</li>
                <li>Carry simple business cards or QR contact info</li>
                <li>Listen more than you speak</li>
                <li>Follow up within 24 hours of meeting</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">💼 Bring to the Table</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Stories of your successful projects</li>
                <li>Unique offers or free consultations</li>
                <li>Insights about your industry niche</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📈 Real Result</h3>
              <p className="text-gray-800">
                A Modenex consultant attended a logistics expo and booked 6 discovery calls in one day.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
