import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, ShoppingCart, Shield, Zap, CheckCircle2 } from 'lucide-react'

const products = [
  {
    id: 1,
    title: 'Voice Agent Pro',
    desc: 'AI voice agent with natural conversation and CRM integration.',
    price: '$49',
    badge: 'Bestseller',
    gradient: 'from-fuchsia-500 to-sky-500'
  },
  {
    id: 2,
    title: 'Prompt Pack 200+',
    desc: 'High-converting prompts for content, code, research, and sales.',
    price: '$29',
    badge: 'New',
    gradient: 'from-sky-500 to-orange-400'
  },
  {
    id: 3,
    title: 'Automation Templates',
    desc: 'Zapier/Make blueprints to automate your AI workflows.',
    price: '$39',
    badge: 'Creator Pick',
    gradient: 'from-purple-500 to-pink-500'
  },
]

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass hover-glow transition-all rounded-2xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 to-sky-500 animate-pulse" />
            <span className="font-semibold">AI Digital Store</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#products" className="btn-primary hover-shake flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" /> Shop
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            AI products that sell themselves
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Build and sell digital AI products with a
          <br />
          <span className="gradient-text">futuristic shopping experience</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mx-auto mt-6 max-w-2xl text-white/70">
          Launch your prompts, agents, voice packs, and automations in minutes. Smooth interactions, beautiful animations, and instant delivery.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#products" className="btn-primary hover-shake">Explore Products</a>
          <a href="#features" className="btn-secondary hover-glow">How it works</a>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { icon: <Zap className="h-5 w-5" />, title: 'Instant delivery', desc: 'Automatic file/access delivery after secure checkout.' },
    { icon: <Shield className="h-5 w-5" />, title: 'Protected links', desc: 'Unique license keys and protected download links.' },
    { icon: <Sparkles className="h-5 w-5" />, title: 'High-converting UI', desc: 'Animations and micro-interactions that boost sales.' },
  ]
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group glass rounded-2xl p-6 hover-glow hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 text-sky-300">
                <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center float">{f.icon}</div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured products</h2>
          <span className="text-white/60 text-sm">Drag to explore • Hover to shake</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-2xl glass hover-glow transition-all">
              <div className={`absolute -inset-1 opacity-20 bg-gradient-to-r ${p.gradient} blur-2xl`} />
              <div className="relative p-6">
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">{p.badge}</span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-bold">{p.price}</span>
                  <button className="btn-primary hover-shake flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" /> Add to cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Turn your AI skills into products</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Upload files, set pricing, and start selling in minutes. No code required.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#products" className="btn-primary hover-shake">Start selling</a>
            <a href="#faq" className="btn-secondary hover-glow">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const qs = [
    { q: 'How do I deliver digital files?', a: 'Buyers receive instant access links and optional license keys right after checkout.' },
    { q: 'Can I refund customers?', a: 'Yes. Manage orders and issue refunds from your dashboard.' },
    { q: 'Is payment secure?', a: 'We use industry-standard processors with strong fraud protection.' },
  ]
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Frequently asked</h3>
          <p className="mt-3 text-white/70">Everything you need to know about selling digital AI products.</p>
          <ul className="mt-6 space-y-3">
            {qs.map((x, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-300 mt-1" />
                <div>
                  <p className="font-semibold">{x.q}</p>
                  <p className="text-white/70">{x.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 border border-white/10">
          <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-sky-500/20 p-6">
            <h4 className="font-semibold">Why creators choose us</h4>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
              <li className="hover-shake">• Fast checkout</li>
              <li className="hover-shake">• License keys</li>
              <li className="hover-shake">• Analytics</li>
              <li className="hover-shake">• Affiliate ready</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 text-white/60">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} AI Digital Store. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}
