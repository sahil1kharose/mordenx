
import Navbar from "../Component/Navbar";
import AdsImg from "../assets/yedi.png"; 

export default function RunAds() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={AdsImg}
            alt="Run Ads"
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Advertise with Purpose.”</h2>
          <p className="text-md">
            Digital advertising is not about throwing money—it's about targeting the right people, with the right message, at the right time.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Run Ads</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🎯 Why Run Ads?</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Reach your exact target audience at scale</li>
                <li>Quickly test and refine your offers or messages</li>
                <li>Build brand awareness and drive lead generation</li>
                <li>Measurable ROI with conversion tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📍 Best Ad Platforms</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><strong>Google Ads:</strong> Search & display ads for high-intent traffic</li>
                <li><strong>LinkedIn Ads:</strong> Ideal for B2B targeting professionals</li>
                <li><strong>Facebook & Instagram:</strong> Great for retargeting and storytelling</li>
                <li><strong>YouTube:</strong> Use video ads to build brand trust</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🛠 Tools to Get Started</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Google Ads Manager</li>
                <li>Meta Business Suite</li>
                <li>Canva for ad creatives</li>
                <li>Google Analytics for conversion tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🚀 Real Result</h3>
              <p className="text-gray-800">
                A small logistics startup ran Google search ads targeting local keywords. In 30 days, 
                they received 86 leads and converted 11 clients—generating.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
