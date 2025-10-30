import Navbar from "../Component/Navbar";
import Audit from "../assets/audi.png";

export default function FreeITAudit() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={Audit}
            alt="Free IT Audit"
            className="w-full "
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Assess, Identify & Optimize.”</h2>
          <p className="text-md">
            A free IT audit is your first step toward stronger security and performance. We uncover vulnerabilities, inefficiencies, and opportunities to improve.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Offer Free IT Audits</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🔍 What’s Covered?</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Network security evaluation</li>
                <li>Data protection & backup readiness</li>
                <li>Software update & patch compliance</li>
                <li>Cloud infrastructure usage and cost check</li>
                <li>Performance optimization opportunities</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">💡 Why Offer It for Free?</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Build trust by showing expertise upfront</li>
                <li>Start conversations without sales pressure</li>
                <li>Demonstrate immediate value and win confidence</li>
                <li>Stand out from competitors offering generic pitches</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🧰 Tools We Use</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Nmap & Nessus for vulnerability scanning</li>
                <li>Bitwarden for password audit</li>
                <li>Cloud cost analyzers (AWS Trusted Advisor, Azure Advisor)</li>
                <li>Google PageSpeed Insights for web performance</li>
                <li>Sysinternals & PowerShell for system audits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📈 Real Result</h3>
              <p className="text-gray-800">
                A logistics company received a free audit identifying outdated firewall rules and excessive cloud costs.
              </p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}
