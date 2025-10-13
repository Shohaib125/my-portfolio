import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-16 fade-in"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Current Research Projects
        </h2>

        <div className="space-y-10">
          {/* HEA Project */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:-translate-y-1 transition transform">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Accelerated Design of High-Entropy Alloys via Probabilistic
              Substitution and Machine Learning with DFT Simulations
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Developed machine learning classifiers (ANN, XGBoost) using
              elemental descriptors to predict HEA phase stability with high
              accuracy. Introduced a probabilistic substitution strategy to
              generate over 50,000 novel HEA compositions. Performed DFT
              simulations on selected alloys, confirming thermodynamic stability
              of most predicted structures. This work is under review at{" "}
              <em>Journal of Alloys and Compounds</em>.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Collaborators:</strong> Abdul Hamid Rumman, Kaushik     		       Barua,<strong> Shohaib Ibne Monju</strong>, Aabrar Bin Salahuddin, Md                         	       Tohidul Islam, Saquib Ahmed
            </p>
          </div>

          {/* Thesis */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:-translate-y-1 transition transform">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Effect of Cryogenic Deformation on Properties of AA6063 Alloys
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Investigated deep cryogenic treatment on AA6063 alloys, analyzing
              microstructural evolution and mechanical behavior. Performed
              tensile and microhardness tests and correlated results with XRD
              and microscopy data.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Supervisor:</strong> {" "}
		<a
                href="https://mme.buet.ac.bd/peoples/a-k-m-bazlur-rashid-2/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Dr. A.K.M. Bazlur Rashid
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
