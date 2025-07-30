"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  GraduationCap,
  User,
  Rocket,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  Settings,
  Users,
  TrendingUp,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight,
  Eye,
  Download,
  Star,
  Building,
  Target,
  Zap,
  Menu,
} from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentProject, setCurrentProject] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const [currentSkillCategory, setCurrentSkillCategory] = useState(0)

  const nextSkillCategory = () => {
    setCurrentSkillCategory((prev) => (prev + 1) % skillCategories.length)
  }

  const prevSkillCategory = () => {
    setCurrentSkillCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length)
  }

  const skillCategories = [
    {
      title: "7+ Years Experience",
      subtitle: "Expert Level",
      gradient: "gradient-purple",
      textGradient: "text-gradient-purple",
      skills: [
        { name: "HTML5", icon: Code, level: 95 },
        { name: "CSS3", icon: Palette, level: 95 },
        { name: "JavaScript", icon: Code, level: 90 },
        { name: "PHP", icon: Server, level: 92 },
        { name: "MySQL", icon: Database, level: 88 },
        { name: "WordPress", icon: Globe, level: 98 },
      ],
    },
    {
      title: "4+ Years Experience",
      subtitle: "Advanced Level",
      gradient: "gradient-blue",
      textGradient: "text-gradient-blue",
      skills: [
        { name: "React", icon: Code, level: 85 },
        { name: "Redux", icon: Settings, level: 80 },
        { name: "ES6+", icon: Code, level: 88 },
        { name: "Webpack", icon: Settings, level: 75 },
        { name: "Gulp", icon: Settings, level: 78 },
        { name: "Git", icon: Github, level: 85 },
      ],
    },
    {
      title: "3+ Years Experience",
      subtitle: "Intermediate Level",
      gradient: "gradient-green",
      textGradient: "text-gradient-green",
      skills: [
        { name: "Node.js", icon: Server, level: 80 },
        { name: "Express", icon: Server, level: 78 },
        { name: "MongoDB", icon: Database, level: 75 },
        { name: "Sass", icon: Palette, level: 85 },
      ],
    },
  ]

  const projects = [
    {
      title: "Job Pulling Website",
      subtitle: "International Nurse Society",
      url: "jobs.internationalnursesociety.com",
      description:
        "Advanced job portal with automated listings, intelligent filtering, and real-time search capabilities. Features custom WordPress plugin architecture with REST API integrations.",
      longDescription:
        "A comprehensive job portal solution built for the International Nurse Society, featuring automated job pulling from multiple sources, advanced filtering systems, and real-time search capabilities. The platform includes custom user dashboards, application tracking, and integrated communication tools.",
      tech: ["WordPress", "PHP", "MySQL", "REST API", "jQuery", "Bootstrap"],
      features: [
        "Automated Job Pulling",
        "Advanced Search & Filters",
        "User Dashboard",
        "Application Tracking",
        "Email Notifications",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Job+Portal+Dashboard",
      demoImages: [
        "/placeholder.svg?height=300&width=500&text=Job+Listings+Page",
        "/placeholder.svg?height=300&width=500&text=Search+Results",
        "/placeholder.svg?height=300&width=500&text=User+Dashboard",
      ],
      category: "Web Application",
      year: "2023",
      client: "International Nurse Society",
      gradient: "gradient-purple",
    },
    {
      title: "GolfAsian Travel Platform",
      subtitle: "Multilingual Tourism Site",
      url: "golfasian.de",
      description:
        "Sophisticated multilingual travel platform for golf tourism with integrated booking systems, payment gateways, and dynamic package management for German and international markets.",
      longDescription:
        "A premium travel platform specializing in golf tourism across Asia. Features multilingual support (German/English), dynamic package creation, integrated booking systems, and comprehensive payment gateway integration. Built with performance optimization for international audiences.",
      tech: ["WordPress", "WooCommerce", "WPML", "Payment Gateway", "Custom Theme", "PHP"],
      features: ["Multilingual Support", "Dynamic Packages", "Booking System", "Payment Integration", "SEO Optimized"],
      image: "/placeholder.svg?height=400&width=600&text=Golf+Travel+Platform",
      demoImages: [
        "/placeholder.svg?height=300&width=500&text=Homepage+Hero",
        "/placeholder.svg?height=300&width=500&text=Package+Listings",
        "/placeholder.svg?height=300&width=500&text=Booking+Process",
      ],
      category: "E-commerce",
      year: "2022",
      client: "GolfAsian",
      gradient: "gradient-blue",
    },
    {
      title: "Hotel Booking System",
      subtitle: "Custom Reservation Platform",
      description:
        "Enterprise-level hotel booking solution with real-time availability, calendar synchronization, multiple payment gateways, and comprehensive management dashboard.",
      longDescription:
        "A complete hotel management and booking system featuring real-time room availability, calendar synchronization with major booking platforms, multiple payment gateway support, and a comprehensive admin dashboard for property management.",
      tech: ["WordPress", "Custom Plugin", "Calendar API", "Payment Integration", "React", "PHP"],
      features: [
        "Real-time Availability",
        "Calendar Sync",
        "Multi-payment Support",
        "Admin Dashboard",
        "Mobile Responsive",
      ],
      image: "/placeholder.svg?height=400&width=600&text=Hotel+Booking+System",
      demoImages: [
        "/placeholder.svg?height=300&width=500&text=Booking+Calendar",
        "/placeholder.svg?height=300&width=500&text=Room+Selection",
        "/placeholder.svg?height=300&width=500&text=Admin+Dashboard",
      ],
      category: "SaaS Platform",
      year: "2023",
      client: "Hospitality Group",
      gradient: "gradient-green",
    },
    {
      title: "E-commerce Optimization Suite",
      subtitle: "Performance Enhancement Platform",
      description:
        "Advanced WooCommerce optimization platform that improved site performance by 60% and increased conversion rates through intelligent caching and UX enhancements.",
      longDescription:
        "A comprehensive e-commerce optimization suite that dramatically improves WooCommerce performance through intelligent caching, database optimization, and UX enhancements. Features automated performance monitoring and conversion rate optimization tools.",
      tech: ["WooCommerce", "Redis", "CDN Integration", "Performance Optimization", "Analytics", "A/B Testing"],
      features: [
        "Performance Monitoring",
        "Intelligent Caching",
        "UX Optimization",
        "A/B Testing",
        "Analytics Dashboard",
      ],
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Optimization",
      demoImages: [
        "/placeholder.svg?height=300&width=500&text=Performance+Dashboard",
        "/placeholder.svg?height=300&width=500&text=Analytics+Overview",
        "/placeholder.svg?height=300&width=500&text=Optimization+Results",
      ],
      category: "Optimization",
      year: "2023",
      client: "Multiple Clients",
      gradient: "gradient-red",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const navigationItems = ["About", "Experience", "Projects", "Skills", "Contact"]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-dark-primary min-h-screen">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 glass backdrop-blur-lg border-b border-slate-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 gradient-purple rounded-xl flex items-center justify-center shadow-lg animate-glow">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div className="text-2xl font-bold text-white">Rasel Hossain</div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-white hover:bg-white/10">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white hover:text-indigo-400 transition-colors font-medium relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ))}
                </div>

                {/* Mobile Navigation */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-white">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-dark-secondary border-slate-800">
                    <div className="flex flex-col space-y-6 mt-8">
                      <div className="flex items-center space-x-3 pb-6 border-b border-slate-800">
                        <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center shadow-lg animate-glow">
                          <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <div className="text-xl font-bold text-white">Rasel Hossain</div>
                      </div>
                      {navigationItems.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          onClick={closeMobileMenu}
                          className="text-lg text-white hover:text-indigo-400 transition-colors font-medium py-2"
                        >
                          {item}
                        </a>
                      ))}
                      <div className="pt-6 border-t border-slate-800">
                        <div className="flex space-x-4">
                          <Button variant="ghost" size="icon" asChild className="hover:bg-white/10">
                            <a href="https://github.com/srrasel" target="_blank" rel="noopener noreferrer">
                              <Github className="w-5 h-5 text-white" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="icon" asChild className="hover:bg-white/10">
                            <a href="https://www.linkedin.com/in/rasel555/" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="w-5 h-5 text-white" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="icon" asChild className="hover:bg-white/10">
                            <a href="mailto:srrasel22a@gmail.com">
                              <Mail className="w-5 h-5 text-white" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-primary relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Right Side - Profile Image (First on mobile) */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 gradient-purple rounded-full transform rotate-6 animate-pulse opacity-20"></div>
                  <div className="absolute inset-0 gradient-blue rounded-full transform -rotate-6 animate-pulse delay-1000 opacity-20"></div>

                  {/* Main image container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-indigo-500/50 shadow-2xl animate-glow">
                      <img
                        src="/placeholder.svg?height=400&width=400&text=Rasel+Hossain+Professional+Photo"
                        alt="Rasel Hossain - WordPress Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center shadow-lg animate-float">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 gradient-green rounded-2xl flex items-center justify-center shadow-lg animate-float delay-500">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-1/2 -left-8 w-12 h-12 gradient-blue rounded-xl flex items-center justify-center shadow-lg animate-float delay-1000">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Side - Text Content (Second on mobile) */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-1 w-12 gradient-purple"></div>
                    <span className="text-gray-400 font-medium tracking-wider uppercase text-sm">
                      Welcome to my portfolio
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-white">Rasel Hossain</span>
                  </h1>
                  <div className="space-y-4">
                    <p className="text-2xl md:text-3xl text-gradient-purple font-semibold">
                      Senior WordPress & Full-Stack Developer
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                      Crafting exceptional digital experiences with 7+ years of expertise in WordPress development,
                      full-stack solutions, and team leadership. Specialized in building scalable, high-performance web
                      applications that drive business growth.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gradient-purple hover:opacity-90 text-white px-8 py-3 text-lg font-semibold shadow-lg animate-glow"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 px-8 py-3 text-lg font-semibold bg-transparent"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-indigo-400" />
                    Jashore, Bangladesh
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                    srrasel22a@gmail.com
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-2 text-indigo-400" />
                    +8801739566298
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-white/10 text-white hover:text-indigo-400"
                  >
                    <a href="https://github.com/srrasel" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-white/10 text-white hover:text-indigo-400"
                  >
                    <a href="https://www.linkedin.com/in/rasel555/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-white/10 text-white hover:text-indigo-400"
                  >
                    <a href="mailto:srrasel22a@gmail.com">
                      <Mail className="w-6 h-6" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "7+", label: "Years Experience", icon: TrendingUp, gradient: "gradient-purple" },
                { number: "50+", label: "Projects Completed", icon: Rocket, gradient: "gradient-blue" },
                { number: "15+", label: "Websites Maintained", icon: Globe, gradient: "gradient-green" },
                { number: "50%", label: "Cost Reduction", icon: Target, gradient: "gradient-red" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-glow`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
              <div className="w-32 h-1 gradient-purple mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Passionate about creating digital solutions that make a difference
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Card className="border-0 shadow-xl bg-dark-card border-slate-800 hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center mr-4 shadow-lg animate-glow">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Senior WordPress & Full-Stack Developer with 7+ years of experience building responsive,
                      high-performance websites and custom solutions. Expertise in WordPress theme/plugin development,
                      REST API integrations, and eCommerce (WooCommerce).
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Passionate about clean code, UX optimization, and cost-effective cloud infrastructure. Proven
                      track record in leading development teams and delivering projects that enhance user engagement and
                      operational efficiency.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Building,
                    title: "Team Leadership",
                    desc: "Led development teams across multiple projects",
                    gradient: "gradient-purple",
                  },
                  {
                    icon: Zap,
                    title: "Performance",
                    desc: "50% infrastructure cost reduction achieved",
                    gradient: "gradient-green",
                  },
                  {
                    icon: Star,
                    title: "Quality Code",
                    desc: "Bug-free, maintainable solutions delivered",
                    gradient: "gradient-blue",
                  },
                  {
                    icon: Target,
                    title: "Results Driven",
                    desc: "30% UX improvement across projects",
                    gradient: "gradient-red",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-dark-card border-slate-800 hover-lift"
                  >
                    <div
                      className={`w-16 h-16 ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-glow`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Professional Experience</h2>
              <div className="w-32 h-1 gradient-blue mx-auto mb-8"></div>
            </div>
            <div className="space-y-12">
              <Card className="border-0 shadow-xl bg-dark-card border-slate-800 overflow-hidden hover-lift">
                <div className="gradient-purple p-8 text-white">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Dev Lead</h3>
                      <p className="text-xl text-white/80">ONEMCO</p>
                    </div>
                    <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      Mar 2020 – Present
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                      <ul className="space-y-4">
                        {[
                          {
                            icon: Rocket,
                            text: "Spearheaded end-to-end website development, reducing cloud infrastructure costs by 50%",
                          },
                          {
                            icon: Code,
                            text: "Built headless WordPress CMS using React JS, improving frontend performance",
                          },
                          { icon: Settings, text: "Developed custom themes/plugins and integrated REST APIs" },
                          {
                            icon: Users,
                            text: "Led team maintaining 15+ websites with bug-free code and security updates",
                          },
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <item.icon className="w-4 h-4 text-purple-400" />
                            </div>
                            <span className="text-gray-300">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {["WordPress", "React", "PHP", "MySQL", "REST API", "AWS", "Docker", "Git"].map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-dark-card border-slate-800 overflow-hidden hover-lift">
                <div className="gradient-blue p-8 text-white">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Frontend Developer</h3>
                      <p className="text-xl text-white/80">Digitallyseo</p>
                    </div>
                    <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      Jan 2017 – Jan 2019
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                      <ul className="space-y-4">
                        {[
                          {
                            icon: Smartphone,
                            text: "Designed and coded 20+ responsive websites, improving mobile UX scores by 30%",
                          },
                          {
                            icon: Users,
                            text: "Collaborated with cross-functional teams to deliver projects on time and within budget",
                          },
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <item.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <span className="text-gray-300">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Sass", "Gulp", "Git"].map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section with Carousel */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Featured Projects</h2>
              <div className="w-32 h-1 gradient-green mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Showcasing innovative solutions that drive business growth and user engagement
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl bg-dark-card border border-slate-800">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentProject * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="p-8 md:p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          <div className="space-y-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <Badge
                                variant="secondary"
                                className={`${project.gradient} text-white hover:opacity-90 border-0`}
                              >
                                {project.category}
                              </Badge>
                              <span className="text-gray-500">{project.year}</span>
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-xl text-indigo-400 mb-4">{project.subtitle}</p>
                            {project.url && (
                              <div className="flex items-center text-gray-400 mb-6">
                                <Globe className="w-4 h-4 mr-2" />
                                {project.url}
                              </div>
                            )}
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">{project.description}</p>
                            <div className="space-y-4">
                              <h4 className="font-semibold text-white">Key Features:</h4>
                              <div className="grid grid-cols-1 gap-2">
                                {project.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                    <span className="text-gray-300">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-400">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex space-x-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button className={`${project.gradient} hover:opacity-90 text-white animate-glow`}>
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Demo
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-dark-card border-slate-800">
                                  <DialogHeader>
                                    <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
                                    <DialogDescription className="text-lg text-gray-300">
                                      {project.longDescription}
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div className="grid gap-4">
                                      <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full rounded-lg shadow-lg"
                                      />
                                      <div className="grid md:grid-cols-3 gap-4">
                                        {project.demoImages.map((img, imgIndex) => (
                                          <img
                                            key={imgIndex}
                                            src={img || "/placeholder.svg"}
                                            alt={`${project.title} demo ${imgIndex + 1}`}
                                            className="w-full rounded-lg shadow-md"
                                          />
                                        ))}
                                      </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                      <div>
                                        <h4 className="font-semibold mb-3 text-white">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                          {project.tech.map((tech, techIndex) => (
                                            <Badge
                                              key={techIndex}
                                              variant="secondary"
                                              className="bg-indigo-500/20 text-indigo-400"
                                            >
                                              {tech}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-3 text-white">Project Details</h4>
                                        <div className="space-y-2 text-sm text-gray-300">
                                          <div>
                                            <strong>Client:</strong> {project.client}
                                          </div>
                                          <div>
                                            <strong>Year:</strong> {project.year}
                                          </div>
                                          <div>
                                            <strong>Category:</strong> {project.category}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              {project.url && (
                                <Button
                                  variant="outline"
                                  asChild
                                  className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 bg-transparent"
                                >
                                  <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Site
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                          <div className="relative">
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800">
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-light border-slate-600 hover:bg-white/10 text-white bg-transparent"
                onClick={prevProject}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-light border-slate-600 hover:bg-white/10 text-white bg-transparent"
                onClick={nextProject}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProject ? "bg-indigo-500" : "bg-gray-600"
                    }`}
                    onClick={() => setCurrentProject(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modern Skills Section - Carousel */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Technical Expertise</h2>
              <div className="w-32 h-1 gradient-red mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive skill set developed through years of hands-on experience
              </p>
            </div>

            {/* Skills Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl bg-dark-card border border-slate-800">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSkillCategory * 100}%)` }}
                >
                  {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="w-full flex-shrink-0">
                      <div className="p-8 md:p-12">
                        {/* Category Header */}
                        <div className="text-center mb-12">
                          <div className="inline-flex flex-col items-center space-y-4 mb-8">
                            <div
                              className={`w-20 h-20 ${category.gradient} rounded-3xl flex items-center justify-center shadow-2xl animate-glow`}
                            >
                              <Award className="w-10 h-10 text-white" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-4xl font-bold text-white">{category.title}</h3>
                              <p className="text-xl text-gray-400 font-medium">{category.subtitle}</p>
                            </div>
                            <div className={`h-1 w-24 ${category.gradient} rounded-full`}></div>
                          </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {category.skills.map((skill, skillIndex) => {
                            const IconComponent = skill.icon
                            return (
                              <div
                                key={skillIndex}
                                className="group bg-dark-primary border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover-lift"
                              >
                                <div className="flex items-center mb-6">
                                  <div
                                    className={`w-16 h-16 ${category.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-glow`}
                                  >
                                    <IconComponent className="w-8 h-8 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-xl font-bold text-white mb-1">{skill.name}</h4>
                                    <div className="text-sm text-gray-400 font-medium">{skill.level}% Proficiency</div>
                                  </div>
                                </div>

                                {/* Modern Progress Bar */}
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-400">Skill Level</span>
                                    <span className={`text-sm font-bold ${category.textGradient}`}>{skill.level}%</span>
                                  </div>
                                  <div className="relative">
                                    <div className="w-full bg-slate-800 rounded-full h-4 shadow-inner">
                                      <div
                                        className={`${category.gradient} h-4 rounded-full transition-all duration-1000 shadow-lg relative overflow-hidden`}
                                        style={{ width: `${skill.level}%` }}
                                      >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-between text-xs text-gray-500 font-medium">
                                    <span>Beginner</span>
                                    <span>Intermediate</span>
                                    <span>Expert</span>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        {/* Category Stats */}
                        <div className="mt-12 text-center">
                          <div className="inline-flex items-center space-x-8 bg-dark-primary border border-slate-800 rounded-2xl px-8 py-4 shadow-lg">
                            <div className="text-center">
                              <div className={`text-3xl font-bold ${category.textGradient}`}>
                                {category.skills.length}
                              </div>
                              <div className="text-sm text-gray-400 font-medium">Technologies</div>
                            </div>
                            <div className="w-px h-12 bg-slate-700"></div>
                            <div className="text-center">
                              <div className={`text-3xl font-bold ${category.textGradient}`}>
                                {Math.round(
                                  category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length,
                                )}
                                %
                              </div>
                              <div className="text-sm text-gray-400 font-medium">Avg. Proficiency</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-light border-slate-600 hover:bg-white/10 text-white w-12 h-12 bg-transparent"
                onClick={prevSkillCategory}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-light border-slate-600 hover:bg-white/10 text-white w-12 h-12 bg-transparent"
                onClick={nextSkillCategory}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-3 mt-8">
                {skillCategories.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentSkillCategory
                        ? "bg-indigo-500 scale-125 shadow-lg"
                        : "bg-gray-600 hover:bg-indigo-400"
                    }`}
                    onClick={() => setCurrentSkillCategory(index)}
                  />
                ))}
              </div>

              {/* Category Navigation Pills */}
              <div className="flex justify-center mt-6">
                <div className="flex space-x-2 bg-dark-primary border border-slate-800 rounded-2xl p-2 shadow-lg">
                  {skillCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSkillCategory(index)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        index === currentSkillCategory
                          ? `${category.gradient} text-white shadow-lg scale-105`
                          : "text-gray-400 hover:bg-white/5"
                      }`}
                    >
                      <div className="text-sm">
                        <div className="font-bold">{category.title.split(" ")[0]}</div>
                        <div className="text-xs opacity-80">{category.subtitle.split(" ")[0]}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Education & Certifications</h2>
              <div className="w-32 h-1 gradient-orange mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl bg-dark-card border-slate-800 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mr-6 shadow-lg animate-glow">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">B.E.D in Education</h3>
                      <p className="text-lg text-indigo-400">National University</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    Graduated 2019
                  </div>
                  <p className="text-gray-300">
                    Bachelor's degree in Education with focus on pedagogical methods and educational technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-dark-card border-slate-800 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center mr-6 shadow-lg animate-glow">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                      <p className="text-lg text-green-400">Free Code Camp</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Award className="w-5 h-5 mr-2" />
                    Certified Professional
                  </div>
                  <p className="text-gray-300">
                    Comprehensive certification in modern frontend development libraries and frameworks including React,
                    Redux, and modern JavaScript.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Let's Work Together</h2>
              <div className="w-32 h-1 gradient-pink mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Ready to bring your next project to life? Let's discuss how I can help you build something
                extraordinary.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "srrasel22a@gmail.com",
                  href: "mailto:srrasel22a@gmail.com",
                  gradient: "gradient-purple",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+8801739566298",
                  href: "tel:+8801739566298",
                  gradient: "gradient-blue",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  value: "Connect with me",
                  href: "https://www.linkedin.com/in/rasel555/",
                  gradient: "gradient-green",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "View my work",
                  href: "https://github.com/srrasel",
                  gradient: "gradient-red",
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-dark-card border-slate-800 hover-lift"
                >
                  <div
                    className={`w-16 h-16 ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-glow`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{contact.title}</h3>
                  <Button variant="link" asChild className="p-0 h-auto text-gray-400 hover:text-indigo-400">
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {contact.value}
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center shadow-lg animate-glow">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <h3 className="text-3xl font-bold text-gradient-purple">Rasel Hossain</h3>
              </div>
              <p className="text-gray-400 mb-8 text-lg">Senior WordPress & Full-Stack Developer</p>
              <div className="flex justify-center space-x-6 mb-12">
                {[
                  { icon: Github, href: "https://github.com/srrasel", gradient: "gradient-purple" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rasel555/", gradient: "gradient-blue" },
                  { icon: Mail, href: "mailto:srrasel22a@gmail.com", gradient: "gradient-green" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-white/10 text-white hover:text-indigo-400"
                  >
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  </Button>
                ))}
              </div>
              <Separator className="mb-8 bg-slate-800" />
              <p className="text-gray-500">
                © 2025 Rasel Hossain. All rights reserved. Crafted with passion using Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
