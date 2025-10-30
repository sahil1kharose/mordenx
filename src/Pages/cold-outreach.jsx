import Navbar from "../Component/Navbar";
import ColdOutreachImg from "../assets/Leverage.png";

export default function ColdOutreach() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Section with Image + Quote */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={ColdOutreachImg}
            alt="Cold Outreach"
            
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Start the Conversation.”</h2>
          <p className="text-md">
            Cold outreach is not about selling — it's about connecting. Reach decision-makers with value-first messaging and turn cold leads into warm clients.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Leverage Cold Outreach</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📬 Why Cold Outreach?</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Proactively reach clients instead of waiting</li>
                <li>Build a sales pipeline from scratch</li>
                <li>Start relationships that can convert over time</li>
                <li>Great for niche services with high-value offerings</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">✉️ What to Include in Your Message</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Personalized introduction based on their company</li>
                <li>Brief value proposition (how you can help)</li>
                <li>Social proof or example of past results</li>
                <li>Simple call to action (e.g., book a call)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🛠 Tools for Cold Outreach</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Find emails: Hunter.io, Apollo, Skrapp</li>
                <li>Send campaigns: Instantly, Smartlead, Mailrush</li>
                <li>Track opens and replies: Mailtrack, Yesware</li>
                <li>Manage pipeline: Trello, Notion, HubSpot</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🚀 Real Result</h3>
              <p className="text-gray-800">
                A cloud IT provider used cold outreach to contact 200 SMBs. After a 3-week campaign, 
                  they booked 15 calls and closed 4 clients worth in monthly retainers.
              </p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}
