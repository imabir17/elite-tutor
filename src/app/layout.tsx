import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite Tutor | High-End Educational Consulting",
  description: "Master your exams and secure your future abroad with 1-on-1 tutoring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider>
            {children}
            <ConsultationModal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
