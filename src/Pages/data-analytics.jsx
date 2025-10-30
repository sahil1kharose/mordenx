
import Navbar from "../Component/Navbar";
import data from "../assets/data.png";

export default function DataAnalytics() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Image + Slogan */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={data}
            alt="Data Analytics"
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Data Driven Decisions, Smarter Outcomes.”</h2>
          <p className="text-md">
            Empowering businesses with insight, intelligence, and innovation through advanced analytics.
          </p>
        </div>
      </div>

      {/* What We Provide Section */}
      <section id="analytics-work" className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Data Analytics Services</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📊 What We Offer</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Custom dashboards & real-time visualizations (Power BI, Tableau)</li>
                <li>Advanced BI reporting with automation</li>
                <li>AI/ML-driven predictive analytics</li>
                <li>ETL pipelines using Python & Apache NiFi</li>
                <li>Cloud data warehousing (AWS, BigQuery, Snowflake)</li>
                <li>Data governance & compliance audits</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🏭 Industries We Serve</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><strong>Healthcare:</strong> KPI dashboards, predictive diagnosis</li>
                <li><strong>Finance:</strong> Fraud detection, portfolio analytics</li>
                <li><strong>Retail:</strong> Inventory optimization, recommendations</li>
                <li><strong>Logistics:</strong> Route optimization & fleet tracking</li>
                <li><strong>Education:</strong> Dropout prediction, performance dashboards</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">💡 Why Choose Us?</h3>
              <p className="text-gray-800 mb-4">
                With over a decade of experience, our analytics team combines strategy, software, and machine learning expertise.
              </p>
              <p className="text-gray-800">
                We deliver secure, cloud-native, and scalable platforms that meet international standards like GDPR and HIPAA.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🧰 Tech Stack</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li><strong>Languages:</strong> Python, SQL, R</li>
                <li><strong>Tools:</strong> Power BI, Tableau, Spark, Looker</li>
                <li><strong>Cloud:</strong> AWS, Azure, GCP</li>
                <li><strong>ETL:</strong> NiFi, Talend, AWS Glue</li>
                <li><strong>ML:</strong> TensorFlow, Scikit-Learn, XGBoost</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
