import { Lato, Montserrat } from "next/font/google";
import Sidebar from "@/components/sidebar";
import "../styles/globals.css";

// Use the Inter font for the main body
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const mon = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Showcase of my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mon.variable} ${mon.variable} antialiased flex flex-col`}
      >
        {/* Spacer for top margin */}
        <div className="h-16"></div>

        {/* Main Layout */}
        <div className="flex flex-col sm:flex-row">
          {/* Sidebar */}
          <div className="pl-6 pb-4 sm:w-72 w-full">
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
