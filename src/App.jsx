
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="2,6 5,9 10,3"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const C_Icon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="M8 12h6c1.5 0 3-1.5 1.5-3s-1.5-3-1.5-3H8c0 1.5-1.5 3-1.5 3s1 1.5 1.5 3"/>
  </svg>
);

const NeuralGraphic = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hexbg1" x="0" y="0" width="40" height="46" patternUnits="userSpaceOnUse">
        <polygon points="20,3 37,13 37,33 20,43 3,33 3,13" fill="none" stroke="#7F77DD" strokeWidth="0.6" opacity="0.2"/>
      </pattern>
    </defs>
    <rect width="300" height="300" fill="url(#hexbg1)"/>
    <circle cx="150" cy="150" r="100" stroke="#3C3489" strokeWidth="1" fill="none" opacity="0.4"/>
    <circle cx="150" cy="150" r="75" stroke="#534AB7" strokeWidth="1" fill="none" opacity="0.5"/>
    <circle cx="150" cy="150" r="50" fill="#1a1636" stroke="#7F77DD" strokeWidth="1.5"/>
    <circle cx="150" cy="150" r="28" fill="#26215C" stroke="#AFA9EC" strokeWidth="1"/>
    <circle cx="150" cy="150" r="10" fill="#7F77DD"/>
    <circle cx="150" cy="50" r="7" fill="#AFA9EC" opacity="0.9"/>
    <circle cx="237" cy="100" r="6" fill="#7F77DD" opacity="0.8"/>
    <circle cx="237" cy="200" r="7" fill="#AFA9EC" opacity="0.9"/>
    <circle cx="150" cy="250" r="6" fill="#7F77DD" opacity="0.8"/>
    <circle cx="63" cy="200" r="7" fill="#AFA9EC" opacity="0.9"/>
    <circle cx="63" cy="100" r="6" fill="#7F77DD" opacity="0.8"/>
  </svg>
);

const SolarGraphic = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="gridbg2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#3C3489" strokeWidth="0.5" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="300" height="300" fill="url(#gridbg2)"/>
    <circle cx="150" cy="150" r="110" stroke="#3C3489" strokeWidth="0.8" fill="none" opacity="0.3"/>
    <circle cx="150" cy="150" r="80" stroke="#534AB7" strokeWidth="1" fill="#0d0a1f" opacity="0.8"/>
    <circle cx="150" cy="150" r="55" fill="#26215C" stroke="#7F77DD" strokeWidth="1.5"/>
    <path d="M150,95 Q185,122 185,150 Q185,178 150,205 Q115,178 115,150 Q115,122 150,95Z" fill="#3C3489" opacity="0.7"/>
    <circle cx="150" cy="150" r="25" fill="#7F77DD" opacity="0.95"/>
    <circle cx="150" cy="150" r="12" fill="#AFA9EC"/>
  </svg>
);

const ClimateGraphic = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dotbg3" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#3C3489" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="300" height="300" fill="url(#dotbg3)"/>
    <ellipse cx="150" cy="150" rx="110" ry="110" stroke="#534AB7" strokeWidth="0.8" fill="none" opacity="0.3"/>
    <ellipse cx="150" cy="150" rx="40" ry="40" stroke="#534AB7" strokeWidth="1" fill="none" opacity="0.5"/>
    <circle cx="150" cy="150" r="32" fill="#26215C" stroke="#7F77DD" strokeWidth="1.5"/>
    <circle cx="150" cy="150" r="10" fill="#7F77DD" opacity="0.9"/>
  </svg>
);

const slides = [
  {
    tag: "EduTech Solutions",
    title: "Transforming",
    titleAccent: "Admissions Technology",
    subtitle: "Your trusted partner for innovative digital platforms, AI-driven solutions, and comprehensive academic management systems.",
    features: ["Platform Development", "AI & Automation", "Data Intelligence", "Cloud Infrastructure"],
    Graphic: () => <img src="/images/pic.png" alt="EduTech" className="h-[300px] w-full rounded-lg" />,
  },
  {
    tag: "SaaS Products",
    title: "Streamlined",
    titleAccent: "Student Lifecycle",
    subtitle: "Complete software solutions for managing applications, fee collection, document management, and communication workflows.",
    features: ["Application Processing", "Fee Collection", "Document Management", "Analytics & Reporting"],
    Graphic: () => <img src="/images/MetaInfoSci.png" alt="MetaInfoSci" className="h-[300px] w-full rounded-lg" />,
  },
  {
    tag: "Digital Solutions",
    title: "Smart",
    titleAccent: "Assessment Tools",
    subtitle: "Advanced digital tools for online interviews, video assessments, automated scheduling, and remote proctoring.",
    features: ["Video Interviews", "Automated Scheduling", "Applicant Tracking", "Remote Proctoring"],
    Graphic: () => <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-h-[300px]"><defs><pattern id="dotbg3" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#3C3489" opacity="0.3"/></pattern></defs><rect width="300" height="300" fill="url(#dotbg3)"/><ellipse cx="150" cy="150" rx="110" ry="110" stroke="#534AB7" strokeWidth="0.8" fill="none" opacity="0.3"/><ellipse cx="150" cy="150" rx="40" ry="40" stroke="#534AB7" strokeWidth="1" fill="none" opacity="0.5"/><circle cx="150" cy="150" r="32" fill="#26215C" stroke="#7F77DD" strokeWidth="1.5"/><circle cx="150" cy="150" r="10" fill="#7F77DD" opacity="0.9"/></svg>,
  },
];

const whatWeDo = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: "Platform Development",
    desc: "Design, develop, operate, and provide online platforms, portals, and mobile applications for managing student admissions, interviews, examinations, and documentation.",
    image: "/images/research.png"
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: "Digital Assessment Tools",
    desc: "Provide digital tools for online interviews, video-based assessments, automated scheduling, shortlisting, applicant tracking, and remote proctoring.",
    image: "/images/sustainability.png"
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    title: "SaaS Solutions",
    desc: "Design, develop, license, and support SaaS products for student lifecycle management including application processing, fee collection, and document management.",
    image: "/images/education.png"
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Data Intelligence & AI",
    desc: "Collect, process, analyze, and provide data intelligence, analytics, AI-driven decision support, predictions, and automated workflows.",
    image: "/images/collaboration.png"
  },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [slide, setSlide] = useState(0);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentSlides, setContentSlides] = useState(null);
  const [contentWhatWeDo, setContentWhatWeDo] = useState(null);
  const dropRef = useRef(null);

useEffect(() => {
    try {
      const storedSlides = localStorage.getItem("heroSlides");
      const storedWhatWeDo = localStorage.getItem("whatWeDo");
      
      if (storedSlides) {
        const parsed = JSON.parse(storedSlides);
        if (parsed && parsed.length > 0) {
          const transformed = parsed.map(function(slide) {
            if (!slide || typeof slide !== 'object') {
              return {
                tag: "EduTech Solutions",
                title: "Transforming",
                titleAccent: "Admissions Technology",
                subtitle: "Your trusted partner...",
                features: ["Platform Development", "AI & Automation", "Data Intelligence", "Cloud Infrastructure"],
                image: "",
                imgSrc: ""
              };
            }
            return {
              tag: slide.tag,
              title: slide.title,
              titleAccent: slide.titleAccent,
              subtitle: slide.subtitle,
              features: slide.features,
              image: slide.image,
              imgSrc: slide.imageData || slide.image
            };
          });
          setContentSlides(transformed);
        }
      }
      
      if (storedWhatWeDo) {
        const parsedWhatWeDo = JSON.parse(storedWhatWeDo);
        if (parsedWhatWeDo && parsedWhatWeDo.length > 0) {
          const iconMap = {
            "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"/></svg>": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
            "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg>": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
            "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\"><path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/></svg>": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
            "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
          };
          const transformed = parsedWhatWeDo.map(function(item) {
            if (item.icon && typeof item.icon === 'string') {
              return { ...item, icon: iconMap[item.icon] || null };
            }
            return item;
          });
          setContentWhatWeDo(transformed);
        }
      }
    } catch (e) {
      console.error("Error loading content:", e);
    }
  }, []);

  const currentSlides = (contentSlides && contentSlides.length > 0) ? contentSlides : slides;
  const currentWhatWeDo = (contentWhatWeDo && contentWhatWeDo.length > 0) ? contentWhatWeDo : whatWeDo;

  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % currentSlides.length), 5000);
    return () => clearInterval(id);
  }, [currentSlides]);

  useEffect(() => {
    const fn = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setAboutOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    if (hash === '#products') {
      window.location.href = '/products';
    }
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect === '/products') {
      window.location.href = '/products';
    }
  }, []);

  const cur = currentSlides[slide] || slides[0] || {};
  const hasImg = cur.imgSrc || cur.image;
  const Graphic = hasImg ? function() { return <img src={hasImg} alt="Hero" className="h-[300px] w-full rounded-lg" />; } : (cur.Graphic || function() { return null; });

  return (
    <>
      <div className={`min-h-screen ${dark ? 'bg-[#080618]' : 'bg-[#f4f2ff]'}`}>

        {/* NAVBAR */}
        <nav className={`sticky top-0 z-50 flex items-center justify-end h-[68px] px-[6%] ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-gray-200 border-gray-300'}`}>
          <div className="hidden md:flex items-center gap-9">
            <a href="#" className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] transition-colors`}>Home</a>
            <div ref={dropRef} className="relative">
              <button 
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] flex items-center gap-1 bg-transparent border-none cursor-pointer`}
              >
                About <ChevronDown/>
              </button>
              {aboutOpen && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 border rounded-xl py-1.5 min-w-[170px] shadow-xl z-[300] ${dark ? 'bg-[#1e1a4a] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
                  {["Vision", "Contact", "Members"].map(item => (
<a 
                      key={item} 
href={item === "Vision" ? "/vision" : item === "Contact" ? "#contact" : item === "Members" ? "/members" : "#"}
                      onClick={() => setAboutOpen(false)}
                      className={`block px-5 py-2.5 text-sm font-medium transition-all duration-200 ${dark ? 'text-[#AFA9EC] hover:bg-[#7F77DD] hover:text-white' : 'text-gray-700 hover:bg-[#7F77DD] hover:text-white'}`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link to="/products" className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] transition-colors`}>Products</Link>
            <button 
              onClick={() => setDark(!dark)}
              className={`w-9 h-9 rounded-full border-none cursor-pointer flex items-center justify-center transition-colors ${dark ? 'bg-[#3C3489] text-[#AFA9EC] hover:bg-[#534AB7]' : 'bg-[#7F77DD] text-white hover:bg-[#534AB7]'}`}
            >
              {dark ? <SunIcon/> : <MoonIcon/>}
            </button>
          </div>

          <button 
            className={`md:hidden bg-transparent border-none cursor-pointer ${dark ? 'text-[#AFA9EC]' : 'text-gray-800'}`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon/> : <MenuIcon/>}
          </button>
        </nav>

        {menuOpen && (
          <div className={`border-b px-[6%] py-2 z-40 ${dark ? 'bg-[#1e1a4a] border-[#3C3489]' : 'bg-gray-200 border-gray-300'}`}>
            {["Home", "Vision", "Contact", "Members", "Products"].map(item => (
              <a 
                key={item} 
                href={item === "Vision" ? "/vision" : item === "Contact" ? "#contact" : item === "Members" ? "/members" : item === "Products" ? "/products" : "#"}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium py-3 border-b ${dark ? 'text-[#AFA9EC] border-[#2d2760] hover:text-white' : 'text-gray-700 border-gray-200 hover:bg-purple-600 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => { setDark(!dark); setMenuOpen(false); }}
              className={`mt-3 border-none rounded-lg px-5 py-2.5 cursor-pointer text-sm font-medium flex items-center gap-2 ${dark ? 'bg-[#3C3489] text-[#AFA9EC]' : 'bg-purple-600 text-white'}`}
            >
              {dark ? <><SunIcon/> Switch to Light</> : <><MoonIcon/> Switch to Dark</>}
            </button>
          </div>
        )}

        {/* HERO */}
        <section className={`relative overflow-hidden ${dark ? 'bg-[#0a0820]' : 'bg-gray-50'}`}>
          <div className={`absolute inset-0 ${dark ? 'bg-[radial-gradient(ellipse_at_15%_50%,rgba(83,74,183,.18)_0%,transparent_55%),radial-gradient(ellipse_at_85%_20%,rgba(127,119,221,.09)_0%,transparent_50%)]' : ''}`} />

          <div className="relative max-w-[1280px] mx-auto px-[6%] flex items-center min-h-[580px]">
            <div className="flex-1 flex flex-col items-start justify-center py-[72px] z-10">
              <p className="text-[11px] text-[#7F77DD] font-bold tracking-[0.12em] uppercase mb-4">{cur.tag}</p>
              <h1 className={`font-roboto font-extrabold leading-tight mb-5 text-[clamp(30px,3.6vw,50px)] ${dark ? 'text-white' : 'text-gray-900'}`}>
                {cur.title}<br/><span className="text-[#7F77DD]">{cur.titleAccent}</span>
              </h1>
              <p className={`leading-relaxed mb-[30px] max-w-[500px] text-[15px] ${dark ? 'text-[#7a779a]' : 'text-gray-600'}`}>{cur.subtitle}</p>

              <div className="grid grid-cols-2 gap-3 mb-9 w-full max-w-[520px]">
                {cur.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className={`w-[22px] h-[22px] rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${dark ? 'bg-[#26215C] border-[#7F77DD] text-[#7F77DD]' : 'bg-gray-100 border-gray-400 text-gray-600'}`}>
                      <CheckIcon/>
                    </div>
                    <span className={`text-sm leading-relaxed ${dark ? 'text-[#AFA9EC]' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#7F77DD] text-white border-none rounded-lg py-3.5 px-10 text-base font-bold cursor-pointer font-roboto hover:bg-[#534AB7] hover:-translate-y-0.5 transition-all">
                Learn More
              </button>
            </div>

            <div className="hidden lg:flex flex-[0_0_48%] items-center justify-center pl-20">
              <div className="w-full max-w-[380px] h-[300px] flex items-center justify-end">
                <Graphic/>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 pb-[30px]">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === slide ? 'w-[26px] bg-[#7F77DD]' : dark ? 'bg-[#3C3489] w-2' : 'bg-gray-400 w-2'}`}
              />
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className={`px-[6%] py-[90px] ${dark ? 'bg-[#1a1636]' : 'bg-gray-100'}`}>
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <h2 className={`font-roboto font-extrabold text-[clamp(28px,3vw,42px)] mb-3.5 ${dark ? 'text-white' : 'text-gray-800'}`}>What We Do</h2>
              <div className="w-12 h-[3.5px] bg-[#7F77DD] rounded mx-auto mb-4.5" />
              <p className={`max-w-[540px] mx-auto leading-relaxed text-base ${dark ? 'text-[#6b688a]' : 'text-gray-600'}`}>Transforming educational admissions through innovative digital technology solutions for institutions worldwide.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {currentWhatWeDo.map(({ icon, title, desc, image }, i) => (
                <div 
                  key={i} 
                  className={`rounded-2xl border p-[30px_26px] hover:-translate-y-1 hover:border-[#7F77DD] transition-all duration-300 cursor-default ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-200'}`}
                >
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dark ? 'bg-[#3C3489] text-[#7F77DD]' : 'bg-[#7F77DD] text-white'}`}>
                        {icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className={`font-roboto text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
                      <p className={`leading-relaxed text-base ${dark ? 'text-[#AFA9EC]' : 'text-gray-600'}`}>{desc}</p>
                    </div>
                    {image && (
                      <img src={image} alt={title} className="w-full md:w-56 h-56 object-cover rounded-lg flex-shrink-0 mt-4 md:mt-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`px-[6%] py-[90px] ${dark ? 'bg-[#080618]' : 'bg-white'}`}>
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-14">
              <h2 className={`font-roboto font-extrabold text-[clamp(28px,3vw,42px)] mb-3.5 ${dark ? 'text-white' : 'text-gray-800'}`}>Contact Us</h2>
              <p className={`leading-relaxed text-base ${dark ? 'text-[#6b688a]' : 'text-gray-600'}`}>Get in touch with our team for partnerships, inquiries, or to learn more about our digital solutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>, title: "Email", sub: "For general inquiries and partnerships", info: "contact@edtech.com", link: false },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: "Location", sub: "EdTech Pvt Ltd, BML Munjal University, 67th Milestone, NH 48, Kapriwas, Haryana", info: "Get Directions →", link: true },
              ].map(({ icon, title, sub, info, link }, i) => (
                <div key={i} className={`rounded-2xl p-[32px_28px] hover:-translate-y-1 hover:border-[#7F77DD] transition-all duration-300 cursor-pointer ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-300 shadow-lg hover:shadow-xl hover:border-purple-500'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4.5 ${dark ? 'bg-[#3C3489] text-[#7F77DD]' : 'bg-[#7F77DD] text-white'}`}>{icon}</div>
                  <h3 className={`font-roboto text-lg font-bold mb-2.5 ${dark ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
                  <p className={`leading-relaxed text-sm mb-3 ${dark ? 'text-[#AFA9EC]' : 'text-gray-600'}`}>{sub}</p>
                  <p className={`text-sm font-semibold cursor-pointer transition-colors duration-200 underline underline-offset-2 ${dark ? 'text-[#7F77DD] hover:text-white' : 'text-[#7F77DD] hover:text-[#534AB7]'}`}>{info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`border-t px-[6%] py-12 ${dark ? 'bg-[#1a1636] border-[#2d2760]' : 'bg-gray-200 border-gray-300'}`}>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
              <div className="hidden sm:block">

                  <p className={`leading-relaxed text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>EdTech Pvt Ltd</p>
              </div>
              <div className="sm:col-start-2">
                <h4 className={`text-sm font-bold mb-5 font-roboto ${dark ? 'text-white' : 'text-gray-700'}`}>Quick Links</h4>
                <div className="flex flex-col gap-3">
                  <a href="#" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Home</a>
                  <a href="/vision" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Vision</a>
                  <a href="#" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Members</a>
                  <a href="#" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Products</a>
                </div>
              </div>
              <div>
                <h4 className={`text-sm font-bold mb-5 font-roboto ${dark ? 'text-white' : 'text-gray-700'}`}>Follow Us</h4>
                <a href="#" className={`w-10 h-10 rounded-full inline-flex items-center justify-center transition-colors ${dark ? 'bg-[#3C3489] text-white hover:bg-[#7F77DD] hover:text-white' : 'bg-[#7F77DD] text-white hover:bg-[#534AB7]'}`}>
                  <LinkedInIcon/>
                </a>
              </div>
            </div>
            <div className={`border-t py-5 text-center ${dark ? 'border-[#2d2760]' : 'border-gray-300'}`}>
              <p className={`text-[13px] ${dark ? 'text-gray-400' : 'text-gray-500'}`}>© 2026 EdTech Pvt Ltd — All Rights Reserved.</p>
              <a href="/admin" className={`text-[11px] mt-2 inline-block opacity-40 hover:opacity-100 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Admin</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}