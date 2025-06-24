import Header from "@/components/Header";
import HospitalHeroSection from "@/components/HospitalHeroSection";
import ServicesSection from "@/components/ServicesSection";
import MedicalDepartments from "@/components/MedicalDepartments";
import DoctorsSection from "@/components/DoctorsSection";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Header/>
     <HospitalHeroSection />
     <ServicesSection />
     <MedicalDepartments />
     <DoctorsSection />
     <BlogSection />
     <Footer />
    </>
    
  );
}
