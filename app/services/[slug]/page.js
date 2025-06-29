import ServicePageClient from "./ServicePageClient"

const services = [
  {
    title: "ICU",
    description:
      "Intensive Care Unit providing critical care for life-threatening conditions with advanced monitoring systems.",
    image_url: "/images/ICU-Final.jpeg",
    read_more_link: "/services/icu",
    icon: "Heart",
    category: "Critical Care",
    slug: "icu",
  },
  {
    title: "CCU",
    description:
      "Coronary Care Unit specialized in treating heart conditions with state-of-the-art cardiac monitoring.",
    image_url: "/images/CCU-Final.jpeg",
    read_more_link: "/services/ccu",
    icon: "Activity",
    category: "Cardiac Care",
    slug: "ccu",
  },
  {
    title: "NICU",
    description: "Neonatal Intensive Care Unit providing specialized care for premature and critically ill newborns.",
    image_url: "/images/NICU-Final.jpeg",
    read_more_link: "/services/nicu",
    icon: "Baby",
    category: "Neonatal Care",
    slug: "nicu",
  },
  {
    title: "PICU",
    description:
      "Pediatric Intensive Care Unit offering comprehensive critical care services for children and infants.",
    image_url: "/images/464683711_1058648339603436_1958753658212568146_n-1.jpg",
    read_more_link: "/services/picu",
    icon: "Users",
    category: "Pediatric Care",
    slug: "picu",
  },
  {
    title: "Dialysis",
    description: "Advanced dialysis services for patients with kidney failure, providing life-sustaining treatment.",
    image_url: "/images/Dialysis-1-scaled.jpg",
    read_more_link: "/services/dialysis",
    icon: "Droplets",
    category: "Nephrology",
    slug: "dialysis",
  },
  {
    title: "Physiotherapy",
    description: "Comprehensive physiotherapy services for rehabilitation, pain management, and mobility improvement.",
    image_url: "/images/Physioteraphy-scaled.jpg",
    read_more_link: "/services/physiotherapy",
    icon: "Dumbbell",
    category: "Rehabilitation",
    slug: "physiotherapy",
  },
  {
    title: "Endoscopy",
    description: "Advanced endoscopic procedures for diagnosis and treatment of gastrointestinal conditions.",
    image_url: "/images/Endoscopy-scaled.jpg",
    read_more_link: "/services/endoscopy",
    icon: "Search",
    category: "Diagnostics",
    slug: "endoscopy",
  },
  {
    title: "CT-Scan",
    description: "High-resolution CT scanning services for accurate diagnosis and detailed imaging.",
    image_url: "/images/CT-Scan-scaled.jpg",
    read_more_link: "/services/ct-scan",
    icon: "Scan",
    category: "Imaging",
    slug: "ct-scan",
  },
  {
    title: "Cash & Billing",
    description: "Streamlined billing and payment services with transparent pricing and multiple payment options.",
    image_url: "/images/Cash-Billing-scaled.jpg",
    read_more_link: "/services/cash-billing",
    icon: "CreditCard",
    category: "Administrative",
    slug: "cash-billing",
  },
]

export default async function ServicePage({ params }) {
  return <ServicePageClient params={params} services={services} />
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}
