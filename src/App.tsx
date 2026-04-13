import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  ShoppingCart, 
  Code2, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Menu, 
  X,
  ExternalLink,
  ChevronRight,
  MessageSquare,
  Zap,
  Globe,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: "AI Shopping Agents",
    description: "Intelligent conversational agents that guide customers through their shopping journey, increasing conversion rates by up to 40%.",
    icon: <Bot className="w-10 h-10 text-brand-primary" />,
    features: ["Natural Language Processing", "Personalized Recommendations", "24/7 Customer Support"]
  },
  {
    title: "Managed Ecommerce",
    description: "End-to-end ecommerce management powered by AI to optimize inventory, pricing, and marketing strategies automatically.",
    icon: <ShoppingCart className="w-10 h-10 text-brand-primary" />,
    features: ["Dynamic Pricing", "Inventory Forecasting", "Automated Marketing"]
  },
  {
    title: "Product Development",
    description: "Custom software and hardware product development with a focus on AI integration and scalable architecture.",
    icon: <Code2 className="w-10 h-10 text-brand-primary" />,
    features: ["Full-stack Development", "Hardware Prototyping", "Scalable Cloud Infrastructure"]
  },
  {
    title: "AI Integrations",
    description: "Seamlessly integrate cutting-edge AI models into your existing business workflows to boost productivity.",
    icon: <Cpu className="w-10 h-10 text-brand-primary" />,
    features: ["LLM Integration", "Workflow Automation", "Custom AI Training"]
  }
];

const projects = [
  {
    title: "ShopSmart AI",
    category: "AI Shopping Agent",
    image: "https://picsum.photos/seed/ai-shop/800/600",
    description: "A next-gen shopping assistant for luxury retail brands."
  },
  {
    title: "EcoFlow Logistics",
    category: "Managed Ecommerce",
    image: "https://picsum.photos/seed/logistics/800/600",
    description: "AI-driven supply chain optimization for sustainable brands."
  },
  {
    title: "VisionCore SDK",
    category: "Product Development",
    image: "https://picsum.photos/seed/sdk/800/600",
    description: "Computer vision SDK for industrial automation."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, RetailHub",
    content: "TSM Digital Solutions transformed our customer experience. Their AI shopping agents are remarkably intuitive.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "CTO, TechFlow",
    content: "The level of technical expertise in AI integration is unmatched. They delivered exactly what we needed, ahead of schedule.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  }
];

const blogPosts = [
  {
    title: "The Future of AI in Ecommerce",
    date: "March 15, 2024",
    excerpt: "How generative AI is reshaping the way we shop online and what it means for retailers.",
    image: "https://picsum.photos/seed/blog1/800/600"
  },
  {
    title: "Optimizing Workflows with LLMs",
    date: "March 10, 2024",
    excerpt: "Practical steps to integrate Large Language Models into your daily business operations.",
    image: "https://picsum.photos/seed/blog2/800/600"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-extrabold tracking-tighter">
              TSM <span className="text-brand-primary">DIGITAL</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-6">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-medium text-slate-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white w-full">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-brand-primary/10 text-brand-primary border-none mb-6 px-4 py-1.5 text-sm font-medium">
                  AI-Powered Solutions for the Future
                </Badge>
                <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] tracking-tighter">
                  Innovating with <span className="text-gradient">Intelligence</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  TSM Digital Solutions develops cutting-edge AI agents and ecommerce platforms 
                  that transform how businesses operate and grow in the digital age.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto">
                    Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto">
                    View Our Work
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-20 relative"
              >
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                  <img 
                    src="https://picsum.photos/seed/tech-hero/1920/1080" 
                    alt="AI Technology" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-dark/40 to-transparent" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 hidden lg:block">
                  <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 animate-bounce-slow">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Conversion Rate</p>
                      <p className="text-2xl font-bold">+42%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://picsum.photos/seed/about-us/800/800" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-primary rounded-3xl -z-10" />
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl mb-8">Empowering Businesses Through <span className="text-brand-primary">AI Innovation</span></h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Founded on the principle that technology should be a catalyst for growth, 
                  TSM Digital Solutions bridges the gap between complex AI capabilities and 
                  practical business applications.
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Our team of experts specializes in creating bespoke solutions that don't just 
                  automate tasks, but provide deep insights and meaningful customer interactions.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-bold text-brand-primary mb-2">150+</p>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-brand-primary mb-2">98%</p>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl mb-6">Our Specialized <span className="text-brand-primary">Services</span></h2>
              <p className="text-lg text-slate-600">
                We provide a comprehensive suite of AI-powered solutions designed to 
                elevate your business in the modern digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full border-slate-200 hover:border-brand-primary/50 transition-all duration-300 group">
                    <CardHeader>
                      <div className="mb-6 p-3 bg-slate-50 rounded-2xl w-fit group-hover:bg-brand-primary/10 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-brand-dark text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl mb-6">Featured <span className="text-brand-secondary">Projects</span></h2>
                <p className="text-lg text-slate-400">
                  A glimpse into the innovative solutions we've built for our global partners.
                </p>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-dark rounded-full">
                View All Projects
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-dark to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <Badge className="bg-brand-secondary text-brand-dark mb-3 border-none">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl mb-6">What Our <span className="text-brand-primary">Clients Say</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t) => (
                <Card key={t.name} className="border-slate-200 bg-slate-50">
                  <CardContent className="pt-10">
                    <MessageSquare className="w-10 h-10 text-brand-primary/20 mb-6" />
                    <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <p className="font-bold text-slate-900">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* News/Blog Section */}
        <section id="news" className="section-padding bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-20">
              <h2 className="text-4xl md:text-5xl">Latest <span className="text-brand-primary">Insights</span></h2>
              <Button variant="ghost" className="text-brand-primary hover:text-brand-primary hover:bg-brand-primary/5">
                Read Blog <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {blogPosts.map((post) => (
                <article key={post.title} className="group cursor-pointer">
                  <div className="aspect-video rounded-3xl overflow-hidden mb-8 shadow-lg">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-slate-500 font-medium">{post.date}</span>
                    <div className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-sm text-brand-primary font-bold uppercase tracking-wider">AI Trends</span>
                  </div>
                  <h3 className="text-3xl mb-4 group-hover:text-brand-primary transition-colors">{post.title}</h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-brand-primary font-bold h-auto">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-5xl mb-8">Let's Build Something <span className="text-brand-primary">Great</span></h2>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                  Ready to transform your business with AI? Get in touch with our experts 
                  today for a free consultation.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-brand-primary w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Email Us</p>
                      <p className="text-xl font-bold">hello@tsmdigital.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-brand-primary w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-xl font-bold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-primary w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Visit Us</p>
                      <p className="text-xl font-bold">123 AI Plaza, Tech City, TC 94103</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 aspect-video rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden relative">
                  <img 
                    src="https://picsum.photos/seed/map/800/450" 
                    alt="Office Location" 
                    className="w-full h-full object-cover grayscale opacity-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                      <div className="w-3 h-3 bg-brand-primary rounded-full animate-ping" />
                      <span className="font-bold">Our Headquarters</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 md:p-12 rounded-3xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">First Name</label>
                      <Input placeholder="John" className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Last Name</label>
                      <Input placeholder="Doe" className="rounded-xl h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Service Interested In</label>
                    <select className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>AI Shopping Agents</option>
                      <option>Managed Ecommerce</option>
                      <option>Product Development</option>
                      <option>AI Integrations</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <Textarea placeholder="Tell us about your project..." className="rounded-xl min-h-[150px]" />
                  </div>
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white h-14 rounded-xl text-lg font-bold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                  <Zap className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-display font-extrabold tracking-tighter">
                  TSM <span className="text-brand-primary">DIGITAL</span>
                </span>
              </a>
              <p className="text-lg text-slate-600 max-w-md leading-relaxed mb-8">
                Pioneering the future of business with intelligent AI solutions 
                and world-class digital experiences.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-slate-400">Company</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-slate-600 hover:text-brand-primary transition-colors">About Us</a></li>
                <li><a href="#projects" className="text-slate-600 hover:text-brand-primary transition-colors">Our Work</a></li>
                <li><a href="#news" className="text-slate-600 hover:text-brand-primary transition-colors">Latest News</a></li>
                <li><a href="#contact" className="text-slate-600 hover:text-brand-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-slate-400">Services</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-slate-600 hover:text-brand-primary transition-colors">AI Shopping Agents</a></li>
                <li><a href="#services" className="text-slate-600 hover:text-brand-primary transition-colors">Managed Ecommerce</a></li>
                <li><a href="#services" className="text-slate-600 hover:text-brand-primary transition-colors">Product Development</a></li>
                <li><a href="#services" className="text-slate-600 hover:text-brand-primary transition-colors">AI Integrations</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-slate-200 gap-6">
            <p className="text-sm text-slate-500">
              © 2024 TSM Digital Solutions. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
