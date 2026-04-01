import React, { useState, useEffect } from "react";
import { translations } from './data/translations.jsx';

import { serviceIcons } from './components/Icons';
import AnimatedWrapper from './components/AnimatedWrapper';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import ScrollToTopButton from './components/ScrollToTopButton';
import { LogoIcon, ArrowRightIcon } from './components/Icons';

// --- Reusable Components ---
const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
    {children}
  </section>
);

// --- Page/View Components ---
const HomePage = ({ t, onServiceClick }) => (
  <>
    {/* Hero Section - Enhanced */}
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFjMzk3NyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 text-center">
          <AnimatedWrapper className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-800/30 backdrop-blur-sm rounded-full border border-blue-700/50 text-sm font-semibold uppercase tracking-widest text-blue-300 mb-6">
              {t.hero.kicker}
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-8">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed mb-10">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-100 text-blue-950 text-base font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 group inline-flex items-center gap-2"
              >
                {t.hero.ctaPrimary}
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded-full border-2 border-white/30 backdrop-blur-sm text-white text-base font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Mehr erfahren
              </a>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>

    <main>
      {/* Mission Section - Enhanced */}
      <Section id="mission" className="bg-gradient-to-b from-blue-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/10 via-transparent to-purple-900/10"></div>
        <AnimatedWrapper className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            {t.mission.title}
          </h2>
          <p className="mt-8 text-xl text-blue-200 leading-relaxed">
            {t.mission.text}
          </p>
          <div className="mt-10 inline-block p-8 bg-blue-800/30 backdrop-blur-sm rounded-2xl border border-blue-700/50">
            <p className="text-2xl text-blue-300 font-bold italic">
              "{t.mission.note}"
            </p>
          </div>
        </AnimatedWrapper>
      </Section>

      {/* Services Section - Enhanced */}
      <Section id="services" className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWrapper className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              {t.services.title}
            </h2>
            <p className="mt-4 text-lg text-blue-300 max-w-2xl mx-auto">
              Von der Strategie bis zur Umsetzung – wir begleiten Sie auf jedem Schritt
            </p>
          </AnimatedWrapper>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((s, i) => (
              <AnimatedWrapper key={s.id} style={{ transitionDelay: `${i * 100}ms` }}>
                <div
                  onClick={() => onServiceClick(s)}
                  className="group cursor-pointer relative rounded-3xl border border-blue-700/30 p-10 h-full bg-gradient-to-br from-blue-900/90 to-blue-950/90 backdrop-blur-xl hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-900/50 hover:-translate-y-3 transition-all duration-500"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onServiceClick(s);
                    }
                  }}
                  aria-label={`Learn more about ${s.name}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 text-blue-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      {serviceIcons[s.id]}
                    </div>
                    <h3 className="mt-8 text-2xl font-bold text-white">{s.name}</h3>
                    <p className="mt-4 text-blue-200 leading-relaxed">{s.desc}</p>
                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-blue-300 group-hover:text-white transition-colors">
                      Mehr erfahren
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </Section>

      {/* Approach Section - Enhanced */}
      <Section id="approach" className="bg-gradient-to-b from-blue-900 to-blue-950 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedWrapper className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-4 py-2 bg-blue-800/30 backdrop-blur-sm rounded-full border border-blue-700/50 text-sm font-semibold uppercase tracking-widest text-blue-300 mb-4">
              {t.approach.kicker}
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              {t.approach.title}
            </h2>
          </AnimatedWrapper>
          <div className="grid md:grid-cols-3 gap-10">
            {t.approach.points.map((p, i) => (
              <AnimatedWrapper key={p.head} style={{ transitionDelay: `${i * 100}ms` }} className="h-full">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-sm border border-blue-700/30 hover:border-blue-600/50 transition-all duration-300 group h-full">
                  <div className="absolute top-6 right-6 text-7xl font-black text-blue-700/20 group-hover:text-blue-600/30 transition-colors">
                    0{i + 1}
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-4">{p.head}</h3>
                    <p className="text-blue-200 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section - New */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <AnimatedWrapper className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen und nachhaltige Brücken zwischen Deutschland und der Türkei bauen.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-blue-700 text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </AnimatedWrapper>
      </Section>
    </main>
  </>
);



// --- Main App Component: Manages state and routing ---
export default function App() {
  const [lang, setLang] = useState('de');
  const [view, setView] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalContent, setLegalContent] = useState({ title: '', content: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [isScrolled, setIsScrolled] = useState(false);
  const [geminiInsight, setGeminiInsight] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formStatus === 'sending') return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setGeminiInsight('');
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  const handleGenerateInsight = async () => {
    if (!formData.message || isGenerating) return;

    setIsGenerating(true);
    setGeminiInsight('');

    const systemPrompt = "You are a world-class senior business consultant specializing in German-Turkish economic and political relations. Your name is 'SKA-GPT', the strategic AI partner of SKA Insight. Your tone is highly professional, insightful, and concise. You provide strategic starting points, not definitive solutions.";

    const userQuery = `A potential client has described their business need. Based on their message below, provide a short, single-paragraph analysis (max 3-4 sentences). Identify the core challenge or opportunity and suggest 1-2 high-level strategic questions they should consider to move forward. Frame this as a preliminary analysis to showcase the kind of thinking SKA Insight provides. The client's message is: "${formData.message}"`;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userQuery }] }],
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
        })
      });

      if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        setGeminiInsight(text);
      } else {
        setGeminiInsight(t.contact.geminiError);
      }
    } catch (error) {
      console.error("Gemini API call failed:", error);
      setGeminiInsight(t.contact.geminiError);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleServiceClick = (service) => setSelectedService(service);


  const handleLegalClick = (type) => {
    setLegalContent({ title: t[type].title, content: t[type].content });
    setIsLegalModalOpen(true);
  }

  const handleNavClick = async (e, sectionId) => {
    e.preventDefault();
    if (view !== 'home') setView('home');
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const handleLogoClick = async (e) => {
    e.preventDefault();
    if (view !== 'home') setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-blue-950 text-gray-200 font-sans antialiased">
      <header className={`sticky top-0 z-40 backdrop-blur-lg border-b transition-all duration-300 bg-blue-950/80 ${isScrolled ? 'shadow-lg border-blue-800' : 'border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="#home"
              onClick={handleLogoClick}
              className="flex items-center gap-3 group text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
            >
              <LogoIcon className="w-20 h-20" />
              <span className="font-semibold tracking-tight text-xl">SKA Insight</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-300" role="navigation" aria-label="Main navigation">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={(e) => handleNavClick(e, key)}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
                >
                  {value}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 text-xs border border-blue-700 rounded-full overflow-hidden" role="tablist" aria-label="Language selection">
              {['de', 'en', 'tr'].map(code => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 ${lang === code ? 'bg-white text-blue-950' : 'hover:bg-blue-800/50 text-blue-300'}`}
                  role="tab"
                  aria-selected={lang === code}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {view === 'home' && <HomePage t={t} onServiceClick={handleServiceClick} />}

      {selectedService && (
        <Modal
          onClose={() => setSelectedService(null)}
          title={selectedService.name}
          isOpen={!!selectedService}
        >
          {selectedService.detail}
        </Modal>
      )}

      {isLegalModalOpen && (
        <Modal
          onClose={() => setIsLegalModalOpen(false)}
          title={legalContent.title}
          isOpen={isLegalModalOpen}
        >
          {legalContent.content}
        </Modal>
      )}

      <Section id="contact" className="bg-blue-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            t={t}
            formData={formData}
            formStatus={formStatus}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            onGenerateInsight={handleGenerateInsight}
            isGenerating={isGenerating}
            geminiInsight={geminiInsight}
          />
        </div>
      </Section>

      <footer className="border-t border-blue-800 py-10 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-white">
            <LogoIcon className="w-12 h-12" />
            <span className="font-semibold tracking-tight text-lg">SKA Insight</span>
          </div>
          <div className="text-sm text-blue-300 text-center md:text-left">{t.footer.rights}</div>
          <div className="flex items-center gap-6 text-sm font-medium text-blue-300">
            <button
              onClick={() => handleLegalClick('imprint')}
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
            >
              {t.footer.links.imprint}
            </button>
            <button
              onClick={() => handleLegalClick('privacy')}
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2"
            >
              {t.footer.links.privacy}
            </button>
          </div>
        </div>
      </footer>

      <ScrollToTopButton isVisible={isScrolled} />
    </div>
  );
}
