import React from "react";
import Navbar from "../Component/Navbar";
import FadeInWhenVisible from "../Component/FadeInWhenVisible";

export default function Technologies() {
  return (
    <div className="bg-[#0b1e48] min-h-screen text-white pt-10">
      <Navbar />

      <FadeInWhenVisible>
        <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-16">Technologies We Use</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Website Development",
                  description:
                    "We build responsive and modern websites aligned with your brand.",
                  stack: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Tailwind CSS",
                  ],
                },
                {
                  title: "App Development",
                  description:
                    "Cross-platform and native mobile apps that engage your users.",
                  stack: [
                    "React Native",
                    "Flutter",
                    "Swift",
                    "Kotlin",
                    "Expo",
                    "Firebase",
                  ],
                },
                {
                  title: "Custom Software Development",
                  description:
                    "Scalable, custom-built solutions tailored for your unique business needs.",
                  stack: [
                    "Python",
                    "Django",
                    "Java",
                    ".NET",
                    "MongoDB",
                    "PostgreSQL",
                  ],
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white group shadow-lg rounded-2xl p-6 w-full text-left text-blue-900 hover:shadow-2xl transition duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 transition duration-300 group-hover:text-blue-600 group-hover:scale-105">
                    {tech.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{tech.description}</p>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Technologies:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {tech.stack.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-10 mt-10">
              {[
                {
                  title: "Cloud Development",
                  description:
                    "We design and deploy cloud-native applications for scalability.",
                  stack: [
                    "AWS",
                    "Google Cloud",
                    "Azure",
                    "Docker",
                    "Kubernetes",
                    "Serverless",
                  ],
                },
                {
                  title: "DevOps",
                  description:
                    "CI/CD pipelines, containerization, and monitoring made simple.",
                  stack: [
                    "GitHub Actions",
                    "Jenkins",
                    "Docker",
                    "Kubernetes",
                    "Terraform",
                    "Prometheus",
                  ],
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white group shadow-lg rounded-2xl p-6 w-full sm:w-[360px] text-left text-blue-900 hover:shadow-2xl transition duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 transition duration-300 group-hover:text-blue-600 group-hover:scale-105">
                    {tech.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{tech.description}</p>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Technologies:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {tech.stack.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInWhenVisible>
    </div>
  );
}
