
import "./globals.css";
import { Inter, Shojumaru, Cinzel } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const shojumaru = Shojumaru({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shojumaru"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap"
});

export const metadata = {
  title: "Vitória Pereira | Portfólio",
  description:
    "Portfólio de Vitória Pereira, desenvolvedora de software. Conheça meus projetos, habilidades e experiências em desenvolvimento web.",

  metadataBase: new URL("https://vpldev.vercel.app/"),

  openGraph: {
    title: "Vitória Pereira | Portfólio",
    description:
      "Conheça meus projetos, habilidades e experiências em desenvolvimento de software.",
    type: "website",
    locale: "pt_BR",
    images: ["/og-image.png"]
  },

  twitter: {
    card: "summary_large_image",
    title: "Vitória Pereira | Portfólio",
    description:
      "Conheça meus projetos e habilidades em desenvolvimento web.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${shojumaru.variable} ${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
