import React from 'react';
import Navbar from "../Component/Navbar";
import PipelineImg from "../assets/scm.png";

export default function TrackPipeline() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={PipelineImg}
            alt="Track Pipeline"
            className="w-full "
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Visualize Your Sales, Control Your Growth.”</h2>
          <p className="text-md">
            Without a clear sales pipeline, you’re flying blind. Stay on top of your leads, progress, and deals with effective tracking tools and techniques.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Track Pipeline</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📈 Why Pipeline Tracking?</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>See where leads are in the sales journey</li>
                <li>Follow up at the right time</li>
                <li>Identify bottlenecks and drop-offs</li>
                <li>Forecast revenue and growth better</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🔍 Best Tools for the Job</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><strong>HubSpot CRM:</strong> Free CRM with drag-and-drop pipelines</li>
                <li><strong>Trello:</strong> Visualize leads in a kanban-style board</li>
                <li><strong>Notion:</strong> Custom CRM templates and dashboards</li>
                <li><strong>Zoho CRM:</strong> Advanced sales automation and AI suggestions</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🧰 Tips for Effective Tracking</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Define clear deal stages</li>
                <li>Update statuses daily or weekly</li>
                <li>Set reminders and deadlines for follow-ups</li>
                <li>Analyze close rate and cycle length regularly</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3 text-center">🚀 Real Result</h3>
              <p className="text-gray-800">
                An IT agency implemented Trello to manage outreach leads. Within 2 months, their close rate rose by 30% and follow-up consistency doubled—resulting in 8 new monthly retainer clients.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
