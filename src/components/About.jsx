import React from "react";
import profile from "../assets/photo.jpg"; // replace with your image path

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white px-4 sm:px-6 lg:px-16 fade-in"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
          About Me
        </h2>

        {/* Intro + Image */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={profile}
            alt="Shohaib Ibne Monju"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md border-4 border-blue-100"
          />

          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              Hello! I’m <strong>Shohaib Ibne Monju</strong>, a passionate
              researcher in materials science, specializing in{" "}
              <strong>
                high-entropy alloys, machine learning, and computational
                materials design
              </strong>
              . I completed my undergraduate degree in Materials and
              Metallurgical Engineering from the Bangladesh University of
              Engineering and Technology (BUET).
            </p>

            <p>
              Outside my coursework, I actively participated in computational
              research projects focusing on{" "}
              <strong>
                Machine Learning, Computer Vision, and Molecular Dynamics
                simulations
              </strong>{" "}
              under the supervision of{" "}
              <a
                href="https://faculty.buffalostate.edu/ahmedsm/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Dr. Saquib Ahmed
              </a>{" "}
              at SUNY – Buffalo State University, USA. These experiences have
              greatly enhanced my expertise in data-driven materials design and
              scientific computing.
            </p>
          </div>
        </div>

        {/* Research Experience */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Research Experience
          </h3>
          <div className="bg-gray-50 shadow rounded-xl p-6">
            <h4 className="font-semibold text-gray-800">
              Undergraduate Researcher (Remote)
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              Jan. 2023 – July 2025 ·{" "}
              <a
                href="https://faculty.buffalostate.edu/ahmedsm/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ahmed Research Group
              </a>
            </p>
            <p className="text-gray-700">
              <strong>PI & Group Lead:</strong> Dr. Saquib Ahmed, SUNY – Buffalo
              State University, New York, USA
            </p>
            <p className="text-gray-700 mt-2">
              Conducted computational materials research integrating
              machine-learning-based predictions, DFT calculations, and
              molecular dynamics simulations to study high-entropy alloy
              behavior. Contributed to data preprocessing, model development,
              and property correlation analysis.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-8 text-center">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            {/* Experimental Skills */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-blue-700 mb-3">
                🔹 Experimental Skills
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Uniaxial Pressing</li>
                <li>Sand Molding</li>
                <li>Metallography & Microstructure Analysis</li>
                <li>Chemical Analysis & Electrodeposition</li>
                <li>Corrosion Testing</li>
              </ul>
            </div>

            {/* Software & Computational Skills */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-blue-700 mb-3">
                💻 Software & Computational Skills
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>VASP (DFT calculations), Origin Lab, CES Edupack (basic)</li>
                <li>MATLAB, SolidWorks, MS Office, LaTeX</li>
                <li>
                  <strong>Molecular Dynamics Simulation:</strong> Basic
                  simulations using LAMMPS
                </li>
                <li>
                  <strong>Structure Generation & Visualization:</strong> VESTA,
                  OVITO, Atomsk, Packmol
                </li>
              </ul>
            </div>

            {/* Programming Languages */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition md:col-span-2">
              <h4 className="text-lg font-semibold text-blue-700 mb-3">
                ⚙️ Programming & Data Skills
              </h4>
              <ul className="list-disc list-inside grid sm:grid-cols-2 gap-x-8 gap-y-1">
                <li>C, C++, Python (Matplotlib, Pandas, Scikit-learn)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Research Interests
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Machine Learning and Data-driven Materials Design</li>
            <li>High-Entropy Alloys and Energy Materials</li>
            <li>Molecular Dynamics and DFT Simulations</li>
            <li>Electrochemical Energy Storage</li>
            <li>Computational Materials Science</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
