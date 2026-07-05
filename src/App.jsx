import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Cog,
  Wrench,
  ShieldCheck,
  Clock,
  Gauge,
  Car,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Upload,
  CheckCircle2,
} from 'lucide-react';
import CountUp from './components/CountUp.jsx';
import { useMagnetic } from './hooks/useMagnetic.js';

gsap.registerPlugin(ScrollTrigger);

const BUSINESS = {
  name: "Bay's Auto Repair",
  tagline: "Ballard's import & domestic auto specialists",
  phone: '206-783-5670',
  email: 'baysautorepair1@gmail.com',
  address: '5015 14th Ave NW, Ballard, Seattle, WA',
  hours: 'Mon–Sat, 8am–7pm',
};

const SERVICES = [
  { icon: Gauge, title: 'Diagnostics & Check Engine', desc: 'Computer diagnostics to find the real problem, not just clear the code.' },
  { icon: Cog, title: 'Engine & Transmission', desc: 'Repair and rebuild work for import and domestic vehicles alike.' },
  { icon: Wrench, title: 'Brakes & Suspension', desc: 'Pads, rotors, struts, and alignment done right the first time.' },
  { icon: ShieldCheck, title: 'Pre-Purchase Inspection', desc: "Buying a used car? Know what you're getting into first." },
  { icon: Car, title: 'Scheduled Maintenance', desc: 'Oil changes, fluids, and factory-interval service to keep warranties intact.' },
  { icon: Clock, title: 'Same-Week Turnaround', desc: 'Most jobs in and out without a two-week wait for an appointment.' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  useMagnetic(btnRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Services', 'How We Work', 'Trust', 'Contact'];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl rounded-full px-6 py-3 flex items-center justify-between transition-all ${
          scrolled ? 'glass-dark' : 'bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-white">
          <span className="w-8 h-8 rounded-lg bg-accent text-ink flex items-center justify-center font-extrabold">B</span>
          Bay's Auto Repair
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80 font-body">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-white transition">
              {l}
            </a>
          ))}
        </div>
        <a ref={btnRef} href="#contact" className="magnetic-btn !px-5 !py-2.5 text-sm">
          Book a Slot
        </a>
        <button className="md:hidden text-white" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 bg-surface flex flex-col items-center justify-center gap-8">
          <button className="absolute top-6 right-6 text-white" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-white"
              style={{ animation: `rain-fadein 0.4s ease ${i * 0.08}s both` }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function Hero() {
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);
  const btnRef = useRef(null);
  useMagnetic(btnRef);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(eyebrowRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(headingRef.current.children, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 }, '-=0.2')
      .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo(ctaRef.current, { y: 20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.5 }, '-=0.3')
      .fromTo(particlesRef.current.children, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.1 }, '-=0.5');
    return () => tl.kill();
  }, []);

  return (
    <header id="top" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-surface text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div ref={particlesRef} className="absolute top-10 right-10 w-40 h-64 pointer-events-none hidden md:block">
        {Array.from({ length: 6 }).map((_, i) => (
          <Cog
            key={i}
            className="absolute text-accent/70"
            size={16 + (i % 3) * 8}
            style={{
              left: `${(i * 37) % 100}%`,
              animation: `rain-fall ${3.5 + (i % 3)}s linear ${i * 0.7}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <p ref={eyebrowRef} className="eyebrow mb-4">Independent Shop · Ballard, Seattle</p>
        <h1 ref={headingRef} className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          <span className="block">30 years of honest</span>
          <span className="block italic font-flourish font-medium text-accent">auto repair,</span>
          <span className="block">no dealership markup.</span>
        </h1>
        <p ref={subRef} className="font-body text-white/80 text-lg max-w-xl mt-6">
          Import and domestic diagnostics, repair, and maintenance from a shop that's been
          fixing Ballard's cars for three decades.
        </p>
        <div ref={ctaRef} className="mt-8">
          <a ref={btnRef} href="#contact" className="magnetic-btn">
            Book a Slot <Wrench size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}

const REVIEW_QUOTES = [
  { text: "Bay's is the most honest and reputable auto repair shop in Seattle.", source: 'via Yelp' },
  { text: "Bay is a nice guy — honest, and he'll tell you what needs repair and what doesn't, plus his prices upfront.", source: 'via Yelp' },
  { text: 'When the invoice came out higher than the original verbal quote, they honored the price they originally gave.', source: 'via Yelp' },
];

function Features() {
  const [shuffleOrder, setShuffleOrder] = useState(REVIEW_QUOTES.map((_, i) => i));

  return (
    <section id="features" className="bg-surface text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="eyebrow mb-3">Why Bay's</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl mb-16">
          The shop Ballard's trusted for 30 years.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div
            className="rounded-3xl bg-white/5 border border-white/10 p-8 h-72 relative cursor-pointer overflow-hidden"
            onClick={() => setShuffleOrder((o) => [...o.slice(1), o[0]])}
          >
            <p className="eyebrow mb-4">Real Reviews</p>
            {shuffleOrder.map((idx, pos) => (
              <div
                key={idx}
                className="absolute inset-8 rounded-2xl bg-primary p-5 flex flex-col justify-between transition-all duration-500"
                style={{
                  transform: `translateY(${pos * 10}px) scale(${1 - pos * 0.05})`,
                  zIndex: REVIEW_QUOTES.length - pos,
                  opacity: pos === REVIEW_QUOTES.length - 1 ? 0 : 1,
                }}
              >
                <p className="font-flourish italic text-lg">"{REVIEW_QUOTES[idx].text}"</p>
                <p className="text-xs text-white/60 font-mono">— {REVIEW_QUOTES[idx].source}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 h-72 relative overflow-hidden">
            <p className="eyebrow mb-4">Every Make & Model</p>
            <div className="absolute inset-0">
              {Array.from({ length: 7 }).map((_, i) => (
                <Cog
                  key={i}
                  className="absolute text-accent"
                  size={18}
                  style={{
                    left: `${(i * 41) % 100}%`,
                    top: 0,
                    animation: `rain-fall ${2.8 + (i % 4) * 0.6}s linear ${i * 0.4}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 h-72 relative overflow-hidden">
            <p className="eyebrow mb-4">Easy Scheduling</p>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={`h-8 rounded-md ${i === 6 ? 'bg-accent' : 'bg-white/10'}`} />
              ))}
            </div>
            <Gauge className="absolute bottom-6 right-6 text-accent animate-pulse" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="bg-paper text-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-10 text-center">
        {[
          { target: 30, suffix: '+', label: 'Years in Ballard' },
          { target: 100, suffix: '%', label: 'Transparent estimates' },
          { target: 2, suffix: ' yr', label: 'Warranty on major repairs' },
        ].map((p) => (
          <div key={p.label}>
            <p className="font-display text-5xl md:text-6xl font-extrabold text-primary">
              <CountUp target={p.target} suffix={p.suffix} />
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mt-3">{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Protocol() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const triggers = [];
    cardsRef.current.forEach((card, i) => {
      if (!card || i === cardsRef.current.length - 1) return;
      const st = ScrollTrigger.create({
        trigger: card,
        start: 'top top+=80',
        end: '+=100%',
        scrub: true,
        onUpdate: (self) => {
          gsap.set(card, {
            scale: 1 - self.progress * 0.08,
            filter: `blur(${self.progress * 4}px)`,
            opacity: 1 - self.progress * 0.3,
          });
        },
      });
      triggers.push(st);
    });
    return () => triggers.forEach((t) => t.kill());
  }, []);

  const steps = [
    { n: '01', title: 'Tell us the symptom', desc: 'Call or book online — describe what the car is doing, we\'ll give you a real time estimate.' },
    { n: '02', title: 'We diagnose first', desc: 'A clear explanation of what\'s wrong and what it costs before any work starts.' },
    { n: '03', title: 'Quality repair', desc: 'Quality parts, documented work, and a shop that stands behind it.' },
  ];

  return (
    <section id="how-we-work" className="bg-paper text-ink py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="eyebrow mb-3">How We Work</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Simple, from call to fix.</h2>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              ref={(el) => (cardsRef.current[i] = el)}
              className="sticky rounded-3xl bg-surface text-white p-10 md:p-14"
              style={{ top: 96 }}
            >
              <p className="font-mono text-accent text-sm mb-4">{s.n}</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{s.title}</h3>
              <p className="font-body text-white/70 max-w-md">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="bg-surface text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="eyebrow mb-3">Services</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 max-w-2xl">
          Everything under the hood.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface p-8 hover:bg-white/5 transition group">
              <Icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
              <p className="font-body text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSignals() {
  const badges = [
    { icon: ShieldCheck, title: 'ASE Certified Techs', desc: 'Experienced technicians, not parts-swappers.' },
    { icon: Clock, title: '30+ Years Local', desc: 'Same Ballard location since day one.' },
    { icon: CheckCircle2, title: 'Upfront Estimates', desc: 'You approve the cost before we touch the car.' },
  ];
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current.children;
    gsap.fromTo(
      els,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <section id="trust" className="bg-paper text-ink py-24 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
        {badges.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-3xl border border-black/10 p-8">
            <Icon className="text-primary mb-4" size={26} />
            <h3 className="font-display font-semibold text-lg mb-1">{title}</h3>
            <p className="font-body text-sm text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState('idle');

  const submit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1400);
  };

  return (
    <section id="contact" className="bg-paper text-ink py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <p className="eyebrow mb-3">Get In Touch</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Tell us what your car's doing.</h2>
        <p className="font-body text-muted mb-10">We'll get back to you same business day.</p>

        {status === 'sent' ? (
          <div className="rounded-3xl bg-primary text-white p-10 flex items-center gap-4">
            <CheckCircle2 size={32} className="text-accent" />
            <div>
              <p className="font-display font-semibold text-lg">Request received.</p>
              <p className="font-body text-white/70 text-sm">We'll reach out shortly to confirm details.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="rounded-xl border border-black/10 px-4 py-3 font-body sm:col-span-1" />
            <input required type="email" placeholder="Email" className="rounded-xl border border-black/10 px-4 py-3 font-body sm:col-span-1" />
            <input required placeholder="Phone" className="rounded-xl border border-black/10 px-4 py-3 font-body sm:col-span-1" />
            <input required placeholder="Vehicle (Year/Make/Model)" className="rounded-xl border border-black/10 px-4 py-3 font-body sm:col-span-1" />
            <textarea required placeholder="What's it doing?" rows={4} className="rounded-xl border border-black/10 px-4 py-3 font-body sm:col-span-2" />
            <label className="sm:col-span-2 rounded-xl border border-dashed border-black/20 px-4 py-6 flex items-center justify-center gap-2 text-muted font-body cursor-pointer">
              <Upload size={18} /> Attach a photo (optional)
              <input type="file" className="hidden" />
            </label>
            <button type="submit" disabled={status === 'sending'} className="magnetic-btn sm:col-span-2 justify-center">
              {status === 'sending' ? 'Sending…' : 'Send Request'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display font-bold text-lg mb-2">Bay's Auto Repair</p>
          <p className="font-body text-sm text-white/60 mb-4">{BUSINESS.tagline}</p>
          <p className="flex items-center gap-2 text-sm text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Currently booking new appointments
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Services</p>
          <ul className="space-y-2 text-sm text-white/70 font-body">
            {SERVICES.slice(0, 4).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-white/70 font-body">
            <li className="flex items-center gap-2"><Phone size={14} /> {BUSINESS.phone}</li>
            <li className="flex items-center gap-2"><Mail size={14} /> {BUSINESS.email}</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> {BUSINESS.address}</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Legal</p>
          <ul className="space-y-2 text-sm text-white/70 font-body">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white/30 text-xs font-mono mt-12">
        © {new Date().getFullYear()} Bay's Auto Repair. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <Features />
      <Pillars />
      <Protocol />
      <ServicesGrid />
      <TrustSignals />
      <ContactForm />
      <Footer />
    </div>
  );
}
