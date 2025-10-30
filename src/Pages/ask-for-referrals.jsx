import Navbar from "../Component/Navbar";
import Referrals from "../assets/return.png";

export default function AskForReferrals() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={Referrals}
            alt="Ask for Referrals"
            className="w-full "
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Your Clients Are Your Best Sales Team.”</h2>
          <p className="text-md">
            Referrals are the highest-trust, highest-converting leads. Happy clients will gladly recommend you — you just have to ask.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Ask for Referrals</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🙌 Why Referrals Work</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>They come with built-in trust and credibility</li>
                <li>Lower cost of acquisition compared to ads</li>
                <li>Close faster and with fewer objections</li>
                <li>Clients refer others like themselves (ideal customers)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">💬 How to Ask</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Right after a successful project or milestone</li>
                <li>Via a simple thank-you email or message</li>
                <li>Make it easy—include sample text they can forward</li>
                <li>Offer a referral reward (discounts or bonuses)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🎯 When to Ask</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>After receiving positive feedback or testimonials</li>
                <li>During review calls or end-of-project meetings</li>
                <li>When a client renews or expands service</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📈 Real Result</h3>
              <p className="text-gray-800">
                A legal IT support firm asked 10 clients for referrals after positive feedback. 6 responded with contacts.  
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
