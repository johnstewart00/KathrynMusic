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
        url: "../../public/grandPiano.png",
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
      <body>{children}</body>
    </html>
  );
}
