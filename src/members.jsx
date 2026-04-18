import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const SunIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 12a4 4 0 1 0-4 4 4 4 0 0 0 4-4M3 12a9 9 0 0 1 18 0 9 9 0 0 1-18 0M12 1v2m0 18v2m-5-5H2m18 0h-2m-2.93-7.07l-1.42 1.42m-9.9 9.9l-1.42 1.42m0-11.3l1.42 1.42m9.9 9.9l1.42 1.42"/></svg>;
const ChevronDown = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>;

export default function Members() {
  const [dark, setDark] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const storedMembers = localStorage.getItem("members");
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    } else {
      setMembers([
        { name: "Dr. John Doe", role: "Founder & CEO", desc: "Leading the vision and strategy of Univeons EdTech with 15+ years of experience in education technology." },
        { name: "Jane Smith", role: "Chief Technology Officer", desc: "Overseeing all technical developments and innovations in our software solutions." },
        { name: "Alex Johnson", role: "Head of Operations", desc: "Managing day-to-day operations and ensuring seamless service delivery to our clients." }
      ]);
    }
  }, []);

  return (
    <div className={`min-h-screen ${dark ? 'bg-[#080618]' : 'bg-[#f4f2ff]'}`}>
      <nav className={`sticky top-0 z-50 flex items-center justify-between h-[68px] px-[6%] ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-gray-200 border-gray-300'} border`}>
        <div className="flex items-center gap-2.5">
          <img src={dark ? "/images/logos.png" : "/images/logo.png"} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-9">
          <Link to="/" className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] transition-colors`}>Home</Link>
          <div className="relative">
            <button onClick={() => setAboutOpen(!aboutOpen)} className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] flex items-center gap-1 bg-transparent border-none cursor-pointer`}>
              About <ChevronDown/>
            </button>
            {aboutOpen && (
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 border rounded-xl py-1.5 min-w-[170px] shadow-xl z-[300] ${dark ? 'bg-[#1e1a4a] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
                <a href="vision.html" className={`block px-5 py-2.5 text-sm font-medium ${dark ? 'text-[#AFA9EC] hover:bg-[#7F77DD] hover:text-white' : 'text-gray-700 hover:bg-[#7F77DD] hover:text-white'}`}>Vision</a>
                <a href="index.html#contact" className={`block px-5 py-2.5 text-sm font-medium ${dark ? 'text-[#AFA9EC] hover:bg-[#7F77DD] hover:text-white' : 'text-gray-700 hover:bg-[#7F77DD] hover:text-white'}`}>Contact</a>
                <Link to="/members" className={`block px-5 py-2.5 text-sm font-medium ${dark ? 'text-[#AFA9EC] hover:bg-[#7F77DD] hover:text-white' : 'text-gray-700 hover:bg-[#7F77DD] hover:text-white'}`}>Members</Link>
              </div>
            )}
          </div>
          <Link to="/products" className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] transition-colors`}>Products</Link>
          <button onClick={() => setDark(!dark)} className={`w-9 h-9 rounded-full border-none cursor-pointer flex items-center justify-center ${dark ? 'bg-[#3C3489] text-[#AFA9EC] hover:bg-[#534AB7]' : 'bg-[#7F77DD] text-white hover:bg-[#534AB7]'}`}>
            {dark ? <SunIcon/> : <MoonIcon/>}
          </button>
        </div>
      </nav>

      <section className={`px-[6%] py-[90px] ${dark ? 'bg-[#080618]' : 'bg-gray-50'}`}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-14">
            <h2 className={`font-roboto font-extrabold text-[clamp(28px,3vw,42px)] mb-3.5 ${dark ? 'text-white' : 'text-gray-800'} text-center`}>Meet Our Directors</h2>
            <div className="w-12 h-[3.5px] bg-[#7F77DD] rounded mx-auto mb-4.5" />
            <p className={`max-w-[540px] mx-auto leading-relaxed text-base ${dark ? 'text-[#6b688a]' : 'text-gray-600'}`}>Meet the talented team behind Univeons EdTech Pvt Ltd.</p>
          </div>

          <div className="flex flex-col gap-6">
            {members.map((member, i) => (
            <div key={i} className={`rounded-2xl border p-6 hover:-translate-y-1 hover:border-[#7F77DD] transition-all duration-300 ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-[#3C3489] flex items-center justify-center mb-3">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#AFA9EC" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <p className={`leading-relaxed text-lg font-bold mb-1 ${dark ? 'text-white' : 'text-gray-800'}`}>{member.name}</p>
                  <p className={`leading-relaxed text-sm ${dark ? 'text-[#7F77DD]' : 'text-[#7F77DD]'}`}>{member.role}</p>
                </div>
                <div className="flex-grow pt-2">
                  <p className={`leading-relaxed text-sm ${dark ? 'text-[#AFA9EC]' : 'text-gray-600'}`}>{member.desc}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={`border-t px-[6%] py-12 ${dark ? 'bg-[#1a1636] border-[#2d2760]' : 'bg-gray-200 border-gray-300'}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            <div className="hidden sm:block">
              <div className="flex items-center gap-2.5 mb-4">
                <img src={dark ? "/images/logos.png" : "/images/logo.png"} alt="Logo" className="h-8 w-auto" />
              </div>
              <p className={`leading-relaxed text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>Univeons EdTech Pvt Ltd</p>
            </div>
            <div className="sm:col-start-2">
              <h4 className={`text-sm font-bold mb-5 font-roboto ${dark ? 'text-white' : 'text-gray-700'}`}>Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link to="/" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Home</Link>
                <a href="vision.html" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Vision</a>
                <Link to="/members" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Members</Link>
                <Link to="/products" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Products</Link>
              </div>
            </div>
            <div>
              <h4 className={`text-sm font-bold mb-5 font-roboto ${dark ? 'text-white' : 'text-gray-700'}`}>Follow Us</h4>
              <a href="#" className={`w-10 h-10 rounded-full inline-flex items-center justify-center transition-colors ${dark ? 'bg-[#3C3489] text-white hover:bg-[#7F77DD] hover:text-white' : 'bg-[#7F77DD] text-white hover:bg-[#534AB7]'}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          <div className={`border-t py-5 text-center ${dark ? 'border-[#2d2760]' : 'border-gray-300'}`}>
            <p className={`text-[13px] ${dark ? 'text-gray-400' : 'text-gray-500'}`}>© 2026 Univeons EdTech Pvt Ltd — All Rights Reserved.</p>
              <a href="/admin" className={`text-[11px] mt-2 inline-block opacity-40 hover:opacity-100 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}