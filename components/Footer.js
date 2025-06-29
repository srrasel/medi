import { 
  MapPin, 
  Phone, 
  Smartphone, 
  Ambulance, 
  Hospital, 
  Calendar,
  Users,
  Mail,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{ background: "linear-gradient(135deg, #017381 0%, #015963 50%, #017381 100%)" }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.05),transparent_50%)]"></div>

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-2000"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-white/60 via-white/80 via-white/60 to-white/60"></div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Hospital className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">About Pro-Active</h3>
            </div>
            <p className="text-white/90 mb-3">
              Pro-Active Medical College Hospital Ltd is dedicated to providing comprehensive healthcare services with state-of-the-art medical facilities and compassionate care.
            </p>
            <p className="text-white/80 text-sm">
              Located in Narayanganj, we serve the community with excellence in medical education and patient care.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <Phone className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Contact Information</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center mb-1">
                  <MapPin className="w-4 h-4 mr-2 text-white/70" />
                  <p className="text-white/90 text-sm">Address:</p>
                </div>
                <p className="text-white/80 text-sm ml-6">
                  E-197/7, Mizmizi, Shahebpara<br />
                  (Signboard), Siddirganj<br />
                  Narayanganj
                </p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <Phone className="w-4 h-4 mr-2 text-white/70" />
                  <p className="text-white/90 text-sm">Hotline:</p>
                </div>
                <a href="tel:09666997997" className="text-white/90 hover:text-white transition-colors ml-6">
                  09666-997997
                </a>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <Smartphone className="w-4 h-4 mr-2 text-white/70" />
                  <p className="text-white/90 text-sm">Mobile:</p>
                </div>
                <a href="tel:01902556070" className="text-white/90 hover:text-white transition-colors ml-6">
                  01902556070
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <Ambulance className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Emergency Services</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center mb-1">
                  <Hospital className="w-4 h-4 mr-2 text-white/70" />
                  <p className="text-white/90 text-sm">Hospital Information:</p>
                </div>
                <div className="text-white/80 text-sm ml-6">
                  <a href="tel:01902556070" className="hover:text-white transition-colors block">01902556070</a>
                  <a href="tel:01852839686" className="hover:text-white transition-colors block">01852839686</a>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <Ambulance className="w-4 h-4 mr-2 text-white/70" />
                  <p className="text-white/90 text-sm">Ambulance Service:</p>
                </div>
                <div className="text-white/80 text-sm ml-6">
                  <a href="tel:01902556060" className="hover:text-white transition-colors block">01902556060</a>
                  <a href="tel:01902556061" className="hover:text-white transition-colors block">01902556061</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Latest Updates</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-white/90 text-sm italic">
                  ঈদ আনন্দ ছড়িয়ে পড়ুক সবার মাঝে আপনার যাত্রা হোক নিরাপদ, উদযাপন হোক স্বস্তিদায়ক
                </p>
              </div>
              <ul className="text-white/80 text-sm space-y-2">
                <li className="flex items-start">
                  <Calendar className="w-3 h-3 mt-1 mr-2 text-white/60 flex-shrink-0" />
                  World Blood Cancer Day 2025
                </li>
                <li className="flex items-start">
                  <Users className="w-3 h-3 mt-1 mr-2 text-white/60 flex-shrink-0" />
                 We&apos;re Hiring at Pro-Active Hospital! A Sister Concern of Pro-Active Medical College
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-center md:text-left">
              &copy; {new Date().getFullYear()} Pro-Active Medical College Hospital Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <a href="#" className="hover:underline text-white/70 transition-colors flex items-center">
                <Users className="w-3 h-3 mr-1" />
                Patient Portal
              </a>
              <a href="#" className="hover:underline text-white/70 transition-colors flex items-center">
                <Hospital className="w-3 h-3 mr-1" />
                Medical Services
              </a>
              <a href="#" className="hover:underline text-white/70 transition-colors flex items-center">
                <ExternalLink className="w-3 h-3 mr-1" />
                Privacy Policy
              </a>
              <a href="#" className="hover:underline text-white/70 transition-colors flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer