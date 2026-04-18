import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SunIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 12a4 4 0 1 0-4 4 4 4 0 0 0 4-4M3 12a9 9 0 0 1 18 0 9 9 0 0 1-18 0M12 1v2m0 18v2m-5-5H2m18 0h-2m-2.93-7.07l-1.42 1.42m-9.9 9.9l-1.42 1.42m0-11.3l1.42 1.42m9.9 9.9l1.42 1.42"/></svg>;
const ChevronDown = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>;

const defaultSlides = [
  {
    tag: "EduTech Solutions",
    title: "Transforming",
    titleAccent: "Admissions Technology",
    subtitle: "Your trusted partner for innovative digital platforms, AI-driven solutions, and comprehensive academic management systems.",
    features: ["Platform Development", "AI & Automation", "Data Intelligence", "Cloud Infrastructure"],
    image: "/images/pic.png",
    imageData: null,
    useUpload: false
  },
  {
    tag: "SaaS Products",
    title: "Streamlined",
    titleAccent: "Student Lifecycle",
    subtitle: "Complete software solutions for managing applications, fee collection, document management, and communication workflows.",
    features: ["Application Processing", "Fee Collection", "Document Management", "Analytics & Reporting"],
    image: "/images/MetaInfoSci.png",
    imageData: null,
    useUpload: false
  },
  {
    tag: "Digital Solutions",
    title: "Smart",
    titleAccent: "Assessment Tools",
    subtitle: "Advanced digital tools for online interviews, video assessments, automated scheduling, and remote proctoring.",
    features: ["Video Interviews", "Automated Scheduling", "Applicant Tracking", "Remote Proctoring"],
    image: "",
    imageData: null,
    useUpload: false
  }
];

const handleImageUpload = (e, index) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const newSlides = [...slides];
      newSlides[index].imageData = reader.result;
      newSlides[index].useUpload = true;
      setSlides(newSlides);
    };
    reader.readAsDataURL(file);
  }
};

const handleImageRemove = (index) => {
  const newSlides = [...slides];
  newSlides[index].imageData = null;
  newSlides[index].useUpload = false;
  newSlides[index].image = "";
  setSlides(newSlides);
};

const defaultWhatWeDo = [
  {
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"/></svg>",
    title: "Platform Development",
    desc: "Design, develop, operate, and provide online platforms, portals, and mobile applications for managing student admissions, interviews, examinations, and documentation.",
    image: "/images/research.png"
  },
  {
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg>",
    title: "Digital Assessment Tools",
    desc: "Provide digital tools for online interviews, video-based assessments, automated scheduling, shortlisting, applicant tracking, and remote proctoring.",
    image: "/images/sustainability.png"
  },
  {
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\"><path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/></svg>",
    title: "SaaS Solutions",
    desc: "Design, develop, license, and support SaaS products for student lifecycle management including application processing, fee collection, and document management.",
    image: "/images/education.png"
  },
  {
    icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>",
    title: "Data Intelligence & AI",
    desc: "Collect, process, analyze, and provide data intelligence, analytics, AI-driven decision support, predictions, and automated workflows.",
    image: "/images/collaboration.png"
  }
];

const defaultMembers = [
  {
    name: "Dr. John Doe",
    role: "Founder & CEO",
    desc: "Leading the vision and strategy of Univeons EdTech with 15+ years of experience in education technology."
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    desc: "Overseeing all technical developments and innovations in our software solutions."
  },
  {
    name: "Alex Johnson",
    role: "Head of Operations",
    desc: "Managing day-to-day operations and ensuring seamless service delivery to our clients."
  }
];

export default function Admin() {
  const [dark, setDark] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("slides");
  const [slides, setSlides] = useState([]);
  const [whatWeDo, setWhatWeDo] = useState([]);
  const [members, setMembers] = useState([]);
  const [saveStatus, setSaveStatus] = useState("");

  useEffect(() => {
    try {
      const storedSlides = localStorage.getItem("heroSlides");
      const storedWhatWeDo = localStorage.getItem("whatWeDo");
      const storedMembers = localStorage.getItem("members");

      if (storedSlides) {
        const parsed = JSON.parse(storedSlides);
        if (parsed && parsed.length > 0) {
          setSlides(parsed);
        } else {
          setSlides(defaultSlides);
        }
      } else {
        setSlides(defaultSlides);
      }
      
      if (storedWhatWeDo) {
        const parsed = JSON.parse(storedWhatWeDo);
        if (parsed && parsed.length > 0) {
          setWhatWeDo(parsed);
        } else {
          setWhatWeDo(defaultWhatWeDo);
        }
      } else {
        setWhatWeDo(defaultWhatWeDo);
      }
      
      if (storedMembers) {
        const parsed = JSON.parse(storedMembers);
        if (parsed && parsed.length > 0) {
          setMembers(parsed);
        } else {
          setMembers(defaultMembers);
        }
      } else {
        setMembers(defaultMembers);
      }
    } catch (e) {
      localStorage.removeItem("heroSlides");
      localStorage.removeItem("whatWeDo");
      localStorage.removeItem("members");
      setSlides(defaultSlides);
      setWhatWeDo(defaultWhatWeDo);
      setMembers(defaultMembers);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid password");
    }
  };

  const handleSave = () => {
    try {
      const slidesToSave = slides.map(function(slide) {
        return {
          tag: slide.tag || "",
          title: slide.title || "",
          titleAccent: slide.titleAccent || "",
          subtitle: slide.subtitle || "",
          features: slide.features || [],
          image: slide.image || "",
          imageData: slide.imageData || null,
          useUpload: slide.useUpload || false
        };
      });
      
      const whatWeDoToSave = whatWeDo.map(function(item) {
        return {
          title: item.title || "",
          desc: item.desc || "",
          icon: item.icon || "",
          image: item.image || ""
        };
      });
      
      const jsonSlides = JSON.stringify(slidesToSave);
      const jsonWhatWeDo = JSON.stringify(whatWeDoToSave);
      
      if (jsonSlides.length > 5000000) {
        setSaveStatus("Error: Images too large!");
        return;
      }
      
      localStorage.setItem("heroSlides", jsonSlides);
      localStorage.setItem("whatWeDo", jsonWhatWeDo);
      localStorage.setItem("members", JSON.stringify(members));
      setSaveStatus("Saved!");
      setTimeout(() => setSaveStatus(""), 2000);
    } catch (e) {
      setSaveStatus("Error: Save failed!");
    }
  };

  const handleReset = () => {
    if (confirm("Reset all content to default?")) {
      localStorage.removeItem("heroSlides");
      localStorage.removeItem("whatWeDo");
      localStorage.removeItem("members");
      setSlides(defaultSlides);
      setWhatWeDo(defaultWhatWeDo);
      setMembers(defaultMembers);
      setSaveStatus("Reset to default!");
      setTimeout(() => setSaveStatus(""), 2000);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen ${dark ? 'bg-[#080618]' : 'bg-gray-50'} flex items-center justify-center`}>
        <form onSubmit={handleLogin} className={`p-8 rounded-2xl border ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-800'}`}>Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={`w-full p-3 rounded-lg border mb-4 ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`}
          />
          <button type="submit" className="w-full bg-[#7F77DD] text-white py-3 rounded-lg font-bold hover:bg-[#534AB7]">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${dark ? 'bg-[#080618]' : 'bg-gray-50'}`}>
      <nav className={`sticky top-0 z-50 flex items-center justify-between h-[68px] px-[6%] ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-gray-200 border-gray-300'} border`}>
        <div className="flex items-center gap-2.5">
          <span className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>Admin Panel</span>
        </div>
        <div className="hidden md:flex items-center gap-9">
          <Link to="/" className={`text-lg font-medium ${dark ? 'text-white' : 'text-gray-800'} hover:text-[#7F77DD]`}>Home</Link>
          <button onClick={() => setDark(!dark)} className={`w-9 h-9 rounded-full flex items-center justify-center ${dark ? 'bg-[#3C3489] text-[#AFA9EC]' : 'bg-[#7F77DD] text-white'}`}>
            {dark ? <SunIcon/> : <MoonIcon/>}
          </button>
        </div>
      </nav>

      <div className="px-[6%] py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-4 mb-6">
            <button onClick={() => setActiveTab("slides")} className={`px-4 py-2 rounded-lg font-medium ${activeTab === "slides" ? 'bg-[#7F77DD] text-white' : dark ? 'bg-[#26215C] text-white' : 'bg-white text-gray-800'}`}>Hero Slides</button>
            <button onClick={() => setActiveTab("whatwedo")} className={`px-4 py-2 rounded-lg font-medium ${activeTab === "whatwedo" ? 'bg-[#7F77DD] text-white' : dark ? 'bg-[#26215C] text-white' : 'bg-white text-gray-800'}`}>What We Do</button>
            <button onClick={() => setActiveTab("members")} className={`px-4 py-2 rounded-lg font-medium ${activeTab === "members" ? 'bg-[#7F77DD] text-white' : dark ? 'bg-[#26215C] text-white' : 'bg-white text-gray-800'}`}>Members</button>
          </div>

          {activeTab === "slides" && (
            <div className="space-y-6">
              {slides.map((slide, i) => (
                <div key={i} className={`p-6 rounded-xl border ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
                  <h3 className={`text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-gray-800'}`}>Slide {i + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" value={slide.tag} onChange={(e) => { const newSlides = [...slides]; newSlides[i].tag = e.target.value; setSlides(newSlides); }} placeholder="Tag" className={`p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                    <input type="text" value={slide.title} onChange={(e) => { const newSlides = [...slides]; newSlides[i].title = e.target.value; setSlides(newSlides); }} placeholder="Title" className={`p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                    <input type="text" value={slide.titleAccent} onChange={(e) => { const newSlides = [...slides]; newSlides[i].titleAccent = e.target.value; setSlides(newSlides); }} placeholder="Title Accent" className={`p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                    <div className="flex flex-col gap-2">
                      <label className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-600'}`}>Upload Image</label>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => handleImageUpload(e, i)} 
                        className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#7F77DD] file:text-white hover:file:bg-[#534AB7]"
                      />
                      {slide.imageData && (
                        <div className="relative mt-2">
                          <img src={slide.imageData} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                          <button type="button" onClick={() => handleImageRemove(i)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">X</button>
                        </div>
                      )}
                    </div>
                    <input type="text" value={slide.features?.[0] || ""} onChange={(e) => { const newSlides = [...slides]; newSlides[i].features = [...(newSlides[i].features || []), e.target.value]; newSlides[i].features[0] = e.target.value; setSlides(newSlides); }} placeholder="Feature 1" className={`p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                    <input type="text" value={slide.features?.[1] || ""} onChange={(e) => { const newSlides = [...slides]; newSlides[i].features[1] = e.target.value; setSlides(newSlides); }} placeholder="Feature 2" className={`p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                    <input type="text" value={slide.features?.[2] || ""} onChange={(e) => { const newSlides = [...slides]; newSlides[i].features[2] = e.target.value; setSlides(newSlides); }} placeholder="Feature 3" className={`p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                    <input type="text" value={slide.features?.[3] || ""} onChange={(e) => { const newSlides = [...slides]; newSlides[i].features[3] = e.target.value; setSlides(newSlides); }} placeholder="Feature 4" className={`p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                  </div>
                  <textarea value={slide.subtitle} onChange={(e) => { const newSlides = [...slides]; newSlides[i].subtitle = e.target.value; setSlides(newSlides); }} placeholder="Subtitle" rows={3} className={`w-full mt-4 p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "whatwedo" && (
            <div className="space-y-6">
              {whatWeDo.map((item, i) => (
                <div key={i} className={`p-6 rounded-xl border ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
                  <h3 className={`text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-gray-800'}`}>Item {i + 1}</h3>
                  <input type="text" value={item.title} onChange={(e) => { const newWhatWeDo = [...whatWeDo]; newWhatWeDo[i].title = e.target.value; setWhatWeDo(newWhatWeDo); }} placeholder="Title" className={`w-full p-2 rounded border mb-2 ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                  <textarea value={item.desc} onChange={(e) => { const newWhatWeDo = [...whatWeDo]; newWhatWeDo[i].desc = e.target.value; setWhatWeDo(newWhatWeDo); }} placeholder="Description" rows={3} className={`w-full p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "members" && (
            <div className="space-y-6">
              {members.map((member, i) => (
                <div key={i} className={`p-6 rounded-xl border ${dark ? 'bg-[#26215C] border-[#3C3489]' : 'bg-white border-gray-200'}`}>
                  <h3 className={`text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-gray-800'}`}>Member {i + 1}</h3>
                  <input type="text" value={member.name} onChange={(e) => { const newMembers = [...members]; newMembers[i].name = e.target.value; setMembers(newMembers); }} placeholder="Name" className={`w-full p-2 rounded border mb-2 ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                  <input type="text" value={member.role} onChange={(e) => { const newMembers = [...members]; newMembers[i].role = e.target.value; setMembers(newMembers); }} placeholder="Role" className={`w-full p-2 rounded border mb-2 ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                  <textarea value={member.desc} onChange={(e) => { const newMembers = [...members]; newMembers[i].desc = e.target.value; setMembers(newMembers); }} placeholder="Description" rows={3} className={`w-full p-2 rounded border ${dark ? 'bg-[#1a1636] border-[#3C3489] text-white' : 'bg-gray-50 border-gray-200'}`} />
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-4 mt-6">
            <button onClick={handleSave} className="bg-[#7F77DD] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#534AB7]">
              {saveStatus || "Save Changes"}
            </button>
            <button onClick={handleReset} className={`px-6 py-3 rounded-lg font-bold ${dark ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'}`}>
              Reset to Default
            </button>
            <Link to="/" className="px-6 py-3 rounded-lg font-bold bg-gray-600 text-white hover:bg-gray-700">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}