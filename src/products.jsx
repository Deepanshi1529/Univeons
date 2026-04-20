import { useState } from "react";
import { Link } from "react-router-dom";

const C_Icon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 12h6c1.5 0 3-1.5 1.5-3s-1.5-3-1.5-3H8c0 1.5-1.5 3-1.5 3s1 1.5 1.5 3"/></svg>;
const SunIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 12a4 4 0 1 0-4 4 4 4 0 0 0 4-4M3 12a9 9 0 0 1 18 0 9 9 0 0 1-18 0M12 1v2m0 18v2m-5-5H2m18 0h-2m-2.93-7.07l-1.42 1.42m-9.9 9.9l-1.42 1.42m0-11.3l1.42 1.42m9.9 9.9l1.42 1.42"/></svg>;
const ChevronDown = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>;
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

export default function Products() {
  const [dark, setDark] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${dark ? 'bg-[#080618]' : 'bg-[#f4f2ff]'}`}>
      <nav className={`sticky top-0 z-50 flex items-center justify-end h-[68px] px-[6%] ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-gray-200 border-gray-300'} border`}>
        <div className="hidden md:flex items-center gap-9">
          <Link to="/" className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] transition-colors`}>Home</Link>
          <div className="relative">
            <button onClick={() => setAboutOpen(!aboutOpen)} className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] flex items-center gap-1 bg-transparent border-none cursor-pointer`}>
              About <ChevronDown/>
            </button>
            {aboutOpen && (
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 border rounded-xl py-1.5 min-w-[170px] shadow-xl z-[300] ${dark ? 'bg-[#1e1a4a] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
                <a href="/vision" className={`block px-5 py-2.5 text-sm font-medium ${dark ? 'text-[#AFA9EC] hover:bg-[#7F77DD] hover:text-white' : 'text-gray-700 hover:bg-[#7F77DD] hover:text-white'}`}>Vision</a>
                <a href="index.html#contact" className={`block px-5 py-2.5 text-sm font-medium ${dark ? 'text-[#AFA9EC] hover:bg-[#7F77DD] hover:text-white' : 'text-gray-700 hover:bg-[#7F77DD] hover:text-white'}`}>Contact</a>
                <Link to="/members" className={`block px-5 py-2.5 text-sm font-medium ${dark ? 'text-[#AFA9EC] hover:bg-[#7F77DD] hover:text-white' : 'text-gray-700 hover:bg-[#7F77DD] hover:text-white'}`}>Members</Link>
              </div>
            )}
          </div>
          <a href="#" className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD] transition-colors`}>Products</a>
          <button onClick={() => setDark(!dark)} className={`w-9 h-9 rounded-full border-none cursor-pointer flex items-center justify-center ${dark ? 'bg-[#3C3489] text-[#AFA9EC] hover:bg-[#534AB7]' : 'bg-[#7F77DD] text-white hover:bg-[#534AB7]'}`}>
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
          <Link to="/" onClick={() => setMenuOpen(false)} className={`block text-base font-medium py-3 border-b ${dark ? 'text-[#AFA9EC] border-[#2d2760] hover:text-white' : 'text-gray-700 border-gray-200 hover:bg-purple-600 hover:text-white'}`}>Home</Link>
          <Link to="/vision" onClick={() => setMenuOpen(false)} className={`block text-base font-medium py-3 border-b ${dark ? 'text-[#AFA9EC] border-[#2d2760] hover:text-white' : 'text-gray-700 border-gray-200 hover:bg-purple-600 hover:text-white'}`}>Vision</Link>
          <Link to="/members" onClick={() => setMenuOpen(false)} className={`block text-base font-medium py-3 border-b ${dark ? 'text-[#AFA9EC] border-[#2d2760] hover:text-white' : 'text-gray-700 border-gray-200 hover:bg-purple-600 hover:text-white'}`}>Members</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className={`block text-base font-medium py-3 border-b ${dark ? 'text-[#AFA9EC] border-[#2d2760] hover:text-white' : 'text-gray-700 border-gray-200 hover:bg-purple-600 hover:text-white'}`}>Products</Link>
          <button 
            onClick={() => { setDark(!dark); setMenuOpen(false); }}
            className={`mt-3 border-none rounded-lg px-5 py-2.5 cursor-pointer text-sm font-medium flex items-center gap-2 ${dark ? 'bg-[#3C3489] text-[#AFA9EC]' : 'bg-purple-600 text-white'}`}
          >
            {dark ? <><SunIcon/> Switch to Light</> : <><MoonIcon/> Switch to Dark</>}
          </button>
        </div>
      )}

      <section className={`px-[6%] py-[90px] ${dark ? 'bg-[#080618]' : 'bg-gray-50'}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className={`font-roboto font-extrabold text-[clamp(28px,3vw,42px)] mb-3.5 ${dark ? 'text-white' : 'text-gray-800'}`}>Our Products</h2>
            <div className="w-12 h-[3.5px] bg-[#7F77DD] rounded mx-auto mb-4.5" />
            <p className={`max-w-[540px] mx-auto leading-relaxed text-base ${dark ? 'text-[#6b688a]' : 'text-gray-600'}`}>Discover the innovative software products developed at EdTech.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`rounded-2xl border p-8 hover:-translate-y-1 hover:border-[#7F77DD] transition-all duration-300 ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
              <img src="/images/pic.png" alt="Product 1" className="w-full h-auto rounded-lg mb-4" />
<div className="flex flex-wrap gap-2 mb-4">
                <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#7F77DD] text-white hover:bg-[#534AB7]">Quiz Software</button>
                
              </div>
              <p className={`leading-relaxed text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-800'}`}>PrashnaSetu: Think. Compete. Conquer</p>
              <p className={`leading-relaxed text-sm ${dark ? 'text-[#AFA9EC]' : 'text-gray-600'}`}>PrashnaSetu is a modern, full-screen quiz app that presents randomized questions with images, and provides real-time monitoring to ensure academic integrity.</p>
             
              <div className="flex justify-end mt-9">
                <a href="https://prashnasetu.bmu.edu.in" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#7F77DD] text-white hover:bg-[#534AB7] border border-[#7F77DD]">Learn More →</a>
              </div>
            </div>
            <div className={`rounded-2xl border p-8 hover:-translate-y-1 hover:border-[#7F77DD] transition-all duration-300 ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
              <img src="/images/MetaInfoSci.png" alt="Product 2" className="w-full h-auto rounded-lg mb-4" />
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#7F77DD] text-white hover:bg-[#534AB7]">Bibliometric Analysis Web Tool</button>
                
              </div>
              <p className={`leading-relaxed text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-800'}`}>MetaInfoSci: Visualizing Trends & Analyzing Facts</p>
              <p className={`leading-relaxed text-sm ${dark ? 'text-[#AFA9EC]' : 'text-gray-600'}`}>Discover patterns, visualize relationships, and gain insights from your bibliometric data from Scopus & Web of Science with our powerful analysis platform.</p>
              
              <div className="flex justify-end mt-9">
                <a href="https://metainfosci.bmu.edu.in/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#7F77DD] text-white hover:bg-[#534AB7] border border-[#7F77DD]">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`border-t px-[6%] py-12 ${dark ? 'bg-[#1a1636] border-[#2d2760]' : 'bg-gray-200 border-gray-300'}`}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            <div className="hidden sm:block">

              <p className={`leading-relaxed text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>EdTech Pvt Ltd</p>
            </div>
            <div className="sm:col-start-2">
              <h4 className={`text-sm font-bold mb-5 font-roboto ${dark ? 'text-white' : 'text-gray-700'}`}>Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link to="/" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Home</Link>
                <a href="vision.html" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Vision</a>
                <a href="#" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Members</a>
                <a href="#" className={`text-sm transition-all duration-200 ${dark ? 'text-gray-300 hover:text-[#7F77DD] hover:translate-x-1' : 'text-gray-600 hover:text-[#7F77DD] hover:translate-x-1'}`}>Products</a>
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
             <p className={`text-[13px] ${dark ? 'text-gray-400' : 'text-gray-500'}`}>© 2026 EdTech Pvt Ltd — All Rights Reserved.</p>
              <a href="/admin" className={`text-[11px] mt-2 inline-block opacity-40 hover:opacity-100 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}