import React from 'react';

const packages = [
  {
    id: 1,
    title: 'Maldives Luxury Escape',
    price: 2499,
    duration: '7 days',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Greek Islands Adventure',
    price: 1899,
    duration: '10 days',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Bali Cultural Experience',
    price: 1599,
    duration: '8 days',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  }
];

const TravelPackages = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Travel Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
            >
              <img 
                src={pkg.image} 
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">${pkg.price}</span>
                  <span className="text-gray-600">{pkg.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;