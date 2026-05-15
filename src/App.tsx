/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ExternalLink, 
  Terminal as TerminalIcon, 
  Eye, 
  Download as DownloadIcon, 
  Sparkles, 
  Database as DatabaseIcon, 
  Wrench, 
  ChevronRight as ChevronRightIcon,
  Mail as MailIcon,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Send as SendIcon,
  Menu as MenuIcon,
  X,
  LayoutGrid,
  Briefcase,
  Zap,
  Home,
  Sun,
  Moon,
  Instagram,
  Phone,
  Coffee,        // Java
  Atom,          // React
  FileCode,      // JavaScript
  Database,      // MySQL
  Cloud,         // AWS
  Globe,         // Next.js
  CreditCard,    // Stripe
  Workflow,      // Zapier
  Server,        // Spring Boot
  Wallet         // PayPal
} from 'lucide-react';
import portfolio from './images/portfolio.jpg';
import stripe from './images/stripe.jpeg';
import razorpay from './images/razorpayX.webp';
import zapier from './images/zapier.png';
import dashboard from './images/dash.png';


const Navbar = ({ activeSection, setActiveSection, theme, toggleTheme }: { 
  activeSection: string, 
  setActiveSection: (s: string) => void,
  theme: 'light' | 'dark',
  toggleTheme: () => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleDownlaodResume = () => {
    const fileId = "1AxhCB17TQ5cRXLbWUx5zCWCK7nREtYLr";
    const link = document.createElement('a');
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="flex justify-between items-center max-w-[1500px] mx-auto px-8">
        <div className="text-xl font-bold tracking-tighter text-primary font-headline cursor-pointer" onClick={() => setActiveSection('home')}>
          Suraj Dombale
        </div>
        
        <div className="hidden md:flex items-center gap-10 font-headline tracking-tight font-bold">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`transition-colors relative pb-1 ${
                activeSection === link.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-surface-container-high border border-outline-variant/15 text-on-surface hover:bg-surface-bright transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={handleDownlaodResume} className="gradient-button  cursor-pointer text-on-primary-fixed px-6 py-2.5 rounded-xl font-label font-bold tracking-wide scale-95 active:scale-90 transition-transform hidden sm:block">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};
const startDate = new Date(2021, 6); // July 2021 (month is 0-based, so 6 = July)
const today = new Date();

let years = today.getFullYear() - startDate.getFullYear();
if (
  today.getMonth() < startDate.getMonth() ||
  (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())
) {
  years--;
}

const Hero = ({ onWorkClick, onContactClick }: { onWorkClick: () => void, onContactClick: () => void }) => (
  <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
    <div className="absolute inset-0 hero-glow"></div>
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary liquid-blob rounded-full"></div>
    <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary liquid-blob rounded-full"></div>
    
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3cddc7 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>

    <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 flex flex-col items-start space-y-8"
      >
        <div className="flex items-center gap-3 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/15">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant font-bold">Available for new opportunities</span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight text-on-surface">
          <span className="text-on-surface-variant/70">Full-Stack</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed-dim to-secondary">Developer</span><br/>
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-on-surface-variant leading-relaxed font-body font-medium">
          With over <span className="text-primary">{years}+ years</span> of experience building scalable full-stack systems using React, Next.js, and Java.
          Experienced in designing payment flows, webhook architectures, and integrations with platforms like <span className="text-secondary">Stripe</span>, <span className="text-secondary">Paypal</span>, <span className="text-secondary">Tremendous</span>, <span className="text-secondary">Razorpay</span> and <span className="text-secondary">Cashfree</span>. I bridge the gap between technical complexity and intuitive user experiences.
        </p>
        
        <div className="flex flex-wrap gap-6 pt-4">
          <button 
            onClick={onWorkClick}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-10 py-5 rounded-xl font-headline font-extrabold text-lg shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </button>
          <button 
            onClick={onContactClick}
            className="group flex items-center gap-3 px-10 py-5 bg-surface-container-highest border border-outline-variant/15 rounded-xl font-headline font-extrabold text-lg text-on-surface hover:bg-surface-bright transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:col-span-5 relative hidden lg:block"
      >
        <div className="relative w-full aspect-square">
          <div className="absolute inset-0 bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 transform rotate-3 scale-95 z-0">
            <img 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity" 
              src={dashboard} 
              alt="Code background"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-12 p-8 bg-surface-container-high rounded-xl border border-outline-variant/15 shadow-2xl shadow-black/40 backdrop-blur-md z-20 w-80 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <LayoutGrid className="text-primary" />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Current Focus</p>
                <p className="font-headline font-bold text-on-surface">Scalable Architecture</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] rounded-full"></div>
              </div>
              <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[70%] rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -right-8 p-6 bg-surface-container-high/80 rounded-xl border border-outline-variant/15 shadow-2xl backdrop-blur-md z-20 flex flex-col gap-4 transform rotate-2"
          >
            <div className="flex gap-2">
              {['REACT', 'JAVA', 'MYSQL'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant rounded-full font-label text-[10px] font-bold tracking-tighter uppercase">{tag}</span>
              ))}
            </div>
            <p className="font-label text-xs text-primary font-bold">Optimized for Performance</p>
          </motion.div>
        </div>
      </motion.div>
    </div>

    <div className="mt-24 w-full max-w-[1500px] mx-auto border-t border-outline-variant/10 pt-12 pb-20">
      <p className="font-label text-xs uppercase tracking-[0.2em] text-center text-on-surface-variant/50 mb-10 font-bold">Trusted Technical Expertise</p>
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        {[
          { icon: <Coffee />, name: 'Java' },
          { icon: <Server />, name: 'Spring Boot' },
          { icon: <Atom />, name: 'React.js' },
          { icon: <Globe />, name: 'Next.js' },
          { icon: <FileCode />, name: 'JavaScript' },
        ].map(skill => (
          <div key={skill.name} className="flex items-center gap-2 font-headline font-bold text-xl">
            <span className="text-primary">{skill.icon}</span> {skill.name}
          </div>
        ))}
      </div>
    </div>
    <div className="w-full max-w-[1500px] mx-auto border-t border-outline-variant/10 pt-0 pb-20">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        {[
          { icon: <Database />, name: 'MySQL' },
          { icon: <Cloud />, name: 'AWS' },
          { icon: <CreditCard />, name: 'Stripe' },
          { icon: <Workflow />, name: 'Zapier' },
          { icon: <Wallet />, name: 'PayPal' },
        ].map(skill => (
          <div key={skill.name} className="flex items-center gap-2 font-headline font-bold text-xl">
            <span className="text-primary">{skill.icon}</span> {skill.name}
          </div>
        ))}
      </div>
    </div>
    
  </section>
);

const Projects = () => (
  <section id="projects" className="pt-32 pb-24 max-w-[1500px] mx-auto px-8">
    <header className="mb-20 space-y-4">
      <span className="font-label text-primary uppercase tracking-widest text-xs font-bold">Portfolio Gallery</span>
      <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight">
        Selected <span className="text-primary">Works</span>
      </h1>
      <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
        A collection of digital experiences crafted with precision, exploring the intersection of aesthetics and functional engineering.
      </p>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
      {/* Project 1: Large Featured */}
      <article className="lg:col-span-12 group">
        <div className="bg-surface-container rounded-xl overflow-hidden flex flex-col md:flex-row items-center gap-0 group-hover:bg-surface-container-high transition-colors duration-500">
          
          <div className="w-full md:w-3/5 p-8 lg:p-12 space-y-6">
            <div className="flex flex-wrap gap-2">
              {['ZAPIER', 'JAVA', 'WEBHOOKS', 'POSTMAN','APIs'].map(tag => (
                <span key={tag} className="font-label text-[10px] px-3 py-1 bg-surface-container-lowest text-on-surface-variant rounded-full border border-outline-variant/15">{tag}</span>
              ))}
            </div>
            <h2 className="font-headline text-3xl font-bold text-on-surface">
              Zapier Automation & Integration Platform
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Built a scalable automation and integration platform leveraging Zapier to connect multiple services and streamline business workflows.
              <br /><br />
              Designed and developed backend APIs using Java to handle data processing and communication between systems. Implemented webhook-based integrations to trigger real-time actions across connected platforms, enabling seamless automation of complex workflows.
              <br /><br />
              Focused on reliability and scalability, ensuring efficient handling of asynchronous events and smooth execution of automated processes across different services.
              <br /><br />
              Handled multiple third-party integrations and automated workflows across different business systems.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://zapier.com/apps/referral-rocket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline flex items-center gap-2"
              >
                Live App <ExternalLink size={16} />
              </a>

              <span className="text-on-surface-variant flex items-center gap-2">
                <TerminalIcon size={16} /> Private Codebase
              </span>
            </div>
          </div>
          <div className="w-full md:w-2/5 h-[600px] overflow-hidden">
            <img
              src={zapier}
              alt="zapier automation platform"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </article>

      {/* Project 2 */}
      <article className="lg:col-span-7 group">
        <div className="bg-surface-container rounded-xl p-8 lg:p-10 space-y-8 group-hover:bg-surface-container-high transition-colors duration-500 relative overflow-hidden h-full flex flex-col justify-between">

          <div className="relative z-10 space-y-6">

            <div className="flex flex-wrap gap-2">
              {['STRIPE', 'WEBHOOKS', 'STRIPE-CONNECT', 'COUPONS'].map(tag => (
                <span key={tag} className="font-label text-[10px] px-3 py-1 bg-surface-container-lowest text-on-surface-variant rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Stripe Automation Platform
            </h2>

            <p className="text-on-surface-variant leading-relaxed text-sm">
              Built <span className="text-primary font-medium">Referral Rocket</span>, a Stripe Marketplace app that enables businesses to seamlessly connect their Stripe accounts and automate referral-based monetization workflows.

              <br /><br />

              Implemented secure account integration with Stripe, allowing users to onboard and manage payment data directly within the platform. Designed and developed webhook-based systems to handle real-time events such as subscriptions, invoice payments, and checkout sessions.

              <br /><br />

              Engineered automated workflows for coupon creation and reward distribution using Stripe APIs, ensuring users receive incentives based on successful payments and referral activity. Built the system to support scalable and reliable processing of payment events with consistent business logic execution.

              <br /><br />

              Focused on creating a seamless monetization experience by integrating payments, subscriptions, and reward automation into a unified platform.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://marketplace.stripe.com/apps/referral-rocket-affiliate-software"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline flex items-center gap-2 text-sm"
              >
                View on Stripe <ExternalLink size={16} />
              </a>

              <span className="text-on-surface-variant flex items-center gap-2 text-sm">
                <TerminalIcon size={16} /> Private Codebase
              </span>
            </div>
          </div>

          <div className="h-64 rounded-xl overflow-hidden  opacity-40 group-hover:opacity-80 transition-opacity">
            <img
              src={stripe}
              alt="Stripe Automation Platform"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </article>

      {/* Project 3 */}
      <article className="lg:col-span-5 lg: group">
        <div className="bg-surface-container rounded-xl p-8 lg:p-10 space-y-8 group-hover:bg-surface-container-high transition-colors duration-500 flex flex-col h-full justify-between">

          <div className="space-y-6">

            <div className="flex flex-wrap gap-2">
              {['RAZORPAY', 'WEBHOOKS', 'PAYOUTS', 'JAVA'].map(tag => (
                <span key={tag} className="font-label text-[10px] px-3 py-1 bg-surface-container-lowest text-on-surface-variant rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Razorpay Payment & Payout System
            </h2>

            <p className="text-on-surface-variant leading-relaxed text-sm">
              Integrated RazorpayX APIs to build a complete payment and payout workflow, enabling seamless transaction handling and automated fund distribution.

              <br /><br />

              Implemented webhook-based systems to monitor real-time payment events, ensuring accurate tracking of transactions and triggering business workflows based on payment status.

              <br /><br />

              Developed reliable payout functionality with support for retries and failure handling, ensuring consistent and secure financial operations at scale.
            </p>
          </div>

          <div className="space-y-6">
            <span className="text-on-surface-variant flex items-center gap-2 text-sm">
              <TerminalIcon size={16} /> Private Codebase
            </span>
          </div>
          <div className="h-64 rounded-xl overflow-hidden  opacity-40 group-hover:opacity-80 transition-opacity">
            <img
              src={razorpay}
              alt="Razorpay Payment & Payout System"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </article>
      {/* Project 4: Engineering Highlights */}
      <article className="lg:col-span-12 group">
        <div className="bg-surface-container rounded-xl p-8 lg:p-12 space-y-8 group-hover:bg-surface-container-high transition-colors duration-500">

          {/* Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {['RAZORPAY', 'WEBHOOKS', 'PAYOUTS', 'JAVA'].map(tag => (
                <span key={tag} className="font-label text-[10px] px-3 py-1 bg-surface-container-lowest text-on-surface-variant rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface">
              Engineering Highlights
            </h2>

            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Key technical contributions across systems, performance optimization, and scalable architecture.
            </p>
          </div>

          {/* Badge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
            {[
              "Tremendous Integration",
              "PAYPAL Integration",
              "API Rate Limiting",
              "API Access Profiling",
              "Webhook Architecture",
              "Paginated APIs",
              "Custom Email Templates",
              "SEO Optimization",
              "Performance Improvements",
              "Secure API Design",
              "SMTP / API Email Integration"
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-4 bg-surface-container-lowest rounded-xl border border-outline-variant/20 text-center text-sm font-bold text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all cursor-default"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </article>
    </div>

    <section className="mt-32 p-12 bg-surface-container-lowest rounded-xl border-l-4 border-primary">
      <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-4 font-bold">Tech Philosophy</h3>
      <p className="font-headline text-2xl italic text-on-surface/80 leading-relaxed">
        "Code is the invisible architecture that supports human creativity. I build for stability, scale for growth, and design for delight."
      </p>
    </section>
  </section>
);

const Skills = () => (
  <section id="skills" className="pt-32 pb-24">
    <div className="max-w-[1500px] mx-auto px-8 mb-20">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="font-label text-primary uppercase tracking-widest text-sm mb-4 block">Expertise & Journey</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-on-surface-variant">Forging Digital</span><br/>
            <span className="text-primary">Masterpieces.</span>
          </h1>
        </div>
        <div className="font-label text-on-surface-variant/60 text-right hidden md:block">
          <p className="text-xs uppercase tracking-tighter">Current Location</p>
          <p className="text-lg font-bold text-secondary">Pune, India</p>
        </div>
      </div>
    </div>

    <div className="max-w-[1500px] mx-auto px-8 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Frontend Column */}
        <div className="md:col-span-4 bg-surface-container rounded-xl p-8 border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-headline text-2xl font-bold">Frontend</h3>
            <Sparkles className="text-primary" size={32} />
          </div>
          <div className="flex flex-wrap gap-3">
            {['React.js', 'Next.js', 'JavaScript'].map(skill => (
              <span key={skill} className="bg-surface-container-lowest text-on-surface-variant px-4 py-1.5 rounded-full font-label text-xs uppercase tracking-wider border border-outline-variant/5 group-hover:border-primary/20 transition-colors">{skill}</span>
            ))}
          </div>
        </div>
        {/* Backend Column */}
        <div className="md:col-span-4 bg-surface-container rounded-xl p-8 border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-headline text-2xl font-bold">Backend</h3>
            <DatabaseIcon className="text-secondary" size={32} />
          </div>
          <div className="flex flex-wrap gap-3">
            {['Java', 'MySQL', 'Spring Boot', 'S3 Storage'].map(skill => (
              <span key={skill} className="bg-surface-container-lowest text-on-surface-variant px-4 py-1.5 rounded-full font-label text-xs uppercase tracking-wider border border-outline-variant/5 group-hover:border-secondary/20 transition-colors">{skill}</span>
            ))}
          </div>
        </div>
        {/* Tools Column */}
        <div className="md:col-span-4 bg-surface-container rounded-xl p-8 border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-headline text-2xl font-bold">Tools</h3>
            <Wrench className="text-tertiary" size={32} />
          </div>
          <div className="flex flex-wrap gap-3">
            {['Docker', 'AWS', 'Git', 'Figma', 'Vercel', 'Jira'].map(skill => (
              <span key={skill} className="bg-surface-container-lowest text-on-surface-variant px-4 py-1.5 rounded-full font-label text-xs uppercase tracking-wider border border-outline-variant/5 group-hover:border-tertiary/20 transition-colors">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <section className="bg-surface-container-low py-32">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-40 space-y-6">
              <h2 className="font-headline text-4xl font-extrabold">Professional<br/><span className="text-primary">Experience.</span></h2>
              <p className="text-on-surface-variant max-w-xs leading-relaxed">
                A chronicle of building scalable products and crafting intuitive user interfaces for global clients.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-24">
            <TimelineItem
              year="2024 — Present"
              role="Full Stack Developer"
              company="Referral Rocket"
              color="primary"
              points={[
                "Leading development of end-to-end features across backend and frontend, taking ownership from requirement analysis to deployment and optimization.",

                "Built and maintained complex payment and monetization systems using Stripe and Razorpay, including webhook handling, subscription flows, and automated coupon distribution.",

                "Developed scalable integration systems leveraging APIs and webhook architectures, enabling seamless automation across third-party platforms such as Zapier.",

                "Improved system scalability and performance by optimizing APIs, implementing efficient data handling strategies, and enhancing overall backend architecture.",

                "Gained hands-on experience with deployment processes and cloud services, including storage solutions (AWS S3) and production-level system management.",

                "Collaborated closely with cross-functional teams to design and implement user-centric features, ensuring a seamless experience for customers while maintaining technical excellence.",

                "Actively researched and implemented improvements to system architecture, enhancing scalability and reliability for growing user and transaction volumes."
              ]}
            />
            <TimelineItem
              year="2021 — 2024"
              role="Software Engineer"
              company="GuruSoftwares"
              color="primary"
              points={[
                "Started my professional journey as a Software Engineer, building a strong foundation in backend and full-stack development using Java, Spring Boot, and React.js.",

                "Gained hands-on experience in developing microservices-based applications, working with REST APIs, database design (MySQL), and backend frameworks like Spring Core and Hibernate.",

                "Worked extensively with modern development tools including VS Code, Postman, Git, and JIRA for efficient development, testing, and collaboration.",

                "Contributed to building responsive web applications using React.js, JavaScript, HTML, and CSS, ensuring cross-browser compatibility and performance.",

                "Developed a strong problem-solving mindset, quickly adapting to new technologies and consistently delivering features under tight deadlines.",

                "Built and maintained backend services with a focus on API design, data handling, and scalable microservices architecture."
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  </section>
);

const TimelineItem = ({ year, role, company, points, description, color }: any) => (
  <div className="relative pl-12 border-l border-outline-variant/20">
    <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-${color} shadow-lg shadow-${color}/30`}></div>
    <div className="mb-4">
      <span className={`font-label text-${color} text-sm font-bold tracking-widest uppercase`}>{year}</span>
      <h3 className="font-headline text-3xl font-bold mt-2">{role}</h3>
      <p className="text-secondary font-medium text-lg italic">{company}</p>
    </div>
    {points ? (
      <ul className="space-y-4 text-on-surface-variant leading-relaxed max-w-2xl">
        {points.map((p: string, i: number) => (
          <li key={i} className="flex gap-3">
            <ChevronRightIcon className="text-primary shrink-0" size={18} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-on-surface-variant leading-relaxed max-w-2xl">{description}</p>
    )}
  </div>
);

const Contact = () => (
  <section id="contact" className="pt-32 pb-24 px-6 md:px-12 max-w-[1500px] mx-auto">
    <header className="mb-20">
      <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4 block">Get In Touch</span>
      <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
        <span className="text-on-surface-variant">Let's</span> <span className="text-primary">collaborate!</span>
      </h1>
      <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
        Whether you have a project in mind, a question about my work, or just want to say hi, my inbox is always open.
      </p>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <section className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <form className="relative z-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="font-label text-xs uppercase tracking-wider text-outline mb-2 block group-focus-within:text-primary transition-colors">Name</label>
              <input className="w-full bg-surface-container text-on-surface border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-lg placeholder:text-on-surface-variant/40" placeholder="John Doe" type="text"/>
            </div>
            <div className="group">
              <label className="font-label text-xs uppercase tracking-wider text-outline mb-2 block group-focus-within:text-primary transition-colors">Email</label>
              <input className="w-full bg-surface-container text-on-surface border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-lg placeholder:text-on-surface-variant/40" placeholder="john@example.com" type="email"/>
            </div>
          </div>
          <div className="group">
            <label className="font-label text-xs uppercase tracking-wider text-outline mb-2 block group-focus-within:text-primary transition-colors">Message</label>
            <textarea className="w-full bg-surface-container text-on-surface border-none border-b-2 border-transparent focus:ring-0 focus:border-primary transition-all p-4 rounded-lg placeholder:text-on-surface-variant/40 resize-none" placeholder="Tell me about your project..." rows={5}></textarea>
          </div>
          <button className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 group" type="submit">
            Send Message
            <SendIcon className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </form>
      </section>

      <aside className="lg:col-span-5 space-y-8 lg:pl-12">
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
              <MailIcon className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface text-lg">Email</h4>
              <p className="text-on-surface-variant font-body">surajdombale@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
              <Phone className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface text-lg">Phone</h4>
              <p className="text-on-surface-variant font-body">+91 9011112014</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface text-lg">Location</h4>
              <p className="text-on-surface-variant font-body">Pune, India (Remote Friendly)</p>
            </div>
          </div>
        </div>

        {/* <div className="h-px bg-outline-variant/15 w-full"></div> */}

        <div>
          <h4 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6">Social Connect</h4>
          <div className="flex gap-4">
            {[
              { icon: <Github />, label: 'GitHub', href:"https://github.com/surajdombale" },
              { icon: <Linkedin />, label: 'LinkedIn', href:"https://linkedin.com/in/suraj-dombale" },
              { icon: <Instagram />, label: 'Instagram', href:"https://instagram.com/nomad__foodie" }
            ].map(social => (
              <a key={social.label} className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center hover:bg-surface-container-highest transition-colors group" href={social.href} target="_blank" rel="noopener noreferrer">
                <span className="text-on-surface-variant group-hover:text-primary transition-colors">{social.icon}</span>
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <p className="relative z-10 font-body text-sm text-on-surface-variant italic leading-relaxed">
            "Great achievements in business are never the work of a single individual—they are the result of a team united by a shared vision, effort, and purpose."
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
              <img className="w-full h-full object-cover" src={portfolio} alt="Suraj" referrerPolicy="no-referrer" />
            </div>
            <span className="font-headline text-xs font-bold text-on-surface">— Suraj</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-outline-variant/10">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-[1500px] mx-auto pt-8">
      <div className="mb-6 md:mb-0">
        <div className="text-lg font-bold text-primary font-headline">Suraj Dombale</div>
        <p className="font-inter text-sm tracking-wide text-on-surface-variant mt-2">© 2026 Suraj Dombale. Crafted with precision.</p>
      </div>
      <div className="flex gap-8">
        <a key={"GitHub"} className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm" href="https://github.com/surajdombale" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a key={"LinkedIn"} className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm" href="https://linkedin.com/in/suraj-dombale" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a key={"Email"} className="text-on-surface-variant hover:text-primary transition-colors font-body text-sm" href="mailto:surajdombale@gmail.com">Email</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface transition-colors duration-300">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={scrollToSection} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero 
              onWorkClick={() => scrollToSection('projects')} 
              onContactClick={() => scrollToSection('contact')} 
            />
            <Projects />
            <Skills />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 w-full glass-nav px-6 py-4 flex justify-around items-center z-50">
        {[
          { icon: <Home size={20} />, label: 'Home', id: 'home' },
          { icon: <Briefcase size={20} />, label: 'Projects', id: 'projects' },
          { icon: <Zap size={20} />, label: 'Skills', id: 'skills' },
          { icon: <MailIcon size={20} />, label: 'Contact', id: 'contact' }
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeSection === item.id ? 'text-primary' : 'text-on-surface-variant'}`}
          >
            {item.icon}
            <span className="text-[10px] font-label uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
