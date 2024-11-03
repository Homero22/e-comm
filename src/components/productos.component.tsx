"use client";

import { useEffect, useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Componente de estrellas
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => {
        const isFullStar = index + 1 <= Math.floor(rating);
        const isHalfStar = !isFullStar && index < rating;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: isFullStar || isHalfStar ? 1 : 0.3 }}
            transition={{ duration: 0.4, yoyo: Infinity }}
            className="relative"
          >
            <Star
              className={`w-5 h-5 ${
                isFullStar ? "text-[#7315af] " : "text-gray-300"
              }`}
            />
            {isHalfStar && (
              <Star
                className="absolute top-0 left-0 w-5 h-5 text-[#7315af] opacity-50"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ProductCatalog() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const products = [
    {
      id: 1,
      name: "Mouse Vertical Ergonómico",
      rating: 4.5,
      image: "/mouse.png",
      link: "https://amzn.to/3YQhhAz",
    },
    {
      id: 2,
      name: "Mini Buds",
      rating: 4.9,
      image: "/minibuds.webp",
      link: "https://amzn.to/3YAzOiI",
    },
    {
      id: 3,
      name: "Teclado Mecánico",
      rating: 4,
      image: "/teclado.jpg",
      link: "https://amzn.to/3YQkoIK",
    },
    {
      id: 4,
      name: "Monitor Curvo",
      rating: 4,
      image: "/monitor.jpg",
      link: "https://amzn.to/3NOPTwt",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#676e82] text-gray-100  ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <header className="py-4 sm:py-6 bg-[#070e23] text-white shadow-lg">
        <div className="w-full max-w-6xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4700c1] to-[#727b8f]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Homer Code
          </motion.h1>
          { /*<motion.h2
            className="text-xl sm:text-base font-sans text-center mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tecnología, gadgets y más
          </motion.h2> */}
          <div className="flex justify-center space-x-4 mt-4">
            <motion.a
              href="#"
              className="transition-transform transform hover:scale-110"
              aria-label="Facebook"
              whileHover={{ scale: 1.2 }}
            >
              <Facebook className="w-6 h-6 text-white hover:text-blue-300" />
            </motion.a>
            <motion.a
              href="#"
              className="transition-transform transform hover:scale-110"
              aria-label="Twitter"
              whileHover={{ scale: 1.2 }}
            >
              <Twitter className="w-6 h-6 text-white hover:text-blue-300" />
            </motion.a>
            <motion.a
              href="#"
              className="transition-transform transform hover:scale-110"
              aria-label="Instagram"
              whileHover={{ scale: 1.2 }}
            >
              <Instagram className="w-6 h-6 text-[#] hover:text-blue-300" />
            </motion.a>
            <motion.a
              href="#"
              className="transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="w-6 h-6 text-white hover:text-blue-300" />
            </motion.a>
          </div>
        </div>
      </header>

      <main className="w-full max-w-6xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Productos que te recomiendo 🚀
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl group"
              >
                {/* Franja de "Comprar ahora!" que se muestra solo al hacer hover */}
                <div className="absolute top-10 left-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 transform -rotate-12 origin-top-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  ¡Comprar ahora!
                </div>

                <Link href={product.link} passHref>
                  <div className="block">
                    <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        objectFit="contain"
                        className="p-4"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">
                        {product.name}
                      </h3>
                      <StarRating rating={product.rating} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-[#070e23] rounded-lg p-6 sm:p-10 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">
            Mantente al día con productos en tendencia. ¡Suscríbete! 📩
            </h2>
            <p className="mb-6 text-gray-700">
              Recibe notificaciones de nuevos productos, ofertas y más.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input 
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 text-black py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Suscribirse
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-4 sm:py-6 bg-gray-100">
        <div className="w-full max-w-6xl mx-auto px-4">
          <p className="text-sm sm:text-base text-gray-600 text-center">
            &copy; 2024 Homer Code. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
