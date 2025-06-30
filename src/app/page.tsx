'use client'
import Image from "next/image";
import ImageGallery from '@/components/ImageGallery';

const featuredCars = [
  {
    url: '/cars/car1.jpg',
    alt: 'Jeep',
    title: 'Jeep'
  },
  {
    url: '/cars/car2.jpg',
    alt: 'Mercedes',
    title: 'Mercedes'
  },
  {
    url: '/cars/car3.jpg',
    alt: 'Audi',
    title: 'Audi'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section id="hero" className="w-full h-screen relative bg-gradient-to-r from-black to-gray-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Luxury car showroom"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Benvenuto in AUTOLIGAS
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            La tua concessionaria di fiducia per auto nuove e usate di qualità         
          </p>
          <button
            onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Scopri il parco auto
          </button>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="featured" className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Auto in evidenza
          </h2>
          <div className="w-full max-w-4xl mx-auto">
            <ImageGallery images={featuredCars} className="shadow-xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            I nostri servizi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">Vendita auto</h3>
              <p className="text-gray-600">
                Ampia selezione di auto nuove e usate di alta qualità
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Assistenza</h3>
              <p className="text-gray-600">
                Servizio di assistenza e manutenzione professionale
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Finanziamenti</h3>
              <p className="text-gray-600">
                Soluzioni di finanziamento personalizzate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="w-full py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interessato ai nostri veicoli?
          </h2>
          <p className="text-xl mb-8 fade-in" style={{animationDelay: '0.2s'}}>
            Contattaci per maggiori informazioni all&apos;indirizzo <strong>autoligas@gmail.com</strong>
          </p>
          <button
            onClick={() => window.location.href = 'mailto:autoligas@gmail.com'}
            className="cursor-pointer inline-block bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contattaci
          </button>
        </div>
      </section>
    </main>
  );
}
