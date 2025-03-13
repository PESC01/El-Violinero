import React, { useEffect, useState } from 'react';
import { Menu, X, Music, Calendar, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsappOptions, setShowWhatsappOptions] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phoneNumber = "61671615";
  const whatsappBaseUrl = `https://wa.me/591${phoneNumber}`;

  const handleWhatsappConsulta = () => {
    window.open(`${whatsappBaseUrl}?text=Hola,%20me%20gustaría%20realizar%20una%20consulta.`, '_blank');
  };

  const handleWhatsappReserva = () => {
    window.open(`${whatsappBaseUrl}?text=Hola,%20me%20gustaría%20realizar%20una%20reserva.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-500">El Violinero</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:text-red-500 px-3 py-2 transition-colors">Inicio</a>
                <a href="#menu" className="hover:text-red-500 px-3 py-2 transition-colors">Menú</a>
                <a href="#events" className="hover:text-red-500 px-3 py-2 transition-colors">Eventos</a>
                <a href="#contact" className="hover:text-red-500 px-3 py-2 transition-colors">Contacto</a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:text-red-500 px-3 py-2">Inicio</a>
            <a href="#menu" className="block hover:text-red-500 px-3 py-2">Menú</a>
            <a href="#events" className="block hover:text-red-500 px-3 py-2">Eventos</a>
            <a href="#contact" className="block hover:text-red-500 px-3 py-2">Contacto</a>
          </div>
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`absolute bottom-16 right-0 ${showWhatsappOptions ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} transition-all duration-300 flex flex-col gap-3 mb-2`}>
          <button
            onClick={handleWhatsappReserva}
            className="bg-green-600 text-white rounded-full px-4 py-2 flex items-center shadow-lg hover:bg-green-700 transition-colors"
          >
            <span>Realizar reserva</span>
          </button>
          <button
            onClick={handleWhatsappConsulta}
            className="bg-green-600 text-white rounded-full px-4 py-2 flex items-center shadow-lg hover:bg-green-700 transition-colors"
          >
            <span>Consultar</span>
          </button>
        </div>
        <button
          onClick={() => setShowWhatsappOptions(!showWhatsappOptions)}
          className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-colors"
        >
          {showWhatsappOptions ?
            <X size={24} /> :
            <MessageSquare size={24} />
          }
        </button>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
            alt="Asado background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center">
          <img
            src="https://s6.gifyu.com/images/bb5tw.gif"
            alt="El Violinero"
            className="max-w-[90vw] md:max-w-[600px] mx-auto mb-8"
          />
          <p className="text-xl md:text-2xl mt-8 text-gray-300">Donde la música y el asado se encuentran</p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-black to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Cortes Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Tomahawk",
                description: "600g de pura experiencia gastronómica",
                price: "55 Bs",
                image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80"
              },
              {
                name: "Bife de Chorizo",
                description: "Jugoso corte argentino",
                price: "65 Bs",
                image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80"
              },
              {
                name: "Costillas BBQ",
                description: "Ahumadas a la perfección",
                price: "80 Bs",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/50 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <p className="text-red-500 font-bold text-2xl">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Eventos y Música en Vivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&q=80"
                alt="Live music"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Music className="text-red-500 mb-2" size={24} />
                  <h3 className="text-xl font-bold mb-2">Música en Vivo</h3>
                  <p className="text-gray-300">Jueves a Sábado desde las 20:00</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80"
                alt="Private events"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Calendar className="text-red-500 mb-2" size={24} />
                  <h3 className="text-xl font-bold mb-2">Eventos Privados</h3>
                  <p className="text-gray-300">El lugar perfecto para tus celebraciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-red-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div className="p-6">
              <Phone className="mx-auto text-red-500 mb-4" size={24} />
              <h3 className="text-xl font-bold mb-2">Teléfono</h3>
              <p className="text-gray-400">+59161671615</p>
            </div>
            <div className="p-6">
              <MapPin className="mx-auto text-red-500 mb-4" size={24} />
              <h3 className="text-xl font-bold mb-2">Dirección</h3>
              <p className="text-gray-400">Yacuiba, Tarija, Bolivia</p>
            </div>
            <div className="p-6">
              <Clock className="mx-auto text-red-500 mb-4" size={24} />
              <h3 className="text-xl font-bold mb-2">Horario</h3>
              <p className="text-gray-400">Mar-Dom: 12:00 - 00:00</p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d-63.67895782807702!3d-22.0054072299704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2s!4v1710644151234!5m2!1ses!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de El Violinero"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 El Violinero. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;