"use client"; // 👈 Add this line right here to enable interactivity!

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function Page() {
  // Array holding the 13+ gallery images dynamically
  const projectShowcase = [
    {
      id: 12,
      src: "/modular-solution/hero-section-1.png", // Integrated valid paths from layout context
      title: "Premium Shell Scheme Shell",
      desc: "Custom branding elements fitted flawlessly into standard system framing.",
    },
    {
      id: 13,
      src: "/modular-solution/mall-activation.png",
      title: "Vibrant Retail Spaces",
      desc: "Maximizing small square footage with high-impact custom fabric structures.",
    },
    {
      id: 14,
      src: "/modular-solution/backdrop.png",
      title: "Seamless Fabric Finishing",
      desc: "Expert engineering ensures no sagging, wrinkles, or visible framing.",
    },
    {
      id: 15,
      src: "/modular-solution/photo-booth.png",
      title: "Rapid Deployment Units",
      desc: "Packed light, traveled far, and fully set up in less than 120 minutes.",
    },
    {
      id: 16,
      src: "/modular-solution/main.png",
      title: "Feature Wall Execution",
      desc: "Flawless cornering and structural stability built for crowded venues.",
    },
    {
      id: 17,
      src: "/modular-solution/img2.png",
      title: "Custom Interactive Space",
      desc: "Integrating digital tech displays with high-fidelity textile backdrops.",
    },
  ];

  // React local states integrated directly into your existing structure for cleaner user interactivity
  const [activeProject, setActiveProject] = useState(projectShowcase[0]);
  const [form, setForm] = useState({ name: "", email: "" });

  return (
    <div className="bg-neutral-50 text-neutral-800 min-h-screen antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-[8%] py-16 md:py-24 items-center bg-white mt-30">
        <div className="space-y-6 max-w-2xl">
          <span className="inline-block bg-black/10 text-[var(--primary)] text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-sm">
            Where Innovation Meets Craftsmanship
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
            MODULAR SUSTAINABLE BOOTH SYSTEM (SEG FABRIC)
          </h1>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Transform your small space into a vibrant, custom-designed booth in
            just a few hours. Our expert team creates eye-catching exhibition
            booths, shell scheme displays, conference setups, mall activations,
            photo booths, backdrops, and feature walls that bring your brand to
            life and help it stand out from the crowd.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-block bg-[var(--primary)] text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
            >
              Build Your Booth
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 overflow-hidden rounded-2xl shadow-md h-64 md:h-80 group">
            <img
              src="/modular-solution/hero-section-1.png"
              alt="Stunning Custom Exhibition Booth"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md h-40 group">
            <img
              src="/modular-solution/hero-section-2.png"
              alt="SEG Fabric Detail"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md h-40 group">
            <img
              src="/modular-solution/hero-section-3.png"
              alt="Quick Assembly Booth"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Core Solutions (Alternating Image/Text) */}
      <section
        id="solutions"
        className="px-6 md:px-[8%] py-20 bg-white border-t border-neutral-100"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
              Our Core Offerings
            </h2>
            <p className="mt-4 text-lg text-neutral-500">
              Modern technology and extraordinary marketing designed to bring
              your brand to life.
            </p>
          </div>

          <div className="space-y-24">
            {/* Conference Booths */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="overflow-hidden rounded-2xl shadow-lg h-[420px] group">
                <img
                  src="/modular-solution/confress-booth.png"
                  alt="Conference Booths"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="group flex h-full flex-col justify-center">
                <div className="inline-block">
                  <h3 className="cursor-pointer text-3xl font-bold text-neutral-900">
                    Conference Booths
                  </h3>

                  <div className="mt-2 h-1 w-0 rounded-lg bg-[var(--primary)] transition-all duration-500 group-hover:w-48"></div>
                </div>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Steal the show with custom engineered setups built to make an
                  impact. Our expert design team configures dynamic
                  architectural layouts tailored specifically to your footprint,
                  turning static space into interactive business hubs.
                </p>
              </div>
            </div>

            {/* Mall Activations */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="group order-2 lg:order-1 flex h-full flex-col justify-center">
                <div className="inline-block">
                  <h3 className="text-3xl font-bold text-neutral-900">
                    Mall Activations
                  </h3>

                  <div className="mt-2 h-1 w-48 origin-left scale-x-0 rounded-lg bg-[var(--primary)] transition-transform duration-500 group-hover:scale-x-100"></div>
                </div>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  High traffic requires flawless execution. Our sustainable
                  modular framework allows for breathtaking, eye-catching, and
                  majestic pop-up structures that instantly grasp consumers'
                  attention and invite consumer engagement.
                </p>
              </div>

              <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-lg h-[420px] group">
                <img
                  src="/modular-solution/mall-activation.png"
                  alt="Mall Activations"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Conference Setups */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="overflow-hidden rounded-2xl shadow-lg h-[420px] group">
                <img
                  src="/modular-solution/backdrop.png"
                  alt="Conference Setups"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="group flex h-full flex-col justify-center">
                <div className="inline-block">
                  <h3 className="text-3xl font-bold text-neutral-900">
                    Conference Setups & Backdrops
                  </h3>

                  <div className="mt-2 h-1 w-72 origin-left scale-x-0 rounded-lg bg-[var(--primary)] transition-transform duration-500 group-hover:scale-x-100"></div>
                </div>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Clean backgrounds, vivid color expressions, and perfectly
                  tensioned fabrics. Eliminate the flawed and heavy seams of
                  wood structures with sleek, modular backdrops engineered to
                  look incredibly premium under stage lighting.
                </p>
              </div>
            </div>

            {/* Photo Booths */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="group order-2 lg:order-1 flex h-full flex-col justify-center">
                <div className="inline-block">
                  <h3 className="text-3xl font-bold text-neutral-900">
                    Photo Booths & Feature Walls
                  </h3>

                  <div className="mt-2 h-1 w-56 origin-left scale-x-0 rounded-lg bg-[var(--primary)] transition-transform duration-500 group-hover:scale-x-100"></div>
                </div>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Create the ultimate brand-photo opportunity. Our modular
                  feature walls use silicone edge graphics (SEG) technology to
                  bring seamless, macro-scale artwork to life, creating stunning
                  high-definition backdrops.
                </p>
              </div>

              <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-lg h-[420px] group">
                <img
                  src="/modular-solution/photo-booth.png"
                  alt="Feature Walls"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shell Scheme Section */}
      <section
        className="relative overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat px-6 py-20 text-white md:px-[8%]"
        style={{
          backgroundImage: "url('/modular-solution/background.png')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-black/75"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Images (Grid Layout Improvement) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 h-56 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/modular-solution/main.png"
                alt="Setup Step 1"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-44 overflow-hidden border border-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/modular-solution/img2.png"
                alt="Setup Step 2"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-44 overflow-hidden border border-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/modular-solution/img3.png"
                alt="Setup Step 3"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-44 overflow-hidden border border-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/modular-solution/img4.png"
                alt="Setup Step 4"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-44 overflow-hidden border border-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/modular-solution/img5.png"
                alt="Setup Step 5"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-44 overflow-hidden border border-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/modular-solution/img6.png"
                alt="Setup Step 6"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-44 overflow-hidden border border-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/modular-solution/img1.png"
                alt="Setup Step 7"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content - Fixed Readability with Glassmorphism */}
          <div className="space-y-6 rounded-2xl border border-white/80 bg-black/45 p-8 backdrop-blur-md md:p-10">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Transform Your Shell Scheme Into a Premium Exhibition Space
            </h2>

            <p className="leading-relaxed text-gray-200">
              Our Modular Sustainable Booth System (SEG Fabric) combines
              innovative design with premium craftsmanship to transform ordinary
              exhibition spaces into stunning, brand-focused displays. With fast
              installation, reusable components, and seamless SEG fabric
              graphics, we create visually striking booths that help your brand
              stand out while offering a sustainable alternative to traditional
              traditional Octonorm systems.
            </p>

            {/* Grid Features */}
            <div className="grid grid-cols-1 gap-6 border-t border-white/20 pt-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[var(--primary)]">
                  <span>⚡</span> Fast Installation
                </h4>
                <p className="text-sm leading-relaxed text-gray-300">
                  Get your customized booth installed and event-ready in just a
                  few hours.
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[var(--primary)]">
                  <span>♻️</span> Reusable & Sustainable
                </h4>
                <p className="text-sm leading-relaxed text-gray-300">
                  Eco-friendly modular components designed for repeated use
                  across multiple events.
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[var(--primary)]">
                  <span>✨</span> Premium Visual Impact
                </h4>
                <p className="text-sm leading-relaxed text-gray-300">
                  Edge-to-edge SEG fabric graphics create a sleek, modern, and
                  professional appearance.
                </p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-[var(--primary)]">
                  <span>🎯</span> Versatile Applications
                </h4>
                <p className="text-sm leading-relaxed text-gray-300">
                  Perfect for conference booths, mall activations, photo booths,
                  backdrops, and promotional events.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center items-center rounded-lg bg-[var(--primary)] py-2 w-56 cursor-pointer">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 md:px-[8%] py-12 max-w-6xl mx-auto">
        <div className="bg-neutral-950 text-white p-8 md:p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Steal the Show?
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              Let our expert design team magically transform your upcoming event
              space.
            </p>
            <form
              className="pt-6 flex flex-col sm:flex-row gap-3 justify-center items-center"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `Thank you ${form.name || "there"}! We'll get in touch at ${form.email}.`,
                );
                setForm({ name: "", email: "" });
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full sm:w-64 px-5 py-3.5 rounded-full bg-white/10 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full sm:w-64 px-5 py-3.5 rounded-full bg-white/10 border border-white/10 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[var(--primary)] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all whitespace-nowrap shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 cursor-pointer"
              >
                Let's Collaborate
              </button>
            </form>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;
