import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_93jb93v",     
        "template_3pv6sk6",    
        formRef.current,
        "w_TRP9Apo2pl0h3H6"      
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("❌ Email error:", err);
        alert("Failed to send message.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-[#61b2f9]" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-7xl font-bold mb-10 text-center text-white">Contact Us</h2>
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
          </div>

          <div>
            <label className="block text-white text-xl font-bold mb-2">Tell us about your project</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border bg-blue-700/20 text-white border-gray-300 rounded px-4 py-2"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 text-white font-semibold px-8 py-3 rounded hover:bg-blue-800 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
