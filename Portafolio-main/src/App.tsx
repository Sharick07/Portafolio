import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  Award, 
  Briefcase,
  Terminal,
  ChevronRight,
  Sparkles,
  Layers,
  Zap,
  Star,
  Quote,
  BookOpen,
  User,
  History,
  CheckCircle2,
  Lightbulb,
  BarChart3,
  Layout,
  Smartphone
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

const revealVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon: any }) => (
  <motion.div variants={itemVariants} className="mb-16">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-purple-500/30 text-pink-400 shadow-lg shadow-purple-500/5">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90">{title}</h2>
    </div>
    {subtitle && <p className="text-white/40 font-mono text-xs uppercase tracking-[0.4em] ml-16">{subtitle}</p>}
  </motion.div>
);

const ExperienceCard = ({ role, company, period, location, details, index }: { role: string, company: string, period: string, location: string, details: string[], index: number }) => (
  <motion.div 
    variants={itemVariants}
    className="relative group mb-12"
  >
    <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/20 to-transparent hidden md:block" />
    <div className="absolute -left-[51px] top-2 w-2.5 h-2.5 rounded-full border-2 border-purple-500 bg-[#0a0510] hidden md:block group-hover:scale-150 group-hover:bg-pink-500 transition-all duration-500" />
    
    <div className="glass-card p-8 md:p-10 rounded-[2.5rem] group-hover:border-purple-500/40 transition-all duration-700 hover:pastel-glow relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full -mr-16 -mt-16" />
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
        <div>
          <span className="text-[10px] font-mono text-pink-400 uppercase tracking-[0.3em] mb-3 block">Phase 0{index + 1}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-pink-300 transition-colors mb-1">{role}</h3>
          <p className="text-purple-400 font-medium text-lg flex items-center gap-2">
            {company} <span className="text-white/10">•</span> <span className="text-white/40 text-sm font-normal">{location}</span>
          </p>
        </div>
        <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60 backdrop-blur-sm">
          {period}
        </div>
      </div>
      <ul className="space-y-4">
        {details.map((detail, i) => (
          <li key={i} className="flex gap-4 text-white/50 leading-relaxed text-base">
            <CheckCircle2 className="w-5 h-5 text-pink-500/40 shrink-0 mt-0.5" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const techStack = [
    { area: "Web Development", techs: ["React", "Next.js", "HTML5", "Tailwind CSS", "Node.js"] },
    { area: "Languages", techs: ["Python (Expert)", "Java (Swing/Spring)", "Advanced SQL"] },
    { area: "Data & AI", techs: ["Machine Learning", "Scikit-Learn", "Power BI", "Statistical Modeling"] },
    { area: "Infrastructure", techs: ["AWS", "Git", "Docker", "Agile Methodologies"] },
    { area: "Cybersecurity", techs: ["Web Pentesting", "Data Encryption", "Network/Cloud Security"] }
  ];

  return (
    <div className="min-h-screen bg-[#0a0510] text-white/90 selection:bg-pink-500/30">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600 z-[100] origin-left" style={{ scaleX }} />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-x-0 border-t-0 py-6 px-8 md:px-20 flex justify-between items-center backdrop-blur-2xl bg-[#0a0510]/60">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-white shadow-xl shadow-purple-500/20 text-xl italic">S</div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/40 leading-none mb-1">Portfolio</span>
            <span className="font-bold text-sm tracking-widest uppercase">Sharikg Pérez</span>
          </div>
        </motion.div>
        <div className="hidden lg:flex gap-10 text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">
          <a href="#about" className="hover:text-pink-400 transition-colors">Sobre Mí</a>
          <a href="#experience" className="hover:text-pink-400 transition-colors">Trayectoria</a>
          <a href="#stack" className="hover:text-pink-400 transition-colors">Stack</a>
          <a href="#projects" className="hover:text-pink-400 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Contacto</a>
        </div>
      </nav>

      <main className="relative z-10 pt-35 pb-32 px-8 md:px-20 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-64"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono mb-10 uppercase tracking-[0.2em]">
            <Zap className="w-4 h-4 text-pink-400" />
            <span>Tech Architect & Data Strategist • 2031</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-1">
            <div className="lg:col-span-8 space-y-12">
              <motion.h1 
                className="text-6xl md:text-[5.7rem] font-bold tracking-tighter mb-15 leading-[1.1]"
              >
                SHARIKG MICHEL
                PÉREZ MONTES 
              </motion.h1>
            </div>
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 glass-card p-2">
                <img 
                  src="yo.jpeg" 
                  alt="Sharikg Michel Pérez Montes" 
                  className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Active in Berlin</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                Ingeniera de Sistemas y Científica de Datos. 
                Transformando la complejidad de los datos en la elegancia de soluciones seguras que impactan el mundo.
              </p>
              <div className="flex items-center gap-4 text-pink-400/60 font-mono text-xs uppercase tracking-widest">
                <MapPin className="w-4 h-4" /> Berlin, DE • Barranquilla, CO
              </div>
            </div>
            <div className="flex flex-wrap gap-6 lg:justify-end">
              <a href="#contact" className="group px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-pink-100 transition-all flex items-center gap-3 shadow-2xl shadow-white/5">
                <Mail className="w-5 h-5" /> Get in Touch
              </a>
              <div className="flex items-center gap-8 px-6">
                <a href="https://github.com/Sharick07" target="_blank" className="text-white/20 hover:text-pink-400 transition-all hover:scale-110"><Github className="w-8 h-8" /></a>
                <a href="https://linkedin.com/in/sharikc-perez" target="_blank" className="text-white/20 hover:text-pink-400 transition-all hover:scale-110"><Linkedin className="w-8 h-8" /></a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* About & Story Section */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-64"
        >
          <SectionHeader 
            title="Sobre Mí: Mi Historia" 
            subtitle="My Story & Personal Brand"
            icon={History}
          />
          
          <div className="grid grid-cols-1 gap-12">
            <motion.div variants={revealVariants} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }} className="space-y-10 max-w-4xl mx-auto">
              <div className="relative">
                <Quote className="absolute -top-10 -left-10 w-20 h-20 text-purple-500/10" />
                <p className="text-3xl md:text-4xl font-bold text-white/90 leading-tight italic mb-8">
                  "Todo gran sistema comienza con una sola línea de código, y mi historia no fue diferente."
                </p>
              </div>
              <div className="space-y-6 text-lg text-white/50 leading-relaxed font-light">
                <p>
                  En 2024, yo era una estudiante con muchos sueños pero con el temor natural de quien siente que apenas está descubriendo el mundo del desarrollo. Mi camino cambió cuando tuve la oportunidad de conocer a <span className="text-pink-400 font-medium">CooWeb</span>. Fue allí donde encontré el impulso, la confianza y el entorno real que necesitaba para transformar mi curiosidad en una carrera sólida. CooWeb no fue solo un trabajo, fue la empresa que me impulsó a creer en mi capacidad técnica.
                </p>
                <p>
                   Desde mis raíces en la <span className="text-purple-400 font-medium">Universidad del Norte</span>, hasta hoy en 2031, donde lidero soluciones de Ciberseguridad en Alemania, mi motor ha sido el mismo: convertir la incertidumbre en soluciones de alto impacto global. Aquella estudiante que comenzó gestionando comunidades académicas es hoy la arquitecta de ecosistemas digitales que definen el futuro.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={revealVariants} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 140, damping: 20 }} className="max-w-5xl mx-auto">
              <div className="glass-card rounded-[3rem] border-pink-500/20 relative overflow-hidden aspect-video min-h-[420px] lg:min-h-[520px] transition-transform duration-500 hover:-translate-y-1">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/yo.jpeg"
                  className="absolute inset-0 w-full h-full object-cover object-[center_30%] bg-black opacity-25"
                >
                  <source src="/perfil.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative p-10 flex flex-col justify-center items-center text-center min-h-[520px] lg:min-h-[620px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600" />
                  <SectionHeader title="Perfil Profesional" icon={User} subtitle="Professional Profile" />
                  <p className="text-white/75 leading-relaxed text-lg font-light max-w-2xl">
                    Soy Ingeniera de Sistemas y Computación y Científica de Datos. Mi trayectoria se define por la fusión de la lógica de programación, la seguridad digital y la analítica avanzada.
                    <br /><br />
                    Con más de 7 años de experiencia, he pasado de gestionar comunidades académicas de élite a liderar mi propia firma de consultoría en Europa, manteniendo siempre un enfoque en el impacto social a través de la tecnología.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
         {/* Philosophy Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-64"
        >
          <SectionHeader 
            title="Mi Filosofía de Diseño y Datos" 
            subtitle="Philosophy & Core Values"
            icon={Lightbulb}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-12">
            {[
              {
                title: "Seguridad desde el inicio",
                desc: "No concibo un código que no sea seguro. Mi enfoque es 'Security by Design'.",
                icon: ShieldCheck,
                color: "text-pink-400"
              },
              {
                title: "Datos con propósito",
                desc: "No se trata de acumular información, sino de encontrar la historia que los datos quieren contar.",
                icon: BarChart3,
                color: "text-purple-400"
              },
              {
                title: "Estética Funcional",
                desc: "Inspirada en el minimalismo, creo que una herramienta poderosa también debe ser hermosa.",
                icon: Layout,
                color: "text-indigo-400"
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-purple-500/20 transition-all group"
              >
                <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 group-hover:scale-110 transition-transform ${p.color}`}>
                  <p.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-64"
        >
          <SectionHeader 
            title="Trayectoria Profesional" 
            subtitle="Career Evolution (2024 - 2031)"
            icon={Briefcase}
          />
          
          <div className="md:ml-12">
            <ExperienceCard 
              index={0}
              role="Fundadora & CTO"
              company="S&P Tech Solutions"
              period="2029 - 2031"
              location="Berlín, Alemania"
              details={[
                "Liderazgo de una consultora boutique especializada en Ciberseguridad y Desarrollo Web para el sector Fintech europeo.",
                "Diseño de infraestructuras en la nube (AWS) con un enfoque de 'Security by Design'.",
                "Optimización de procesos mediante Inteligencia Artificial."
              ]}
            />
            <ExperienceCard 
              index={1}
              role="Senior Full Stack Developer"
              company="Google"
              period="2028 - 2029"
              location="Múnich, Alemania"
              details={[
                "Responsable del desarrollo de interfaces dinámicas y escalables utilizando React y microservicios en Python.",
                "Colaboración en el despliegue de modelos de Machine Learning para la personalización de experiencia de usuario a gran escala."
              ]}
            />
            <ExperienceCard 
              index={2}
              role=" Web Developer"
              company="CooWeb"
              period="2026 - 2028"
              location="Barranquilla, Colombia"
              details={[
                "Gestión integral, administración y actualización estratégica de plataformas web corporativas impulsadas con Inteligencia Artificial.",
                "Fortalecimiento de la presencia digital y organización de información técnica de alto nivel mediante flujos de trabajo optimizados con IA.",
                "Apoyo en la difusión de soluciones tecnológicas y estructuración de arquitecturas web robustas y escalables."
              ]}
            />
            <ExperienceCard 
              index={3}
              role="WebMaster de CAS (IEEE)"
              company="Universidad del Norte"
              period="2024 (Etapa Inicial)"
              location="Barranquilla, Colombia"
              details={[
                "Administración y actualización del sitio web del capítulo CAS (Circuits and Systems Society).",
                "Gestión de contenidos y organización de información académica.",
                "Colaboración con el equipo directivo para fortalecer la presencia digital del capítulo IEEE."
              ]}
            />
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section 
          id="stack"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-64"
        >
          <SectionHeader 
            title="Stack Tecnológico" 
            subtitle="Mastered Technologies"
            icon={Terminal}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-12">
            {techStack.map((group, i) => (
              <motion.div 
                key={group.area}
                variants={itemVariants}
                className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-purple-500/20 transition-all"
              >
                <h3 className="text-xs font-mono text-pink-400 uppercase tracking-[0.3em] mb-6">{group.area}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.techs.map(tech => (
                    <span key={tech} className="tech-badge py-2 px-4 text-[11px]">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-64"
        >
          <SectionHeader 
            title="Proyectos Destacados" 
            subtitle="Impactful Work"
            icon={Layers}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:ml-12">
            <motion.div variants={itemVariants} className="glass-card p-10 rounded-[3rem] hover:border-pink-500/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="w-24 h-24 text-pink-400" />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:border-pink-500/20 transition-all">
                <img 
                  src="/SafeCloud.png" 
                  alt="SafeCloud Shield" 
                  className="w-full h-full object-cover filter brightness-90 saturate-75 contrast-90 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              <ShieldCheck className="w-10 h-10 text-pink-400 mb-8" />
              <h3 className="text-2xl font-bold mb-2">🔒 SafeCloud Global Gateway</h3>
              <p className="text-pink-400/60 text-xs font-mono uppercase tracking-widest mb-4">Arquitectura de Seguridad en la Nube</p>
              <p className="text-white/40 leading-relaxed mb-8">
                Diseño e implementación de un túnel de acceso seguro para empresas Fintech, utilizando servicios de AWS y protocolos de cifrado de extremo a extremo.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge">AWS</span>
                <span className="tech-badge">Encryption</span>
                <span className="tech-badge">Fintech Security</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-10 rounded-[3rem] hover:border-purple-500/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe2 className="w-24 h-24 text-purple-400" />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:border-purple-500/20 transition-all">
                <img 
                  src="/Ecodata.png" 
                  alt="EcoData Dashboard" 
                  className="w-full h-full object-cover filter brightness-90 saturate-75 contrast-90 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              <Globe2 className="w-10 h-10 text-purple-400 mb-8" />
              <h3 className="text-2xl font-bold mb-2">📊 EcoData Insight Platform</h3>
              <p className="text-purple-400/60 text-xs font-mono uppercase tracking-widest mb-4">Análisis de Datos para la Sostenibilidad</p>
              <p className="text-white/40 leading-relaxed mb-8">
                Plataforma de visualización y predicción de consumo energético para edificios inteligentes en Berlín. Utiliza Machine Learning para identificar patrones.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge">Machine Learning</span>
                <span className="tech-badge">Sustainability</span>
                <span className="tech-badge">Smart Buildings</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-10 rounded-[3rem] hover:border-pink-500/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Smartphone className="w-24 h-24 text-pink-400" />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:border-pink-500/20 transition-all">
                <img 
                  src="/Cyberfine.png" 
                  alt="CyberFine Mockup" 
                  className="w-full h-full object-cover filter brightness-90 saturate-75 contrast-90 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              <Smartphone className="w-10 h-10 text-pink-400 mb-8" />
              <h3 className="text-2xl font-bold mb-4">🛡️ CyberFine-Track 2.0</h3>
              <p className="text-white/40 leading-relaxed mb-8">
                Evolución del proyecto universitario FineTrack. Aplicación avanzada con seguridad Blockchain y validación en tiempo real.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge">Blockchain</span>
                <span className="tech-badge">Real-time Data</span>
                <span className="tech-badge">Java Evolution</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-card p-10 rounded-[3rem] hover:border-purple-500/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-24 h-24 text-purple-400" />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:border-purple-500/20 transition-all">
                <img 
                  src="/finpredict.png" 
                  alt="FinPredict AI Dashboard" 
                  className="w-full h-full object-cover filter brightness-90 saturate-75 contrast-90 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              <Cpu className="w-10 h-10 text-purple-400 mb-8" />
              <h3 className="text-2xl font-bold mb-4">FinPredict AI</h3>
              <p className="text-white/40 leading-relaxed mb-8">
                Proyecto de investigación avanzada para análisis predictivo de riesgos en mercados emergentes mediante metodologías de IA.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="tech-badge">Predictive ML</span>
                <span className="tech-badge">Technical Writing</span>
                <span className="tech-badge">Fintech</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education & Languages */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-64"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader title="Educación" icon={Award} subtitle="Academic Background" />
              <div className="space-y-6 md:ml-12">
                {[
                  { title: "Ingeniería de Sistemas y Computación | Ciencia de Datos", sub: "Universidad del Norte" },
                  { title: "Maestría en Ciberseguridad", sub: "Especialización Avanzada" },
                  { title: "Técnica en Teleinformática", sub: "Especialización inicial en infraestructura de red" }
                ].map((edu, i) => (
                  <motion.div key={i} variants={itemVariants} className="glass-card p-8 rounded-3xl border-white/5">
                    <h3 className="text-lg font-bold mb-1">{edu.title}</h3>
                    <p className="text-pink-400/60 text-sm font-mono uppercase tracking-widest">{edu.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title="Comunicación Global" icon={Globe2} subtitle='language' />
              <div className="space-y-6 md:ml-12">
                {[
                  { lang: "Español", level: "Nativo", color: "from-pink-500 to-pink-600" },
                  { lang: "Inglés", level: "C1 Advanced (Fluidez Técnica)", color: "from-purple-500 to-purple-600" },
                  { lang: "Alemán", level: "B2 (Competencia Profesional)", color: "from-indigo-500 to-indigo-600" }
                ].map((l, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-center justify-between p-8 glass-card rounded-3xl border-white/5">
                    <span className="text-xl font-bold">{l.lang}</span>
                    <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${l.color} text-white text-[10px] font-mono uppercase tracking-widest`}>{l.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          <div className="glass-card p-12 md:p-20 rounded-[4rem] border-purple-500/20 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 pointer-events-none" />
            <motion.div variants={itemVariants} className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                ¿Listo para diseñar <br />
                <span className="text-gradient italic">el futuro?</span>
              </h2>
              <p className="text-white/40 text-xl font-light mb-16 max-w-2xl mx-auto">
                Actualmente en Berlín y Barranquilla. Disponible para consultoría estratégica y colaboraciones de alto impacto.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <a href="mailto:sharikcperez54@gmail.com" className="glass-card p-8 rounded-3xl hover:border-pink-500/40 transition-all group">
                  <Mail className="w-8 h-8 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <span className="block text-sm font-mono text-white/60">sharikcperez54@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/sharikc-perez" target="_blank" className="glass-card p-8 rounded-3xl hover:border-purple-500/40 transition-all group">
                  <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <span className="block text-sm font-mono text-white/60">LinkedIn Profile</span>
                </a>
                <a href="https://github.com/Sharick07" target="_blank" className="glass-card p-8 rounded-3xl hover:border-indigo-500/40 transition-all group">
                  <Github className="w-8 h-8 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <span className="block text-sm font-mono text-white/60">GitHub Showcase</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="py-24 px-8 border-t border-white/5 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8 opacity-20">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-black italic text-xs">S</div>
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase">Sharikg Pérez</span>
        </div>
        <p className="text-white/10 font-mono text-[10px] uppercase tracking-[0.5em]">
          © 2031 • Designed with passion for the next decade of tech
        </p>
      </footer>
    </div>
  );
}
