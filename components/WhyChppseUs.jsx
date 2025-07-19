import { useEffect, useState } from 'react';

export default function WhyChooseUsSection() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://methodical-kindness-fc585984ed.strapiapp.com/api/why-choose-us');
        const data = await response.json();
        setContent(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="relative z-10 py-16">
       {/* Why Choose Us Section */}

  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <div className="inline-block mb-6">
        <span className="bg-gradient-to-r from-[#017381] to-[#025a65] text-white text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full shadow-lg">
          Why Choose Us
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Why Choose
        <span className="block text-[#017381]">Pro-Active Medical College Hospital Ltd</span>
      </h2>
      <div className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        {content?.Content?.map((item, index) => (
          <p key={index}>{item.children[0].text}</p>
        ))}
      </div>
    </div>
  </div>

    </section>
  );
}