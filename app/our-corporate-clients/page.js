import Head from 'next/head';
import Image from 'next/image';

export default function CorporateClientPage() {
  // Generate array of logo image paths (logo-2.jpg to logo-43.jpg)
  const clientLogos = Array.from({ length: 42 }, (_, i) => ({
    src: `/images/client/logo-${i + 1}.jpg`,
    alt: `Client Logo ${i + 2}`,
    name: `Client Name ${i + 2}`,
  }));

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section - Vision */}
      <section className="relative py-20 bg-gradient-to-br from-[#017381] via-[#025a65] to-[#034a52] overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
      
              <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Our Corporate Clients
                  <span className="block text-[#b8e6ea]">& Specialists</span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-8">
                 We partner with leading organizations to deliver high-quality healthcare services through modern hospitals, medical colleges, and skilled professionals.
          </p>
      
               
              </div>
            </section>

      {/* Corporate Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Esteemed Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  className="mb-4 object-contain"
                />
               
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}