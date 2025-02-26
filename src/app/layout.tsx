import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kathryn Gilbert",
  description: "Learn more about Kathryn Gilbert",
  openGraph: {
    url: "https://www.kathryngilbert.com",
    siteName: "Kathryn Gilbert",
    images: [
      {
        url: "/grandPiano.png", // Fix the public path
        width: 1200,
        height: 630,
        alt: "A beautiful grand piano",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer sticky />
        </div>
      </body>
    </html>
  );
}
