"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Stethoscope, Award, Search, Filter, ChevronDown, ExternalLink, ArrowRight, MapPin, Phone, Clock } from 'lucide-react'

export default function DoctorsPage() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index")
          setVisibleCards((prev) => new Set([...prev, Number.parseInt(index)]))
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".doctor-card")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selectedCategory, searchQuery])

  const doctors = [
    {
      "id": 1,
      "name": "Prof. Dr. Abdul Hannan",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, FCPS(Ped), Trained in Epidem: & Biostat: (Pakistan), Fellow, Pediatric Cardiology (USA), Trained in Eco-cardiography (Madraz)",
      "image": "/images/package/Pro_Dr_Abdul_Hannad.jpg",
      "link": "https://pmchl.com/doctor-item/prof-dr-abdul-hannan/",
      "category_id": 15
    },
    {
      "id": 2,
      "name": "Prof. Dr. Md. Tazul Islam",
      "specialty": "Psychiatry",
      "qualifications": "MBBS, FCPS, Post Fellowship Training (Bangkok, Thailand), Post Fellowship Training JICA, Japan, World Bank Fellowship, Srilanka",
      "image": "/images/package/dr.-tazul.jpg",
      "link": "https://pmchl.com/doctor-item/professor-dr-md-tazul-islam/",
      "category_id": 11
    },
    {
      "id": 3,
      "name": "Prof. Dr. A.S.M. Qamrul Hasan",
      "specialty": "Neuro Surgery Specialist",
      "qualifications": "MBBS, MS (Neuro), WHO Fellow (Indoesia), Brain & Spine Specialist & Surgeon",
      "image": "/images/package/Prof_Dr_A_S_M_Kamrul_Hasan.jpg",
      "link": "https://pmchl.com/doctor-item/prof-dr-a-s-m-qamrul-hasan-2/",
      "category_id": 18
    },
    {
      "id": 4,
      "name": "Prof. Dr. Md. Abdus Salam",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, MS (General Surgery), General & Laparoscopic Surgeon",
      "image": "/images/package/Prof_Dr_M_A_Salaam.jpg",
      "link": "https://pmchl.com/doctor-item/prof-dr-md-abdus-salam/",
      "category_id": 38
    },
    {
      "id": 5,
      "name": "Prof. Dr. A, B, M, Younus",
      "specialty": "Blood Disease & Medicine Specialist",
      "qualifications": "MBBS (India), MPhil (Hons), FCPS (Hematology), Blood Cancer and Anemia Specialist Professor and former Chairman, Department of Hematology Bangabandhu Sheikh Mujib Medical University",
      "image": "/images/package/Prof.-Dr.-A-B-M-Younus.jpg",
      "link": "https://pmchl.com/doctor-item/prof-dr-a-b-m-younus/",
      "category_id": 46
    },
    {
      "id": 6,
      "name": "Professor (Dr.) Colonel Mohammad Nizamul Hossain Sowdagar",
      "specialty": "Cardiology Specialist",
      "qualifications": "MBBS (DU), D-Card(BSMMU), G-Med(AFMI) FCPS(Cardiology), FNIC (NHF&RI), FSCAI (USA)",
      "image": "/images/package/Professor_Dr._Colonel_Mohammad_Nizamul_Hossain_Sowdagar-transformed.jpeg",
      "link": "https://pmchl.com/doctor-item/professor-dr-colonel-mohammad-nizamul-hossain-sowdagar/",
      "category_id": 23
    },
    {
      "id": 7,
      "name": "Prof. Dr. G.M. Faruque",
      "specialty": "Opthalmology (Eye)",
      "qualifications": "MBBS, BCS, (Health), MS (Ophth), D.O. (DU)",
      "image": "/images/package/GM-Faruk.jpg",
      "link": "https://pmchl.com/doctor-item/professor-dr-g-m-faruque/",
      "category_id": 42
    },
    {
      "id": 8,
      "name": "Prof. Dr. Gobinda Chandra Saha",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, FCPS (Surgery), MS (General Surgery) FRCS (Glasgow, UK)",
      "image": "/images/package/Prof.-Dr.-Govinda-Chandra-Das-1.jpg",
      "link": "https://pmchl.com/doctor-item/professor-dr-gobinda-chandra-saha/",
      "category_id": 38
    },
    {
      "id": 9,
      "name": "Dr. Sk. Mahmud Hasan",
      "specialty": "Neuro Surgery Specialist",
      "qualifications": "MBBS (DMC), BCS (Health), MS (Neurosurgery), National Institute of Neuroscience Hospital, Dhaka",
      "image": "/images/package/dr.-Sheikh-mahmud.jpg",
      "link": "https://pmchl.com/doctor-item/dr-sk-mahmud-hasan/",
      "category_id": 18
    },
    {
      "id": 10,
      "name": "Dr. Md. Mahmud Hasan",
      "specialty": "Urology Specialist",
      "qualifications": "MBBS, BCS (Health) MS (Urology) Assistant Professor",
      "image": "/images/package/Mahmud-Hasan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-mahmud-hasan/",
      "category_id": 28
    },
    {
      "id": 11,
      "name": "Dr. Abul Hasnat Russel",
      "specialty": "Neuro Medicine Specialist",
      "qualifications": "MBBS, BCS (Health), MD (Neurology) Sir Salimullah Medical College Mitford Hospital, Dhaka Medicine & Neuromedicine Specialist Consultant",
      "image": "/images/package/Dr.Hasnat.jpg",
      "link": "https://pmchl.com/doctor-item/dr-abul-hasnat-russeldr-abul-hasnat-russel-mbbs-bcs-health-md-neurology-sir-salimullah-medical-college-mitford-hospital-dhaka-medicine-neuromedicine-specialist-consultant-visiting-hour-sa/",
      "category_id": 24
    },
    {
      "id": 12,
      "name": "Dr. Mahfuza Akter",
      "specialty": "Opthalmology (Eye)",
      "qualifications": "MBBS (Dhaka), BCS (Health), DO (DU), FCPS (Eye)",
      "image": "/images/package/Mahfuza-Akter.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mahfuza-akter/",
      "category_id": 42
    },
    {
      "id": 13,
      "name": "Dr. Md. Zahidul Hasan",
      "specialty": "Child Specialist",
      "qualifications": "MBBS,DCH, MCPS(Pead), FCPS (Neonatal)",
      "image": "/images/package/Jahidul.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-zahidul-hasan/",
      "category_id": 15
    },
    {
      "id": 14,
      "name": "DR. Md. Afruzul Alom",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, MS (Pediatric surgery)",
      "image": "/images/package/Dr_Afruzul.jpg",
      "link": "https://pmchl.com/doctor-item/dr-aysha-afroz/",
      "category_id": 15
    },
    {
      "id": 15,
      "name": "Dr. Md. Habibur Rahman",
      "specialty": "Cardiology Specialist",
      "qualifications": "MBBS, MD(Cardiology)",
      "image": "/images/package/Habibur-Rahman-Sir-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-habibur-rahman/",
      "category_id": 23
    },
    {
      "id": 16,
      "name": "Dr. Md. Mijanur Rahman",
      "specialty": "ENT Specialist",
      "qualifications": "MBBS, BCS (Health), MS (ENT) BSMMU",
      "image": "/images/package/Mijanur-Rahman.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-mijanur-rahman/",
      "category_id": 19
    },
    {
      "id": 17,
      "name": "Dr. Md. Masudur Rahman",
      "specialty": "Medicine & Chest Specialist",
      "qualifications": "MBBS,BCS (Health), CCD (Birdem), FCPS (Medicine)",
      "image": "/images/package/Masudur-Rahman-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-amina-khan/",
      "category_id": 20
    },
    {
      "id": 18,
      "name": "Alhaj Dr. Kamrun Nahar",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS(Dhaka), DGO, MS(Gynae)",
      "image": "/images/package/Dr_Kamrun_Nahar.jpg",
      "link": "https://pmchl.com/doctor-item/alhaj-dr-kamrun-nahar/",
      "category_id": 16
    },
    {
      "id": 19,
      "name": "Assoc. Prof. Dr. Begum Shamsun-Naher Shirin",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, MS (Gynae & Obs)",
      "image": "/images/package/Shamsun_Nahar_Shirin.jpg",
      "link": "https://pmchl.com/doctor-item/dr-begum-shamsun-naher-shirin-2/",
      "category_id": 16
    },
    {
      "id": 20,
      "name": "Dr. Mst. Nurjahan Begum",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, FCPS, (Gynae & Obs) Surgeon & Infertility Specialist",
      "image": "/images/package/Dr.-Mst.-Nurjahan-Begum.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mst-nurjahan-begum/",
      "category_id": 16
    },
    {
      "id": 21,
      "name": "Dr. Nazia Sultana",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS (D.U), FCPS (Obs.& Gynae) Laparoscopic Surgeon & Infertility Specialist",
      "image": "/images/package/Dr.-Nazia-Sultana.jpg",
      "link": "https://pmchl.com/doctor-item/dr-nazia-sultana-2/",
      "category_id": 16
    },
    {
      "id": 22,
      "name": "Dr. Mitra Biswas",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, FCPS (Obs & Gynae)",
      "image": "/images/package/Dr.-Mitra-Biswas.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mitra-biswas/",
      "category_id": 16
    },
    {
      "id": 23,
      "name": "Asst. Prof. Dr. Rifat Sultana (Shawon)",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, FCPS, (Gynae & Obs)",
      "image": "/images/package/Dr.-Rifat-Sultana.jpg",
      "link": "https://pmchl.com/doctor-item/dr-rifat-sultana-shawon/",
      "category_id": 16
    },
    {
      "id": 24,
      "name": "Dr. Shafinaz Mehzabin",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS (DMC), FCPS (Gynae & Obs), BCS (Health)",
      "image": "/images/package/Safina-Mehzabin.jpg",
      "link": "https://pmchl.com/doctor-item/dr-shafinaz-mehzabin/",
      "category_id": 16
    },
    {
      "id": 25,
      "name": "Dr. Md. Mahbub Elahi",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "M.B.B.S, (DMC) F.C.P.S (Surgery)",
      "image": "/images/package/Mahbub-Alahi.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-mahbub-elahi/",
      "category_id": 38
    },
    {
      "id": 26,
      "name": "Dr. Sheikh Mostafa Ali",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, D-Ortho",
      "image": "/images/package/SHeikh-Mostafa-Ali.jpg",
      "link": "https://pmchl.com/doctor-item/dr-sheikh-mostafa-ali/",
      "category_id": 38
    },
    {
      "id": 27,
      "name": "Dr. S. M. Iftekhar Uddin Sagor",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, BCS (Health), MCPS, FCPS",
      "image": "/images/package/Dr_Iftekhar_uddin_sagor_1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-s-m-iftekhar-uddin-sagor/",
      "category_id": 38
    },
    {
      "id": 28,
      "name": "Dr. Umama Islam",
      "specialty": "Eye Specialist",
      "qualifications": "MBBS, MS(Ophthalmology)",
      "image": "/images/package/Umama-Islam-2.jpg",
      "link": "https://pmchl.com/doctor-item/dr-umama-islam/",
      "category_id": 31
    },
    {
      "id": 29,
      "name": "Dr. S. M. Zakaria Hossain",
      "specialty": "Pediatrics",
      "qualifications": "MBBS, CCD (BIRDEM), BCS (Health), MD (Paediatrics)",
      "image": "/images/package/ZAKARIA-HOSSAIN.jpg",
      "link": "https://pmchl.com/doctor-item/dr-s-m-zakaria-hossain/",
      "category_id": 35
    },
    {
      "id": 30,
      "name": "Dr. Md. Emdadul Haque Bhuiyan",
      "specialty": "Orthopedic Specialist",
      "qualifications": "MBBS(DMC), BCS(Health),MS(Ortho, NITOR)",
      "image": "/images/package/Emdadul-Haque-Bhuiyan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-emdadul-haque-bhuiyan-mbbsdmc-bcshealthmsortho-nitor/",
      "category_id": 27
    },
    {
      "id": 31,
      "name": "Dr. Md. Nur Alam Mohim",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, BCS(Health), FCPS(Surgery), FACS(Americal), F-MAS(India)",
      "image": "/images/package/Dr_nur_Alom_Mohin-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-nur-alam-mohim/",
      "category_id": 15
    },
    {
      "id": 32,
      "name": "Dr. Md. Jahirul Huq Buyan",
      "specialty": "Orthopedic Specialist",
      "qualifications": "MBBS, BCS(Health), MPH, MS(Ortho)",
      "image": "/images/package/Dr_Jahirul_Haque_Bhuiyan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-emdadul-haque-bhuiyan/",
      "category_id": 27
    },
    {
      "id": 33,
      "name": "Dr. Muhammad Eathasamul Haque",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS (CMC), FCS (Surgery), M. Med (Surgery)",
      "image": "/images/package/Ehteshamul_Haque.jpg",
      "link": "https://pmchl.com/doctor-item/dr-muhammad-eathasamul-haque/",
      "category_id": 38
    },
    {
      "id": 34,
      "name": "Lt. Col. Dr. Salahuddin Ahmed",
      "specialty": "Orthopedic Specialist",
      "qualifications": "MBBS, MS (Ortho), NITOR, PBGMS Specialist in Orthopedics, Trauma, Spine, Paralysis",
      "image": "/images/package/Salauddin-1.jpg",
      "link": "https://pmchl.com/doctor-item/lt-col-dr-salahuddin-ahmed/",
      "category_id": 27
    },
    {
      "id": 35,
      "name": "Dr. Ajit Kumar Roy",
      "specialty": "ENT Specialist",
      "qualifications": "MBBS, DA (DU), MS (ENT)",
      "image": "/images/package/Arjit-Kumar-Roy.jpg",
      "link": "https://pmchl.com/doctor-item/dr-ajit-kumar-roy/",
      "category_id": 19
    },
    {
      "id": 36,
      "name": "Dr. Md. Shah Alam Samim",
      "specialty": "ENT Specialist",
      "qualifications": "MBBS (Dhaka), DLO (DMC), FCPS (ENT)-Course",
      "image": "/images/package/Shamim.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-shah-alam-samim/",
      "category_id": 19
    },
    {
      "id": 37,
      "name": "Dr. Nazim-Al-Azad",
      "specialty": "Medicine & Chest Specialist",
      "qualifications": "MBBS, BCS,MD-Internal Medicine (BSMMU),Medicine Specialist",
      "image": "/images/package/Dr_nazim_Al_Azad.jpg",
      "link": "https://pmchl.com/doctor-item/dr-nazim-al-azad/",
      "category_id": 20
    },
    {
      "id": 38,
      "name": "Dr. A. K. M Ferdous Rahman",
      "specialty": "Critical Care Medicine Specialist",
      "qualifications": "MBBS (CMC), BCS (Health) MD (Critical Care Medicine)",
      "image": "/images/package/Dr_Ferdous_Rahman.jpg",
      "link": "https://pmchl.com/doctor-item/dr-a-k-m-ferdous-rahman/",
      "category_id": 12
    },
    {
      "id": 39,
      "name": "Dr. Mohammad Shah Jamal",
      "specialty": "Liver & Gastroenterology Specialist",
      "qualifications": "MBBS, FCPS (Med), MD (Gastro)",
      "image": "/images/package/Shah-Jamal.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mohammad-shah-jamal/",
      "category_id": 22
    },
    {
      "id": 40,
      "name": "Dr. Md. Al-Mahmud",
      "specialty": "Nephrology Specialist",
      "qualifications": "MBBS (Dhaka), BCS (Health), MD (Nephrology)",
      "image": "/images/package/Al_Mahmud.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-al-mahmud/",
      "category_id": 25
    },
    {
      "id": 41,
      "name": "Dr. Md. Amzad Hossain",
      "specialty": "Skin & VD Specialist",
      "qualifications": "MBBS, BCS(Health) DDV (DU), DBGM",
      "image": "/images/package/Amzad-Hossain-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-amzad-hossain/",
      "category_id": 26
    },
    {
      "id": 42,
      "name": "Asso. Prof. Dr. Md. Nazmul Hossain",
      "specialty": "Pediatrics",
      "qualifications": "MBBS, MD (Paediatrics) Fellowship Training in Paediatric Cardilogy (NSH, India) Associate Professor (Paedi)",
      "image": "/images/package/Nazmul-Hossain.jpg",
      "link": "https://pmchl.com/doctor-item/asso-prof-dr-md-nazmul-hossain/",
      "category_id": 35
    },
    {
      "id": 43,
      "name": "Asst. Prof. Dr. Habiba Shamim Sultana (Daisy)",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, MS (Gynaecology & Obstetrics) BCS (Health), MMEd (BSMMU)",
      "image": "/images/package/Daizy.jpg",
      "link": "https://pmchl.com/doctor-item/assistant-professor-dr-habiba-shamim-sultana-daisy/",
      "category_id": 16
    },
    {
      "id": 44,
      "name": "Asso. Prof. Dr. Munni Momotaz",
      "specialty": "Burn, Plastic & Cosmetic Surgery Specialist",
      "qualifications": "MBBS, FCPS(Surgery), MS(Plastic Surgery)",
      "image": "/images/package/Dr_Munni_Momtaz.jpg",
      "link": "https://pmchl.com/doctor-item/asso-prof-dr-munni-momotaz/",
      "category_id": 30
    },
    {
      "id": 45,
      "name": "Asst. Prof. Dr. Nurul Alam",
      "specialty": "Burn, Plastic & Cosmetic Surgery Specialist",
      "qualifications": "MBBS,BCS,MS(Plastic Surgery)",
      "image": "/images/package/Nurul-Alam.jpg",
      "link": "https://pmchl.com/doctor-item/asst-prof-dr-nurul-alam/",
      "category_id": 30
    },
    {
      "id": 46,
      "name": "Dr. Ponkaj Naha",
      "specialty": "Liver & Gastroenterology Specialist",
      "qualifications": "MBBS, BCS (Health) MD (Hepatology) BSMMU",
      "image": "/images/package/Pankaj-Saha.jpg",
      "link": "https://pmchl.com/doctor-item/dr-ponkaj-naha/",
      "category_id": 22
    },
    {
      "id": 47,
      "name": "Dr. Md. Masum Uddin",
      "specialty": "Physiotherapy Specialist",
      "qualifications": "MBBS (Dhaka), BCS (Health) FCPS (Physical Medicine),MACP (America)",
      "image": "/images/package/Masum-Uddin-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-masum-uddin/",
      "category_id": 33
    },
    {
      "id": 48,
      "name": "Dr. Md. Nasir Uddin Mollah (BulBul)",
      "specialty": "Skin & VD Specialist",
      "qualifications": "MBBS (Dhaka), MCPS (Skin & Sex), DDV (Skin & Sex), BSMMU (Ex-PG Hospital), FCPS ((Skin & Sex-Final P",
      "image": "/images/package/Bulbul-2.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-nasir-uddin-mollah-bulbul/",
      "category_id": 26
    },
    {
      "id": 49,
      "name": "Dr. Md. Nasir Uddin (Kajal)",
      "specialty": "Urology Specialist",
      "qualifications": "MBBS, FCPS (Surgery), MS (Urology)",
      "image": "/images/package/Nasir-Uddin-Kajal.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-nasir-uddin-kajal/",
      "category_id": 28
    },
    {
      "id": 50,
      "name": "Dr. Amanat Hasan (Shohel)",
      "specialty": "Cardiology Specialist",
      "qualifications": "MBBS, MD (Cardiology), MACP (USA), BCS (Health) CCD (BIRDEM), FCPS (Medicine Part- 2)",
      "image": "/images/package/Dr.-Amanat-Hasan-Shohel-2.jpg",
      "link": "https://pmchl.com/doctor-item/dr-amanat-hasan-shohel/",
      "category_id": 23
    },
    {
      "id": 51,
      "name": "Dr. Rahat Bin Habib",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, BCS (Health) MD (Child)",
      "image": "/images/package/Dr_Rahat_Bin_Habib.jpg",
      "link": "https://pmchl.com/doctor-item/dr-rahat-bin-habib/",
      "category_id": 15
    },
    {
      "id": 52,
      "name": "Dr. Md. Mahabub Alam (Khokan)",
      "specialty": "Orthopedic Specialist",
      "qualifications": "MBBS (RMC), BCS (Health) FCPS (Ortho) D-Ortho (DMC) Fellow AOA Trauma (India)",
      "image": "/images/package/Screenshot_1-2.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-mahabub-alam-khokan/",
      "category_id": 27
    },
    {
      "id": 53,
      "name": "Dr. A. Hasnat Shaheen",
      "specialty": "Diabetes",
      "qualifications": "MBBS, DEM, MPH",
      "image": "/images/package/Shahin.jpg",
      "link": "https://pmchl.com/doctor-item/dr-a-hasnat-shaheen/",
      "category_id": 60
    },
    {
      "id": 54,
      "name": "Dr. Papri Nasrin",
      "specialty": "Blood Disease & Medicine Specialist",
      "qualifications": "MBBS, BCS(Health), MD(Hematology), FCPS(Medicine, FP)",
      "image": "/images/package/Papri-Nasrin.jpg",
      "link": "https://pmchl.com/doctor-item/dr-papri-nasrin/",
      "category_id": 46
    },
    {
      "id": 55,
      "name": "Dr. Sania Akhter",
      "specialty": "Skin & VD Specialist",
      "qualifications": "MBBS, BCS (Health) MD (Dermatology & Venereology)- BSMMU",
      "image": "/images/package/Sania-Akter.jpg",
      "link": "https://pmchl.com/doctor-item/dr-sania-akhter/",
      "category_id": 26
    },
    {
      "id": 56,
      "name": "Dr. Rasheduzzaman Khan",
      "specialty": "Neonatology Specialist",
      "qualifications": "MBBS, BCS (Health), FCPS (Paed.) DCH (Dhaka Shishu Hospital)",
      "image": "/images/package/Rasheduzzaman-Khan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-rasheduzzaman-khan/",
      "category_id": 36
    },
    {
      "id": 57,
      "name": "Dr. Md. Kamrul Hasan",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, DCH (BSMMU)",
      "image": "/images/package/Dr_Kamrul_Hasan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-kamrul-hasan/",
      "category_id": 15
    },
    {
      "id": 58,
      "name": "Dr. Fahmida Afroz",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, MD (Pediatrics)",
      "image": "/images/package/Fahmida-Afroz.jpg",
      "link": "https://pmchl.com/doctor-item/dr-fahmida-afroz/",
      "category_id": 15
    },
    {
      "id": 59,
      "name": "Dr. Md. Ershad Hossain",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, MS(TS), BMDC Reg.: 34925",
      "image": "/images/package/Dr_Md_Ershad_Hossain.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-ershad-hossain/",
      "category_id": 38
    },
    {
      "id": 60,
      "name": "Dr. A.Q.M. Ashraful Haque",
      "specialty": "Blood Disease & Medicine Specialist",
      "qualifications": "MBBS, BCS (Health), MD (Haematology)",
      "image": "/images/package/Dr_Ashraful_Islam.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-nasir-uddin-kajal-2/",
      "category_id": 46
    },
    {
      "id": 61,
      "name": "Dr. A.H.M. Aslam-Ul-Haque",
      "specialty": "Nephrology Specialist",
      "qualifications": "MBBS (Dhaka), BCS (Health), MD (Paediatric Nephrology)",
      "image": "/images/package/Aslam-Ul-Haque.jpg",
      "link": "https://pmchl.com/doctor-item/dr-a-h-m-aslam-ul-haque/",
      "category_id": 25
    },
    {
      "id": 62,
      "name": "Dr. Mohammad Habibur Rahman",
      "specialty": "Dental Specialist",
      "qualifications": "BDS (Dhaka) MHE (DU) PGDHE (DU)",
      "image": "/images/package/Dr_Habibur_Rahman-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mohammad-habibur-rahman/",
      "category_id": 32
    },
    {
      "id": 63,
      "name": "Dr. Tamanna Ahmed",
      "specialty": "Burn, Plastic & Cosmetic Surgery Specialist",
      "qualifications": "MBBS, MS (Plastic Surgery)",
      "image": "/images/package/Dr_Tamanna.jpg",
      "link": "https://pmchl.com/doctor-item/dr-tamanna-ahmed-2/",
      "category_id": 30
    },
    {
      "id": 64,
      "name": "Dr. Tanjum Akter Monika",
      "specialty": "Dental Specialist",
      "qualifications": "BDS(Dhaka), PGT(Oral & Maxillofacial Surgery), DMCH",
      "image": "/images/package/Dr_Tanjum_Akter_Monika.jpg",
      "link": "https://pmchl.com/doctor-item/dr-tanjum-akter-monika/",
      "category_id": 32
    }
  ]

  const categories = [
    { id: 11, name: "Psychiatry", count: doctors.filter(d => d.category_id === 11).length },
    { id: 12, name: "Critical Care Medicine Specialist", count: doctors.filter(d => d.category_id === 12).length },
    { id: 15, name: "Child Specialist", count: doctors.filter(d => d.category_id === 15).length },
    { id: 16, name: "Gynae & Obs Specialist", count: doctors.filter(d => d.category_id === 16).length },
    { id: 18, name: "Neuro Surgery Specialist", count: doctors.filter(d => d.category_id === 18).length },
    { id: 19, name: "ENT Specialist", count: doctors.filter(d => d.category_id === 19).length },
    { id: 20, name: "Medicine & Chest Specialist", count: doctors.filter(d => d.category_id === 20).length },
    { id: 22, name: "Liver & Gastroenterology Specialist", count: doctors.filter(d => d.category_id === 22).length },
    { id: 23, name: "Cardiology Specialist", count: doctors.filter(d => d.category_id === 23).length },
    { id: 24, name: "Neuro Medicine Specialist", count: doctors.filter(d => d.category_id === 24).length },
    { id: 25, name: "Nephrology Specialist", count: doctors.filter(d => d.category_id === 25).length },
    { id: 26, name: "Skin & VD Specialist", count: doctors.filter(d => d.category_id === 26).length },
    { id: 27, name: "Orthopedic Specialist", count: doctors.filter(d => d.category_id === 27).length },
    { id: 28, name: "Urology Specialist", count: doctors.filter(d => d.category_id === 28).length },
    { id: 30, name: "Burn, Plastic & Cosmetic Surgery Specialist", count: doctors.filter(d => d.category_id === 30).length },
    { id: 31, name: "Eye Specialist", count: doctors.filter(d => d.category_id === 31).length },
    { id: 32, name: "Dental Specialist", count: doctors.filter(d => d.category_id === 32).length },
    { id: 33, name: "Physiotherapy Specialist", count: doctors.filter(d => d.category_id === 33).length },
    { id: 35, name: "Pediatrics", count: doctors.filter(d => d.category_id === 35).length },
    { id: 36, name: "Neonatology Specialist", count: doctors.filter(d => d.category_id === 36).length },
    { id: 38, name: "General & Laparoscopic Surgery", count: doctors.filter(d => d.category_id === 38).length },
    { id: 42, name: "Opthalmology (Eye)", count: doctors.filter(d => d.category_id === 42).length },
    { id: 46, name: "Blood Disease & Medicine Specialist", count: doctors.filter(d => d.category_id === 46).length },
    { id: 60, name: "Diabetes", count: doctors.filter(d => d.category_id === 60).length }
  ]

  // Filter doctors based on category and search
  const filteredDoctors = doctors.filter((doctor) => {
    const category = categories.find(cat => cat.id === doctor.category_id)?.name
    const matchesCategory = selectedCategory === "all" || category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.qualifications.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Expert Doctors
            <span className="block text-[#b8e6ea]">& Specialists</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
            Meet our team of highly qualified medical professionals dedicated to providing exceptional care across various specialties.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search doctors, specialties, or qualifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 cursor-glow"
              />
            </div>
          </div>
        </div>
      </section>

    

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor, index) => {
              const category = categories.find(cat => cat.id === doctor.category_id)?.name
              const isVisible = visibleCards.has(index)

              return (
                <div
                  key={doctor.id}
                  data-index={index}
                  className={`doctor-card medical-card medical-card-hover group cursor-interactive cursor-magnetic cursor-glow bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 border border-gray-100 hover:border-[#017381]/20 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Doctor Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Specialty Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#017381]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                        {doctor.specialty}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>

                    {/* Doctor Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#b8e6ea] transition-colors duration-300 line-clamp-2">
                        {doctor.name}
                      </h3>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{doctor.qualifications}</p>

                    {/* Specialty */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Specialty:</h4>
                      <span className="px-3 py-1 bg-[#017381]/10 text-[#017381] rounded-full text-xs font-medium">
                        {doctor.specialty}
                      </span>
                    </div>
                   {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/doctor/${doctor.id}`}
                        className="flex-1 bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-center cursor-magnetic cursor-pulse medical"
                      >
                        View Profile
                      </Link>
                      </div>
              
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No doctors found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-magnetic"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}