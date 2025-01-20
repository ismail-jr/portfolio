// import Sidebar from "@/components/Sidebar";
import { Inter, Roboto_Mono } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/sidebar";

// Use the Inter font for the main body
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Use Roboto Mono for code or monospaced text
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Showcase of my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="black">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased flex flex-col`}
      >
        {/* Spacer for top margin */}
        <div className="h-16"></div>

        {/* Main Layout */}
        <div className="flex">
          {/* Sidebar */}
          <div className="pl-10">
            <Sidebar />
          </div>

          {/* Main Section */}
          <main className="flex-1 pr-6 overflow-y-auto bg-dark-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
