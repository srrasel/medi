"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
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
import Myphoto from "@/public/my-photo.jpeg"

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
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50/50 dark:bg-blue-950/20",
      borderColor: "border-blue-200/50 dark:border-blue-800/50",
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
      color: "from-emerald-600 to-emerald-800",
      bgColor: "bg-emerald-50/50 dark:bg-emerald-950/20",
      borderColor: "border-emerald-200/50 dark:border-emerald-800/50",
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
      color: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-50/50 dark:bg-slate-950/20",
      borderColor: "border-slate-200/50 dark:border-slate-800/50",
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
      image: "/nurse-society.png",
      demoImages: [
        "/nurse2.png",
        "/nurse3.png",
        "/nurse4.png",
      ],
      category: "Web Application",
      year: "2025",
      client: "International Nurse Society",
    },
    {
      title: "GolfAsian Travel Platform",
      subtitle: "Multilingual Tourism Site",
      url: "golfasian.de",
      description:
        "Sophisticated multilingual travel platform for golf tourism with integrated booking systems, payment gateways, and dynamic package management for German and international markets.",
      longDescription:
        "A premium travel platform specializing in golf tourism across Asia. Features multilingual support (German/English), dynamic package creation, integrated booking systems, and comprehensive payment gateway integration. Built with performance optimization for international audiences.",
      tech: ["WordPress", "WooCommerce", "WPML", "Custom Theme", "PHP"],
      features: ["Multilingual Support", "Dynamic Packages", "Booking System", "SEO Optimized"],
      image: "/golf.png",
      demoImages: [
        "/golf2.png",
        "/golf3.png",
        "/golf4.png",
      ],
      category: "E-commerce",
      year: "2024",
      client: "GolfAsian",
    },
    {
  "title": "Popular Silk",
  "subtitle": "Premium Web Design Team",
  "description": "We Build Custom Websites That Elevate Your Brand.",
  "longDescription": "At Popular Silk, we specialize in crafting bespoke websites tailored to your business needs. From responsive design and branding to advanced SEO, we provide end-to-end digital solutions that drive results. Whether you're launching a startup or scaling an enterprise, our creative team ensures your online presence stands out.",
  "tech": ["HTML5", "CSS3", "JavaScript", "WordPress", "React", "SEO Tools"],
  "features": [
    "Responsive Web Design",
    "Custom WordPress Development",
    "Branding & UI/UX Design",
    "Search Engine Optimization",
    "E-commerce Integration",
    "Performance Optimization"
  ],
  "image": "/silk.png",
  "demoImages": [
    "/silk2.png",
    "/silk3.png",
    "/silk4.png"
  ],
  "category": "Web Design Agency",
  "year": "2024",
  "client": "Multiple Global Clients"
},
    {
  "title": "GSWeblog",
  "subtitle": "The Simplest Website Building Platform",
  "description": "Custom Websites Made Effortless.",
  "longDescription": "GSWeblog is a next-gen website builder designed for simplicity and power. With no coding skills required, users can customize any template using an intuitive drag-and-drop interface. Build blogs, portfolios, business websites, or online stores quickly using a fast, responsive, and SEO-optimized platform. GS Builder makes professional website creation accessible to everyone.",
  "tech": ["JavaScript", "Wordpress", "Elementor", "Php", "Drag-and-Drop Builder", "SEO Optimization"],
  "features": [
    "Drag-and-Drop Template Editor",
    "Build Any Type of Website (Blog, Portfolio, eCommerce)",
    "SEO-Optimized Framework",
    "Fast Loading and Fully Responsive",
    "No Coding Required",
    "Live Preview & Publishing"
  ],
  "image": "/gswe.png",
  "demoImages": [
    "/gsweb.png",
    "/gsweb2.png",
    "/gsweb3.png"
  ],
  "category": "Website Builder Platform",
  "year": "2022",
  "client": "Internal Product by Popular Silk"
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
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">Rasel Hossain</div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Mobile Navigation */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-slate-900">
                    <div className="flex flex-col space-y-6 mt-8">
                      <div className="flex items-center space-x-3 pb-6 border-b border-slate-200 dark:border-slate-700">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white">Rasel Hossain</div>
                      </div>
                      {navigationItems.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          onClick={closeMobileMenu}
                          className="text-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                        >
                          {item}
                        </a>
                      ))}
                      <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex space-x-4">
                          <Button variant="ghost" size="icon" asChild>
                            <a href="https://github.com/srrasel" target="_blank" rel="noopener noreferrer">
                              <Github className="w-5 h-5" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <a href="https://www.linkedin.com/in/rasel555/" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="w-5 h-5" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <a href="mailto:srrasel22a@gmail.com">
                              <Mail className="w-5 h-5" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Right Side - Profile Image (First on mobile) */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/60 to-slate-300/60 dark:from-blue-800/60 dark:to-slate-700/60 rounded-full transform rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200/60 to-blue-300/60 dark:from-slate-700/60 dark:to-blue-800/60 rounded-full transform -rotate-6"></div>

                  {/* Main image container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <div className="w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                      <Image
                        src={Myphoto}
                        alt="Rasel Hossain - WordPress Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Side - Text Content (Second on mobile) */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                    <span className="text-slate-600 dark:text-slate-400 font-medium tracking-wider uppercase text-sm">
                      Welcome to my portfolio
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-slate-900 dark:text-white">Rasel Hossain</span>
                  </h1>
                  <div className="space-y-4">
                    <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold">
                      Senior WordPress & Full-Stack Developer
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                      Crafting exceptional digital experiences with 7+ years of expertise in WordPress development,
                      full-stack solutions, and team leadership. Specialized in building scalable, high-performance web
                      applications that drive business growth.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold shadow-lg"
                  >
                 
                    <Mail className="w-5 h-5 mr-2" />
                    
                    Get In Touch
                   
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 px-8 py-3 text-lg font-semibold bg-transparent"
                  >
                    <Download className="w-5 h-5 mr-2" />
                   <a href="http://srrasel.xyz/resume.pdf">Download CV</a> 
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Jashore, Bangladesh
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                    srrasel22a@gmail.com
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    +8801739566298
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  >
                    <a href="https://github.com/srrasel" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                  >
                    <a href="https://www.linkedin.com/in/rasel555/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400"
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "7+", label: "Years Experience", icon: TrendingUp, color: "from-blue-500 to-blue-700" },
                { number: "50+", label: "Projects Completed", icon: Rocket, color: "from-emerald-500 to-emerald-700" },
                { number: "15+", label: "Websites Maintained", icon: Globe, color: "from-slate-500 to-slate-700" },
                { number: "50%", label: "Cost Reduction", icon: Target, color: "from-blue-500 to-slate-700" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Passionate about creating digital solutions that make a difference
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-blue-950/30">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Summary</h3>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      Senior WordPress & Full-Stack Developer with 7+ years of experience building responsive,
                      high-performance websites and custom solutions. Expertise in WordPress theme/plugin development,
                      REST API integrations, and eCommerce (WooCommerce).
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
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
                    color: "from-blue-600 to-blue-800",
                  },
                  {
                    icon: Zap,
                    title: "Performance",
                    desc: "50% infrastructure cost reduction achieved",
                    color: "from-emerald-600 to-emerald-800",
                  },
                  {
                    icon: Star,
                    title: "Quality Code",
                    desc: "Bug-free, maintainable solutions delivered",
                    color: "from-slate-600 to-slate-800",
                  },
                  {
                    icon: Target,
                    title: "Results Driven",
                    desc: "30% UX improvement across projects",
                    color: "from-blue-600 to-slate-700",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-slate-800"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Professional Experience</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            </div>
            <div className="space-y-12">
              <Card className="border-0 shadow-xl bg-white dark:bg-slate-900 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Dev Lead</h3>
                      <p className="text-xl text-blue-100">ONEMCO</p>
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
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Achievements</h4>
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
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {["WordPress", "React", "PHP", "MySQL", "REST API", "AWS", "Docker", "Git"].map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white dark:bg-slate-900 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-white">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Frontend Developer</h3>
                      <p className="text-xl text-emerald-100">Digitallyseo</p>
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
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Achievements</h4>
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
                            <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <item.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Sass", "Gulp", "Git"].map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200"
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
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Showcasing innovative solutions that drive business growth and user engagement
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-blue-950/30">
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
                              <Badge variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700">
                                {project.category}
                              </Badge>
                              <span className="text-slate-500 dark:text-slate-400">{project.year}</span>
                            </div>
                            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">{project.subtitle}</p>
                            {project.url && (
                              <div className="flex items-center text-slate-500 dark:text-slate-400 mb-6">
                                <Globe className="w-4 h-4 mr-2" />
                                {project.url}
                              </div>
                            )}
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                              {project.description}
                            </p>
                            <div className="space-y-4">
                              <h4 className="font-semibold text-slate-900 dark:text-white">Key Features:</h4>
                              <div className="grid grid-cols-1 gap-2">
                                {project.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="border-blue-300 text-blue-700 dark:border-blue-600 dark:text-blue-300"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex space-x-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Demo
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                                    <DialogDescription className="text-lg">{project.longDescription}</DialogDescription>
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
                                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                          {project.tech.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary">
                                              {tech}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-3">Project Details</h4>
                                        <div className="space-y-2 text-sm">
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
                                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50 bg-transparent"
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
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg border-blue-200 hover:bg-blue-50"
                onClick={prevProject}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg border-blue-200 hover:bg-blue-50"
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
                      index === currentProject ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
                    }`}
                    onClick={() => setCurrentProject(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modern Skills Section - Carousel */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Technical Expertise</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive skill set developed through years of hands-on experience
              </p>
            </div>

            {/* Skills Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-slate-900">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSkillCategory * 100}%)` }}
                >
                  {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="w-full flex-shrink-0">
                      <div className={`p-8 md:p-12 bg-gradient-to-br ${category.bgColor}`}>
                        {/* Category Header */}
                        <div className="text-center mb-12">
                          <div className="inline-flex flex-col items-center space-y-4 mb-8">
                            <div
                              className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                            >
                              <Award className="w-10 h-10 text-white" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                                {category.subtitle}
                              </p>
                            </div>
                            <div className={`h-1 w-24 bg-gradient-to-r ${category.color} rounded-full`}></div>
                          </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {category.skills.map((skill, skillIndex) => {
                            const IconComponent = skill.icon
                            return (
                              <div
                                key={skillIndex}
                                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-100 dark:border-slate-700"
                              >
                                <div className="flex items-center mb-6">
                                  <div
                                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                  >
                                    <IconComponent className="w-8 h-8 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                      {skill.name}
                                    </h4>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                      {skill.level}% Proficiency
                                    </div>
                                  </div>
                                </div>

                                {/* Modern Progress Bar */}
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                      Skill Level
                                    </span>
                                    <span
                                      className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                                    >
                                      {skill.level}%
                                    </span>
                                  </div>
                                  <div className="relative">
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 shadow-inner">
                                      <div
                                        className={`bg-gradient-to-r ${category.color} h-4 rounded-full transition-all duration-1000 shadow-lg relative overflow-hidden`}
                                        style={{ width: `${skill.level}%` }}
                                      >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
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
                          <div className="inline-flex items-center space-x-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
                            <div className="text-center">
                              <div
                                className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                              >
                                {category.skills.length}
                              </div>
                              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Technologies</div>
                            </div>
                            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600"></div>
                            <div className="text-center">
                              <div
                                className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                              >
                                {Math.round(
                                  category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length,
                                )}
                                %
                              </div>
                              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                Avg. Proficiency
                              </div>
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-xl border-blue-200 hover:bg-blue-50 w-12 h-12"
                onClick={prevSkillCategory}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-xl border-blue-200 hover:bg-blue-50 w-12 h-12"
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
                        ? "bg-blue-600 scale-125 shadow-lg"
                        : "bg-slate-300 dark:bg-slate-600 hover:bg-blue-400"
                    }`}
                    onClick={() => setCurrentSkillCategory(index)}
                  />
                ))}
              </div>

              {/* Category Navigation Pills */}
              <div className="flex justify-center mt-6">
                <div className="flex space-x-2 bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg">
                  {skillCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSkillCategory(index)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        index === currentSkillCategory
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
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
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Education & Certifications</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-blue-950/30">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">B.E.D in Education</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400">National University</p>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    Graduated 2019
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Bachelor's degree in Education with focus on pedagogical methods and educational technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-slate-800 dark:to-emerald-950/30">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Frontend Development</h3>
                      <p className="text-lg text-emerald-600 dark:text-emerald-400">Free Code Camp</p>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
                    <Award className="w-5 h-5 mr-2" />
                    Certified Professional
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Comprehensive certification in modern frontend development libraries and frameworks including React,
                    Redux, and modern JavaScript.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Let's Work Together</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto mb-8"></div>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Ready to bring your next project to life? Let's discuss how I can help you build something
                extraordinary.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Mail, title: "Email", value: "srrasel22a@gmail.com", href: "mailto:srrasel22a@gmail.com" },
                { icon: Phone, title: "Phone", value: "+8801739566298", href: "tel:+8801739566298" },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  value: "Connect with me",
                  href: "https://www.linkedin.com/in/rasel555/",
                },
                { icon: Github, title: "GitHub", value: "View my work", href: "https://github.com/srrasel" },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="text-center p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{contact.title}</h3>
                  <Button variant="link" asChild className="p-0 h-auto text-slate-700 hover:text-blue-600">
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
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <h3 className="text-3xl font-bold">Rasel Hossain</h3>
              </div>
              <p className="text-slate-400 mb-8 text-lg">Senior WordPress & Full-Stack Developer</p>
              <div className="flex justify-center space-x-6 mb-12">
                {[
                  { icon: Github, href: "https://github.com/srrasel" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/rasel555/" },
                  { icon: Mail, href: "mailto:srrasel22a@gmail.com" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-blue-600/20 text-blue-400 hover:text-blue-300"
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
              <p className="text-slate-400">
                © 2025 Rasel Hossain. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
