export default function Links() {
  const links = [
    { name: "Email", url: "mailto:shohaib.rafi25@gmail.com" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=oerWHwIAAAAJ&hl=en" },
    { name: "ORCID", url: "https://orcid.org/0009-0002-8824-1492" },
    { name: "ResearchGate", url: "https://www.researchgate.net/profile/Shohaib-Ibne-Monju?ev=hdr_xprf" },
    { name: "GitHub", url: "https://github.com/Shohaib125" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shohaib/" },
  ];

  return (
    <section id="links" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Connect With Me</h2>

        {/* Changed from flex container to a block container with auto margins for centering */}
        <div className="space-y-4 max-w-xs mx-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              // The 'block' class here ensures the link takes up its own line
              className="block text-blue-600 font-medium hover:text-indigo-700 border border-blue-200 px-6 py-3 rounded-lg transition duration-200 w-full text-center shadow-sm hover:shadow-md"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}