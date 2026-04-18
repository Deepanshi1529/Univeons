import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Vision() {
  const [dark, setDark] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const dropRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setAboutOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const handleContactClick = () => {
    navigate("/#contact");
  };

  return (
    <div className={`min-h-screen ${dark ? "bg-[#080618]" : "bg-[#f4f2ff]"}`}>

      {/* NAVBAR */}
      <nav className={`sticky top-0 z-50 flex items-center justify-between h-[68px] px-[6%] border ${dark ? "bg-[#26215C] border-[#3C3489]" : "bg-gray-200 border-gray-300"}`}>
        <div className="flex items-center gap-2.5">
          <img src={dark ? "/images/logos.png" : "/images/logo.png"} alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-9">
          <Link to="/" className={`text-lg font-medium transition-colors hover:text-[#7F77DD] ${dark ? "text-white" : "text-gray-800"}`}>Home</Link>

          <div ref={dropRef} className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`text-lg font-medium flex items-center gap-1 bg-transparent border-none cursor-pointer hover:text-[#7F77DD] ${dark ? "text-white" : "text-gray-800"}`}
            >
              About <ChevronDown />
            </button>
            {aboutOpen && (
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 border rounded-xl py-1.5 min-w-[170px] shadow-xl z-[300] ${dark ? "bg-[#1e1a4a] border-[#3C3489]" : "bg-white border-gray-200"}`}>
                {["Vision", "Contact", "Members"].map(item => (
                  <Link
                    key={item}
                    to={item === "Vision" ? "/vision" : item === "Contact" ? "/#contact" : "/members"}
                    onClick={() => setAboutOpen(false)}
                    className={`block px-5 py-2.5 text-sm font-medium transition-all duration-200 ${dark ? "text-[#AFA9EC] hover:bg-[#7F77DD] hover:text-white" : "text-gray-700 hover:bg-[#7F77DD] hover:text-white"}`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/products" className={`text-lg font-medium transition-colors hover:text-[#7F77DD] ${dark ? "text-white" : "text-gray-800"}`}>Products</Link>

          <button
            onClick={() => setDark(!dark)}
            className={`w-9 h-9 rounded-full border-none cursor-pointer flex items-center justify-center transition-colors ${dark ? "bg-[#3C3489] text-[#AFA9EC] hover:bg-[#534AB7]" : "bg-[#7F77DD] text-white hover:bg-[#534AB7]"}`}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className={`px-[6%] py-[90px] ${dark ? "bg-[#080618]" : "bg-gray-50"}`}>
        <div className="max-w-[900px] mx-auto">

          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className={`font-roboto font-extrabold text-[clamp(28px,3vw,42px)] mb-3.5 ${dark ? "text-white" : "text-gray-800"}`}>
              ABOUT UNIVEONS
            </h2>
            <div className="w-12 h-[3.5px] bg-[#7F77DD] rounded mx-auto mb-4" />
            <p className={`text-xl mb-8 ${dark ? "text-[#AFA9EC]" : "text-gray-600"}`}>
              Transforming educational admissions through innovative digital technology solutions.
            </p>
          </div>

          {/* About Us */}
          <div className="mb-12">
            <h3 className={`font-roboto text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-800"}`}>About Us</h3>
            <p className={`text-base leading-relaxed ${dark ? "text-[#AFA9EC]" : "text-gray-600"}`}>
              We are a technology company dedicated to designing, developing, operating, and providing online and software-based platforms, portals, mobile applications, and technology solutions for educational institutions, universities, colleges, and training centers for managing student admissions, entrance processes, interviews, counseling, evaluations, examinations, documentation, and related administrative activities.
            </p>
            <p className={`text-base leading-relaxed mt-4 ${dark ? "text-[#AFA9EC]" : "text-gray-600"}`}>
              We partner with universities, colleges, schools, government bodies, corporations, and other institutions to deliver innovative digital technology solutions through cutting-edge software and AI-driven platforms that transform educational admissions and academic management processes.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-12">
            <h3 className={`font-roboto text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-800"}`}>Vision</h3>
            <p className={`text-base leading-relaxed ${dark ? "text-[#AFA9EC]" : "text-gray-600"}`}>
              To be a leading provider of innovative digital technology solutions that transform educational admissions, interviews, and academic management processes through cutting-edge software, AI-driven platforms, and comprehensive data intelligence to empower institutions worldwide.
            </p>
          </div>

          {/* Objectives */}
          <div className="mb-12">
            <h3 className={`font-roboto text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-800"}`}>Objectives</h3>
            <ul className={`space-y-3 list-disc list-inside ${dark ? "text-[#AFA9EC]" : "text-gray-600"}`}>
              <li>Design, develop, and provide digital platforms for managing student admissions, interviews, examinations, and administrative activities</li>
              <li>Offer digital tools for online interviews, video-based assessments, automated scheduling, shortlisting, and applicant tracking</li>
              <li>Develop and license SaaS products for student lifecycle management including application processing, fee collection, and document management</li>
              <li>Provide data intelligence, analytics, AI-driven decision support, predictions, and automated workflows for institutional improvement</li>
              <li>Offer system integration, customization, technical consultancy, IT support, training, installation, and maintenance services</li>
              <li>Create, license, market, and distribute software products, digital tools, APIs, and related intellectual property</li>
            </ul>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <h3 className={`font-roboto text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-800"}`}>Research Areas</h3>
            <div className="space-y-6">
              {[
                { title: "Software & Platform Development", desc: "Design, development, and maintenance of online platforms, portals, mobile applications, and enterprise solutions for educational institutions." },
                { title: "Artificial Intelligence & Automation", desc: "AI-driven decision support, predictions, automated workflows, remote proctoring, digital verification, and intelligent automation systems." },
                { title: "Data Analytics & Intelligence", desc: "Data collection, processing, analytics, reporting, and AI-driven insights for improving recruitment and operational efficiency." },
                { title: "Cloud Infrastructure & Security", desc: "Secure cloud hosting, data storage, server management, cybersecurity, encryption, backup, and infrastructure services." },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <h4 className={`font-roboto text-lg font-bold mb-2 ${dark ? "text-white" : "text-gray-800"}`}>{title}</h4>
                  <p className={dark ? "text-[#AFA9EC]" : "text-gray-600"}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className={`text-xl mb-8 ${dark ? "text-[#AFA9EC]" : "text-gray-600"}`}>
              Interested in Collaborating or Joining Us?
            </p>
            <button
              onClick={handleContactClick}
              className="bg-[#7F77DD] text-white border-none rounded-lg py-3 px-8 text-base font-bold cursor-pointer font-roboto hover:bg-[#534AB7] transition-all"
            >
              Contact Us
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className={`border-t px-[6%] py-12 ${dark ? "bg-[#1a1636] border-[#2d2760]" : "bg-gray-200 border-gray-300"}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            <div className="hidden sm:block">
              <div className="flex items-center gap-2.5 mb-4">
                <img src={dark ? "/images/logos.png" : "/images/logo.png"} alt="Logo" className="h-8 w-auto" />
              </div>
              <p className={`leading-relaxed text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>Univeons EdTech Pvt Ltd</p>
            </div>
            <div className="sm:col-start-2">
              <h4 className={`text-sm font-bold mb-5 font-roboto ${dark ? "text-white" : "text-gray-700"}`}>Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link to="/" className={`text-sm transition-all duration-200 hover:text-[#7F77DD] hover:translate-x-1 ${dark ? "text-gray-300" : "text-gray-600"}`}>Home</Link>
                <Link to="/vision" className={`text-sm transition-all duration-200 hover:text-[#7F77DD] hover:translate-x-1 ${dark ? "text-gray-300" : "text-gray-600"}`}>Vision</Link>
                <Link to="/members" className={`text-sm transition-all duration-200 hover:text-[#7F77DD] hover:translate-x-1 ${dark ? "text-gray-300" : "text-gray-600"}`}>Members</Link>
                <Link to="/products" className={`text-sm transition-all duration-200 hover:text-[#7F77DD] hover:translate-x-1 ${dark ? "text-gray-300" : "text-gray-600"}`}>Products</Link>
              </div>
            </div>
            <div>
              <h4 className={`text-sm font-bold mb-5 font-roboto ${dark ? "text-white" : "text-gray-700"}`}>Follow Us</h4>
              <a href="#" className={`w-10 h-10 rounded-full inline-flex items-center justify-center transition-colors ${dark ? "bg-[#3C3489] text-white hover:bg-[#7F77DD]" : "bg-[#7F77DD] text-white hover:bg-[#534AB7]"}`}>
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={`border-t py-5 text-center ${dark ? "border-[#2d2760]" : "border-gray-300"}`}>
            <p className={`text-[13px] ${dark ? "text-gray-400" : "text-gray-500"}`}>© 2026 Univeons EdTech Pvt Ltd — All Rights Reserved.</p>
            <Link to="/admin" className={`text-[11px] mt-2 inline-block opacity-40 hover:opacity-100 ${dark ? "text-gray-400" : "text-gray-500"}`}>Admin</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}