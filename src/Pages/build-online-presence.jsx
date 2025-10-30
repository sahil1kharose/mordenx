import Navbar from "../Component/Navbar";
import OnlinePresenceImg from "../assets/business.png";

export default function BuildOnlinePresence() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2 flex justify-center">
            <img
                src={OnlinePresenceImg}
                alt="Online Presence"
                className="w-72 md:w-96 lg:w-[500px] h-auto"
            />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
            <h2 className="text-3xl font-bold mb-4">“Be Found, Be Trusted.”</h2>
            <p className="text-md">
                Your online presence is your modern-day storefront. From search to social, every digital touchpoint builds your reputation and generates leads.
            </p>
        </div>
    </div>

    {/* Main Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Build an Online Presence</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📍 Why It Matters</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>90%+ of buyers research online before contacting service providers</li>
                <li>A strong presence builds credibility and increases trust</li>
                <li>Digital visibility drives continuous lead generation</li>
                <li>It works 24/7 — even when you're offline</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🔧 Key Elements</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Professional website with clear service offerings</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Active LinkedIn and Google Business profiles</li>
                <li>Consistent branding across all platforms</li>
                <li>Clear contact information and call-to-action</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📈 Tools to Use</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Website: WordPress, Webflow, Next.js, Vercel</li>
                <li>SEO: Ahrefs, Google Search Console, Yoast SEO</li>
                <li>Analytics: Google Analytics, Hotjar</li>
                <li>CRM: HubSpot, Zoho, Notion</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🚀 Real Result</h3>
              <p className="text-gray-800">
                A managed IT company in Delhi gained 60+ inbound leads/month after revamping their website, adding service pages, and optimizing for local SEO.
              </p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}
