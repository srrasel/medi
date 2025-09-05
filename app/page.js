
import HospitalHeroSection from "@/components/HospitalHeroSection";
import ServicesSection from "@/components/ServicesSection";
import MedicalDepartments from "@/components/MedicalDepartments";

import Banner from "@/components/Banner";
import DoctorsSection from "@/components/DoctorsSection";
import BlogSection from "@/components/BlogSection";
import CorporateClients from "@/components/Corporate-clients";
import InitialPopup from "@/components/initial-popup";
import QuickAccessSection from "@/components/QuickAccessSection";
export default function Home() {
  return (
    <>
 
     <HospitalHeroSection />
     <QuickAccessSection />
     <ServicesSection />
     <MedicalDepartments />
  
     <Banner/>
     <DoctorsSection />
     <BlogSection />
     <CorporateClients />
     <InitialPopup />
    </>
    
  );
}
