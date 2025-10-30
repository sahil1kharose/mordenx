import Navbar from "../Component/Navbar";
import NicheImg from  "../assets/nichimg.png";

export default function Purpose() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Section with Image + Quote */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={NicheImg}
            alt="Define Your Niche"
    
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Be Specific, Be Unstoppable.”</h2>
          <p className="text-md">
            Niche specialization sets you apart in a crowded market. Define your focus and dominate your segment with precision-driven IT services.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Define Your IT Niche</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🎯 Why Niche Down?</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Stand out in a competitive IT market</li>
                <li>Build authority faster in your expertise</li>
                <li>Command higher pricing with specialized solutions</li>
                <li>Target marketing efforts more effectively</li>
                <li>Create repeatable, scalable service processes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🧩 How to Find Your Niche</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Audit your existing skillset & past projects</li>
                <li>Identify high-demand industries like healthcare, logistics, or law firms</li>
                <li>Research competitor gaps & market needs</li>
                <li>Test with a few targeted clients before committing</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🏆 High-Value Niches to Explore</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Cloud migration services for SMBs</li>
                <li>Cybersecurity for law firms or hospitals</li>
                <li>IT support for remote workforces</li>
                <li>Analytics dashboards for e-commerce</li>
                <li>Software automation for logistics businesses</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📌 Real Example</h3>
              <p className="text-gray-800">
                A small IT firm focused solely on "HIPAA-compliant cloud solutions for private clinics" saw 3x growth in client acquisition because they tailored every part of their pitch and service to that one niche.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
