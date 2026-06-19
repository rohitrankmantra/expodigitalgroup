"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Move the sub-component completely OUTSIDE of the Home component block
function FAQCard({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-colors"
      animate={{ borderColor: isOpen ? "rgba(24,24,27,0.3)" : "rgba(228,228,231,1)" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-display text-lg font-bold text-zinc-950 pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-zinc-400 flex-shrink-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-100/80 bg-zinc-50/30 text-sm md:text-base">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Completed", value: "100+" },
    { label: "Events Served", value: "150+" },
    { label: "Satisfied Clients", value: "100+" },
  ];

  const principles = [
    {
      title: "Our Mission",
      text: "Redefining the art of showcasing excellence through immersive stand design, fabrication, and flawless event delivery.",
    },
    {
      title: "Our Vision",
      text: "To become the go-to exhibition and experiential build partner for ambitious brands across the Middle East and beyond.",
    },
    {
      title: "Our Values",
      text: "Integrity, responsibility, and innovation guide every client conversation, every concept, and every built environment.",
    },
  ];

  const recentProjects = [
    {
      title: "Bespoke Trade Show Pavilion",
      type: "Custom Build",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "MO.PO Sustainable Stand",
      type: "Reusable System",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "QuickBuild Conference Stage",
      type: "Fast Deployment",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Architecting high-availability, hybrid cloud solutions with absolute focus on elasticity, uptime, and multi-region failover structures.",
      badge: "Scale"
    },
    {
      title: "Custom Enterprise Software",
      description: "Building reliable digital foundations engineered to automate workflows, integrate legacy APIs, and power large-scale data systems.",
      badge: "Core"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Hardening system architectures against modern threat vectors with continuous monitoring, zero-trust configurations, and protocol-level audits.",
      badge: "Security"
    }
  ];

  const expertiseTags = [
    "Cloud Infrastructure", "Enterprise Software", "AI & Machine Learning", 
    "Cybersecurity Integration", "Data Engineering", "UI/UX Architecture"
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Blueprinting",
      desc: "We analyze your technical bottlenecks and design a resilient architectural roadmap tailored to your operational scale."
    },
    {
      num: "02",
      title: "Agile Engineering",
      desc: "Our core development sprints deliver modular, strictly audited code with automated CI/CD continuous integration pipelines."
    },
    {
      num: "03",
      title: "Deployment & Optimization",
      desc: "Seamless, zero-downtime deployment backed by round-the-clock telemetry, infrastructure hardening, and real-time monitoring."
    }
  ];

  const faqs = [
    {
      question: "What exact architecture tech stacks do you specialize in?",
      answer: "We operate completely natively across modern environments, primarily relying on highly distributed cloud structures like AWS and Azure, container systems through Kubernetes, and clean application layouts using Next.js, Node.js, and complex PostgreSQL or NoSQL data schemas."
    },
    {
      question: "How do you handle data system legacy migrations safely?",
      answer: "We perform full sandbox pipeline simulations, isolate old operational paths, execute non-blocking mirror data sets, and run zero-downtime blue-green switches to guarantee data preservation without structural service loss."
    },
    {
      question: "Do you offer post-deployment systems optimization?",
      answer: "Yes, every system deployment layout includes fully active real-time observability dashboards alongside specialized alerting monitors and structural health configurations to track load fluctuations permanently."
    }
  ];

  // Helper list to combine arrays for a long seamless marquee loop
  const marqueeItems = [...services.map(s => s.title), "AI & Machine Learning", "UI/UX Architecture"];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#fffaf4_100%)] pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="site-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Empowering Next-Gen Enterprises
            </p>
            <h1 className="mb-8 text-5xl font-display font-bold tracking-tight text-zinc-950 md:text-7xl lg:text-8xl">
              Architecting the <span className="gradient-text">Digital Future</span> of IT Solutions.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
              We transform complex technical challenges into seamless software ecosystems. Enterprise cloud architecture, custom development, and full-spectrum engineering under one roof.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto rounded-full bg-[var(--primary)] px-10 py-4 font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-[var(--primary)]/10">
                Explore Our Solutions
              </button>
              <button className="w-full sm:w-auto rounded-full border border-zinc-200 bg-white px-10 py-4 font-bold text-zinc-950 transition-all hover:bg-zinc-50">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Services Marquee Powered by Framer Motion */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-8 overflow-hidden">
        <div className="w-full relative flex [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
          <motion.div 
            className="flex whitespace-nowrap items-center gap-16 pr-16"
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {/* Render items twice to ensure a perfect continuous loop wrapper */}
            {[...marqueeItems, ...marqueeItems].map((title, index) => (
              <div key={index} className="flex items-center gap-4 flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-[var(--primary)] opacity-60" />
                <span className="text-xl font-display font-medium uppercase tracking-wider text-zinc-600">
                  {title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clean & Professional Stats Section */}
      <section className="border-y border-zinc-200 py-16 md:py-20" id="stats">
        <div className="site-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center text-center px-4 relative group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <p className="mb-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 transition-transform duration-300 group-hover:scale-105">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </p>
                {idx < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-zinc-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced About Section */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px)] bg-[size:10%_100%] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="site-shell relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <motion.div 
              className="relative lg:col-span-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-100 shadow-[0_30px_80px_rgba(17,17,17,0.08)] group">
                <motion.img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="IT Solutions Team Blueprinting" 
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/70 p-6 backdrop-blur-md hidden sm:block shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-zinc-950 mb-1">Global Delivery Architecture</p>
                  <p className="text-xs text-zinc-600">Engineered by enterprise systems specialists adhering to modern ISO design compliance frameworks.</p>
                </motion.div>
              </div>
              <div className="absolute -bottom-10 -left-10 -z-10 h-72 w-72 rounded-full bg-brand-gradient opacity-15 blur-[100px]" />
            </motion.div>

            <div className="lg:col-span-6 lg:pl-6">
              <motion.p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                Engineered Frameworks
              </motion.p>
              <motion.h2 className="mb-6 font-display text-4xl font-bold leading-tight text-zinc-950 md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                We translate complex systems into <span className="gradient-text">effortless growth</span>.
              </motion.h2>
              <motion.p className="mb-6 text-lg leading-relaxed text-zinc-600" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                At Expo Digital, we construct architecture models, platforms, and integrated software layers that deliver speed and defense under scale. We completely eliminate the operational complexity of system transitions.
              </motion.p>
              <div className="flex flex-wrap gap-2.5">
                {expertiseTags.map((tag, idx) => (
                  <motion.span 
                    key={idx} 
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-700 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(24,24,27,0.3)", backgroundColor: "#fff" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Expo Digital Section */}
      <section className="bg-[linear-gradient(180deg,#fff_0%,#fffaf4_100%)] py-24">
        <div className="site-shell">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Why Expo Digital</p>
            <h2 className="mb-5 text-4xl font-display font-bold text-zinc-950 md:text-6xl">Designed to the brief. Built to impress.</h2>
            <p className="text-lg leading-relaxed text-zinc-600">As a leading exhibition stand builder company in the Middle East, we provide consultation, design, fabrication, installation, dismantling, and storage under one roof.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_16px_40px_rgba(17,17,17,0.05)]">
                <div className="mb-5 h-1.5 w-16 rounded-full bg-brand-gradient" />
                <h3 className="mb-4 text-2xl font-display font-bold text-zinc-950">{item.title}</h3>
                <p className="leading-relaxed text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-24" id="services">
        <div className="site-shell">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Core Capabilities</p>
              <h2 className="text-4xl font-display font-bold text-zinc-950 md:text-6xl">Engineered to scale. Built to perform.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">From advanced modern engineering stacks to iron-clad operational infrastructures, we deliver tech that turns processing power into business speed.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group relative rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)]">
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-2 w-12 rounded-full bg-brand-gradient transition-all duration-300 group-hover:w-20" />
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-500">{service.badge}</span>
                </div>
                <h3 className="mb-4 text-2xl font-display font-bold text-zinc-950 transition-colors group-hover:text-[var(--primary)]">{service.title}</h3>
                <p className="leading-relaxed text-zinc-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className="border-t border-zinc-200 bg-[linear-gradient(180deg,#fff_0%,#fffaf4_100%)] py-24">
        <div className="site-shell">
          <div className="mb-20 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Execution Framework</p>
            <h2 className="font-display text-4xl font-bold text-zinc-950 md:text-6xl">Our path to digital precision.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.num} className="group relative rounded-3xl border border-zinc-200 bg-white p-10 transition-all duration-300 hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.04)]">
                <div className="mb-8 font-display text-5xl font-extrabold tracking-tight text-zinc-100 transition-colors group-hover:text-[var(--primary)]/10 md:text-6xl">{step.num}</div>
                <h3 className="mb-4 font-display text-2xl font-bold text-zinc-950">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{step.desc}</p>
                <div className="absolute bottom-0 left-10 right-10 h-[2px] scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="bg-white py-24" id="projects">
        <div className="site-shell">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Recent Projects</p>
              <h2 className="text-4xl font-display font-bold text-zinc-950 md:text-6xl">Spaces that amplify your brand presence.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">From bespoke booths to modular setups and conference environments, every project is crafted to leave a strong and lasting impression.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {recentProjects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_18px_50px_rgba(17,17,17,0.06)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">{project.type}</p>
                  <h3 className="text-2xl font-display font-bold text-zinc-950">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-24 md:py-32 relative overflow-hidden" id="faq">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        <div className="site-shell max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Inquiries & Clarity</p>
            <h2 className="font-display text-4xl font-bold text-zinc-950 md:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQCard key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote / CTA Section */}
      <section className="relative overflow-hidden py-28">
        <div className="site-shell relative z-10 text-center">
          <h2 className="mx-auto mb-12 max-w-4xl text-3xl font-display font-bold leading-tight text-zinc-950 md:text-5xl">
            We consistently exceed our clients&apos; expectations by providing tailor-made solutions that are both <span className="italic gradient-text">eye-catching</span> and functional.
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-brand-gradient" />
          <button className="rounded-full bg-[var(--primary)] px-12 py-5 font-bold text-white transition-transform hover:scale-105">
            Let&apos;s Build Something Extraordinary
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}