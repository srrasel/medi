"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { Stethoscope, ExternalLink, ArrowLeft, Calendar, Clock, User, Mail, Phone, Send } from 'lucide-react'

export default function DoctorPage() {
  const router = useRouter()
  const { id } = useParams()

  const [doctor, setDoctor] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const doctors = [
    {
      "id": 1,
      "name": "Prof. Dr. Abdul Hannan",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, FCPS(Ped), Trained in Epidem: & Biostat: (Pakistan), Fellow, Pediatric Cardiology (USA), Trained in Eco-cardiography (Madraz)",
      "image": "https://pmchl.com/wp-content/uploads/Pro_Dr_Abdul_Hannad.jpg",
      "link": "https://pmchl.com/doctor-item/prof-dr-abdul-hannan/",
      "category_id": 15
    },
    {
      "id": 2,
      "name": "Prof. Dr. Md. Tazul Islam",
      "specialty": "Psychiatry",
      "qualifications": "MBBS, FCPS, Post Fellowship Training (Bangkok, Thailand), Post Fellowship Training JICA, Japan, World Bank Fellowship, Srilanka",
      "image": "https://pmchl.com/wp-content/uploads/dr.-tazul.jpg",
      "link": "https://pmchl.com/doctor-item/professor-dr-md-tazul-islam/",
      "category_id": 11
    },
    {
      "id": 3,
      "name": "Prof. Dr. A.S.M. Qamrul Hasan",
      "specialty": "Neuro Surgery Specialist",
      "qualifications": "MBBS, MS (Neuro), WHO Fellow (Indoesia), Brain & Spine Specialist & Surgeon",
      "image": "https://pmchl.com/wp-content/uploads/Prof_Dr_A_S_M_Kamrul_Hasan.jpg",
      "link": "https://pmchl.com/doctor-item/prof-dr-a-s-m-qamrul-hasan-2/",
      "category_id": 18
    },
    {
      "id": 4,
      "name": "Prof. Dr. Md. Abdus Salam",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, MS (General Surgery), General & Laparoscopic Surgeon",
      "image": "https://pmchl.com/wp-content/uploads/Prof_Dr_M_A_Salaam.jpg",
      "link": "https://pmchl.com/doctor-item/prof-dr-md-abdus-salam/",
      "category_id": 38
    },
    {
      "id": 5,
      "name": "Prof. Dr. A, B, M, Younus",
      "specialty": "Blood Disease & Medicine Specialist",
      "qualifications": "MBBS (India), MPhil (Hons), FCPS (Hematology), Blood Cancer and Anemia Specialist Professor and former Chairman, Department of Hematology Bangabandhu Sheikh Mujib Medical University",
      "image": "https://pmchl.com/wp-content/uploads/Prof.-Dr.-A-B-M-Younus.jpg",
      "link": "https://pmchl.com/doctor-item/prof-dr-a-b-m-younus/",
      "category_id": 46
    },
    {
      "id": 6,
      "name": "Professor (Dr.) Colonel Mohammad Nizamul Hossain Sowdagar",
      "specialty": "Cardiology Specialist",
      "qualifications": "MBBS (DU), D-Card(BSMMU), G-Med(AFMI) FCPS(Cardiology), FNIC (NHF&RI), FSCAI (USA)",
      "image": "https://pmchl.com/wp-content/uploads/Professor_Dr._Colonel_Mohammad_Nizamul_Hossain_Sowdagar-transformed.jpeg",
      "link": "https://pmchl.com/doctor-item/professor-dr-colonel-mohammad-nizamul-hossain-sowdagar/",
      "category_id": 23
    },
    {
      "id": 7,
      "name": "Prof. Dr. G.M. Faruque",
      "specialty": "Opthalmology (Eye)",
      "qualifications": "MBBS, BCS, (Health), MS (Ophth), D.O. (DU)",
      "image": "https://pmchl.com/wp-content/uploads/GM-Faruk.jpg",
      "link": "https://pmchl.com/doctor-item/professor-dr-g-m-faruque/",
      "category_id": 42
    },
    {
      "id": 8,
      "name": "Prof. Dr. Gobinda Chandra Saha",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, FCPS (Surgery), MS (General Surgery) FRCS (Glasgow, UK)",
      "image": "https://pmchl.com/wp-content/uploads/Prof.-Dr.-Govinda-Chandra-Das-1.jpg",
      "link": "https://pmchl.com/doctor-item/professor-dr-gobinda-chandra-saha/",
      "category_id": 38
    },
    {
      "id": 9,
      "name": "Dr. Sk. Mahmud Hasan",
      "specialty": "Neuro Surgery Specialist",
      "qualifications": "MBBS (DMC), BCS (Health), MS (Neurosurgery), National Institute of Neuroscience Hospital, Dhaka",
      "image": "https://pmchl.com/wp-content/uploads/dr.-Sheikh-mahmud.jpg",
      "link": "https://pmchl.com/doctor-item/dr-sk-mahmud-hasan/",
      "category_id": 18
    },
    {
      "id": 10,
      "name": "Dr. Md. Mahmud Hasan",
      "specialty": "Urology Specialist",
      "qualifications": "MBBS, BCS (Health) MS (Urology) Assistant Professor",
      "image": "https://pmchl.com/wp-content/uploads/Mahmud-Hasan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-mahmud-hasan/",
      "category_id": 28
    },
    {
      "id": 11,
      "name": "Dr. Abul Hasnat Russel",
      "specialty": "Neuro Medicine Specialist",
      "qualifications": "MBBS, BCS (Health), MD (Neurology) Sir Salimullah Medical College Mitford Hospital, Dhaka Medicine & Neuromedicine Specialist Consultant",
      "image": "https://pmchl.com/wp-content/uploads/Dr.Hasnat.jpg",
      "link": "https://pmchl.com/doctor-item/dr-abul-hasnat-russeldr-abul-hasnat-russel-mbbs-bcs-health-md-neurology-sir-salimullah-medical-college-mitford-hospital-dhaka-medicine-neuromedicine-specialist-consultant-visiting-hour-sa/",
      "category_id": 24
    },
    {
      "id": 12,
      "name": "Dr. Mahfuza Akter",
      "specialty": "Opthalmology (Eye)",
      "qualifications": "MBBS (Dhaka), BCS (Health), DO (DU), FCPS (Eye)",
      "image": "https://pmchl.com/wp-content/uploads/Mahfuza-Akter.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mahfuza-akter/",
      "category_id": 42
    },
    {
      "id": 13,
      "name": "Dr. Md. Zahidul Hasan",
      "specialty": "Child Specialist",
      "qualifications": "MBBS,DCH, MCPS(Pead), FCPS (Neonatal)",
      "image": "https://pmchl.com/wp-content/uploads/Jahidul.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-zahidul-hasan/",
      "category_id": 15
    },
    {
      "id": 14,
      "name": "DR. Md. Afruzul Alom",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, MS (Pediatric surgery)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Afruzul.jpg",
      "link": "https://pmchl.com/doctor-item/dr-aysha-afroz/",
      "category_id": 15
    },
    {
      "id": 15,
      "name": "Dr. Md. Habibur Rahman",
      "specialty": "Cardiology Specialist",
      "qualifications": "MBBS, MD(Cardiology)",
      "image": "https://pmchl.com/wp-content/uploads/Habibur-Rahman-Sir-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-habibur-rahman/",
      "category_id": 23
    },
    {
      "id": 16,
      "name": "Dr. Md. Mijanur Rahman",
      "specialty": "ENT Specialist",
      "qualifications": "MBBS, BCS (Health), MS (ENT) BSMMU",
      "image": "https://pmchl.com/wp-content/uploads/Mijanur-Rahman.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-mijanur-rahman/",
      "category_id": 19
    },
    {
      "id": 17,
      "name": "Dr. Md. Masudur Rahman",
      "specialty": "Medicine & Chest Specialist",
      "qualifications": "MBBS,BCS (Health), CCD (Birdem), FCPS (Medicine)",
      "image": "https://pmchl.com/wp-content/uploads/Masudur-Rahman-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-amina-khan/",
      "category_id": 20
    },
    {
      "id": 18,
      "name": "Alhaj Dr. Kamrun Nahar",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS(Dhaka), DGO, MS(Gynae)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Kamrun_Nahar.jpg",
      "link": "https://pmchl.com/doctor-item/alhaj-dr-kamrun-nahar/",
      "category_id": 16
    },
    {
      "id": 19,
      "name": "Assoc. Prof. Dr. Begum Shamsun-Naher Shirin",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, MS (Gynae & Obs)",
      "image": "https://pmchl.com/wp-content/uploads/Shamsun_Nahar_Shirin.jpg",
      "link": "https://pmchl.com/doctor-item/dr-begum-shamsun-naher-shirin-2/",
      "category_id": 16
    },
    {
      "id": 20,
      "name": "Dr. Mst. Nurjahan Begum",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, FCPS, (Gynae & Obs) Surgeon & Infertility Specialist",
      "image": "https://pmchl.com/wp-content/uploads/Dr.-Mst.-Nurjahan-Begum.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mst-nurjahan-begum/",
      "category_id": 16
    },
    {
      "id": 21,
      "name": "Dr. Nazia Sultana",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS (D.U), FCPS (Obs.& Gynae) Laparoscopic Surgeon & Infertility Specialist",
      "image": "https://pmchl.com/wp-content/uploads/Dr.-Nazia-Sultana.jpg",
      "link": "https://pmchl.com/doctor-item/dr-nazia-sultana-2/",
      "category_id": 16
    },
    {
      "id": 22,
      "name": "Dr. Mitra Biswas",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, FCPS (Obs & Gynae)",
      "image": "https://pmchl.com/wp-content/uploads/Dr.-Mitra-Biswas.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mitra-biswas/",
      "category_id": 16
    },
    {
      "id": 23,
      "name": "Asst. Prof. Dr. Rifat Sultana (Shawon)",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, FCPS, (Gynae & Obs)",
      "image": "https://pmchl.com/wp-content/uploads/Dr.-Rifat-Sultana.jpg",
      "link": "https://pmchl.com/doctor-item/dr-rifat-sultana-shawon/",
      "category_id": 16
    },
    {
      "id": 24,
      "name": "Dr. Shafinaz Mehzabin",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS (DMC), FCPS (Gynae & Obs), BCS (Health)",
      "image": "https://pmchl.com/wp-content/uploads/Safina-Mehzabin.jpg",
      "link": "https://pmchl.com/doctor-item/dr-shafinaz-mehzabin/",
      "category_id": 16
    },
    {
      "id": 25,
      "name": "Dr. Md. Mahbub Elahi",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "M.B.B.S, (DMC) F.C.P.S (Surgery)",
      "image": "https://pmchl.com/wp-content/uploads/Mahbub-Alahi.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-mahbub-elahi/",
      "category_id": 38
    },
    {
      "id": 26,
      "name": "Dr. Sheikh Mostafa Ali",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, D-Ortho",
      "image": "https://pmchl.com/wp-content/uploads/SHeikh-Mostafa-Ali.jpg",
      "link": "https://pmchl.com/doctor-item/dr-sheikh-mostafa-ali/",
      "category_id": 38
    },
    {
      "id": 27,
      "name": "Dr. S. M. Iftekhar Uddin Sagor",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, BCS (Health), MCPS, FCPS",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Iftekhar_uddin_sagor_1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-s-m-iftekhar-uddin-sagor/",
      "category_id": 38
    },
    {
      "id": 28,
      "name": "Dr. Umama Islam",
      "specialty": "Eye Specialist",
      "qualifications": "MBBS, MS(Ophthalmology)",
      "image": "https://pmchl.com/wp-content/uploads/Umama-Islam-2.jpg",
      "link": "https://pmchl.com/doctor-item/dr-umama-islam/",
      "category_id": 31
    },
    {
      "id": 29,
      "name": "Dr. S. M. Zakaria Hossain",
      "specialty": "Pediatrics",
      "qualifications": "MBBS, CCD (BIRDEM), BCS (Health), MD (Paediatrics)",
      "image": "https://pmchl.com/wp-content/uploads/ZAKARIA-HOSSAIN.jpg",
      "link": "https://pmchl.com/doctor-item/dr-s-m-zakaria-hossain/",
      "category_id": 35
    },
    {
      "id": 30,
      "name": "Dr. Md. Emdadul Haque Bhuiyan",
      "specialty": "Orthopedic Specialist",
      "qualifications": "MBBS(DMC), BCS(Health),MS(Ortho, NITOR)",
      "image": "https://pmchl.com/wp-content/uploads/Emdadul-Haque-Bhuiyan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-emdadul-haque-bhuiyan-mbbsdmc-bcshealthmsortho-nitor/",
      "category_id": 27
    },
    {
      "id": 31,
      "name": "Dr. Md. Nur Alam Mohim",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, BCS(Health), FCPS(Surgery), FACS(Americal), F-MAS(India)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_nur_Alom_Mohin-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-nur-alam-mohim/",
      "category_id": 15
    },
    {
      "id": 32,
      "name": "Dr. Md. Jahirul Huq Buyan",
      "specialty": "Orthopedic Specialist",
      "qualifications": "MBBS, BCS(Health), MPH, MS(Ortho)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Jahirul_Haque_Bhuiyan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-emdadul-haque-bhuiyan/",
      "category_id": 27
    },
    {
      "id": 33,
      "name": "Dr. Muhammad Eathasamul Haque",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS (CMC), FCS (Surgery), M. Med (Surgery)",
      "image": "https://pmchl.com/wp-content/uploads/Ehteshamul_Haque.jpg",
      "link": "https://pmchl.com/doctor-item/dr-muhammad-eathasamul-haque/",
      "category_id": 38
    },
    {
      "id": 34,
      "name": "Lt. Col. Dr. Salahuddin Ahmed",
      "specialty": "Orthopedic Specialist",
      "qualifications": "MBBS, MS (Ortho), NITOR, PBGMS Specialist in Orthopedics, Trauma, Spine, Paralysis",
      "image": "https://pmchl.com/wp-content/uploads/Salauddin-1.jpg",
      "link": "https://pmchl.com/doctor-item/lt-col-dr-salahuddin-ahmed/",
      "category_id": 27
    },
    {
      "id": 35,
      "name": "Dr. Ajit Kumar Roy",
      "specialty": "ENT Specialist",
      "qualifications": "MBBS, DA (DU), MS (ENT)",
      "image": "https://pmchl.com/wp-content/uploads/Arjit-Kumar-Roy.jpg",
      "link": "https://pmchl.com/doctor-item/dr-ajit-kumar-roy/",
      "category_id": 19
    },
    {
      "id": 36,
      "name": "Dr. Md. Shah Alam Samim",
      "specialty": "ENT Specialist",
      "qualifications": "MBBS (Dhaka), DLO (DMC), FCPS (ENT)-Course",
      "image": "https://pmchl.com/wp-content/uploads/Shamim.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-shah-alam-samim/",
      "category_id": 19
    },
    {
      "id": 37,
      "name": "Dr. Nazim-Al-Azad",
      "specialty": "Medicine & Chest Specialist",
      "qualifications": "MBBS, BCS,MD-Internal Medicine (BSMMU),Medicine Specialist",
      "image": "https://pmchl.com/wp-content/uploads/Dr_nazim_Al_Azad.jpg",
      "link": "https://pmchl.com/doctor-item/dr-nazim-al-azad/",
      "category_id": 20
    },
    {
      "id": 38,
      "name": "Dr. A. K. M Ferdous Rahman",
      "specialty": "Critical Care Medicine Specialist",
      "qualifications": "MBBS (CMC), BCS (Health) MD (Critical Care Medicine)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Ferdous_Rahman.jpg",
      "link": "https://pmchl.com/doctor-item/dr-a-k-m-ferdous-rahman/",
      "category_id": 12
    },
    {
      "id": 39,
      "name": "Dr. Mohammad Shah Jamal",
      "specialty": "Liver & Gastroenterology Specialist",
      "qualifications": "MBBS, FCPS (Med), MD (Gastro)",
      "image": "https://pmchl.com/wp-content/uploads/Shah-Jamal.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mohammad-shah-jamal/",
      "category_id": 22
    },
    {
      "id": 40,
      "name": "Dr. Md. Al-Mahmud",
      "specialty": "Nephrology Specialist",
      "qualifications": "MBBS (Dhaka), BCS (Health), MD (Nephrology)",
      "image": "https://pmchl.com/wp-content/uploads/Al_Mahmud.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-al-mahmud/",
      "category_id": 25
    },
    {
      "id": 41,
      "name": "Dr. Md. Amzad Hossain",
      "specialty": "Skin & VD Specialist",
      "qualifications": "MBBS, BCS(Health) DDV (DU), DBGM",
      "image": "https://pmchl.com/wp-content/uploads/Amzad-Hossain-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-amzad-hossain/",
      "category_id": 26
    },
    {
      "id": 42,
      "name": "Asso. Prof. Dr. Md. Nazmul Hossain",
      "specialty": "Pediatrics",
      "qualifications": "MBBS, MD (Paediatrics) Fellowship Training in Paediatric Cardilogy (NSH, India) Associate Professor (Paedi)",
      "image": "https://pmchl.com/wp-content/uploads/Nazmul-Hossain.jpg",
      "link": "https://pmchl.com/doctor-item/asso-prof-dr-md-nazmul-hossain/",
      "category_id": 35
    },
    {
      "id": 43,
      "name": "Asst. Prof. Dr. Habiba Shamim Sultana (Daisy)",
      "specialty": "Gynae & Obs Specialist",
      "qualifications": "MBBS, MS (Gynaecology & Obstetrics) BCS (Health), MMEd (BSMMU)",
      "image": "https://pmchl.com/wp-content/uploads/Daizy.jpg",
      "link": "https://pmchl.com/doctor-item/assistant-professor-dr-habiba-shamim-sultana-daisy/",
      "category_id": 16
    },
    {
      "id": 44,
      "name": "Asso. Prof. Dr. Munni Momotaz",
      "specialty": "Burn, Plastic & Cosmetic Surgery Specialist",
      "qualifications": "MBBS, FCPS(Surgery), MS(Plastic Surgery)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Munni_Momtaz.jpg",
      "link": "https://pmchl.com/doctor-item/asso-prof-dr-munni-momotaz/",
      "category_id": 30
    },
    {
      "id": 45,
      "name": "Asst. Prof. Dr. Nurul Alam",
      "specialty": "Burn, Plastic & Cosmetic Surgery Specialist",
      "qualifications": "MBBS,BCS,MS(Plastic Surgery)",
      "image": "https://pmchl.com/wp-content/uploads/Nurul-Alam.jpg",
      "link": "https://pmchl.com/doctor-item/asst-prof-dr-nurul-alam/",
      "category_id": 30
    },
    {
      "id": 46,
      "name": "Dr. Ponkaj Naha",
      "specialty": "Liver & Gastroenterology Specialist",
      "qualifications": "MBBS, BCS (Health) MD (Hepatology) BSMMU",
      "image": "https://pmchl.com/wp-content/uploads/Pankaj-Saha.jpg",
      "link": "https://pmchl.com/doctor-item/dr-ponkaj-naha/",
      "category_id": 22
    },
    {
      "id": 47,
      "name": "Dr. Md. Masum Uddin",
      "specialty": "Physiotherapy Specialist",
      "qualifications": "MBBS (Dhaka), BCS (Health) FCPS (Physical Medicine),MACP (America)",
      "image": "https://pmchl.com/wp-content/uploads/Masum-Uddin-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-masum-uddin/",
      "category_id": 33
    },
    {
      "id": 48,
      "name": "Dr. Md. Nasir Uddin Mollah (BulBul)",
      "specialty": "Skin & VD Specialist",
      "qualifications": "MBBS (Dhaka), MCPS (Skin & Sex), DDV (Skin & Sex), BSMMU (Ex-PG Hospital), FCPS ((Skin & Sex-Final P",
      "image": "https://pmchl.com/wp-content/uploads/Bulbul-2.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-nasir-uddin-mollah-bulbul/",
      "category_id": 26
    },
    {
      "id": 49,
      "name": "Dr. Md. Nasir Uddin (Kajal)",
      "specialty": "Urology Specialist",
      "qualifications": "MBBS, FCPS (Surgery), MS (Urology)",
      "image": "https://pmchl.com/wp-content/uploads/Nasir-Uddin-Kajal.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-nasir-uddin-kajal/",
      "category_id": 28
    },
    {
      "id": 50,
      "name": "Dr. Amanat Hasan (Shohel)",
      "specialty": "Cardiology Specialist",
      "qualifications": "MBBS, MD (Cardiology), MACP (USA), BCS (Health) CCD (BIRDEM), FCPS (Medicine Part- 2)",
      "image": "https://pmchl.com/wp-content/uploads/Dr.-Amanat-Hasan-Shohel-2.jpg",
      "link": "https://pmchl.com/doctor-item/dr-amanat-hasan-shohel/",
      "category_id": 23
    },
    {
      "id": 51,
      "name": "Dr. Rahat Bin Habib",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, BCS (Health) MD (Child)",
      "image": "/placeholder.svg",
      "link": "https://pmchl.com/doctor-item/dr-rahat-bin-habib/",
      "category_id": 15
    },
    {
      "id": 52,
      "name": "Dr. Md. Mahabub Alam (Khokan)",
      "specialty": "Orthopedic Specialist",
      "qualifications": "MBBS (RMC), BCS (Health) FCPS (Ortho) D-Ortho (DMC) Fellow AOA Trauma (India)",
      "image": "https://pmchl.com/wp-content/uploads/Screenshot_1-2.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-mahabub-alam-khokan/",
      "category_id": 27
    },
    {
      "id": 53,
      "name": "Dr. A. Hasnat Shaheen",
      "specialty": "Diabetes",
      "qualifications": "MBBS, DEM, MPH",
      "image": "https://pmchl.com/wp-content/uploads/Shahin.jpg",
      "link": "https://pmchl.com/doctor-item/dr-a-hasnat-shaheen/",
      "category_id": 60
    },
    {
      "id": 54,
      "name": "Dr. Papri Nasrin",
      "specialty": "Blood Disease & Medicine Specialist",
      "qualifications": "MBBS, BCS(Health), MD(Hematology), FCPS(Medicine, FP)",
      "image": "https://pmchl.com/wp-content/uploads/Papri-Nasrin.jpg",
      "link": "https://pmchl.com/doctor-item/dr-papri-nasrin/",
      "category_id": 46
    },
    {
      "id": 55,
      "name": "Dr. Sania Akhter",
      "specialty": "Skin & VD Specialist",
      "qualifications": "MBBS, BCS (Health) MD (Dermatology & Venereology)- BSMMU",
      "image": "https://pmchl.com/wp-content/uploads/Sania-Akter.jpg",
      "link": "https://pmchl.com/doctor-item/dr-sania-akhter/",
      "category_id": 26
    },
    {
      "id": 56,
      "name": "Dr. Rasheduzzaman Khan",
      "specialty": "Neonatology Specialist",
      "qualifications": "MBBS, BCS (Health), FCPS (Paed.) DCH (Dhaka Shishu Hospital)",
      "image": "https://pmchl.com/wp-content/uploads/Rasheduzzaman-Khan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-rasheduzzaman-khan/",
      "category_id": 36
    },
    {
      "id": 57,
      "name": "Dr. Md. Kamrul Hasan",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, DCH (BSMMU)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Kamrul_Hasan.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-kamrul-hasan/",
      "category_id": 15
    },
    {
      "id": 58,
      "name": "Dr. Fahmida Afroz",
      "specialty": "Child Specialist",
      "qualifications": "MBBS, MD (Pediatrics)",
      "image": "https://pmchl.com/wp-content/uploads/Fahmida-Afroz.jpg",
      "link": "https://pmchl.com/doctor-item/dr-fahmida-afroz/",
      "category_id": 15
    },
    {
      "id": 59,
      "name": "Dr. Md. Ershad Hossain",
      "specialty": "General & Laparoscopic Surgery",
      "qualifications": "MBBS, MS(TS), BMDC Reg.: 34925",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Md_Ershad_Hossain.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-ershad-hossain/",
      "category_id": 38
    },
    {
      "id": 60,
      "name": "Dr. A.Q.M. Ashraful Haque",
      "specialty": "Blood Disease & Medicine Specialist",
      "qualifications": "MBBS, BCS (Health), MD (Haematology)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Ashraful_Islam.jpg",
      "link": "https://pmchl.com/doctor-item/dr-md-nasir-uddin-kajal-2/",
      "category_id": 46
    },
    {
      "id": 61,
      "name": "Dr. A.H.M. Aslam-Ul-Haque",
      "specialty": "Nephrology Specialist",
      "qualifications": "MBBS (Dhaka), BCS (Health), MD (Paediatric Nephrology)",
      "image": "https://pmchl.com/wp-content/uploads/Aslam-Ul-Haque.jpg",
      "link": "https://pmchl.com/doctor-item/dr-a-h-m-aslam-ul-haque/",
      "category_id": 25
    },
    {
      "id": 62,
      "name": "Dr. Mohammad Habibur Rahman",
      "specialty": "Dental Specialist",
      "qualifications": "BDS (Dhaka) MHE (DU) PGDHE (DU)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Habibur_Rahman-1.jpg",
      "link": "https://pmchl.com/doctor-item/dr-mohammad-habibur-rahman/",
      "category_id": 32
    },
    {
      "id": 63,
      "name": "Dr. Tamanna Ahmed",
      "specialty": "Burn, Plastic & Cosmetic Surgery Specialist",
      "qualifications": "MBBS, MS (Plastic Surgery)",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Tamanna.jpg",
      "link": "https://pmchl.com/doctor-item/dr-tamanna-ahmed-2/",
      "category_id": 30
    },
    {
      "id": 64,
      "name": "Dr. Tanjum Akter Monika",
      "specialty": "Dental Specialist",
      "qualifications": "BDS(Dhaka), PGT(Oral & Maxillofacial Surgery), DMCH",
      "image": "https://pmchl.com/wp-content/uploads/Dr_Tanjum_Akter_Monika.jpg",
      "link": "https://pmchl.com/doctor-item/dr-tanjum-akter-monika/",
      "category_id": 32
    }
  ]

  const categories = [
    { id: 11, name: "Psychiatry" },
    { id: 12, name: "Critical Care Medicine Specialist" },
    { id: 15, name: "Child Specialist" },
    { id: 16, name: "Gynae & Obs Specialist" },
    { id: 18, name: "Neuro Surgery Specialist" },
    { id: 19, name: "ENT Specialist" },
    { id: 20, name: "Medicine & Chest Specialist" },
    { id: 22, name: "Liver & Gastroenterology Specialist" },
    { id: 23, name: "Cardiology Specialist" },
    { id: 24, name: "Neuro Medicine Specialist" },
    { id: 25, name: "Nephrology Specialist" },
    { id: 26, name: "Skin & VD Specialist" },
    { id: 27, name: "Orthopedic Specialist" },
    { id: 28, name: "Urology Specialist" },
    { id: 30, name: "Burn, Plastic & Cosmetic Surgery Specialist" },
    { id: 31, name: "Eye Specialist" },
    { id: 32, name: "Dental Specialist" },
    { id: 33, name: "Physiotherapy Specialist" },
    { id: 35, name: "Pediatrics" },
    { id: 36, name: "Neonatology Specialist" },
    { id: 38, name: "General & Laparoscopic Surgery" },
    { id: 42, name: "Opthalmology (Eye)" },
    { id: 46, name: "Blood Disease & Medicine Specialist" },
    { id: 60, name: "Diabetes" }
  ]

  useEffect(() => {
    const foundDoctor = doctors.find(d => d.id === parseInt(id))
    setDoctor(foundDoctor)
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setFormStatus('Please fill in all required fields.')
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call to submit appointment (replace with actual API endpoint)
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctorId: id,
          ...formData
        })
      })

      if (response.ok) {
        setFormStatus('Appointment request submitted successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          message: ''
        })
      } else {
        setFormStatus('Failed to submit appointment request. Please try again.')
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Doctor not found</h2>
          <Link href="/doctors" className="mt-4 inline-flex items-center text-[#017381] hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Doctors
          </Link>
        </div>
      </div>
    )
  }

  const category = categories.find(cat => cat.id === doctor.category_id)?.name

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/all-consultants" className="inline-flex items-center text-white hover:text-[#b8e6ea] mb-6 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Doctors
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{doctor.name}</h1>
              <h2 className="text-2xl font-semibold text-[#b8e6ea] mb-4">{doctor.specialty}</h2>
              <p className="text-lg leading-relaxed max-w-2xl">{doctor.qualifications}</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details and Appointment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Doctor Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">About {doctor.name}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-[#017381]" />
                  <p><span className="font-semibold">Specialty:</span> {doctor.specialty}</p>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-[#017381]" />
                  <p><span className="font-semibold">Qualifications:</span> {doctor.qualifications}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#017381]" />
                  <p><span className="font-semibold">Availability:</span> Contact for schedule</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Book an Appointment</h4>
                <p className="text-gray-600">Schedule a consultation with {doctor.name} by filling out the form. Our team will confirm your appointment soon.</p>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule an Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <div className="mt-1 relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                  <div className="mt-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                  <div className="mt-1 relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date *</label>
                  <div className="mt-1 relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time *</label>
                  <div className="mt-1 relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="time"
                      name="time"
                      id="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#017381] focus:border-[#017381] transition-all duration-300"
                    rows="4"
                    placeholder="Any additional information or specific concerns"
                  />
                </div>

                {formStatus && (
                  <div className={`text-sm ${formStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {formStatus}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#017381] to-[#025a65] hover:from-[#025a65] hover:to-[#034a52] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}