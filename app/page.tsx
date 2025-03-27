'use client';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import {ThemeProvider} from '@/components/theme-provider';
import '../i18n/config';
import Features from '@/components/features';
import TestimonialsWithStats from '@/components/testimonial';
import Faq from '@/components/faq';
import Contact from '@/components/contact';
import Team from '@/components/team';
import Gallery from '@/components/gallery';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
import {Toaster} from '@/components/ui/sonner';

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <Hero />
      <Features />
      <TestimonialsWithStats />
      <Faq />
      <Contact />
      <Team />
      <Gallery />
      <Cta />
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}
