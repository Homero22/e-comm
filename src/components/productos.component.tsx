"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function FeaturedProductsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const products = [
    {
      id: 1,
      name: "Mouse Vertical Ergonómico",
      price: 199.99,
      rating: 4.5,
      image: "/mouse.jpg?height=200&width=200",
    },
    {
      id: 2,
      name: "Mini Buds",
      price: 89.99,
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "4K Drone",
      price: 599.99,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Smart Home Hub",
      price: 129.99,
      rating: 4.0,
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  const brands = [
    { name: "Asus", logo: "/asus-logo.svg?height=50&width=100" },
    { name: "Logitech", logo: "/logitech.svg?height=50&width=100" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="py-4 sm:py-6 bg-white shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600">
          Productos Destacados
        </h1>
        <div className="text-center mt-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Homer Code
          </h2>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Sección de marcas */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
            Marcas de calidad
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center">
                  <Image
                  src={brand.logo}
                  alt={`Logo de ${brand.name}`}
                  width={100} // Ajusta el ancho según sea necesario
                  height={50} // Ajusta la altura según sea necesario
                />
                
                <span className="mt-2 text-sm text-gray-600">{brand.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de correo Gmail */}
        <section className="mb-12 bg-gray-100 rounded-lg p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Contáctanos
          </h2>
          <p className="text-lg">
            <Mail className="inline-block mr-2 mb-1" />
            <a
              href="mailto:tu.correo@gmail.com"
              className="text-blue-600 hover:underline"
            >
              tu.correo@gmail.com
            </a>
          </p>
        </section>

        {/* Sección de productos destacados modificada */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-medium md:w-1/2">
              <Image
                src="/mouse.jpg"
                alt="Productos destacados"
                layout="responsive" // Añadido para optimizar la imagen
                width={100} // Ajusta el ancho según sea necesario
                height={50} // Ajusta la altura según sea necesario
              ></Image>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Descubre Nuestros Productos Destacados
              </h2>
              <p className="text-gray-600 mb-4">
                Explora nuestra selección de productos innovadores y de alta
                calidad. Desde tecnología de vanguardia hasta soluciones
                inteligentes para el hogar, tenemos todo lo que necesitas para
                mejorar tu estilo de vida.
              </p>
              <Button>Ver todos los productos</Button>
            </div>
          </div>
          <div className="relative">
            <div className="flex overflow-hidden">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out transform ${
                    index === currentIndex
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xl sm:text-2xl font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 stroke-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-sm sm:text-base">
                      Añadir al carrito
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Button
              variant="outline"
              className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 rounded-full p-2 sm:p-4"
              onClick={prevProduct}
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="sr-only">Producto anterior</span>
            </Button>
            <Button
              variant="outline"
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 rounded-full p-2 sm:p-4"
              onClick={nextProduct}
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="sr-only">Siguiente producto</span>
            </Button>
          </div>
        </section>

        {/* Sección de contacto CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-6 sm:p-10 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              ¿Quieres recibir ofertas exclusivas?
            </h2>
            <p className="mb-6">
              Suscríbete a nuestro boletín y obtén un 10% de descuento en tu
              primera compra.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-black"
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-100"
              >
                <Mail className="w-4 h-4 mr-2" />
                Suscribirse
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-4 sm:py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-sm sm:text-base text-gray-600 text-center">
            &copy; 2024 Homer Code. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
