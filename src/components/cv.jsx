export default function CV() {
  return (
    <section id="cv" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Curriculum Vitae</h2>
        <p className="text-gray-700 mb-6">
          Download my full CV to learn more about my education, research experience, and technical expertise.
        </p>
        <a
          href="/Shohaib_Ibne_Monju_CV.pdf"
          download
          className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
