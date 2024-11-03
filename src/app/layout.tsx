import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Homer Code - Tecnología, gadgets y más",
  description: "Accesorios, gadgets y tecnología para tu día a día",
  keywords: ["tecnología", "gadgets", "accesorios", "hogar", "amazon"],
=======
  title: "Homer Code | Accesorios y Tecnología para Todos",

  description: "Encuentra los mejores accesorios y tecnología en Homer Code, desde gadgets hasta productos recomendados por Amazon afiliados.",
  keywords: ["Homer Code", "Accesorios", "Tecnología", "Gadgets", "Amazon afiliados", "Accesorios para celular", "Productos recomendados"],
  openGraph: {
    title: "Homer Code | Accesorios y Tecnología",
    description: "Encuentra los mejores accesorios y tecnología en Homer Code, con gadgets y productos recomendados.",
    images: "/homer.jpeg",
    url: "https://e-com.ojedahomero.lol/",
    type: "website",
 },

 twitter: {
  card: "summary_large_image",
  site: "@tuCuentaDeTwitter",
  title: "Homer Code | Accesorios y Tecnología",
  description: "Descubre gadgets y accesorios de calidad recomendados en Amazon.",
  images: "/homer.jpeg",
},

 
>>>>>>> 8b5ec0cc813d1d3da23a2702e13cb78a09c4de88
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
