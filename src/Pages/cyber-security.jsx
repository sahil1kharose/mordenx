
import Navbar from "../Component/Navbar";
import securityImg from "../assets/cyber.png";

export default function CyberSecurity() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Image + Slogan */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={securityImg}
            alt="Cyber Security"
          
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Secure Today, Lead Tomorrow.”</h2>
          <p className="text-md">
            We protect your digital world with advanced cyber security strategies designed to detect, prevent, and respond to threats.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section id="security-services" className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Cyber Security Services</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🔐 Our Services</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>24/7 Threat Monitoring & Response</li>
                <li>Firewall & Endpoint Protection Setup</li>
                <li>Vulnerability Assessment & Penetration Testing</li>
                <li>Cloud Security Architecture</li>
                <li>Email & Phishing Attack Protection</li>
                <li>Ransomware Defense & Data Backup Solutions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🏢 Who Needs It?</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><strong>Law Firms:</strong> Client data protection, secure email systems</li>
                <li><strong>Startups:</strong> Affordable managed security services</li>
                <li><strong>Logistics:</strong> Protect operational software & IoT systems</li>
                <li><strong>Healthcare:</strong> HIPAA-compliant data protection</li>
                <li><strong>Finance:</strong> Secure online transactions, fraud prevention</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🧠 Why Choose Us?</h3>
              <p className="text-gray-800 mb-4">
                We combine industry-certified tools and expert strategies to secure your digital assets. Our approach is proactive, not reactive.
              </p>
              <p className="text-gray-800">
                We provide real-time alerts, incident response, and continuous risk mitigation using the best cyber security standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">⚙️ Tools & Technologies</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Firewalls: Fortinet, Cisco ASA, pfSense</li>
                <li>SIEM: Splunk, IBM QRadar, ELK Stack</li>
                <li>EDR: CrowdStrike, SentinelOne, Microsoft Defender</li>
                <li>Cloud Security: AWS GuardDuty, Azure Security Center</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
