import CallToAction from '@/sections/CallToAction';
import Companies from '@/sections/Companies';

import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';
import Testimonials from '@/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
