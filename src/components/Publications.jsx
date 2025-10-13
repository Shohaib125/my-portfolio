import React from "react";

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-20 bg-white px-4 sm:px-6 lg:px-16 fade-in"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">Publications</h2>

        <div className="space-y-8 text-left">
          <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <p className="text-blue-700 font-semibold mb-2">
              Classification of CoCr-based magnetic thin films via GLCM texture
              features extracted from EFTEM images and machine learning
            </p>
            <p className="text-gray-700">
              Abdul Hamid Rumman, Kaushik Barua, <strong>Shohaib Ibne Monju</strong>, 
              Mohd Rakibul Hasan Abed, Sadika Jannath Tan-Ema, Jafar F. Al-Sharab, 
              Saquib Ahmed; <em>AIP Advances</em>, vol. 14, no. 11, 115017 (Nov. 2024).  
              <a
                href="https://doi.org/10.1063/5.0232442"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                DOI: 10.1063/5.0232442
              </a>
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <p className="text-blue-700 font-semibold mb-2">
              Optical image analysis of WSe2 thresholding for layer detection
            </p>
            <p className="text-gray-700">
              Miah Abdullah Sahriar, Abdul Hamid Rumman, Ahammad Ullah, Kaushik
              Barua, <strong>Shohaib Ibne Monju</strong>, Munim Shahriar Jawad, Md. Atik
              Faisal, Ridwan Radit Ahsan, Houk Jang, Saquib Ahmed;{" "}
              <em>Computational Materials Science</em>, vol. 253, 113888 (May
              2025).  
              <a
                href="https://doi.org/10.1016/j.commatsci.2025.113888"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                DOI: 10.1016/j.commatsci.2025.113888
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
