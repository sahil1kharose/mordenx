import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Component/Navbar";

function Career() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_93jb93v",     // 🛠 Replace with your EmailJS service ID
        "template_hbm5dw7",    // 🛠 Replace with your EmailJS template ID
        formRef.current,
        "w_TRP9Apo2pl0h3H6"      // 🛠 Replace with your EmailJS public key
      )
      .then(() => {
        alert("✅ Application sent successfully!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("❌ Email error:", err);
        alert("Failed to send application.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="pt-10 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white" id="contact">
      <Navbar />
      <div className="max-w-4xl p-10 mx-auto">
        <h2 className="text-7xl font-bold mb-10 text-center text-white">Join Us</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-bold text-xl mb-2">First Name</label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full border bg-blue-700/20 text-white border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-white text-xl font-bold mb-2">Last Name</label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full border bg-blue-700/20 text-white border-gray-300 rounded px-4 py-2"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-xl font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border bg-blue-700/20 text-white border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-white text-xl font-bold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border bg-blue-700/20 text-white border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-white text-xl font-bold mb-2">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                required
                className="w-full border bg-blue-700/20 text-white border-gray-300 rounded px-4 py-2"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 text-white font-semibold px-8 py-3 rounded hover:bg-blue-800 transition"
            >
              {loading ? "Sending..." : "Send Application"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Career;
