import { useState, useEffect } from "react";
import {
  Star,
  Github,
  MessageCircle,
  Mail,
  ArrowRight,
  Code,
  Palette,
  Coffee,
  Sparkles,
  Zap,
  Globe,
  Languages,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
} from "lucide-react";

interface Translations {
  [key: string]: {
    nav: {
      about: string;
      work: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      viewPortfolio: string;
      getInTouch: string;
      features: {
        creative: { title: string; desc: string };
        fast: { title: string; desc: string };
        global: { title: string; desc: string };
      };
      stats: {
        projects: string;
        years: string;
        satisfaction: string;
      };
    };
    about: {
      title: string;
      description1: string;
      description2: string;
      skills: {
        frontend: string;
        design: string;
        mobile: string;
      };
    };
    work: {
      title: string;
      projects: {
        ecommerce: { title: string; desc: string };
        task: { title: string; desc: string };
        portfolio: { title: string; desc: string };
      };
      viewProject: string;
    };
    contact: {
      title: string;
      subtitle: string;
    };
    footer: {
      crafted: string;
      language: string;
    };
    accessibility: {
      zoomIn: string;
      zoomOut: string;
      resetZoom: string;
      highContrast: string;
      reducedMotion: string;
      soundToggle: string;
    };
  };
}

const translations: Translations = {
  de: {
    nav: {
      about: "Über mich",
      work: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      title: "Eministar",
      subtitle: "Kreativer Entwickler & Digitaler Künstler",
      description:
        "Erschaffung außergewöhnlicher digitaler Erlebnisse, die Innovation mit ästhetischer Perfektion verbinden",
      viewPortfolio: "Portfolio ansehen",
      getInTouch: "Kontakt aufnehmen",
      features: {
        creative: {
          title: "Kreatives Design",
          desc: "Innovative visuelle Lösungen",
        },
        fast: {
          title: "Schnelle Entwicklung",
          desc: "Rapid Prototyping & Lieferung",
        },
        global: {
          title: "Globale Reichweite",
          desc: "Weltweite Zugänglichkeit",
        },
      },
      stats: {
        projects: "Projekte",
        years: "Jahre",
        satisfaction: "Zufriedenheit",
      },
    },
    about: {
      title: "Über mich",
      description1:
        "Ich bin Nael-Emin Ben Oun, ein leidenschaftlicher Entwickler und Designer, der aktuell bei YukiCraft.net als Entwickler tätig ist. Ich glaube daran, digitale Erlebnisse zu schaffen, die nicht nur schön aussehen, sondern auch außergewöhnliche Benutzererfahrungen bieten.",
      description2:
        "Mit einem scharfen Auge für Details und einer Liebe für sauberes, modernes Design erschaffe ich Lösungen, die einen bleibenden Eindruck hinterlassen.",
      skills: {
        frontend: "Frontend-Entwicklung",
        design: "UI/UX Design",
        mobile: "Java Entwicklung",
      },
    },
    work: {
      title: "Ausgewählte Arbeiten",
      projects: {
        ecommerce: {
          title: "dcs.lol",
          desc: "Discord Link Kürzer",
        },
        task: {
          title: "yukicraft.net",
          desc: "Minecraft Netzwerk",
        },
        portfolio: {
          title: "BKT",
          desc: "bkt-info.org - Discord Community",
        },
      },
      viewProject: "Projekt ansehen",
    },
    contact: {
      title: "Lass uns verbinden",
      subtitle: "Bereit, gemeinsam etwas Erstaunliches zu erschaffen?",
    },
    footer: {
      crafted: "© 2025 Mit ⭐ und Präzision und Leidenschaft erstellt",
      language: "Sprache",
    },
    accessibility: {
      zoomIn: "Vergrößern",
      zoomOut: "Verkleinern",
      resetZoom: "Zoom zurücksetzen",
      highContrast: "Hoher Kontrast",
      reducedMotion: "Weniger Animationen",
      soundToggle: "Sound ein/aus",
    },
  },
  en: {
    nav: {
      about: "About",
      work: "Work",
      contact: "Contact",
    },
    hero: {
      title: "Eministar",
      subtitle: "Creative Developer & Digital Artist",
      description:
        "Crafting extraordinary digital experiences that blend innovation with aesthetic perfection",
      viewPortfolio: "View Portfolio",
      getInTouch: "Get in Touch",
      features: {
        creative: {
          title: "Creative Design",
          desc: "Innovative visual solutions",
        },
        fast: {
          title: "Fast Development",
          desc: "Rapid prototyping & delivery",
        },
        global: { title: "Global Reach", desc: "Worldwide accessibility" },
      },
      stats: {
        projects: "Projects",
        years: "Years",
        satisfaction: "Satisfaction",
      },
    },
    about: {
      title: "About",
      description1:
        "I'm Nael-Emin Ben Oun, a passionate developer and designer currently working as a developer at YukiCraft.net. I believe in creating digital experiences that not only look beautiful but also provide exceptional user experiences.",
      description2:
        "With a keen eye for detail and a love for clean, modern design, I craft solutions that make a lasting impact.",
      skills: {
        frontend: "Frontend Development",
        design: "UI/UX Design",
        mobile: "Java Development",
      },
    },
    work: {
      title: "Selected Work",
      projects: {
        ecommerce: {
          title: "dcs.lol",
          desc: "Discord Link Shortener",
        },
        task: {
          title: "yukicraft.net",
          desc: "Minecraft Network",
        },
        portfolio: {
          title: "BKT",
          desc: "bkt-info.org - Discord Community",
        },
      },
      viewProject: "View Project",
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Ready to create something amazing together?",
    },
    footer: {
      crafted: "© 2025 Crafted with ⭐ and precision and passion",
      language: "Language",
    },
    accessibility: {
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      resetZoom: "Reset Zoom",
      highContrast: "High Contrast",
      reducedMotion: "Reduced Motion",
      soundToggle: "Toggle Sound",
    },
  },
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState<"de" | "en">("de");

  // Accessibility states
  const [zoomLevel, setZoomLevel] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const t = translations[language];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Accessibility functions
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 10, 150));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 10, 80));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => !prev);
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  // Apply accessibility styles
  useEffect(() => {
    document.documentElement.style.fontSize = `${zoomLevel}%`;
    document.documentElement.classList.toggle("high-contrast", highContrast);
    document.documentElement.classList.toggle("reduced-motion", reducedMotion);
  }, [zoomLevel, highContrast, reducedMotion]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative ${
        highContrast ? "high-contrast" : ""
      } ${reducedMotion ? "reduced-motion" : ""}`}
    >
      {/* Enhanced Animated background elements */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none ${
          reducedMotion ? "opacity-30" : ""
        }`}
      >
        {/* Primary floating orbs */}
        <div
          className="absolute w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-orange-500/20 via-amber-500/15 to-yellow-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: reducedMotion
              ? "translate(0px, 0px)"
              : `translate(${mousePosition.x * 0.03 - 150}px, ${
                  mousePosition.y * 0.03 - 150 + scrollY * 0.1
                }px)`,
            transition: reducedMotion
              ? "none"
              : "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="absolute top-1/3 right-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-blue-500/15 via-cyan-500/10 to-teal-500/15 rounded-full blur-3xl"
          style={{
            transform: reducedMotion
              ? "translate(0px, 0px)"
              : `translate(${mousePosition.x * -0.02 + 50}px, ${
                  mousePosition.y * -0.02 + scrollY * 0.05
                }px)`,
            transition: reducedMotion
              ? "none"
              : "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-rose-500/15 rounded-full blur-3xl"
          style={{
            transform: reducedMotion
              ? "translate(0px, 0px)"
              : `translate(${mousePosition.x * 0.015}px, ${
                  mousePosition.y * 0.015 - scrollY * 0.03
                }px)`,
            transition: reducedMotion
              ? "none"
              : "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {/* Secondary floating elements */}
        <div
          className="absolute top-1/4 left-1/3 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-2xl animate-pulse"
          style={{
            transform: reducedMotion
              ? "translate(0px, 0px)"
              : `translate(${mousePosition.x * -0.025}px, ${
                  mousePosition.y * 0.025 + scrollY * 0.08
                }px)`,
            transition: reducedMotion
              ? "none"
              : "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
            animationDelay: reducedMotion ? "0s" : "1s",
          }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-[125px] h-[125px] sm:w-[250px] sm:h-[250px] bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-full blur-2xl animate-pulse"
          style={{
            transform: reducedMotion
              ? "translate(0px, 0px)"
              : `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * -0.02 - scrollY * 0.06
                }px)`,
            transition: reducedMotion
              ? "none"
              : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            animationDelay: reducedMotion ? "0s" : "2s",
          }}
        />

        {/* Mobile-optimized floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + i * 10}%`,
              transform: reducedMotion
                ? "translate(0px, 0px)"
                : `translate(${mousePosition.x * (0.01 + i * 0.002)}px, ${
                    mousePosition.y * (0.01 + i * 0.002) +
                    scrollY * (0.02 + i * 0.01)
                  }px)`,
              transition: reducedMotion
                ? "none"
                : `transform ${0.3 + i * 0.1}s ease-out`,
              animationDelay: reducedMotion ? "0s" : `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Mobile-Optimized Navigation with Liquid Effects */}
      <nav className="fixed top-0 w-full z-50 p-3 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="group backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] rounded-2xl sm:rounded-3xl px-4 py-3 sm:px-8 sm:py-5 shadow-2xl hover:bg-white/[0.05] transition-all duration-700 hover:border-white/[0.1]">
            {/* Liquid fill effect for nav */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-orange-500/10 rounded-2xl sm:rounded-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>

            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="relative group/star">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400 fill-current transition-all duration-500 group-hover/star:scale-125 group-hover/star:rotate-180" />
                  <div className="absolute inset-0 bg-orange-400/30 rounded-full blur-xl opacity-0 group-hover/star:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
                </div>
                <span className="text-lg sm:text-xl font-extralight tracking-wider group-hover:text-orange-200 transition-colors duration-500">
                  Eministar
                </span>
              </div>

              <div className="flex items-center space-x-4 sm:space-x-8">
                {[
                  { key: "about", label: t.nav.about },
                  { key: "work", label: t.nav.work },
                  { key: "contact", label: t.nav.contact },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className="relative text-white/60 hover:text-white transition-all duration-500 font-extralight tracking-wide group/nav text-sm sm:text-base"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-orange-400 to-amber-400 group-hover/nav:w-full transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile-Optimized Hero Section with Enhanced Liquid Effects */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-32 sm:pt-32">
        <div className="text-center max-w-6xl mx-auto">
          {/* Mobile-optimized star logo with liquid pulse */}
          <div className="mb-8 sm:mb-12 relative">
            <div className="relative inline-block group/hero">
              <Star className="h-16 w-16 sm:h-24 sm:w-24 text-orange-400 fill-current mx-auto animate-pulse transition-all duration-700 group-hover/hero:scale-125 group-hover/hero:rotate-12" />
              <div className="absolute inset-0 bg-orange-400/40 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-xl sm:blur-2xl"></div>
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-orange-400/10 rounded-full animate-ping opacity-75"></div>
              <div
                className="absolute inset-0 bg-orange-400/5 rounded-full animate-ping opacity-50"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Mobile-optimized title with gradient animation */}
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-extralight mb-6 sm:mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent hover:from-orange-400 hover:via-amber-300 hover:to-yellow-400 transition-all duration-1000">
              {t.hero.title}
            </span>
          </h1>

          {/* Mobile-optimized subtitle with typewriter effect */}
          <p className="text-lg sm:text-2xl md:text-3xl text-white/70 mb-6 sm:mb-8 font-extralight leading-relaxed max-w-3xl mx-auto px-4 hover:text-white/90 transition-colors duration-500">
            {t.hero.subtitle}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white/50 mb-12 sm:mb-16 font-extralight leading-relaxed max-w-2xl mx-auto px-4 hover:text-white/70 transition-colors duration-500">
            {t.hero.description}
          </p>

          {/* Mobile-optimized feature cards with liquid hover */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
            {[
              {
                icon: Sparkles,
                title: t.hero.features.creative.title,
                desc: t.hero.features.creative.desc,
                color: "from-orange-500/20 to-amber-500/20",
                liquidColor:
                  "bg-gradient-to-t from-orange-500/30 via-orange-400/20 to-transparent",
              },
              {
                icon: Zap,
                title: t.hero.features.fast.title,
                desc: t.hero.features.fast.desc,
                color: "from-blue-500/20 to-cyan-500/20",
                liquidColor:
                  "bg-gradient-to-t from-blue-500/30 via-blue-400/20 to-transparent",
              },
              {
                icon: Globe,
                title: t.hero.features.global.title,
                desc: t.hero.features.global.desc,
                color: "from-purple-500/20 to-pink-500/20",
                liquidColor:
                  "bg-gradient-to-t from-purple-500/30 via-purple-400/20 to-transparent",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group/feature relative backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-700 cursor-pointer overflow-hidden"
              >
                {/* Liquid fill effect */}
                <div
                  className={`absolute inset-0 ${feature.liquidColor} rounded-2xl sm:rounded-3xl transform translate-y-full group-hover/feature:translate-y-0 transition-all duration-1000 ease-out`}
                ></div>

                {/* Wave effect */}
                <div
                  className={`absolute inset-0 ${feature.liquidColor} rounded-2xl sm:rounded-3xl transform translate-y-full group-hover/feature:translate-y-0 transition-all duration-800 ease-out delay-100 opacity-70`}
                  style={{
                    clipPath:
                      "polygon(0% 100%, 100% 100%, 100% 85%, 85% 90%, 70% 85%, 55% 90%, 40% 85%, 25% 90%, 10% 85%, 0% 90%)",
                  }}
                ></div>

                <div className="relative z-10">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400 mx-auto mb-3 sm:mb-4 group-hover/feature:scale-110 group-hover/feature:text-white transition-all duration-500" />
                  <h3 className="text-base sm:text-lg font-extralight mb-2 text-white/90 group-hover/feature:text-white group-hover/feature:scale-105 transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 font-extralight text-sm group-hover/feature:text-white/90 transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/feature:translate-x-[200%] transition-transform duration-1500 ease-out"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile-optimized CTA buttons with liquid effects */}
          <div className="flex flex-col gap-4 justify-center items-center px-4">
            <button
              onClick={() => scrollToSection("work")}
              className="group/cta relative inline-flex items-center justify-center space-x-3 backdrop-blur-2xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/30 rounded-full px-8 py-4 sm:px-10 sm:py-5 hover:from-orange-500/30 hover:to-amber-500/30 transition-all duration-700 shadow-2xl w-full sm:w-auto overflow-hidden"
              aria-label={t.hero.viewPortfolio}
            >
              {/* Liquid fill for button */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-amber-500/40 rounded-full transform scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-700 origin-left"></div>

              <span className="font-extralight text-base sm:text-lg relative z-10 group-hover/cta:text-white transition-colors duration-500">
                {t.hero.viewPortfolio}
              </span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover/cta:translate-x-2 group-hover/cta:scale-110 transition-all duration-500 relative z-10" />

              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full blur-xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group/cta2 relative inline-flex items-center justify-center space-x-3 backdrop-blur-2xl bg-white/[0.02] border border-white/[0.1] rounded-full px-8 py-4 sm:px-10 sm:py-5 hover:bg-white/[0.05] transition-all duration-700 w-full sm:w-auto overflow-hidden"
              aria-label={t.hero.getInTouch}
            >
              {/* Liquid fill for secondary button */}
              <div className="absolute inset-0 bg-white/[0.1] rounded-full transform scale-x-0 group-hover/cta2:scale-x-100 transition-transform duration-700 origin-center"></div>

              <span className="font-extralight text-base sm:text-lg text-white/80 group-hover/cta2:text-white relative z-10 transition-colors duration-500">
                {t.hero.getInTouch}
              </span>
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white/60 group-hover/cta2:text-white group-hover/cta2:scale-110 transition-all duration-500 relative z-10" />
            </button>
          </div>

          {/* Mobile-optimized floating stats with hover effects */}
          <div className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
            {[
              { number: "50+", label: t.hero.stats.projects },
              { number: "3+", label: t.hero.stats.years },
              { number: "99%", label: t.hero.stats.satisfaction },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group/stat cursor-pointer"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extralight text-orange-400 mb-2 group-hover/stat:scale-125 group-hover/stat:text-orange-300 transition-all duration-700">
                  {stat.number}
                </div>
                <div className="text-white/50 font-extralight text-xs sm:text-sm tracking-wide group-hover/stat:text-white/80 transition-colors duration-500">
                  {stat.label}
                </div>
                {/* Underline effect */}
                <div className="w-0 h-px bg-orange-400 mx-auto mt-2 group-hover/stat:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized About Section with Liquid Card Effects */}
      <section id="about" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight hover:text-orange-200 transition-colors duration-700">
                {t.about.title}
              </h2>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-6 sm:mb-8 font-extralight hover:text-white/90 transition-colors duration-500">
                {language === "de" ? (
                  <>
                    Ich bin Nael-Emin Ben Oun, ein leidenschaftlicher Entwickler
                    und Designer, der aktuell bei{" "}
                    <a
                      href="https://yukicraft.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-orange-400 underline decoration-white/30 hover:decoration-orange-400/60 underline-offset-2 transition-all duration-300"
                    >
                      YukiCraft.net
                    </a>{" "}
                    als Entwickler tätig ist. Ich glaube daran, digitale
                    Erlebnisse zu schaffen, die nicht nur schön aussehen,
                    sondern auch außergewöhnliche Benutzererfahrungen bieten.
                  </>
                ) : (
                  <>
                    I'm Nael-Emin Ben Oun, a passionate developer and designer
                    currently working as a developer at{" "}
                    <a
                      href="https://yukicraft.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-orange-400 underline decoration-white/30 hover:decoration-orange-400/60 underline-offset-2 transition-all duration-300"
                    >
                      YukiCraft.net
                    </a>
                    . I believe in creating digital experiences that not only
                    look beautiful but also provide exceptional user
                    experiences.
                  </>
                )}
              </p>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-extralight hover:text-white/90 transition-colors duration-500">
                {t.about.description2}
              </p>
            </div>

            <div className="relative">
              <div className="group/about backdrop-blur-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-2xl hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-700 overflow-hidden">
                {/* Liquid background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-orange-500/10 rounded-2xl sm:rounded-3xl transform translate-y-full group-hover/about:translate-y-0 transition-transform duration-1200 ease-out"></div>

                <div className="grid grid-cols-1 gap-6 sm:gap-8 relative z-10">
                  {[
                    {
                      icon: Code,
                      label: t.about.skills.frontend,
                      color: "text-blue-400",
                      hoverColor: "group-hover/skill:text-blue-300",
                    },
                    {
                      icon: Palette,
                      label: t.about.skills.design,
                      color: "text-purple-400",
                      hoverColor: "group-hover/skill:text-purple-300",
                    },
                    {
                      icon: Coffee,
                      label: t.about.skills.mobile,
                      color: "text-green-400",
                      hoverColor: "group-hover/skill:text-green-300",
                    },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 group/skill cursor-pointer p-3 rounded-xl hover:bg-white/[0.05] transition-all duration-500"
                    >
                      <skill.icon
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${skill.color} ${skill.hoverColor} group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-500`}
                      />
                      <span className="font-extralight text-base sm:text-lg group-hover/skill:text-white group-hover/skill:translate-x-2 transition-all duration-500">
                        {skill.label}
                      </span>
                      {/* Skill progress bar effect */}
                      <div className="flex-1 h-px bg-white/10 ml-4">
                        <div className="h-full bg-gradient-to-r from-orange-400 to-amber-400 w-0 group-hover/skill:w-full transition-all duration-1000 delay-200"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEXY LIQUID WORK SECTION */}
      <section id="work" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight mb-12 sm:mb-16 tracking-tight text-center hover:text-orange-200 transition-colors duration-700">
            {t.work.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: t.work.projects.ecommerce.title,
                description: t.work.projects.ecommerce.desc,
                color: "from-orange-500/20 to-red-500/20",
                accent: "orange-400",
                href: "https://dcs.lol",
                liquidColor:
                  "bg-gradient-to-t from-orange-500/40 via-orange-400/30 to-transparent",
                waveColor: "bg-orange-500/60",
              },
              {
                title: t.work.projects.task.title,
                description: t.work.projects.task.desc,
                color: "from-blue-500/20 to-cyan-500/20",
                accent: "blue-400",
                href: "https://yukicraft.net",
                liquidColor:
                  "bg-gradient-to-t from-blue-500/40 via-blue-400/30 to-transparent",
                waveColor: "bg-blue-500/60",
              },
              {
                title: t.work.projects.portfolio.title,
                description: t.work.projects.portfolio.desc,
                color: "from-purple-500/20 to-pink-500/20",
                accent: "purple-400",
                href: "https://bkt-info.org",
                liquidColor:
                  "bg-gradient-to-t from-purple-500/40 via-purple-400/30 to-transparent",
                waveColor: "bg-purple-500/60",
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] rounded-2xl sm:rounded-3xl p-6 sm:p-10 hover:bg-white/[0.05] transition-all duration-700 cursor-pointer block overflow-hidden"
                aria-label={`View ${project.title} project`}
              >
                {/* Liquid Fill Animation - Main Effect */}
                <div
                  className={`absolute inset-0 ${project.liquidColor} rounded-2xl sm:rounded-3xl transform translate-y-full group-hover:translate-y-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}
                ></div>

                {/* Wave Effect 1 - Top Wave */}
                <div
                  className={`absolute inset-0 ${project.waveColor} rounded-2xl sm:rounded-3xl transform translate-y-full group-hover:translate-y-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-100`}
                  style={{
                    clipPath:
                      "polygon(0% 100%, 100% 100%, 100% 85%, 85% 90%, 70% 85%, 55% 90%, 40% 85%, 25% 90%, 10% 85%, 0% 90%)",
                  }}
                ></div>

                {/* Wave Effect 2 - Second Wave */}
                <div
                  className={`absolute inset-0 ${project.waveColor} rounded-2xl sm:rounded-3xl transform translate-y-full group-hover:translate-y-0 transition-all duration-[1100ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-200 opacity-70`}
                  style={{
                    clipPath:
                      "polygon(0% 100%, 100% 100%, 100% 80%, 90% 85%, 75% 80%, 60% 85%, 45% 80%, 30% 85%, 15% 80%, 0% 85%)",
                  }}
                ></div>

                {/* Wave Effect 3 - Third Wave */}
                <div
                  className={`absolute inset-0 ${project.waveColor} rounded-2xl sm:rounded-3xl transform translate-y-full group-hover:translate-y-0 transition-all duration-[1300ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-300 opacity-50`}
                  style={{
                    clipPath:
                      "polygon(0% 100%, 100% 100%, 100% 75%, 95% 80%, 80% 75%, 65% 80%, 50% 75%, 35% 80%, 20% 75%, 5% 80%, 0% 75%)",
                  }}
                ></div>

                {/* Bubble Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 ${project.waveColor} rounded-full animate-bounce opacity-60`}
                      style={{
                        left: `${20 + i * 10}%`,
                        bottom: `${10 + (i % 3) * 15}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: `${1000 + i * 200}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div
                    className={`absolute inset-0 ${project.waveColor} rounded-2xl sm:rounded-3xl animate-ping opacity-20`}
                  ></div>
                  <div
                    className={`absolute inset-0 ${project.waveColor} rounded-2xl sm:rounded-3xl animate-ping opacity-10 animation-delay-300`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-20">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-${project.accent}/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-700 group-hover:bg-white/20`}
                  >
                    <Star
                      className={`h-5 w-5 sm:h-6 sm:w-6 text-${project.accent} group-hover:text-white group-hover:rotate-[360deg] transition-all duration-1000`}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extralight mb-2 group-hover:text-white transition-colors duration-700 group-hover:scale-105 transform">
                    {project.title}
                  </h3>
                  <p className="text-white/60 font-extralight text-sm sm:text-base group-hover:text-white/90 transition-colors duration-700">
                    {project.description}
                  </p>
                  <div className="mt-4 sm:mt-6 flex items-center space-x-2 text-white/40 group-hover:text-white transition-all duration-700 group-hover:translate-x-2">
                    <span className="text-sm font-extralight">
                      {t.work.viewProject}
                    </span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-2 transition-transform duration-700" />
                  </div>
                </div>

                {/* Outer Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-1000 -z-10`}
                ></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-out"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Star Development Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative">
                <Star className="w-8 h-8 text-orange-400" />
                <div className="absolute inset-0 w-8 h-8 bg-orange-400/20 rounded-full blur-md animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                Star Development
              </h2>
              <div className="relative">
                <Star className="w-8 h-8 text-orange-400" />
                <div className="absolute inset-0 w-8 h-8 bg-orange-400/20 rounded-full blur-md animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {language === "de"
                ? "Unsere kreative Entwicklergruppe vereint Innovation, Leidenschaft und technische Exzellenz"
                : "Our creative developer group unites innovation, passion and technical excellence"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MessageCircle,
                title: "Discord Community",
                description:
                  language === "de"
                    ? "Tritt unserer lebendigen Community bei und vernetze dich mit gleichgesinnten Entwicklern"
                    : "Join our vibrant community and connect with like-minded developers",
                stats: "100+ Members",
                href: "https://discord.gg/ErFRp9eSrj",
              },
              {
                icon: Github,
                title: "Open Source",
                description:
                  language === "de"
                    ? "Entdecke unsere innovativen Projekte und trage zur Open-Source-Community bei"
                    : "Discover our innovative projects and contribute to the open-source community",
                stats: "5+ Repositories",
                href: "https://github.com/Star-Developments",
              },
              {
                icon: Globe,
                title: "Star Network",
                description:
                  language === "de"
                    ? "Erkunde unser Netzwerk aus Websites, Services und digitalen Lösungen"
                    : "Explore our network of websites, services and digital solutions",
                stats: "3+ Projects",
                href: "https://discord.gg/ErFRp9eSrj",
              },
            ].map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-700 overflow-hidden cursor-pointer block"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Liquid Fill Waves */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1200">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-500/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1200 ease-out"
                    style={{
                      clipPath:
                        "polygon(0% 100%, 100% 100%, 100% 60%, 85% 65%, 70% 55%, 55% 65%, 40% 55%, 25% 65%, 10% 55%, 0% 60%)",
                      transitionDelay: "0ms",
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1200 ease-out"
                    style={{
                      clipPath:
                        "polygon(0% 100%, 100% 100%, 100% 70%, 90% 75%, 75% 65%, 60% 75%, 45% 65%, 30% 75%, 15% 65%, 0% 70%)",
                      transitionDelay: "200ms",
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500/15 to-orange-500/15 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1200 ease-out"
                    style={{
                      clipPath:
                        "polygon(0% 100%, 100% 100%, 100% 80%, 80% 85%, 60% 75%, 40% 85%, 20% 75%, 0% 80%)",
                      transitionDelay: "400ms",
                    }}
                  />

                  {/* Floating Bubbles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"
                      style={{
                        left: `${15 + i * 10}%`,
                        bottom: `${10 + (i % 3) * 15}%`,
                        animationDelay: `${i * 150}ms`,
                        animationDuration: `${1.5 + (i % 3) * 0.5}s`,
                      }}
                    />
                  ))}

                  {/* Shimmer Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ transitionDelay: "300ms" }}
                  >
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <item.icon className="w-12 h-12 text-orange-400 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-0 w-12 h-12 bg-orange-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-700" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-700">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-700">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-orange-400 font-semibold group-hover:text-white transition-colors duration-700">
                      {item.stats}
                    </span>
                    <div className="flex items-center text-orange-400 group-hover:text-white transition-colors duration-700">
                      <span className="text-sm font-medium mr-2">
                        {language === "de" ? "Entdecken" : "Explore"}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6">
              <a
                href="https://discord.gg/ErFRp9eSrj"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-white font-semibold hover:border-orange-400 transition-all duration-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-700">
                  {language === "de"
                    ? "Werde Teil von Star Development"
                    : "Join Star Development"}
                </span>
              </a>

              <div className="flex items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>
                    {language === "de"
                      ? "Aktive Community"
                      : "Active Community"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span>
                    {language === "de" ? "Open Source" : "Open Source"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span>{language === "de" ? "Innovation" : "Innovation"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Contact Section with Liquid Effects */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight hover:text-orange-200 transition-colors duration-700">
            {t.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/60 mb-12 sm:mb-16 font-extralight hover:text-white/80 transition-colors duration-500">
            {t.contact.subtitle}
          </p>

          <div className="group/contact backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-700 overflow-hidden">
            {/* Contact section liquid background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-amber-500/3 to-orange-500/5 rounded-2xl sm:rounded-3xl transform translate-y-full group-hover/contact:translate-y-0 transition-transform duration-1000 ease-out"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {[
                {
                  icon: Mail,
                  label: "hello@star-dev.xyz",
                  color: "orange-400",
                  href: "mailto:hello@star-dev.xyz",
                },
                {
                  icon: Github,
                  label: "@eministar",
                  color: "blue-400",
                  href: "https://github.com/eministarvr",
                },
                {
                  icon: MessageCircle,
                  label: "eministar",
                  color: "purple-400",
                  href: "https://discord.com/users/eministar",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/contactItem flex flex-col items-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
                  aria-label={`Contact via ${contact.label}`}
                >
                  {/* Individual contact item liquid effect */}
                  <div
                    className={`absolute inset-0 bg-${contact.color}/10 rounded-xl sm:rounded-2xl transform scale-0 group-hover/contactItem:scale-100 transition-transform duration-700 origin-center`}
                  ></div>

                  <div className="relative z-10">
                    <contact.icon
                      className={`h-6 w-6 sm:h-8 sm:w-8 text-${contact.color} group-hover/contactItem:scale-125 group-hover/contactItem:rotate-12 transition-all duration-500`}
                    />
                    <div
                      className={`absolute inset-0 bg-${contact.color}/20 rounded-full blur-lg opacity-0 group-hover/contactItem:opacity-100 transition-opacity duration-500`}
                    ></div>
                  </div>
                  <span className="font-extralight text-sm sm:text-base text-white/70 group-hover/contactItem:text-white transition-colors duration-500 break-all relative z-10">
                    {contact.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Accessibility Controls */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          {/* Accessibility Controls */}
          <div className="mb-8 p-4 backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-2xl">
            <h3 className="text-sm font-extralight text-white/70 mb-4 text-center">
              Barrierefreiheit / Accessibility
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {/* Zoom Controls */}
              <button
                onClick={handleZoomIn}
                className="group flex items-center justify-center space-x-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300"
                aria-label={t.accessibility.zoomIn}
                title={t.accessibility.zoomIn}
              >
                <ZoomIn className="h-4 w-4 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <span className="text-xs font-extralight text-white/60 group-hover:text-white hidden sm:block">
                  A+
                </span>
              </button>

              <button
                onClick={handleZoomOut}
                className="group flex items-center justify-center space-x-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300"
                aria-label={t.accessibility.zoomOut}
                title={t.accessibility.zoomOut}
              >
                <ZoomOut className="h-4 w-4 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <span className="text-xs font-extralight text-white/60 group-hover:text-white hidden sm:block">
                  A-
                </span>
              </button>

              <button
                onClick={handleResetZoom}
                className="group flex items-center justify-center space-x-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-300"
                aria-label={t.accessibility.resetZoom}
                title={t.accessibility.resetZoom}
              >
                <RotateCcw className="h-4 w-4 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <span className="text-xs font-extralight text-white/60 group-hover:text-white hidden sm:block">
                  Reset
                </span>
              </button>

              {/* High Contrast Toggle */}
              <button
                onClick={toggleHighContrast}
                className={`group flex items-center justify-center space-x-2 p-3 rounded-xl border transition-all duration-300 ${
                  highContrast
                    ? "bg-white/[0.1] border-white/[0.2] text-white"
                    : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05]"
                }`}
                aria-label={t.accessibility.highContrast}
                title={t.accessibility.highContrast}
              >
                {highContrast ? (
                  <EyeOff className="h-4 w-4 group-hover:scale-110 transition-all duration-300" />
                ) : (
                  <Eye className="h-4 w-4 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                )}
                <span className="text-xs font-extralight hidden sm:block">
                  Kontrast
                </span>
              </button>

              {/* Reduced Motion Toggle */}
              <button
                onClick={toggleReducedMotion}
                className={`group flex items-center justify-center space-x-2 p-3 rounded-xl border transition-all duration-300 ${
                  reducedMotion
                    ? "bg-white/[0.1] border-white/[0.2] text-white"
                    : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05]"
                }`}
                aria-label={t.accessibility.reducedMotion}
                title={t.accessibility.reducedMotion}
              >
                <Sparkles
                  className={`h-4 w-4 group-hover:scale-110 transition-all duration-300 ${
                    reducedMotion ? "" : "text-white/60 group-hover:text-white"
                  }`}
                />
                <span className="text-xs font-extralight hidden sm:block">
                  Motion
                </span>
              </button>

              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                className={`group flex items-center justify-center space-x-2 p-3 rounded-xl border transition-all duration-300 ${
                  soundEnabled
                    ? "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05]"
                    : "bg-white/[0.1] border-white/[0.2] text-white"
                }`}
                aria-label={t.accessibility.soundToggle}
                title={t.accessibility.soundToggle}
              >
                {soundEnabled ? (
                  <Volume2 className="h-4 w-4 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                ) : (
                  <VolumeX className="h-4 w-4 group-hover:scale-110 transition-all duration-300" />
                )}
                <span className="text-xs font-extralight hidden sm:block">
                  Sound
                </span>
              </button>
            </div>

            {/* Zoom Level Indicator */}
            <div className="mt-4 text-center">
              <span className="text-xs text-white/50 font-extralight">
                Zoom: {zoomLevel}%
              </span>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3 group/logo">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 fill-current group-hover/logo:scale-110 group-hover/logo:rotate-12 transition-all duration-500" />
              <span className="font-extralight text-white/70 text-sm sm:text-base group-hover/logo:text-white transition-colors duration-500">
                Eministar
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <p className="text-white/40 font-extralight text-xs sm:text-sm text-center hover:text-white/60 transition-colors duration-500">
                {t.footer.crafted}
              </p>

              {/* Language Toggle */}
              <div className="flex items-center space-x-2">
                <Languages className="h-3 w-3 sm:h-4 sm:w-4 text-white/40" />
                <span className="text-white/40 font-extralight text-xs sm:text-sm">
                  {t.footer.language}:
                </span>
                <button
                  onClick={toggleLanguage}
                  className="group/lang relative backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] rounded-full px-3 py-1 sm:px-4 sm:py-2 hover:bg-white/[0.1] transition-all duration-300 overflow-hidden"
                  aria-label={`Switch to ${
                    language === "de" ? "English" : "Deutsch"
                  }`}
                >
                  {/* Language button liquid effect */}
                  <div className="absolute inset-0 bg-orange-400/20 rounded-full transform scale-x-0 group-hover/lang:scale-x-100 transition-transform duration-500 origin-center"></div>

                  <span className="font-extralight text-xs sm:text-sm text-white/70 group-hover/lang:text-white transition-colors duration-300 relative z-10">
                    {language.toUpperCase()}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for accessibility */}
      <style>
        {`
        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }

        .high-contrast * {
          text-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .reduced-motion *:hover {
          transform: none !important;
        }

        @keyframes liquidFill {
          0% {
            transform: translateY(100%) scaleY(0);
          }
          50% {
            transform: translateY(50%) scaleY(0.8);
          }
          100% {
            transform: translateY(0%) scaleY(1);
          }
        }

        .liquid-fill {
          animation: liquidFill 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        /* Focus styles for better accessibility */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #fb923c;
          outline-offset: 2px;
        }

        /* High contrast mode improvements */
        .high-contrast .backdrop-blur-2xl {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }

        .high-contrast .text-white\/70 {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        .high-contrast .text-white\/60 {
          color: rgba(255, 255, 255, 0.8) !important;
        }

        .high-contrast .text-white\/50 {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        `}
      </style>
    </div>
  );
}

export default App;
